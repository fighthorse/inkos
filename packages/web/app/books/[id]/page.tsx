"use client";

import { useEffect, useState, use } from "react";
import { StatusBadge } from "@/components/status-badge";
import { ChapterTable } from "@/components/chapter-table";
import type { BookStatusInfo } from "@actalk/inkos-core";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function BookDetailPage({ params }: PageProps) {
  const { id } = use(params);
  const [book, setBook] = useState<BookStatusInfo | null>(null);
  const [writing, setWriting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  async function loadBook() {
    try {
      const res = await fetch(`/api/books/${id}`);
      if (!res.ok) throw new Error("加载失败");
      const data = await res.json() as BookStatusInfo;
      setBook(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "未知错误");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void loadBook();
  }, [id]);

  async function handleWriteNext() {
    if (!book) return;
    setWriting(true);
    setError(null);
    try {
      const res = await fetch(`/api/books/${id}/write`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ wordCount: book.chapters[0]?.wordCount }),
      });
      if (!res.ok) {
        const data = await res.json() as { error?: string };
        throw new Error(data.error ?? "写作失败");
      }
      await loadBook();
    } catch (err) {
      setError(err instanceof Error ? err.message : "未知错误");
    } finally {
      setWriting(false);
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20 text-muted-foreground">
        加载中…
      </div>
    );
  }

  if (!book) {
    return (
      <div className="flex items-center justify-center py-20 text-destructive">
        {error ?? "小说不存在"}
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold">{book.title}</h1>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span>{book.genre}</span>
            <span>·</span>
            <span>{book.platform}</span>
            <span>·</span>
            <span>第 {book.nextChapter - 1} / ? 章</span>
          </div>
        </div>
        <StatusBadge status={book.status} />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="rounded-lg border bg-card p-4 space-y-1">
          <p className="text-xs text-muted-foreground">已写章节</p>
          <p className="text-2xl font-bold">{book.chaptersWritten}</p>
        </div>
        <div className="rounded-lg border bg-card p-4 space-y-1">
          <p className="text-xs text-muted-foreground">总字数</p>
          <p className="text-2xl font-bold">{book.totalWords.toLocaleString()}</p>
        </div>
        <div className="rounded-lg border bg-card p-4 space-y-1">
          <p className="text-xs text-muted-foreground">下一章</p>
          <p className="text-2xl font-bold">#{book.nextChapter}</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={handleWriteNext}
          disabled={writing}
          className="rounded-md bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50 transition-colors"
        >
          {writing ? "AI 写作中…" : "写下一章"}
        </button>
      </div>

      {error && (
        <div className="rounded-md bg-destructive/10 border border-destructive/30 px-3 py-2 text-sm text-destructive">
          {error}
        </div>
      )}

      <div className="space-y-3">
        <h2 className="text-lg font-semibold">章节列表</h2>
        <ChapterTable chapters={book.chapters} />
      </div>
    </div>
  );
}
