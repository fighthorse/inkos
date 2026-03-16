"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const platforms = [
  { value: "tomato", label: "番茄" },
  { value: "feilu", label: "飞卢" },
  { value: "qidian", label: "起点" },
  { value: "other", label: "其他" },
];

const genres = [
  { value: "xuanhuan", label: "玄幻" },
  { value: "xianxia", label: "仙侠" },
  { value: "urban", label: "都市" },
  { value: "horror", label: "恐怖" },
  { value: "other", label: "其他" },
];

export default function NewBookPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const title = formData.get("title") as string;
    const id = title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "") || `book-${Date.now()}`;
    const now = new Date().toISOString();

    const payload = {
      id,
      title,
      platform: formData.get("platform"),
      genre: formData.get("genre"),
      status: "incubating",
      targetChapters: Number(formData.get("targetChapters")),
      chapterWordCount: Number(formData.get("chapterWordCount")),
      createdAt: now,
      updatedAt: now,
    };

    try {
      const res = await fetch("/api/books", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json() as { error?: string };
        throw new Error(data.error ?? "创建失败");
      }

      router.push("/books");
    } catch (err) {
      setError(err instanceof Error ? err.message : "未知错误");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-lg space-y-6">
      <div>
        <h1 className="text-2xl font-bold">新建小说</h1>
        <p className="text-muted-foreground text-sm mt-1">填写基本信息，AI 将自动生成世界观和大纲</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 rounded-lg border bg-card p-6">
        <div className="space-y-1.5">
          <label htmlFor="title" className="text-sm font-medium">书名</label>
          <input
            id="title"
            name="title"
            required
            className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="输入书名…"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label htmlFor="genre" className="text-sm font-medium">类型</label>
            <select
              id="genre"
              name="genre"
              required
              className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            >
              {genres.map((g) => (
                <option key={g.value} value={g.value}>{g.label}</option>
              ))}
            </select>
          </div>
          <div className="space-y-1.5">
            <label htmlFor="platform" className="text-sm font-medium">平台</label>
            <select
              id="platform"
              name="platform"
              required
              className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            >
              {platforms.map((p) => (
                <option key={p.value} value={p.value}>{p.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label htmlFor="targetChapters" className="text-sm font-medium">目标章节数</label>
            <input
              id="targetChapters"
              name="targetChapters"
              type="number"
              min={1}
              defaultValue={200}
              required
              className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="chapterWordCount" className="text-sm font-medium">每章字数</label>
            <input
              id="chapterWordCount"
              name="chapterWordCount"
              type="number"
              min={1000}
              step={500}
              defaultValue={3000}
              required
              className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        </div>

        {error && (
          <div className="rounded-md bg-destructive/10 border border-destructive/30 px-3 py-2 text-sm text-destructive">
            {error}
          </div>
        )}

        <div className="flex items-center gap-3 pt-1">
          <button
            type="submit"
            disabled={loading}
            className="flex-1 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50 transition-colors"
          >
            {loading ? "创建中…" : "创建小说"}
          </button>
          <button
            type="button"
            onClick={() => router.back()}
            className="rounded-md border px-4 py-2 text-sm font-medium hover:bg-muted transition-colors"
          >
            取消
          </button>
        </div>
      </form>
    </div>
  );
}
