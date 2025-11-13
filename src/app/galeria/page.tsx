import fs from "fs";
import path from "path";
import Blob from "@/app/components/blob/Blob";
import dynamic from "next/dynamic";

export default function Galeria() {
  const dir = path.join(process.cwd(), "public/imagens/carousel");
  const files: string[] = fs.readdirSync(dir);
  const images: string[] = files.map((file) => `/imagens/carousel/${file}`);
  
  const Carousel = dynamic(() => import('@/app/components/carousel/Carousel'));
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center text-white p-6">
      <Blob />
      <h1 className="text-3xl font-bold mb-6">Galeria 💜</h1>
      <Carousel images={images} />
    </main>
  );
}
