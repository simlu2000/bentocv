import { getProfile } from "../create/actions";
import { redirect } from "next/navigation";
import ProfileCard from "./profileCard";

export default async function GridEditor() {
  const profile = await getProfile();

  if (!profile) {
    redirect('/create');
  }
  return (
    <div className="min-h-screen bg-black text-white p-8">
      {/* Header Editor */}
      <header className="flex justify-between items-center mb-12">
        <h1 className="text-xl font-zinc-400">Ciao {profile.name}</h1>
        <h2 className="text-2xl font-bold mt-1">Personalizza la tua Griglia</h2>
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
        <main className="col-span-9 grid grid-cols-4 gap-6 bg-zinc-950/20 p-2 rounded-3xl border border-dashed border-zinc-900">
          {/* blocchi renderizzati */}
          <ProfileCard profile={profile} />
          <div className="col-span-2 bg-zinc-900/40 rounded-3xl p-6">
            <h2 className="text-xl font-bold">GitHub</h2>
          </div>
        </main>
      </div>
    </div>
  );
}