import { NextResponse } from "next/server";
import { getRunner } from "@/lib/pipeline";

interface RouteContext {
  params: Promise<{ id: string }>;
}

export async function POST(request: Request, { params }: RouteContext) {
  try {
    const { id } = await params;
    const body = await request.json().catch(() => ({})) as { wordCount?: number };
    const wordCount = typeof body.wordCount === "number" ? body.wordCount : undefined;
    const runner = await getRunner();
    const result = await runner.writeNextChapter(id, wordCount);
    return NextResponse.json(result);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
