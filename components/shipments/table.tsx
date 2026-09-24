import { StatusBadge } from "@/components/ui/status-badge";
import type { Shipment } from "@/types/shipment";

export function ShipmentTable({ rows }: { rows: Shipment[] }) {
  return (
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
        {rows.map((s) => (
          <tr key={s.awb} className="border-t">
            <td className="py-2">{s.awb}</td>
            <td>{s.origin} → {s.destination}</td>
            <td><StatusBadge status={s.status} /></td>
            <td>{s.delayedMinutes > 0 ? `${s.delayedMinutes} menit` : "-"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}