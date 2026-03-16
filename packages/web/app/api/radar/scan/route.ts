import { NextResponse } from "next/server";
import { writeFile } from "node:fs/promises";
import { join } from "node:path";
import { getRunner, projectRoot } from "@/lib/pipeline";

const RADAR_CACHE_PATH = join(projectRoot, "radar-cache.json");

export async function POST() {
  try {
    const runner = await getRunner();
    const result = await runner.runRadar();
    const cached = { ...result, scannedAt: new Date().toISOString() };
    await writeFile(RADAR_CACHE_PATH, JSON.stringify(cached, null, 2), "utf-8");
    return NextResponse.json(cached);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
