'use client';
import { createClient } from '../../src/utils/supabase/client';

export default function Home() {
    const supabase = createClient();

    const handleGitHubLogin = async () => {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'github',
            options: {
                redirectTo: `${window.location.origin}/auth/callback`,
            },
        });

        if (error) {
            console.error("Errore durante il login:", error.message);
        }
    };
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
                        Passo 1 : Accedi con GitHub
                    </h1>

                    <p className="max-w-xl text-lg leading-relaxed text-zinc-400 mt-2">
                        Crea una bacheca in stile <span className="text-zinc-200 font-medium">Bento Grid</span>.
                        Mostra i tuoi progetti, il tuo stack tecnologico e i tuoi link social in un unico posto, pronto da condividere con i recruiter.
                    </p>
                </div>

                {/* Bottone login */}
                <div className="mt-10 w-full flex justify-center md:justify-start">
                    <button
                        className="flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900 px-6 font-medium text-zinc-200 transition-all hover:bg-zinc-800 hover:border-zinc-700 active:scale-98 sm:w-auto"
                        onClick={handleGitHubLogin}
                    >
                        {/* Icona SVG di GitHub */}
                        <svg
                            className="h-5 w-5 fill-current"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.008.069-.008 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        Connettiti con GitHub
                    </button>
                </div>


            </main>
        </div>
    );
}