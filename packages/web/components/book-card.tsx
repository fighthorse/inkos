import Link from "next/link";
import { StatusBadge } from "./status-badge";
import type { BookStatusInfo } from "@actalk/inkos-core";

interface BookCardProps {
  book: BookStatusInfo;
}

export function BookCard({ book }: BookCardProps) {
  const progress =
    book.chaptersWritten > 0
      ? Math.min(100, Math.round((book.chaptersWritten / Math.max(1, book.chaptersWritten + 10)) * 100))
      : 0;

  return (
    <Link href={`/books/${book.bookId}`}>
      <div className="rounded-lg border bg-card p-5 hover:shadow-md transition-shadow cursor-pointer space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-base leading-snug line-clamp-2">{book.title}</h3>
          <StatusBadge status={book.status} className="shrink-0" />
        </div>
        <div className="text-sm text-muted-foreground space-y-1">
          <div className="flex items-center justify-between">
            <span>{book.genre}</span>
            <span>{book.platform}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>{book.chaptersWritten} 章</span>
            <span>{book.totalWords.toLocaleString()} 字</span>
          </div>
        </div>
        <div className="h-1.5 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </Link>
  );
}
