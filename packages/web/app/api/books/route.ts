import { NextResponse } from "next/server";
import { getRunner, getStateManager } from "@/lib/pipeline";
import { BookConfigSchema } from "@actalk/inkos-core";

export async function GET() {
  try {
    const stateManager = getStateManager();
    const runner = await getRunner();
    const bookIds = await stateManager.listBooks();
    const books = await Promise.all(bookIds.map((id) => runner.getBookStatus(id)));
    return NextResponse.json(books);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json() as unknown;
    const bookConfig = BookConfigSchema.parse(body);
    const runner = await getRunner();
    await runner.initBook(bookConfig);
    return NextResponse.json({ id: bookConfig.id, title: bookConfig.title }, { status: 201 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
