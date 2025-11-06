import fs from "fs";
import path from "path";
import Carousel from "@/app/components/carousel/Carousel";
import Blob from "@/app/components/blob/Blob";

export default function Galeria() {
  const dir = path.join(process.cwd(), "public/imagens/carousel");
  const files: string[] = fs.readdirSync(dir);
  const images: string[] = files.map((file) => `/imagens/carousel/${file}`);
  
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center text-white p-6">
      <Blob />
      <h1 className="text-3xl font-bold mb-6">Galeria 💜</h1>
      <Carousel images={images} />
    </main>
  );
}
