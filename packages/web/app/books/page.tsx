import Link from "next/link";
import { BookCard } from "@/components/book-card";
import type { BookStatusInfo } from "@actalk/inkos-core";

async function getBooks(): Promise<BookStatusInfo[]> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/books`, { cache: "no-store" });
  if (!res.ok) return [];
  return res.json() as Promise<BookStatusInfo[]>;
}

export default async function BooksPage() {
  const books = await getBooks();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">小说列表</h1>
          <p className="text-muted-foreground text-sm mt-1">管理你的所有作品</p>
        </div>
        <Link
          href="/books/new"
          className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          + 新建小说
        </Link>
      </div>

      {books.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-muted-foreground space-y-3">
          <p className="text-base">还没有小说，快去创建第一部吧！</p>
          <Link
            href="/books/new"
            className="text-sm text-primary underline underline-offset-4 hover:no-underline"
          >
            创建小说
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {books.map((book) => (
            <BookCard key={book.bookId} book={book} />
          ))}
        </div>
      )}
    </div>
  );
}
