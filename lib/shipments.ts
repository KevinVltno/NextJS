import type { Shipment } from "@/types/shipment";
import { MOCK_SHIPMENTS } from "@/lib/mock-data";

export async function getShipments(): Promise<Shipment[]> {
  await new Promise((r) => setTimeout(r, 300));
  return MOCK_SHIPMENTS;
}