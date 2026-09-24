"use client";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

export function ConfirmDialog({
  triggerLabel,
  title,
  onConfirm,
}: {
  triggerLabel: string;
  title: string;
  onConfirm: () => void;
}) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) dialogRef.current?.focus();
  }, [open]);

  function close() {
    setOpen(false);
    triggerRef.current?.focus(); // fokus kembali ke pemicu
  }

  return (
    <>
      <Button ref={triggerRef} variant="danger" onClick={() => setOpen(true)}>
        {triggerLabel}
      </Button>
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="dialog-title"
          ref={dialogRef}
          tabIndex={-1}
          onKeyDown={(e) => e.key === "Escape" && close()}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
        >
          <div className="rounded-lg bg-surface p-6 shadow-lg">
            <h2 id="dialog-title" className="mb-4 font-semibold">{title}</h2>
            <div className="flex gap-2">
              <Button onClick={() => { onConfirm(); close(); }}>Ya, lanjutkan</Button>
              <Button variant="outline" onClick={close}>Batal</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}