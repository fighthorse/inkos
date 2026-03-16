"use client";

import { useEffect, useState } from "react";
import type { ProjectConfig } from "@actalk/inkos-core";

type SafeProjectConfig = Omit<ProjectConfig, "llm"> & {
  llm: ProjectConfig["llm"] & { apiKey: string };
};

const providerOptions = ["anthropic", "openai", "custom"] as const;

export default function SettingsPage() {
  const [config, setConfig] = useState<SafeProjectConfig | null>(null);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    void fetch("/api/settings")
      .then((r) => r.json() as Promise<SafeProjectConfig>)
      .then(setConfig)
      .catch((err: unknown) =>
        setError(err instanceof Error ? err.message : "加载失败")
      );
  }, []);

  function updateLlm(field: string, value: string | number) {
    setConfig((prev) => {
      if (!prev) return prev;
      return { ...prev, llm: { ...prev.llm, [field]: value } };
    });
  }

  function updateModelOverride(agent: string, model: string) {
    setConfig((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        modelOverrides: { ...(prev.modelOverrides ?? {}), [agent]: model },
      };
    });
  }

  async function handleSave() {
    if (!config) return;
    setSaving(true);
    setError(null);
    setSaved(false);
    try {
      const res = await fetch("/api/settings", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(config),
      });
      if (!res.ok) {
        const d = await res.json() as { error?: string };
        throw new Error(d.error ?? "保存失败");
      }
      const updated = await res.json() as SafeProjectConfig;
      setConfig(updated);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "未知错误");
    } finally {
      setSaving(false);
    }
  }

  if (!config) {
    return (
      <div className="flex items-center justify-center py-20 text-muted-foreground">
        {error ?? "加载中…"}
      </div>
    );
  }

  const agentNames = ["architect", "writer", "auditor", "reviser", "radar", "analyzer"];
  const overrides = config.modelOverrides ?? {};

  return (
    <div className="max-w-2xl space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">基础配置</h1>
          <p className="text-muted-foreground text-sm mt-1">LLM 连接与模型路由设置</p>
        </div>
        <div className="flex items-center gap-3">
          {saved && (
            <span className="text-sm text-green-600 font-medium">已保存</span>
          )}
          <button
            onClick={handleSave}
            disabled={saving}
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50 transition-colors"
          >
            {saving ? "保存中…" : "保存"}
          </button>
        </div>
      </div>

      {error && (
        <div className="rounded-md bg-destructive/10 border border-destructive/30 px-3 py-2 text-sm text-destructive">
          {error}
        </div>
      )}

      <section className="rounded-lg border bg-card p-6 space-y-5">
        <h2 className="font-semibold text-base">LLM 配置</h2>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-sm font-medium">Provider</label>
            <select
              value={config.llm.provider}
              onChange={(e) => updateLlm("provider", e.target.value)}
              className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            >
              {providerOptions.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium">模型</label>
            <input
              value={config.llm.model}
              onChange={(e) => updateLlm("model", e.target.value)}
              className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-medium">Base URL</label>
          <input
            value={config.llm.baseUrl}
            onChange={(e) => updateLlm("baseUrl", e.target.value)}
            className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-medium">API Key</label>
          <input
            type="password"
            value={config.llm.apiKey}
            onChange={(e) => updateLlm("apiKey", e.target.value)}
            placeholder="留空则保持不变"
            className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-sm font-medium">Temperature</label>
            <input
              type="number"
              min={0}
              max={2}
              step={0.1}
              value={config.llm.temperature}
              onChange={(e) => updateLlm("temperature", parseFloat(e.target.value))}
              className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium">Max Tokens</label>
            <input
              type="number"
              min={1}
              value={config.llm.maxTokens}
              onChange={(e) => updateLlm("maxTokens", parseInt(e.target.value, 10))}
              className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        </div>
      </section>

      <section className="rounded-lg border bg-card p-6 space-y-4">
        <h2 className="font-semibold text-base">模型路由覆盖</h2>
        <p className="text-sm text-muted-foreground">为特定智能体指定不同的模型（留空则使用默认模型）</p>
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground w-1/3">智能体</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">模型</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {agentNames.map((agent) => (
                <tr key={agent}>
                  <td className="px-4 py-2 font-mono text-xs">{agent}</td>
                  <td className="px-4 py-2">
                    <input
                      value={overrides[agent] ?? ""}
                      onChange={(e) => updateModelOverride(agent, e.target.value)}
                      placeholder={config.llm.model}
                      className="w-full rounded-md border bg-background px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
