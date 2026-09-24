import { type SelectHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export const Select = forwardRef<HTMLSelectElement, SelectHTMLAttributes<HTMLSelectElement>>(
  ({ className, ...rest }, ref) => (
    <select
      ref={ref}
      className={cn(
        "h-11 w-full rounded-lg border border-border bg-surface px-3 text-sm",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
        className
      )}
      {...rest}
    />
  )
);
Select.displayName = "Select";