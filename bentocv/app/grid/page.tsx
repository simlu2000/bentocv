'use server';

export default async function GridEditor() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      {/* Header Editor */}
      <header className="flex justify-between items-center mb-12">
        <h1 className="text-2xl font-bold">Personalizza la tua Griglia</h1>
        <button className="px-6 py-2 bg-emerald-500 rounded-full font-semibold">
          Salva profilo 
        </button>
      </header>

      <div className="grid grid-cols-12 gap-6">
        {/* Sidebar Widget (3 colonne) */}
        <aside className="col-span-3 space-y-4">

          <div className="p-4 bg-zinc-900 rounded-2xl border border-white/5 cursor-pointer hover:border-emerald-500">
             <p>+ Aggiungi Testo</p>
          </div>

         
        </aside>

        {/* Area Griglia Live (9 colonne) */}
        <main className="col-span-9 grid grid-cols-4 gap-4 bg-zinc-950 p-6 rounded-3xl border border-dashed border-zinc-800">
          {/* blocchi renderizzati */}
          <div className="col-span-2 row-span-2 bg-zinc-900 rounded-2xl p-6">
            <h2 className="text-xl font-bold">Il mio Profilo GitHub</h2>
            {/* Componente GitHub Data qui */}
          </div>
        </main>
      </div>
    </div>
  );
}