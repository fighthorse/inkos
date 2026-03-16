"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Radio, Settings, PenTool } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/books", label: "小说列表", icon: BookOpen },
  { href: "/radar", label: "站外热点", icon: Radio },
  { href: "/settings", label: "基础配置", icon: Settings },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <aside className="w-56 shrink-0 border-r bg-card h-screen flex flex-col">
      <div className="flex items-center gap-2 px-4 py-5 border-b">
        <PenTool className="h-5 w-5 text-primary" />
        <span className="font-bold text-lg tracking-tight">InkOS</span>
      </div>
      <nav className="flex-1 py-4 px-2 space-y-1">
        {navItems.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
              pathname.startsWith(href)
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            )}
          >
            <Icon className="h-4 w-4" />
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
