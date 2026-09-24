"use client";
import { useState } from "react";

export function ShipmentFilterBar() {
  const [keyword, setKeyword] = useState("");
  return (
    <label className="flex flex-col gap-1 text-sm">
      <span>Cari nomor resi</span>
      <input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className="h-11 rounded-lg border border-border bg-surface px-3"
      />
    </label>
  );
}