import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-950 font-sans text-zinc-50 selection:bg-zinc-800">
      <main className="flex flex-1 w-full max-w-4xl flex-col items-center justify-center px-6 py-24 text-center md:text-left md:items-start md:px-12">
        
        {/* Logo */}
        <div className="mb-8 flex items-center gap-2">
          <span className="h-6 w-6 rounded-md bg-white block dark:bg-zinc-50"></span>
          <span className="font-semibold tracking-wider text-xl">Bento</span>
        </div>

        {/* Hero Section */}
        <div className="flex flex-col items-center gap-4 md:items-start">
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]">
            Il tuo portfolio dev, in una griglia.
          </h1>
          
          <p className="max-w-xl text-lg leading-relaxed text-zinc-400 mt-2">
            Crea una bacheca in stile <span className="text-zinc-200 font-medium">Bento Grid</span>. 
            Mostra i tuoi progetti, il tuo stack tecnologico e i tuoi link social in un unico posto, pronto da condividere con i recruiter.
          </p>
        </div>

        {/* Call to Actions */}
        <div className="flex flex-col gap-4 mt-10 w-full sm:flex-row sm:justify-center md:justify-start">
          {/* Bottone 1 : creazione del bento */}
          <a
            className="flex h-12 items-center justify-center gap-2 rounded-xl bg-zinc-50 px-6 font-medium text-zinc-950 transition-all hover:bg-zinc-200 active:scale-98 shadow-lg shadow-white/5 sm:w-auto"
            href="/create"
          >
            Crea il tuo Bento
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={2} 
              stroke="currentColor" 
              className="w-4 h-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>

          {/* Bottone 2 : link, GitHub ... */}
          <a
            className="flex h-12 items-center justify-center rounded-xl border border-zinc-800 px-6 font-medium text-zinc-400 transition-all hover:border-zinc-700 hover:text-zinc-200 hover:bg-zinc-900/50 sm:w-auto"
            href="https://github.com" 
            target="_blank"
            rel="noopener noreferrer"
          >
            Sfoglia i link
          </a>
        </div>

        {/* Badge */}
        <div className="absolute top-0 left-1/2 -z-10 h-[600px] w-full max-w-7xl -translate-x-1/2 [background:radial-gradient(100%_100%_at_top_center,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0)_100%)]" />

      </main>
    </div>
  );
}