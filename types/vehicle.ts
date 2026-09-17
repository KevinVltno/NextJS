export interface Driver {
  id: string;
  name: string;
  licenseNumber: string;
  phone: string;
}

export interface Vehicle {
  id: string;
  plateNumber: string;
  type: "truk" | "kontainer" | "van";
  capacityKg: number;
  driver?: Driver; // opsional, bisa belum ditugaskan
}