"use client";
export default function ShipmentsError({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="rounded-lg border border-danger bg-surface p-6 text-center">
      <p className="font-medium text-danger">Gagal memuat data pengiriman.</p>
      <button onClick={reset} className="mt-3 rounded-md bg-brand px-4 py-2 text-sm text-background">
        Coba lagi
      </button>
    </div>
  );
}