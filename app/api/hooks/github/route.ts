import { NextRequest, NextResponse } from "next/server";
import { Webhooks } from "@octokit/webhooks";

const webhooks = new Webhooks({
  secret: process.env.GITHUB_WEBHOOK_SECRET!,
});

export async function POST(request: NextRequest) {
  const body = await request.text();
  const headers = request.headers;
  const signature = headers.get("x-hub-signature-256");

  if (!signature || !(await webhooks.verify(body, signature))) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    console.log(JSON.parse(body));
  } catch (e) {
    console.error(e);
  }

  return new NextResponse(null, { status: 202 });
}