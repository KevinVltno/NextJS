import { Suspense } from "react";
import { MetricCards } from "@/components/dashboard/metric-cards";
import { ShipmentTable } from "@/components/shipments/table";
import { ShipmentFilterBar } from "@/components/shipments/filter-bar";
import { getShipments } from "@/lib/shipments";

async function ShipmentTableSection() {
  const shipments = await getShipments();
  return <ShipmentTable rows={shipments} />;
}

export default function ShipmentsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold">Pengiriman</h1>
      <MetricCards />
      <ShipmentFilterBar />
      <Suspense fallback={<p className="text-sm text-muted-foreground">Memuat tabel...</p>}>
        <ShipmentTableSection />
      </Suspense>
    </div>
  );
}