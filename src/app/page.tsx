import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-screen bg-gradient-to-tl from-muted flex flex-col md:justify-center p-6 overflow-x-hidden">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col md:flex-row gap-8 md:gap-12">
        <div>

          <h1 className="font-title font-bold text-5xl max-w-[500px]">
            Um criador de currículos gratuito e fácil de usar
          </h1>
          <p className="text-muted-foreground text-lg mt-2">
            Comece a criar seus currículos de forma rápida e fácil com nossos
            modelos.
          </p>

          <Link href="/dashboard/resumes" passHref>
            <Button className="mt-4">Começar agora</Button>
          </Link>
        </div>

      </div>
    </main>
  );
}