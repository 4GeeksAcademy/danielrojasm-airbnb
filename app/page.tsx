import { PrimaryButton } from "@/components/primary-button";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col items-start justify-center gap-6 px-6 py-20">
      <p className="rounded-full border border-black/10 px-3 py-1 text-sm font-medium text-black/70">
        Next.js 16 + TypeScript + Tailwind CSS
      </p>
      <h1 className="text-balance text-4xl font-semibold tracking-tight text-black md:text-6xl">
        Base lista para construir tu clon de Airbnb
      </h1>
      <p className="max-w-2xl text-base text-black/70 md:text-lg">
        El proyecto usa App Router y una carpeta de componentes reutilizables para escalar la UI.
      </p>
      <PrimaryButton>Comenzar</PrimaryButton>
    </main>
  );
}
