import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json() as { action: string };
  const {action} = body

  if( action === 'release-revalidate' ) {
    revalidatePath('/releases')
  }

  return new NextResponse(null, { status: 200 });
}