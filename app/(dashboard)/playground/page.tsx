import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";

export default function PlaygroundPage() {
  return (
    <div className="space-y-8">
      <section className="space-y-2">
        <h2 className="text-sm font-semibold">Button</h2>
        <div className="flex flex-wrap gap-2">
          <Button variant="primary">Primary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
        </div>
      </section>

      <section className="space-y-2">
        <h2 className="text-sm font-semibold">Badge</h2>
        <div className="flex flex-wrap gap-2">
          <Badge>Default</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="danger">Danger</Badge>
        </div>
      </section>

      <section className="max-w-sm space-y-2">
        <h2 className="text-sm font-semibold">Input & Select</h2>
        <Input placeholder="Cari nomor resi" />
        <Select>
          <option>Semua status</option>
          <option>transit</option>
          <option>tertunda</option>
        </Select>
      </section>

      <section className="max-w-sm space-y-2">
        <h2 className="text-sm font-semibold">Card</h2>
        <Card>Contoh isi Card</Card>
      </section>
    </div>
  );
}