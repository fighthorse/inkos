"use client";

import { useEffect, useState } from "react";
import type { RadarResult, RadarRecommendation } from "@actalk/inkos-core";

interface CachedRadarResult extends RadarResult {
  scannedAt: string | null;
}

export default function RadarPage() {
  const [data, setData] = useState<CachedRadarResult | null>(null);
  const [scanning, setScanning] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    void fetch("/api/radar")
      .then((r) => r.json() as Promise<CachedRadarResult>)
      .then(setData)
      .catch(() => null);
  }, []);

  async function handleScan() {
    setScanning(true);
    setError(null);
    try {
      const res = await fetch("/api/radar/scan", { method: "POST" });
      if (!res.ok) {
        const d = await res.json() as { error?: string };
        throw new Error(d.error ?? "扫描失败");
      }
      const result = await res.json() as CachedRadarResult;
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : "未知错误");
    } finally {
      setScanning(false);
    }
  }

  return (
    <div className="space-y-6 max-w-3xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">站外热点</h1>
          <p className="text-muted-foreground text-sm mt-1">
            {data?.scannedAt
              ? `上次扫描: ${new Date(data.scannedAt).toLocaleString("zh-CN")}`
              : "扫描市场热点，发现写作机会"}
          </p>
        </div>
        <button
          onClick={handleScan}
          disabled={scanning}
          className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50 transition-colors"
        >
          {scanning ? "扫描中…" : "扫描市场"}
        </button>
      </div>

      {error && (
        <div className="rounded-md bg-destructive/10 border border-destructive/30 px-3 py-2 text-sm text-destructive">
          {error}
        </div>
      )}

      {data?.recommendations && data.recommendations.length > 0 ? (
        <div className="space-y-4">
          {data.recommendations.map((rec: RadarRecommendation, i: number) => (
            <RecommendationCard key={i} rec={rec} />
          ))}
        </div>
      ) : (
        !scanning && (
          <div className="flex flex-col items-center justify-center py-20 text-muted-foreground text-sm space-y-2">
            <p>暂无数据，点击「扫描市场」获取最新热点</p>
          </div>
        )
      )}
    </div>
  );
}

function RecommendationCard({ rec }: { rec: RadarRecommendation }) {
  const confidence = Math.round((rec.confidence ?? 0) * 100);

  return (
    <div className="rounded-lg border bg-card p-5 space-y-3">
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold text-base">{rec.concept}</h3>
        <div className="flex items-center gap-2 shrink-0">
          {rec.platform && (
            <span className="rounded-full bg-muted px-2 py-0.5 text-xs">{rec.platform}</span>
          )}
          {rec.genre && (
            <span className="rounded-full bg-muted px-2 py-0.5 text-xs">{rec.genre}</span>
          )}
        </div>
      </div>

      {rec.reasoning && (
        <p className="text-sm text-muted-foreground">{rec.reasoning}</p>
      )}

      <div className="space-y-1">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>置信度</span>
          <span>{confidence}%</span>
        </div>
        <div className="h-1.5 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full"
            style={{ width: `${confidence}%` }}
          />
        </div>
      </div>

      {rec.benchmarkTitles && rec.benchmarkTitles.length > 0 && (
        <div className="text-xs text-muted-foreground">
          <span className="font-medium">参考：</span>
          {rec.benchmarkTitles.join("、")}
        </div>
      )}
    </div>
  );
}
