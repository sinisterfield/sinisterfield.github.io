import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geologica-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          src="/icon-192.svg"
          alt="Sinister Field logo"
          width={192}
          height={192}
          priority
        />
        
        <h1 className="text-4xl sm:text-5xl font-bold text-center sm:text-left">
            SINISTER FIELD
        </h1>

        
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        
      
      </footer>
    </div>
  );
}
