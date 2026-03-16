import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: string;
  className?: string;
}

const statusStyles: Record<string, string> = {
  active: "bg-green-100 text-green-800",
  paused: "bg-yellow-100 text-yellow-800",
  completed: "bg-blue-100 text-blue-800",
  draft: "bg-gray-100 text-gray-700",
  approved: "bg-green-100 text-green-800",
  "needs-review": "bg-orange-100 text-orange-800",
  error: "bg-red-100 text-red-800",
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const style = statusStyles[status] ?? "bg-gray-100 text-gray-700";
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        style,
        className
      )}
    >
      {status}
    </span>
  );
}
