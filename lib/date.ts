export function getMinutesUntilEta(etaISO: string): number {
  const eta = new Date(etaISO).getTime();
  const now = Date.now();
  return Math.round((eta - now) / 60000); // negatif = sudah lewat ETA
}