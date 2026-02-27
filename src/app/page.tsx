export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geologica-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        <svg
          viewBox="0 0 192 192"
          width="192"
          height="192"
          xmlns="http://www.w3.org/2000/svg">
          {/* boxes */}
          <rect x="24" y="40" width="72" height="112" className="sinisterbox" strokeWidth="16" rx="8" ry="8" />
          <rect x="96" y="40" width="72" height="112" className="dexterbox" strokeWidth="16" rx="8" ry="8" />
          {/* lines */}
          <rect x="80" y="16" width="16" height="160" className="sinisterline" />
          <rect x="96" y="16" width="16" height="160" className="dexterline" />
        </svg>
        
        <h1 className="text-4xl sm:text-5xl font-bold text-center sm:text-left">
            SINISTER FIELD
        </h1>

        
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        
      
      </footer>
    </div>
  );
}
