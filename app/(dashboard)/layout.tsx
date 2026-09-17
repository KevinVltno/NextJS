import { NavLink } from "@/components/layout/nav-link";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import type { ReactNode } from "react";

const NAV = [
  { href: "/shipments", label: "Pengiriman" },
  { href: "/analytics", label: "Analitik" },
  { href: "/settings", label: "Pengaturan" },
];

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid min-h-screen lg:grid-cols-[240px_1fr]">
      <aside className="border-r border-border bg-surface p-4">
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm font-semibold">NusaCargo Control Tower</p>
          <ThemeToggle />
        </div>
        <nav className="flex flex-col gap-1">
          {NAV.map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} />
          ))}
        </nav>
      </aside>
      <main className="p-6">{children}</main>
    </div>
  );
}