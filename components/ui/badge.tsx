import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "default" | "success" | "warning" | "danger";

const VARIANTS: Record<Variant, string> = {
  default: "bg-muted text-foreground",
  success: "bg-emerald-100 text-emerald-800",
  warning: "bg-amber-100 text-amber-900",
  danger: "bg-rose-100 text-rose-800",
};

interface Props extends HTMLAttributes<HTMLSpanElement> {
  variant?: Variant;
}

export function Badge({ className, variant = "default", ...rest }: Props) {
  return (
    <span
      className={cn("rounded-full px-2.5 py-1 text-xs font-medium", VARIANTS[variant], className)}
      {...rest}
    />
  );
}