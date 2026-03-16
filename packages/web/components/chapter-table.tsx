import { StatusBadge } from "./status-badge";
import type { ChapterMeta } from "@actalk/inkos-core";

interface ChapterTableProps {
  chapters: ReadonlyArray<ChapterMeta>;
}

export function ChapterTable({ chapters }: ChapterTableProps) {
  if (chapters.length === 0) {
    return (
      <div className="text-center py-10 text-muted-foreground text-sm">
        暂无章节
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-lg border">
      <table className="w-full text-sm">
        <thead className="bg-muted/50">
          <tr>
            <th className="px-4 py-3 text-left font-medium text-muted-foreground">章节</th>
            <th className="px-4 py-3 text-left font-medium text-muted-foreground">标题</th>
            <th className="px-4 py-3 text-right font-medium text-muted-foreground">字数</th>
            <th className="px-4 py-3 text-center font-medium text-muted-foreground">状态</th>
            <th className="px-4 py-3 text-right font-medium text-muted-foreground">审计问题</th>
            <th className="px-4 py-3 text-left font-medium text-muted-foreground">更新时间</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {chapters.map((ch) => (
            <tr key={ch.number} className="hover:bg-muted/30 transition-colors">
              <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                #{ch.number}
              </td>
              <td className="px-4 py-3 font-medium max-w-xs truncate">{ch.title}</td>
              <td className="px-4 py-3 text-right tabular-nums">
                {ch.wordCount.toLocaleString()}
              </td>
              <td className="px-4 py-3 text-center">
                <StatusBadge status={ch.status} />
              </td>
              <td className="px-4 py-3 text-right">
                {ch.auditIssues.length > 0 ? (
                  <span className="text-orange-600 font-medium">{ch.auditIssues.length}</span>
                ) : (
                  <span className="text-green-600">0</span>
                )}
              </td>
              <td className="px-4 py-3 text-xs text-muted-foreground">
                {new Date(ch.updatedAt).toLocaleString("zh-CN")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
