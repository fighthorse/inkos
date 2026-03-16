import { NextResponse } from "next/server";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { projectRoot } from "@/lib/pipeline";

const RADAR_CACHE_PATH = join(projectRoot, "radar-cache.json");

export async function GET() {
  try {
    const raw = await readFile(RADAR_CACHE_PATH, "utf-8");
    const cached = JSON.parse(raw) as unknown;
    return NextResponse.json(cached);
  } catch {
    return NextResponse.json({ recommendations: [], scannedAt: null });
  }
}
