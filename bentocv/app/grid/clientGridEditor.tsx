'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import ProfileCard from "./profileCard";
import { createClient } from '../../src/utils/supabase/client';

interface clientGridEditorProps {
    initialProfile: {
        name: string;
        [key: string]: any;
    };
}

export default function clientGridEditor({ initialProfile }: clientGridEditorProps) {
    const [profile] = useState(initialProfile);
    const [widgetsToAdd, setWidgetsToAdd] = useState<string[]>([]);
    const [widgetsStatus, setWidgetsStatus] = useState<{ [key: string]: boolean }>({
        age: false,
        dateOfBirth: false,
        email: false,
        phoneNumber: false,
        socialNetwork: false,
        techStack: false,
        project: false,
        motto: false,
        softSkill: false,
        hardSkill: false,
        driverLicense: false,
        languages: false,
    });
    const router = useRouter();
    const supabase = createClient();

    const handleGitHubLogout = async () => {
        const { error } = await supabase.auth.signOut();

        if (error) {
            console.error("Errore durante il logout:", error.message);
            return;
        }

        router.push('/login');
    };


    const handleAddWidget = (widgetName: string) => {
        const nextState = !widgetsStatus[widgetName];

        setWidgetsStatus(prev => ({
            ...prev,
            [widgetName]: nextState
        }));

        if (nextState) {
            setWidgetsToAdd((allWidgets) => { //controlliamo se quello appena aggiunto non sia gia presente nell'array
                if (!allWidgets.includes(widgetName)) {
                    return [...allWidgets, widgetName]; //non c'è il widget nuovo quindi lo aggiungo
                }
                // widget gia presente/attivato
                return allWidgets;
            });
        } else {
            // Se il widget è appena stato disattivato (nextState è false)
            setWidgetsToAdd((allWidgets) =>
                // nuovo array filtrato, mantenendo solo i widget che hanno un nome DIVERSO da quello che vogliamo rimuovere
                allWidgets.filter((name) => name !== widgetName)
            );
        }
    };

    const getWidgetContainerClasses = (widgetName: string) => {
        const isActive = widgetsStatus[widgetName];

        // Classi base per tutti
        const baseClasses = "p-3.5 rounded-xl cursor-pointer transition-all flex items-center justify-between group active:scale-[0.99]";

        // SE NON È ATTIVO (Verde -> Disponibile da aggiungere)
        // SE È ATTIVO (Rosso -> Già aggiunto, clicca per rimuovere)
        const dynamicClasses = !isActive
            ? "bg-emerald-500 border border-emerald-500/20 hover:border-emerald-500/50 hover:bg-emerald-950/10 shadow-sm shadow-emerald-500/5"
            : "bg-red-500 border border-red-500/20 hover:border-red-500/50 hover:bg-red-950/10 shadow-sm shadow-red-500/5";

        return `${baseClasses} ${dynamicClasses}`;
    };

    return (
        <div className="min-h-screen bg-black text-white p-8 font-sans selection:bg-zinc-800">

            <header className="flex justify-between items-center mb-12 max-w-7xl mx-auto border-b border-zinc-900 pb-6">
                <div>
                    <h1 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">Workspace</h1>
                    <h2 className="text-2xl font-bold mt-1 text-zinc-100">Ciao {profile.name}, personalizza la tua Griglia</h2>
                </div>

                <div className="flex flex-row gap-6">
                    <button onClick={handleGitHubLogout} className="px-6 py-2.5 bg-red-500 hover:bg-red-600 active:scale-95 text-neutral-50 rounded-full font-bold text-xs transition-all shadow-lg shadow-emerald-500/10">
                        Esci
                    </button>
                    <button className="px-6 py-2.5 bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-neutral-50 rounded-full font-bold text-xs transition-all shadow-lg shadow-emerald-500/10">
                        Pubblica Profilo
                    </button>
                </div>

            </header>

            <div className="grid grid-cols-12 gap-8 max-w-7xl mx-auto">

                {/* Sidebar Widget (3 colonne) */}
                <aside className="col-span-3 space-y-3 max-h-[80vh] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-zinc-800">

                    <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest px-1 mb-4 block">
                        Aggiungi Componenti
                    </div>

                    {/* Età */}
                    <div className={getWidgetContainerClasses('age')}>
                        <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-lg bg-zinc-950 flex items-center justify-center transition-colors ${!widgetsStatus.age ? 'text-emerald-400' : 'text-red-400'}`}>
                                <i className="fa-solid fa-hourglass"></i>
                            </div>
                            <p className="text-xs font-medium text-zinc-200">Età</p>
                        </div>
                        <i
                            onClick={() => handleAddWidget('age')}
                            className={`fa-solid ${!widgetsStatus.age ? 'fa-plus text-emerald-400 group-hover:text-emerald-300' : 'fa-minus text-red-400 group-hover:text-red-300'} text-[11px] transition-colors`}
                        ></i>
                    </div>

                    {/* Data di nascita */}
                    <div className={getWidgetContainerClasses('dateOfBirth')}>
                        <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-lg bg-zinc-950 flex items-center justify-center transition-colors ${!widgetsStatus.dateOfBirth ? 'text-emerald-400' : 'text-red-400'}`}>
                                <i className="fa-solid fa-cake-candles"></i>
                            </div>
                            <p className="text-xs font-medium text-zinc-200">Data di nascita</p>
                        </div>
                        <i
                            onClick={() => handleAddWidget('dateOfBirth')}
                            className={`fa-solid ${!widgetsStatus.dateOfBirth ? 'fa-plus text-emerald-400 group-hover:text-emerald-300' : 'fa-minus text-red-400 group-hover:text-red-300'} text-[11px] transition-colors`}
                        ></i>
                    </div>

                    {/* E-mail di contatto */}
                    <div className={getWidgetContainerClasses('email')}>
                        <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-lg bg-zinc-950 flex items-center justify-center transition-colors ${!widgetsStatus.email ? 'text-emerald-400' : 'text-red-400'}`}>
                                <i className="fa-solid fa-envelope"></i>
                            </div>
                            <p className="text-xs font-medium text-zinc-200">E-mail di contatto</p>
                        </div>
                        <i
                            onClick={() => handleAddWidget('email')}
                            className={`fa-solid ${!widgetsStatus.email ? 'fa-plus text-emerald-400 group-hover:text-emerald-300' : 'fa-minus text-red-400 group-hover:text-red-300'} text-[11px] transition-colors`}
                        ></i>
                    </div>

                    {/* Numero di telefono */}
                    <div className={getWidgetContainerClasses('phoneNumber')}>
                        <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-lg bg-zinc-950 flex items-center justify-center transition-colors ${!widgetsStatus.phoneNumber ? 'text-emerald-400' : 'text-red-400'}`}>
                                <i className="fa-solid fa-phone"></i>
                            </div>
                            <p className="text-xs font-medium text-zinc-200">Numero di telefono</p>
                        </div>
                        <i
                            onClick={() => handleAddWidget('phoneNumber')}
                            className={`fa-solid ${!widgetsStatus.phoneNumber ? 'fa-plus text-emerald-400 group-hover:text-emerald-300' : 'fa-minus text-red-400 group-hover:text-red-300'} text-[11px] transition-colors`}
                        ></i>
                    </div>

                    {/* Social Network */}
                    <div className={getWidgetContainerClasses('socialNetwork')}>
                        <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-lg bg-zinc-950 flex items-center justify-center transition-colors ${!widgetsStatus.socialNetwork ? 'text-emerald-400' : 'text-red-400'}`}>
                                <i className="fa-solid fa-share-nodes"></i>
                            </div>
                            <p className="text-xs font-medium text-zinc-200">Social Network</p>
                        </div>
                        <i
                            onClick={() => handleAddWidget('socialNetwork')}
                            className={`fa-solid ${!widgetsStatus.socialNetwork ? 'fa-plus text-emerald-400 group-hover:text-emerald-300' : 'fa-minus text-red-400 group-hover:text-red-300'} text-[11px] transition-colors`}
                        ></i>
                    </div>

                    {/* Tech Stack preferita */}
                    <div className={getWidgetContainerClasses('techStack')}>
                        <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-lg bg-zinc-950 flex items-center justify-center transition-colors ${!widgetsStatus.techStack ? 'text-emerald-400' : 'text-red-400'}`}>
                                <i className="fa-solid fa-layer-group"></i>
                            </div>
                            <p className="text-xs font-medium text-zinc-200">Tech Stack preferita</p>
                        </div>
                        <i
                            onClick={() => handleAddWidget('techStack')}
                            className={`fa-solid ${!widgetsStatus.techStack ? 'fa-plus text-emerald-400 group-hover:text-emerald-300' : 'fa-minus text-red-400 group-hover:text-red-300'} text-[11px] transition-colors`}
                        ></i>
                    </div>

                    {/* Progetto Vetrina */}
                    <div className={getWidgetContainerClasses('project')}>
                        <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-lg bg-zinc-950 flex items-center justify-center transition-colors ${!widgetsStatus.project ? 'text-emerald-400' : 'text-red-400'}`}>
                                <i className="fa-solid fa-code-branch"></i>
                            </div>
                            <p className="text-xs font-medium text-zinc-200">Progetto Vetrina</p>
                        </div>
                        <i
                            onClick={() => handleAddWidget('project')}
                            className={`fa-solid ${!widgetsStatus.project ? 'fa-plus text-emerald-400 group-hover:text-emerald-300' : 'fa-minus text-red-400 group-hover:text-red-300'} text-[11px] transition-colors`}
                        ></i>
                    </div>

                    {/* Motto di vita */}
                    <div className={getWidgetContainerClasses('motto')}>
                        <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-lg bg-zinc-950 flex items-center justify-center transition-colors ${!widgetsStatus.motto ? 'text-emerald-400' : 'text-red-400'}`}>
                                <i className="fa-solid fa-quote-left"></i>
                            </div>
                            <p className="text-xs font-medium text-zinc-200">Motto di vita</p>
                        </div>
                        <i
                            onClick={() => handleAddWidget('motto')}
                            className={`fa-solid ${!widgetsStatus.motto ? 'fa-plus text-emerald-400 group-hover:text-emerald-300' : 'fa-minus text-red-400 group-hover:text-red-300'} text-[11px] transition-colors`}
                        ></i>
                    </div>

                    {/* Soft Skill */}
                    <div className={getWidgetContainerClasses('softSkill')}>
                        <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-lg bg-zinc-950 flex items-center justify-center transition-colors ${!widgetsStatus.softSkill ? 'text-emerald-400' : 'text-red-400'}`}>
                                <i className="fa-solid fa-brain"></i>
                            </div>
                            <p className="text-xs font-medium text-zinc-200">Soft Skill</p>
                        </div>
                        <i
                            onClick={() => handleAddWidget('softSkill')}
                            className={`fa-solid ${!widgetsStatus.softSkill ? 'fa-plus text-emerald-400 group-hover:text-emerald-300' : 'fa-minus text-red-400 group-hover:text-red-300'} text-[11px] transition-colors`}
                        ></i>
                    </div>

                    {/* Hard Skill */}
                    <div className={getWidgetContainerClasses('hardSkill')}>
                        <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-lg bg-zinc-950 flex items-center justify-center transition-colors ${!widgetsStatus.hardSkill ? 'text-emerald-400' : 'text-red-400'}`}>
                                <i className="fa-solid fa-terminal"></i>
                            </div>
                            <p className="text-xs font-medium text-zinc-200">Hard Skill</p>
                        </div>
                        <i
                            onClick={() => handleAddWidget('hardSkill')}
                            className={`fa-solid ${!widgetsStatus.hardSkill ? 'fa-plus text-emerald-400 group-hover:text-emerald-300' : 'fa-minus text-red-400 group-hover:text-red-300'} text-[11px] transition-colors`}
                        ></i>
                    </div>

                    {/* Patente di guida */}
                    <div className={getWidgetContainerClasses('driverLicense')}>
                        <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-lg bg-zinc-950 flex items-center justify-center transition-colors ${!widgetsStatus.driverLicense ? 'text-emerald-400' : 'text-red-400'}`}>
                                <i className="fa-solid fa-id-card"></i>
                            </div>
                            <p className="text-xs font-medium text-zinc-200">Patente di guida</p>
                        </div>
                        <i
                            onClick={() => handleAddWidget('driverLicense')}
                            className={`fa-solid ${!widgetsStatus.driverLicense ? 'fa-plus text-emerald-400 group-hover:text-emerald-300' : 'fa-minus text-red-400 group-hover:text-red-300'} text-[11px] transition-colors`}
                        ></i>
                    </div>

                    {/* Lingue conosciute */}
                    <div className={getWidgetContainerClasses('languages')}>
                        <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-lg bg-zinc-950 flex items-center justify-center transition-colors ${!widgetsStatus.languages ? 'text-emerald-400' : 'text-red-400'}`}>
                                <i className="fa-solid fa-language"></i>
                            </div>
                            <p className="text-xs font-medium text-zinc-200">Lingue conosciute</p>
                        </div>
                        <i
                            onClick={() => handleAddWidget('languages')}
                            className={`fa-solid ${!widgetsStatus.languages ? 'fa-plus text-emerald-400 group-hover:text-emerald-300' : 'fa-minus text-red-400 group-hover:text-red-300'} text-[11px] transition-colors`}
                        ></i>
                    </div>

                </aside>

                {/* Area bento(9 colonne) */}
                <main className="col-span-9 grid grid-cols-4 gap-6 bg-zinc-950/20 p-4 rounded-3xl border border-dashed border-zinc-900 min-h-[75vh]">

                    {/* Blocco Profilo (2 colonne) */}
                    <ProfileCard profile={profile} widgetsToAdd={widgetsToAdd} />

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