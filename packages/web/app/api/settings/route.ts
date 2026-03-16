import { NextResponse } from "next/server";
import { getStateManager, resetRunner } from "@/lib/pipeline";
import { ProjectConfigSchema } from "@actalk/inkos-core";

export async function GET() {
  try {
    const stateManager = getStateManager();
    const raw = await stateManager.loadProjectConfig();
    const config = ProjectConfigSchema.parse(raw);
    // Mask API key
    const safe = {
      ...config,
      llm: { ...config.llm, apiKey: config.llm.apiKey ? "***" : "" },
    };
    return NextResponse.json(safe);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json() as unknown;
    const stateManager = getStateManager();
    const raw = await stateManager.loadProjectConfig();
    const existing = ProjectConfigSchema.parse(raw);

    // Merge patch — don't overwrite apiKey if masked placeholder is sent
    const patch = body as Partial<typeof existing>;
    if (patch.llm?.apiKey === "***") {
      patch.llm = { ...patch.llm, apiKey: existing.llm.apiKey };
    }

    const updated = ProjectConfigSchema.parse({ ...existing, ...patch });
    await stateManager.saveProjectConfig(updated as Record<string, unknown>);
    // Reset singleton so next request picks up new config
    resetRunner();

    const safe = {
      ...updated,
      llm: { ...updated.llm, apiKey: updated.llm.apiKey ? "***" : "" },
    };
    return NextResponse.json(safe);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
