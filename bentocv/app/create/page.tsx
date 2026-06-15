import Image from "next/image";
import { saveProfile } from "./actions";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-950 font-sans text-zinc-50 selection:bg-zinc-800">
            <main className="flex flex-1 w-full max-w-4xl flex-col items-center justify-center px-6 py-24 text-center md:text-left md:items-start md:px-12">

                {/* Logo */}
                <div className="mb-8 flex items-center gap-2">
                    <span className="h-6 w-6 rounded-md bg-white dark:bg-zinc-50 flex items-center justify-center font-bold text-xs">
                        <p className="text-black">B</p>
                    </span>
                    <span className="font-semibold tracking-wider text-xl">Bento</span>
                </div>

                {/* Hero Section */}
                <div className="flex flex-col items-center gap-4 md:items-start">
                    <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]">
                        Passo 2 : Riempi i campi
                    </h1>

                    <p className="max-w-xl text-lg leading-relaxed text-zinc-400 mt-2">
                        Crea una bacheca in stile <span className="text-zinc-200 font-medium">Bento Grid</span>.
                        Mostra i tuoi progetti, il tuo stack tecnologico e i tuoi link social in un unico posto, pronto da condividere con i recruiter.
                    </p>
                </div>

                {/*Form*/}
                <div className="flex min-h-screen items-center justify-start mt-1 bg-zinc-950 font-sans text-zinc-50 selection:bg-zinc-800 p-6">
                    <div className="w-full max-w-2xl bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 backdrop-blur-sm">

                        {/* Intestazione del Form */}
                        <div className="mb-8">
                            <p className="text-sm text-zinc-400 mt-1">Queste informazioni compariranno nei blocchi principali della tua griglia.</p>
                        </div>

                        {/* Form HTML */}
                        <form action={saveProfile} className="space-y-6">
                            <div className="grid grid-cols-1  gap-6 sm:grid-cols-2"> {/*schermi piccoli 2 col*/}
                                {/* IMMAGINE DEL PROFILO */}
                                <div className="space-y-2 ">
                                    <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                                        Immagine del profilo
                                    </label>
                                    <div className="flex items-center gap-4">
                                        {/* Cerchio di anteprima dell'avatar */}
                                        <div className="w-14 h-14 bg-zinc-950 border border-zinc-800 rounded-full flex items-center justify-center text-zinc-600 border-dashed">
                                            <i className="fa-solid fa-camera text-lg text-zinc-500"></i>
                                        </div>

                                        {/* Pulsante di caricamento */}
                                        <label
                                            htmlFor="avatar_url"
                                            className="h-11 px-4 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-xs font-medium text-zinc-300 rounded-xl flex items-center cursor-pointer transition-all active:scale-[0.98]"
                                        >
                                            Seleziona foto
                                            <input
                                                type="file"
                                                id="avatar_url"
                                                name="avatar_url"
                                                accept="image/*"
                                                className="hidden"
                                            />
                                        </label>
                                        <span className="text-xs text-zinc-600">PNG, JPG fino a 5MB</span>
                                    </div>
                                </div>
                            </div>

                            {/* Username*/}
                                <div className="space-y-2">
                                    <label htmlFor="username" className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                                        Username
                                    </label>
                                    <div className="relative flex items-center">
                                        <span className="absolute left-3 text-sm text-zinc-600 select-none">bentocv.com/p/</span>
                                        <input
                                            type="text"
                                            id="username"
                                            name="username"
                                            required
                                            placeholder="mariobros123"
                                            className="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl pl-[112px] pr-4 text-sm text-white placeholder-zinc-700 outline-none transition-all focus:border-zinc-700 focus:ring-1 focus:ring-zinc-700"
                                        />
                                    </div>
                                </div>

                                {/*Qualifica / Job Title */}
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="title" className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                                        Qualifica / Ruolo
                                    </label>
                                    <input
                                        type="text"
                                        id="title"
                                        name="title"
                                        placeholder="Software developer"
                                        className="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-4 text-sm text-white placeholder-zinc-700 outline-none transition-all focus:border-zinc-700 focus:ring-1 focus:ring-zinc-700"
                                    />
                                </div>

                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                {/* Nome */}
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                                        Nome
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Nome"
                                        className="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-4 text-sm text-white placeholder-zinc-700 outline-none transition-all focus:border-zinc-700 focus:ring-1 focus:ring-zinc-700"
                                    />
                                </div>

                                {/* Cognome */}
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="surname" className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                                        Cognome
                                    </label>
                                    <input
                                        type="text"
                                        id="surname"
                                        name="surname"
                                        placeholder="Cognome"
                                        className="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-4 text-sm text-white placeholder-zinc-700 outline-none transition-all focus:border-zinc-700 focus:ring-1 focus:ring-zinc-700"
                                    />
                                </div>
                            </div>

                            {/* Bio Breve */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="bio" className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                                    Biografia Breve (Max 250 caratteri)
                                </label>
                                <textarea
                                    id="bio"
                                    name="bio"
                                    rows={3}
                                    maxLength={250}
                                    placeholder="Scrivi qualcosa su di te, le tue passioni o la tua stack preferita..."
                                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-sm text-white placeholder-zinc-700 outline-none transition-all focus:border-zinc-700 focus:ring-1 focus:ring-zinc-700 resize-none"
                                />
                            </div>

                            {/* Dati aggiuntivi */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="bio" className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                                    Info aggiuntive
                                </label>
                                <textarea
                                    id="other_data"
                                    name="other_data"
                                    rows={3}
                                    maxLength={250}
                                    placeholder="Scrivi qualcosa in più su di te"
                                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-sm text-white placeholder-zinc-700 outline-none transition-all focus:border-zinc-700 focus:ring-1 focus:ring-zinc-700 resize-none"
                                />
                            </div>

                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                {/* Località */}
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="location" className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                                        Località
                                    </label>
                                    <input
                                        type="text"
                                        id="location"
                                        name="location"
                                        placeholder="Genoa, Italy"
                                        className="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-4 text-sm text-white placeholder-zinc-700 outline-none transition-all focus:border-zinc-700 focus:ring-1 focus:ring-zinc-700"
                                    />
                                </div>

                                {/* link CV PDF */}
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="resume_url" className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                                        Link al CV PDF
                                    </label>
                                    <input
                                        type="url"
                                        id="cv_url"
                                        name="cv_url"
                                        placeholder="https://drive.google.com/..."
                                        className="w-full h-11 bg-zinc-950 border border-zinc-800 rounded-xl px-4 text-sm text-white placeholder-zinc-700 outline-none transition-all focus:border-zinc-700 focus:ring-1 focus:ring-zinc-700"
                                    />
                                </div>
                            </div>

                            {/* Bottone di Invio */}
                            <div className="pt-4">
                                <button
                                    type="submit"
                                    className="w-full h-12 flex items-center justify-center rounded-xl bg-zinc-50 font-medium text-zinc-950 transition-all hover:bg-zinc-200 active:scale-[0.99] shadow-lg shadow-white/5"
                                >
                                    Salva e continua
                                </button>
                            </div>
                        </form>
                    </div>
                </div>


            </main>
        </div>
    );
}