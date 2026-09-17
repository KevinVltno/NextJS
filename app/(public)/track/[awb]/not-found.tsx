import Link from "next/link";

export default function TrackNotFound() {
  return (
    <section className="mx-auto max-w-md py-16 text-center">
      <h1 className="text-xl font-semibold">Resi tidak ditemukan</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Periksa kembali nomor resi kamu, atau coba lacak resi lain.
      </p>
      <Link href="/track" className="mt-4 inline-block text-brand underline">
        Coba resi lain
      </Link>
    </section>
  );
}