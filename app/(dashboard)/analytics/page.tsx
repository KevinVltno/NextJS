export default function AnalyticsPage() {
  const shipments = [
    { status: "transit" },
    { status: "tertunda" },
    { status: "selesai" },
    { status: "di-pelabuhan" },
  ];

  const total = shipments.length;
  const tertunda = shipments.filter((s) => s.status === "tertunda").length;
  const tepatWaktu = Math.round(((total - tertunda) / total) * 100);

  return (
    <div>
      <h1 className="text-xl font-semibold">Analitik</h1>

      <div className="mt-4 grid grid-cols-3 gap-4">
        <div className="rounded-lg border p-4">
          <p className="text-sm text-muted-foreground">Total pengiriman</p>
          <p className="text-2xl font-semibold">{total}</p>
        </div>
        <div className="rounded-lg border p-4">
          <p className="text-sm text-muted-foreground">Ketepatan waktu</p>
          <p className="text-2xl font-semibold">{tepatWaktu}%</p>
        </div>
        <div className="rounded-lg border p-4">
          <p className="text-sm text-muted-foreground">Jumlah tertunda</p>
          <p className="text-2xl font-semibold">{tertunda}</p>
        </div>
      </div>
    </div>
  );
}