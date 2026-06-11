import Image from "next/image";

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
                        Il tuo portfolio
                    </h1>
                </div>

                <div>
                  {/*Dati portfolio utente*/}
                </div>
               

            </main>
        </div>
    );
}