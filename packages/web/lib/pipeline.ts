import { PipelineRunner, StateManager, createLLMClient, ProjectConfigSchema } from "@actalk/inkos-core";
import type { PipelineConfig } from "@actalk/inkos-core";

const projectRoot = process.env.INKOS_PROJECT_ROOT ?? process.cwd();

let _runner: PipelineRunner | null = null;
let _stateManager: StateManager | null = null;

export function getStateManager(): StateManager {
  if (!_stateManager) {
    _stateManager = new StateManager(projectRoot);
  }
  return _stateManager;
}

export async function getRunner(): Promise<PipelineRunner> {
  if (_runner) return _runner;

  const stateManager = getStateManager();
  const raw = await stateManager.loadProjectConfig();
  const config = ProjectConfigSchema.parse(raw);

  const client = createLLMClient(config.llm);

  const pipelineConfig: PipelineConfig = {
    client,
    model: config.llm.model,
    projectRoot,
    notifyChannels: config.notify,
    modelOverrides: config.modelOverrides,
  };

  _runner = new PipelineRunner(pipelineConfig);
  return _runner;
}

export function resetRunner(): void {
  _runner = null;
  _stateManager = null;
}

export { projectRoot };
