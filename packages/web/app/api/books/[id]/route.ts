import { NextResponse } from "next/server";
import { getRunner, getStateManager } from "@/lib/pipeline";
import { BookConfigSchema } from "@actalk/inkos-core";

interface RouteContext {
  params: Promise<{ id: string }>;
}

export async function GET(_request: Request, { params }: RouteContext) {
  try {
    const { id } = await params;
    const runner = await getRunner();
    const status = await runner.getBookStatus(id);
    return NextResponse.json(status);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 404 });
  }
}

export async function PATCH(request: Request, { params }: RouteContext) {
  try {
    const { id } = await params;
    const body = await request.json() as Record<string, unknown>;
    const stateManager = getStateManager();
    const existing = await stateManager.loadBookConfig(id);
    const updated = BookConfigSchema.parse({ ...existing, ...body });
    await stateManager.saveBookConfig(id, updated);
    return NextResponse.json(updated);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
