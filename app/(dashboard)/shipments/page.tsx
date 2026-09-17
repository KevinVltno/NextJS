import { StatusBadge } from "@/components/ui/status-badge";
import type { Shipment } from "@/types/shipment";

const shipments: Shipment[] = [
  {
    awb: "NC-2026-000481",
    origin: "Makassar",
    destination: "Surabaya",
    status: "transit",
    weightKg: 12,
    etaISO: "2026-09-18T10:00:00Z",
    delayedMinutes: 0,
    client: { id: "1", name: "PT Sumber Jaya" },
  },
  {
    awb: "NC-2026-000482",
    origin: "Balikpapan",
    destination: "Jakarta",
    status: "tertunda",
    weightKg: 8,
    etaISO: "2026-09-18T14:00:00Z",
    delayedMinutes: 145,
    client: { id: "2", name: "CV Nusantara" },
  },
  {
    awb: "NC-2026-000483",
    origin: "Ambon",
    destination: "Makassar",
    status: "selesai",
    weightKg: 5,
    etaISO: "2026-09-17T09:00:00Z",
    delayedMinutes: 0,
    client: { id: "3", name: "Toko Bahari" },
  },
  {
    awb: "NC-2026-000484",
    origin: "Sorong",
    destination: "Ambon",
    status: "di-pelabuhan",
    weightKg: 20,
    etaISO: "2026-09-19T08:00:00Z",
    delayedMinutes: 20,
    client: { id: "4", name: "UD Timur Jaya" },
  },
];

export default function ShipmentsPage() {
  return (
    <div>
      <h1 className="text-xl font-semibold">Pengiriman</h1>

      <table className="mt-4 w-full text-sm">
        <thead className="text-left text-muted-foreground">
          <tr>
            <th className="py-2">AWB</th>
            <th>Rute</th>
            <th>Status</th>
            <th>Keterlambatan</th>
          </tr>
        </thead>
        <tbody>
          {shipments.map((s) => (
            <tr key={s.awb} className="border-t">
              <td className="py-2">{s.awb}</td>
              <td>
                {s.origin} → {s.destination}
              </td>
              <td>
                <StatusBadge status={s.status} />
              </td>
              <td>
                {s.delayedMinutes > 0 ? `${s.delayedMinutes} menit` : "-"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}