"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const active = pathname.startsWith(href);
  return (
    <Link
      href={href}
      className={cn(
        "rounded-md px-3 py-2 text-sm hover:bg-muted",
        active && "bg-muted font-medium text-brand"
      )}
    >
      {label}
    </Link>
  );
}