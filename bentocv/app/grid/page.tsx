import { getProfile } from "../create/actions";
import { redirect } from "next/navigation";
import ProfileCard from "./profileCard";

export default async function GridEditor() {
  const profile = await getProfile();

  if (!profile) {
    redirect('/create');
  }
  
  return (
    <div className="min-h-screen bg-black text-white p-8 font-sans selection:bg-zinc-800">
      
      <header className="flex justify-between items-center mb-12 max-w-7xl mx-auto border-b border-zinc-900 pb-6">
        <div>
          <h1 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">Workspace</h1>
          <h2 className="text-2xl font-bold mt-1 text-zinc-100">Ciao {profile.name}, personalizza la tua Griglia</h2>
        </div>
        <button className="px-6 py-2.5 bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-zinc-950 rounded-full font-bold text-xs transition-all shadow-lg shadow-emerald-500/10">
          Pubblica Profilo
        </button>
      </header>

      <div className="grid grid-cols-12 gap-8 max-w-7xl mx-auto">
        
        {/* Sidebar Widget (3 colonne) */}
        <aside className="col-span-3 space-y-3 max-h-[80vh] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-zinc-800">

          <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest px-1 mb-4 block">
            Aggiungi Componenti
          </div>

          <div className="p-3.5 bg-zinc-900/60 border border-zinc-800/60 hover:border-zinc-700 hover:bg-zinc-900 rounded-xl cursor-pointer transition-all flex items-center justify-between group active:scale-[0.99]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-zinc-950 flex items-center justify-center text-zinc-500 group-hover:text-emerald-400 transition-colors">
                <i className="fa-solid fa-hourglass"></i>
              </div>
              <p className="text-xs font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors">Età</p>
            </div>
            <i className="fa-solid fa-plus text-[10px] text-zinc-600 group-hover:text-emerald-400 transition-colors"></i>
          </div>

          <div className="p-3.5 bg-zinc-900/60 border border-zinc-800/60 hover:border-zinc-700 hover:bg-zinc-900 rounded-xl cursor-pointer transition-all flex items-center justify-between group active:scale-[0.99]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-zinc-950 flex items-center justify-center text-zinc-500 group-hover:text-emerald-400 transition-colors">
                <i className="fa-solid fa-cake-candles"></i>
              </div>
              <p className="text-xs font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors">Data di nascita</p>
            </div>
            <i className="fa-solid fa-plus text-[10px] text-zinc-600 group-hover:text-emerald-400 transition-colors"></i>
          </div>

          <div className="p-3.5 bg-zinc-900/60 border border-zinc-800/60 hover:border-zinc-700 hover:bg-zinc-900 rounded-xl cursor-pointer transition-all flex items-center justify-between group active:scale-[0.99]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-zinc-950 flex items-center justify-center text-zinc-500 group-hover:text-emerald-400 transition-colors">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <p className="text-xs font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors">E-mail di contatto</p>
            </div>
            <i className="fa-solid fa-plus text-[10px] text-zinc-600 group-hover:text-emerald-400 transition-colors"></i>
          </div>

          <div className="p-3.5 bg-zinc-900/60 border border-zinc-800/60 hover:border-zinc-700 hover:bg-zinc-900 rounded-xl cursor-pointer transition-all flex items-center justify-between group active:scale-[0.99]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-zinc-950 flex items-center justify-center text-zinc-500 group-hover:text-emerald-400 transition-colors">
                <i className="fa-solid fa-phone"></i>
              </div>
              <p className="text-xs font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors">Numero di telefono</p>
            </div>
            <i className="fa-solid fa-plus text-[10px] text-zinc-600 group-hover:text-emerald-400 transition-colors"></i>
          </div>

          <div className="p-3.5 bg-zinc-900/60 border border-zinc-800/60 hover:border-zinc-700 hover:bg-zinc-900 rounded-xl cursor-pointer transition-all flex items-center justify-between group active:scale-[0.99]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-zinc-950 flex items-center justify-center text-zinc-500 group-hover:text-emerald-400 transition-colors">
                <i className="fa-solid fa-share-nodes"></i>
              </div>
              <p className="text-xs font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors">Social Network</p>
            </div>
            <i className="fa-solid fa-plus text-[10px] text-zinc-600 group-hover:text-emerald-400 transition-colors"></i>
          </div>

          <div className="p-3.5 bg-zinc-900/60 border border-zinc-800/60 hover:border-zinc-700 hover:bg-zinc-900 rounded-xl cursor-pointer transition-all flex items-center justify-between group active:scale-[0.99]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-zinc-950 flex items-center justify-center text-zinc-500 group-hover:text-emerald-400 transition-colors">
                <i className="fa-solid fa-layer-group"></i>
              </div>
              <p className="text-xs font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors">Tech Stack preferita</p>
            </div>
            <i className="fa-solid fa-plus text-[10px] text-zinc-600 group-hover:text-emerald-400 transition-colors"></i>
          </div>

          <div className="p-3.5 bg-zinc-900/60 border border-zinc-800/60 hover:border-zinc-700 hover:bg-zinc-900 rounded-xl cursor-pointer transition-all flex items-center justify-between group active:scale-[0.99]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-zinc-950 flex items-center justify-center text-zinc-500 group-hover:text-emerald-400 transition-colors">
                <i className="fa-solid fa-code-branch"></i>
              </div>
              <p className="text-xs font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors">Progetto Vetrina</p>
            </div>
            <i className="fa-solid fa-plus text-[10px] text-zinc-600 group-hover:text-emerald-400 transition-colors"></i>
          </div>

          <div className="p-3.5 bg-zinc-900/60 border border-zinc-800/60 hover:border-zinc-700 hover:bg-zinc-900 rounded-xl cursor-pointer transition-all flex items-center justify-between group active:scale-[0.99]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-zinc-950 flex items-center justify-center text-zinc-500 group-hover:text-emerald-400 transition-colors">
                <i className="fa-solid fa-quote-left"></i>
              </div>
              <p className="text-xs font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors">Motto di vita</p>
            </div>
            <i className="fa-solid fa-plus text-[10px] text-zinc-600 group-hover:text-emerald-400 transition-colors"></i>
          </div>

          <div className="p-3.5 bg-zinc-900/60 border border-zinc-800/60 hover:border-zinc-700 hover:bg-zinc-900 rounded-xl cursor-pointer transition-all flex items-center justify-between group active:scale-[0.99]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-zinc-950 flex items-center justify-center text-zinc-500 group-hover:text-emerald-400 transition-colors">
                <i className="fa-solid fa-brain"></i>
              </div>
              <p className="text-xs font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors">Soft Skill</p>
            </div>
            <i className="fa-solid fa-plus text-[10px] text-zinc-600 group-hover:text-emerald-400 transition-colors"></i>
          </div>

          <div className="p-3.5 bg-zinc-900/60 border border-zinc-800/60 hover:border-zinc-700 hover:bg-zinc-900 rounded-xl cursor-pointer transition-all flex items-center justify-between group active:scale-[0.99]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-zinc-950 flex items-center justify-center text-zinc-500 group-hover:text-emerald-400 transition-colors">
                <i className="fa-solid fa-terminal"></i>
              </div>
              <p className="text-xs font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors">Hard Skill</p>
            </div>
            <i className="fa-solid fa-plus text-[10px] text-zinc-600 group-hover:text-emerald-400 transition-colors"></i>
          </div>

          <div className="p-3.5 bg-zinc-900/60 border border-zinc-800/60 hover:border-zinc-700 hover:bg-zinc-900 rounded-xl cursor-pointer transition-all flex items-center justify-between group active:scale-[0.99]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-zinc-950 flex items-center justify-center text-zinc-500 group-hover:text-emerald-400 transition-colors">
                <i className="fa-solid fa-id-card"></i>
              </div>
              <p className="text-xs font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors">Patente di guida</p>
            </div>
            <i className="fa-solid fa-plus text-[10px] text-zinc-600 group-hover:text-emerald-400 transition-colors"></i>
          </div>

          <div className="p-3.5 bg-zinc-900/60 border border-zinc-800/60 hover:border-zinc-700 hover:bg-zinc-900 rounded-xl cursor-pointer transition-all flex items-center justify-between group active:scale-[0.99]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-zinc-950 flex items-center justify-center text-zinc-500 group-hover:text-emerald-400 transition-colors">
                <i className="fa-solid fa-language"></i>
              </div>
              <p className="text-xs font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors">Lingue conosciute</p>
            </div>
            <i className="fa-solid fa-plus text-[10px] text-zinc-600 group-hover:text-emerald-400 transition-colors"></i>
          </div>

        </aside>

        {/* Area bento(9 colonne) */}
        <main className="col-span-9 grid grid-cols-4 gap-6 bg-zinc-950/20 p-4 rounded-3xl border border-dashed border-zinc-900 min-h-[75vh]">
          
          {/* Blocco Profilo (2 colonne) */}
          <ProfileCard profile={profile} />
          
          {/* Blocco GitHub (2 colonne) */}
          <div className="col-span-2 bg-zinc-900/40 border border-zinc-800/60 rounded-3xl p-6 backdrop-blur-sm flex flex-col justify-between">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 flex items-center gap-2">
              <i className="fa-brands fa-github text-white"></i> GitHub Card
            </h2>
            <div className="py-6 flex flex-col gap-2">
              <div className="h-3.5 bg-zinc-950/60 border border-zinc-800/30 rounded-lg w-2/3 animate-pulse"></div>
              <div className="h-3.5 bg-zinc-950/60 border border-zinc-800/30 rounded-lg w-1/2 animate-pulse"></div>
            </div>
            <div className="text-[11px] text-zinc-600 border-t border-zinc-800/40 pt-2">
              Widget attivo
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}