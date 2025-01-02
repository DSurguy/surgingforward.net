import { NextRequest, NextResponse } from "next/server";
import { Webhooks } from "@octokit/webhooks";
import type { ReleaseEvent } from "@octokit/webhooks-types"
import { db } from "~/app/database";
import type { NewRelease, UpdatedRelease } from "~/app/database/types";
import { revalidatePath } from "next/cache";

const webhooks = new Webhooks({
  secret: process.env['GITHUB_WEBHOOK_SECRET']!,
});

export async function POST(request: NextRequest) {
  const body = await request.text();
  const headers = request.headers;
  const signature = headers.get("x-hub-signature-256");

  if (!signature || !(await webhooks.verify(body, signature))) {
    return new NextResponse("Unauthorized", { status: 401 });
  }
  
  let releaseEvent: ReleaseEvent
  try {
    releaseEvent = JSON.parse(body);
  } catch (e) {
    return new NextResponse({
      title: "Bad Request",
      message: "Unable to parse JSON",
      error: e
    }, {
      status: 400
    })
  }

  // Check if the release exists in the database
  let isNew: boolean;
  try {
    const result = await db.selectFrom('release')
      .select('id')
      .where('id', '=', releaseEvent.release.id)
      .executeTakeFirst();
    
    isNew = !result?.id
  } catch (e) {
    console.error(e); // TODO: Create a logger
    return new NextResponse({
      title: "Internal Server Error",
      message: "Unable to cache release to database",
      error: e
    }, {
      status: 500
    })
  }
    
  if (isNew) {
    // new release - add it
    const newRelease: NewRelease = {
      id: releaseEvent.release.id,
      html_url: releaseEvent.release.html_url,
      name: releaseEvent.release.name,
      body: releaseEvent.release.body,
      publishedAt: releaseEvent.release.published_at!,
      updatedAt: new Date().toISOString(),
      repositoryId: releaseEvent.repository.id,
      repositoryHtmlUrl: releaseEvent.repository.html_url
    }
  
    try {
      await db.insertInto('release')
        .values(newRelease)
        .execute()
    } catch (e) {
      console.error(e); // TODO: Create a logger
      return new NextResponse({
        title: "Internal Server Error",
        message: "Unable to cache release to database",
        error: e
      }, {
        status: 500
      })
    }
  } else {
    // pre-existing release, update it
    const updatedRelease: UpdatedRelease = {
      id: releaseEvent.release.id,
      html_url: releaseEvent.release.html_url,
      name: releaseEvent.release.name,
      body: releaseEvent.release.body,
      publishedAt: releaseEvent.release.published_at!,
      updatedAt: new Date().toISOString(),
      repositoryId: releaseEvent.repository.id,
      repositoryHtmlUrl: releaseEvent.repository.html_url
    }
  
    try {
      await db.updateTable('release')
        .set(updatedRelease)
        .execute()
    } catch (e) {
      console.error(e); // TODO: Create a logger
      return new NextResponse({
        title: "Internal Server Error",
        message: "Unable to cache release to database",
        error: e
      }, {
        status: 500
      })
    }
  }

  revalidatePath('/releases');

  return new NextResponse(null, { status: 202 });
}