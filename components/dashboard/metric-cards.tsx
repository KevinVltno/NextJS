export function MetricCards() {
  const metrics = [
    { label: "Total Pengiriman", value: "1.284" },
    { label: "Ketepatan Waktu", value: "92%" },
    { label: "Jumlah Tertunda", value: "37" },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {metrics.map((m) => (
        <div key={m.label} className="rounded-lg border border-border bg-surface p-4">
          <p className="text-sm text-muted-foreground">{m.label}</p>
          <p className="mt-1 text-2xl font-semibold">{m.value}</p>
        </div>
      ))}
    </div>
  );
}