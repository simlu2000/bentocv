'use client';

import { useState } from 'react';
import { updateProfile } from '../../app/create/actions';

interface ProfileCardProps {
  profile: any;
  widgetsToAdd: string[];
}

export default function ProfileCard({ profile, widgetsToAdd }: ProfileCardProps) {
  const [isEditing, setIsEditing] = useState(false);

  const compareWidgetNames = (names: string[], name2: string) => {
    if (names.includes(name2)) return true;
    return false;
  }

  return (
    <div className="col-span-2 row-span-3 bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-6 backdrop-blur-sm flex flex-col justify-between relative overflow-hidden group hover:border-zinc-700/50 transition-all duration-300">

      {/* Header del Blocco con pulsante Modifica */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 flex items-center gap-2">
          <i className="fa-solid fa-address-card text-emerald-400"></i> Informazioni Personali
        </h3>
        <button
          type="button"
          onClick={() => setIsEditing(!isEditing)}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-medium border transition-all ${isEditing
            ? 'bg-amber-500/10 border-amber-500/30 text-amber-400 hover:bg-amber-500/20'
            : 'bg-zinc-800/50 border-zinc-700/50 text-zinc-300 hover:bg-zinc-800 hover:border-zinc-600'
            }`}
        >
          <i className={`fa-solid ${isEditing ? 'fa-lock-open' : 'fa-pen-to-square'}`}></i>
          {isEditing ? 'Blocca campi' : 'Modifica'}
        </button>
      </div>

      {/* Form HTML */}
      <form action={updateProfile} className="space-y-5">

        {/* AVATAR */}
        <div className="space-y-2">
          <div className="flex items-center gap-4 bg-zinc-950/40 p-3 rounded-2xl border border-zinc-800/40">
            <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center text-zinc-500 shadow-inner">
              <i className="fa-solid fa-camera text-base"></i>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="avatar_url" className={`px-3 py-1.5 bg-zinc-800 border border-zinc-700 text-xs font-medium text-zinc-300 rounded-xl flex items-center justify-center transition-all ${isEditing ? 'cursor-pointer hover:bg-zinc-700 hover:border-zinc-600' : 'opacity-40 cursor-not-allowed'}`}>
                Seleziona foto
                <input
                  type="file"
                  id="avatar_url"
                  name="avatar_url"
                  accept="image/*"
                  disabled={!isEditing}
                  className="hidden"
                />
              </label>
            </div>
            <span className="text-[10px] text-zinc-600 ml-auto">PNG, JPG max 5MB</span>
          </div>
        </div>

        {/* USERNAME */}
        <div className="space-y-1.5">
          <label htmlFor="username" className="text-[11px] font-medium uppercase tracking-wider text-zinc-500">Username</label>
          <div className="relative flex items-center">
            <span className="absolute left-3 text-sm text-zinc-600 select-none">bentocv.com/p/</span>
            <input
              type="text"
              id="username"
              name="username"
              defaultValue={profile.username}
              readOnly={!isEditing}
              className={`w-full h-10 bg-zinc-950/60 border border-zinc-800/80 rounded-xl pl-[112px] pr-4 text-sm text-white outline-none transition-all focus:border-zinc-700 focus:ring-1 focus:ring-zinc-700 ${!isEditing && 'opacity-60 cursor-not-allowed bg-zinc-950/20'}`}
            />
          </div>
        </div>

        {/* TITOLO / RUOLO */}
        <div className="space-y-1.5">
          <label htmlFor="title" className="text-[11px] font-medium uppercase tracking-wider text-zinc-500">Qualifica / Ruolo</label>
          <input
            type="text"
            id="title"
            name="title"
            defaultValue={profile.title}
            readOnly={!isEditing}
            placeholder="Es. Full Stack Developer"
            className={`w-full h-10 bg-zinc-950/60 border border-zinc-800/80 rounded-xl px-4 text-sm text-white outline-none transition-all focus:border-zinc-700 focus:ring-1 focus:ring-zinc-700 ${!isEditing && 'opacity-60 cursor-not-allowed bg-zinc-950/20'}`}
          />
        </div>

        {/* NOME & COGNOME */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label htmlFor="name" className="text-[11px] font-medium uppercase tracking-wider text-zinc-500">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={profile.name}
              readOnly={!isEditing}
              required
              className={`w-full h-10 bg-zinc-950/60 border border-zinc-800/80 rounded-xl px-4 text-sm text-white outline-none transition-all focus:border-zinc-700 focus:ring-1 focus:ring-zinc-700 ${!isEditing && 'opacity-60 cursor-not-allowed bg-zinc-950/20'}`}
            />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="surname" className="text-[11px] font-medium uppercase tracking-wider text-zinc-500">Cognome</label>
            <input
              type="text"
              id="surname"
              name="surname"
              defaultValue={profile.surname}
              readOnly={!isEditing}
              required
              className={`w-full h-10 bg-zinc-950/60 border border-zinc-800/80 rounded-xl px-4 text-sm text-white outline-none transition-all focus:border-zinc-700 focus:ring-1 focus:ring-zinc-700 ${!isEditing && 'opacity-60 cursor-not-allowed bg-zinc-950/20'}`}
            />
          </div>

          {/*WIDGET ETA*/}
          {compareWidgetNames(widgetsToAdd, 'age') && (
            <div className="space-y-1.5">
              <label htmlFor="age" className="text-[11px] font-medium uppercase tracking-wider text-zinc-500">Età</label>
              <input
                type="number"
                id="age"
                name="name"
                defaultValue={profile.age}
                readOnly={!isEditing}
                required
                className={`w-full h-10 bg-zinc-950/60 border border-zinc-800/80 rounded-xl px-4 text-sm text-white outline-none transition-all focus:border-zinc-700 focus:ring-1 focus:ring-zinc-700 ${!isEditing && 'opacity-60 cursor-not-allowed bg-zinc-950/20'}`}
              />
            </div>
          )}

          {/*WIDGET DATA NASCITA*/}
          {compareWidgetNames(widgetsToAdd, 'dateOfBirth') && (
            <div className="space-y-1.5">
              <label htmlFor="dateOfBirth" className="text-[11px] font-medium uppercase tracking-wider text-zinc-500">Data di nascita</label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                defaultValue={profile.dateOfBirth}
                readOnly={!isEditing}
                required
                className={`w-full h-10 bg-zinc-950/60 border border-zinc-800/80 rounded-xl px-4 text-sm text-white outline-none transition-all focus:border-zinc-700 focus:ring-1 focus:ring-zinc-700 ${!isEditing && 'opacity-60 cursor-not-allowed bg-zinc-950/20'}`}
              />
            </div>
          )}




          {/*WIDGET TELEFONO*/}
          {compareWidgetNames(widgetsToAdd, 'phoneNumber') && (
            <div className="space-y-1.5">
              <label htmlFor="phoneNumber" className="text-[11px] font-medium uppercase tracking-wider text-zinc-500">Numero di telefono</label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                defaultValue={profile.phoneNumber}
                readOnly={!isEditing}
                required
                className={`w-full h-10 bg-zinc-950/60 border border-zinc-800/80 rounded-xl px-4 text-sm text-white outline-none transition-all focus:border-zinc-700 focus:ring-1 focus:ring-zinc-700 ${!isEditing && 'opacity-60 cursor-not-allowed bg-zinc-950/20'}`}
              />
            </div>
          )}

        </div>

        {/* BIOGRAFIA */}
        <div className="space-y-1.5">
          <label htmlFor="bio" className="text-[11px] font-medium uppercase tracking-wider text-zinc-500">Biografia Breve</label>
          <textarea
            id="bio"
            name="bio"
            defaultValue={profile.bio}
            readOnly={!isEditing}
            rows={2}
            maxLength={250}
            className={`w-full bg-zinc-950/60 border border-zinc-800/80 rounded-xl p-3 text-sm text-white outline-none transition-all focus:border-zinc-700 focus:ring-1 focus:ring-zinc-700 resize-none ${!isEditing && 'opacity-60 cursor-not-allowed bg-zinc-950/20'}`}
          />
        </div>

        {/*MOTTO DI VITA*/}
        {compareWidgetNames(widgetsToAdd, 'motto') && (
          <div className="space-y-1.5">
            <label htmlFor="name" className="text-[11px] font-medium uppercase tracking-wider text-zinc-500">Motto di vita</label>
            <input
              type="string"
              id="motto"
              name="motto"
              defaultValue={profile.motto}
              readOnly={!isEditing}
              required
              className={`w-full h-10 bg-zinc-950/60 border border-zinc-800/80 rounded-xl px-4 text-sm text-white outline-none transition-all focus:border-zinc-700 focus:ring-1 focus:ring-zinc-700 ${!isEditing && 'opacity-60 cursor-not-allowed bg-zinc-950/20'}`}
            />
          </div>
        )}


        {/* LOCALITÀ & CV */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label htmlFor="location" className="text-[11px] font-medium uppercase tracking-wider text-zinc-500">Località</label>
            <input
              type="text"
              id="location"
              name="location"
              defaultValue={profile.location}
              readOnly={!isEditing}
              className={`w-full h-10 bg-zinc-950/60 border border-zinc-800/80 rounded-xl px-4 text-sm text-white outline-none transition-all focus:border-zinc-700 focus:ring-1 focus:ring-zinc-700 ${!isEditing && 'opacity-60 cursor-not-allowed bg-zinc-950/20'}`}
            />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="cv_url" className="text-[11px] font-medium uppercase tracking-wider text-zinc-500">Link CV PDF</label>
            <input
              type="url"
              id="cv_url"
              name="cv_url"
              defaultValue={profile.cv_url}
              readOnly={!isEditing}
              className={`w-full h-10 bg-zinc-950/60 border border-zinc-800/80 rounded-xl px-4 text-sm text-white outline-none transition-all focus:border-zinc-700 focus:ring-1 focus:ring-zinc-700 ${!isEditing && 'opacity-60 cursor-not-allowed bg-zinc-950/20'}`}
            />
          </div>
        </div>

        {/*WIDGET EMAIL*/}
        {compareWidgetNames(widgetsToAdd, 'email') && (
          <div className="space-y-1.5">
            <label htmlFor="name" className="text-[11px] font-medium uppercase tracking-wider text-zinc-500">E-mail di contatto</label>
            <input
              type="email"
              id="email"
              name="email"
              defaultValue={profile.email}
              readOnly={!isEditing}
              required
              className={`w-full h-10 bg-zinc-950/60 border border-zinc-800/80 rounded-xl px-4 text-sm text-white outline-none transition-all focus:border-zinc-700 focus:ring-1 focus:ring-zinc-700 ${!isEditing && 'opacity-60 cursor-not-allowed bg-zinc-950/20'}`}
            />
          </div>
        )}

        {/* WIDGET SOCIAL NETWORK */}
        {compareWidgetNames(widgetsToAdd, 'socialNetwork') && (

          <div className="space-y-4 border-t border-zinc-900 pt-4 mt-2">
            <div>
              <label className="text-[11px] font-medium uppercase tracking-wider text-zinc-500">
                Social Network
              </label>
              <p className="text-[10px] text-zinc-600 mt-0.5">Inserisci i link ai tuoi profili pubblici</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* GitHub */}
              <div className="space-y-1.5">

                <div className="flex items-center gap-2">
                  <i className="fa-brands fa-github text-sm text-zinc-400"></i>
                  <span className="text-[11px] font-medium text-zinc-400">GitHub</span>
                </div>

                <input
                  type="url"
                  id="social_github"
                  name="social_github"
                  placeholder="https://github.com/username"
                  defaultValue={profile.social_github}
                  readOnly={!isEditing}
                  className={`w-full h-10 bg-zinc-950/60 border border-zinc-800/80 rounded-xl px-4 text-sm text-white outline-none transition-all focus:border-zinc-700 focus:ring-1 focus:ring-zinc-700 ${!isEditing && 'opacity-60 cursor-not-allowed bg-zinc-950/20'
                    }`}
                />

              </div>

              {/* LinkedIn */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <i className="fa-brands fa-linkedin text-sm text-zinc-400"></i>
                  <span className="text-[11px] font-medium text-zinc-400">LinkedIn</span>
                </div>
                <input
                  type="url"
                  id="social_linkedin"
                  name="social_linkedin"
                  placeholder="https://linkedin.com/in/username"
                  defaultValue={profile.social_linkedin}
                  readOnly={!isEditing}
                  className={`w-full h-10 bg-zinc-950/60 border border-zinc-800/80 rounded-xl px-4 text-sm text-white outline-none transition-all focus:border-zinc-700 focus:ring-1 focus:ring-zinc-700 ${!isEditing && 'opacity-60 cursor-not-allowed bg-zinc-950/20'
                    }`}
                />
              </div>

              {/* X (ex Twitter) */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <i className="fa-brands fa-x-twitter text-sm text-zinc-400"></i>
                  <span className="text-[11px] font-medium text-zinc-400">X / Twitter</span>
                </div>
                <input
                  type="url"
                  id="social_x"
                  name="social_x"
                  placeholder="https://x.com/username"
                  defaultValue={profile.social_x}
                  readOnly={!isEditing}
                  className={`w-full h-10 bg-zinc-950/60 border border-zinc-800/80 rounded-xl px-4 text-sm text-white outline-none transition-all focus:border-zinc-700 focus:ring-1 focus:ring-zinc-700 ${!isEditing && 'opacity-60 cursor-not-allowed bg-zinc-950/20'
                    }`}
                />
              </div>

              {/* TikTok */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <i className="fa-brands fa-tiktok text-sm text-zinc-400"></i>
                  <span className="text-[11px] font-medium text-zinc-400">TikTok</span>
                </div>
                <input
                  type="url"
                  id="social_tiktok"
                  name="social_tiktok"
                  placeholder="https://www.tiktok.com/@username"
                  defaultValue={profile.social_tiktok}
                  readOnly={!isEditing}
                  className={`w-full h-10 bg-zinc-950/60 border border-zinc-800/80 rounded-xl px-4 text-sm text-white outline-none transition-all focus:border-zinc-700 focus:ring-1 focus:ring-zinc-700 ${!isEditing && 'opacity-60 cursor-not-allowed bg-zinc-950/20'
                    }`}
                />
              </div>

              {/* Portfolio Personale */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-globe text-sm text-zinc-400"></i>
                  <span className="text-[11px] font-medium text-zinc-400">Portfolio Personale</span>
                </div>
                <input
                  type="url"
                  id="social_portfolio"
                  name="social_portfolio"
                  placeholder="https://myportfolio.com"
                  defaultValue={profile.social_portfolio}
                  readOnly={!isEditing}
                  className={`w-full h-10 bg-zinc-950/60 border border-zinc-800/80 rounded-xl px-4 text-sm text-white outline-none transition-all focus:border-zinc-700 focus:ring-1 focus:ring-zinc-700 ${!isEditing && 'opacity-60 cursor-not-allowed bg-zinc-950/20'
                    }`}
                />
              </div>

              {/* Instagram */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <i className="fa-brands fa-instagram text-sm text-zinc-400"></i>
                  <span className="text-[11px] font-medium text-zinc-400">Instagram</span>
                </div>
                <input
                  type="url"
                  id="social_instagram"
                  name="social_instagram"
                  placeholder="https://instagram.com/username"
                  defaultValue={profile.social_instagram}
                  readOnly={!isEditing}
                  className={`w-full h-10 bg-zinc-950/60 border border-zinc-800/80 rounded-xl px-4 text-sm text-white outline-none transition-all focus:border-zinc-700 focus:ring-1 focus:ring-zinc-700 ${!isEditing && 'opacity-60 cursor-not-allowed bg-zinc-950/20'
                    }`}
                />
              </div>
            </div>
          </div>
        )}

        {/* WIDGET TECH STACK */}
        {compareWidgetNames(widgetsToAdd, 'techStack') && (
          <div className="space-y-1.5">
            <label htmlFor="techStack" className="text-[11px] font-medium uppercase tracking-wider text-zinc-500">
              Tech Stack preferita
            </label>
            <input
              type="text"
              id="techStack"
              name="techStack"
              placeholder="Es: React, Next.js, TypeScript, Node.js"
              defaultValue={profile.tech_stack}
              readOnly={!isEditing}
              required
              className={`w-full h-10 bg-zinc-950/60 border border-zinc-800/80 rounded-xl px-4 text-sm text-white outline-none transition-all focus:border-zinc-700 focus:ring-1 focus:ring-zinc-700 ${!isEditing && 'opacity-60 cursor-not-allowed bg-zinc-950/20'
                }`}
            />
          </div>
        )}

         {/* SOFT SKILL */}
        {compareWidgetNames(widgetsToAdd, 'softSkill') && (
          <div className="space-y-1.5">
            <label htmlFor="softSkill" className="text-[11px] font-medium uppercase tracking-wider text-zinc-500">
              Le tue soft skills
            </label>
            <textarea
              id="softSkill"
              name="softSkill"
              placeholder="Es: team working, proattività, ..."
              defaultValue={profile.soft_skill}
              readOnly={!isEditing}
              required
              className={`w-full h-10 bg-zinc-950/60 border border-zinc-800/80 rounded-xl px-4 text-sm text-white outline-none transition-all focus:border-zinc-700 focus:ring-1 focus:ring-zinc-700 ${!isEditing && 'opacity-60 cursor-not-allowed bg-zinc-950/20'
                }`}
            />
          </div>
        )}

         {/* HARD SKILL */}
        {compareWidgetNames(widgetsToAdd, 'hardSkill') && (
          <div className="space-y-1.5">
            <label htmlFor="hardSkill" className="text-[11px] font-medium uppercase tracking-wider text-zinc-500">
              Le tue hard skills
            </label>
            <textarea
              id="hardSkill"
              name="hardSkill"
              placeholder="Es: JavaScript, C#, AWS..."
              defaultValue={profile.hard_skill}
              readOnly={!isEditing}
              required
              className={`w-full h-10 bg-zinc-950/60 border border-zinc-800/80 rounded-xl px-4 text-sm text-white outline-none transition-all focus:border-zinc-700 focus:ring-1 focus:ring-zinc-700 ${!isEditing && 'opacity-60 cursor-not-allowed bg-zinc-950/20'
                }`}
            />
          </div>
        )}

        {/* WIDGET PROGETTO VETRINA*/}
        {compareWidgetNames(widgetsToAdd, 'project') && (
          <div className="space-y-4 border-t border-zinc-900 pt-4">
            <div>
              <label className="text-[11px] font-medium uppercase tracking-wider text-zinc-500">
                Progetto Vetrina
              </label>
              <p className="text-[10px] text-zinc-600 mt-0.5">Mostra il tuo progetto migliore nel profilo</p>
            </div>

            <div className="space-y-4 bg-zinc-950/20 p-4 rounded-2xl border border-zinc-800/40">

              {/* Nome Progetto */}
              <div className="space-y-1.5">
                <label htmlFor="projectName" className="text-[10px] font-medium uppercase tracking-wider text-zinc-500">
                  Nome del Progetto
                </label>
                <input
                  type="text"
                  id="projectName"
                  name="projectName"
                  placeholder="Es: Personal Portfolio"
                  defaultValue={profile.project?.name || ''}
                  readOnly={!isEditing}
                  required
                  className={`w-full h-10 bg-zinc-950/60 border border-zinc-800/80 rounded-xl px-4 text-sm text-white outline-none transition-all focus:border-zinc-700 focus:ring-1 focus:ring-zinc-700 ${!isEditing && 'opacity-60 cursor-not-allowed bg-zinc-950/20'
                    }`}
                />
              </div>

              {/* Descrizione Progetto */}
              <div className="space-y-1.5">
                <label htmlFor="projectDescription" className="text-[10px] font-medium uppercase tracking-wider text-zinc-500">
                  Descrizione
                </label>
                <textarea
                  id="projectDescription"
                  name="projectDescription"
                  rows={3}
                  placeholder="Es: Applicazione web per la gestione dei profili bento link-in-bio..."
                  defaultValue={profile.project?.description || ''}
                  readOnly={!isEditing}
                  required
                  className={`w-full bg-zinc-950/60 border border-zinc-800/80 rounded-xl p-3 text-sm text-white outline-none transition-all focus:border-zinc-700 focus:ring-1 focus:ring-zinc-700 resize-none ${!isEditing && 'opacity-60 cursor-not-allowed bg-zinc-950/20'
                    }`}
                />
              </div>

              {/* Tecnologie usate */}
              <div className="space-y-1.5">
                <label htmlFor="projectTechnologies" className="text-[10px] font-medium uppercase tracking-wider text-zinc-500">
                  Tecnologie usate
                </label>
                <input
                  type="text"
                  id="projectTechnologies"
                  name="projectTechnologies"
                  placeholder="Es: React, Next.js, Supabase, Tailwind"
                  defaultValue={profile.project?.technologies || ''}
                  readOnly={!isEditing}
                  required
                  className={`w-full h-10 bg-zinc-950/60 border border-zinc-800/80 rounded-xl px-4 text-sm text-white outline-none transition-all focus:border-zinc-700 focus:ring-1 focus:ring-zinc-700 ${!isEditing && 'opacity-60 cursor-not-allowed bg-zinc-950/20'
                    }`}
                />
              </div>

              {/* Link Progetto (Sito o GitHub) */}
              <div className="space-y-1.5">
                <label htmlFor="projectLink" className="text-[10px] font-medium uppercase tracking-wider text-zinc-500">
                  Link di Progetto (Sito Live o GitHub)
                </label>
                <input
                  type="url"
                  id="projectLink"
                  name="projectLink"
                  placeholder="https://github.com/... o https://..."
                  defaultValue={profile.project?.link || ''}
                  readOnly={!isEditing}
                  className={`w-full h-10 bg-zinc-950/60 border border-zinc-800/80 rounded-xl px-4 text-sm text-white outline-none transition-all focus:border-zinc-700 focus:ring-1 focus:ring-zinc-700 ${!isEditing && 'opacity-60 cursor-not-allowed bg-zinc-950/20'
                    }`}
                />
              </div>

            </div>
          </div>
        )}

        {/* COMPETENZE AGGIUNTIVE (PATENTE & LINGUE) */}
        <div className="grid grid-cols-2 gap-4">
          {/* WIDGET PATENTE DI GUIDA */}
          {compareWidgetNames(widgetsToAdd, 'driverLicense') && (
            <div className="space-y-1.5">
              <label htmlFor="driverLicense" className="text-[11px] font-medium uppercase tracking-wider text-zinc-500">Patente di guida</label>
              <input
                type="text"
                id="driverLicense"
                name="driverLicense"
                placeholder="Es: B, Automunito"
                defaultValue={profile.driverLicense}
                readOnly={!isEditing}
                required
                className={`w-full h-10 bg-zinc-950/60 border border-zinc-800/80 rounded-xl px-4 text-sm text-white outline-none transition-all focus:border-zinc-700 focus:ring-1 focus:ring-zinc-700 ${!isEditing && 'opacity-60 cursor-not-allowed bg-zinc-950/20'}`}
              />
            </div>
          )}

          {/* WIDGET LINGUE CONOSCIUTE */}
          {compareWidgetNames(widgetsToAdd, 'languages') && (
            <div className="space-y-1.5">
              <label htmlFor="languages" className="text-[11px] font-medium uppercase tracking-wider text-zinc-500">Lingue conosciute</label>
              <input
                type="text"
                id="languages"
                name="languages"
                placeholder="Es: Italiano (Madrelingua), Inglese (B2)"
                defaultValue={profile.languages}
                readOnly={!isEditing}
                required
                className={`w-full h-10 bg-zinc-950/60 border border-zinc-800/80 rounded-xl px-4 text-sm text-white outline-none transition-all focus:border-zinc-700 focus:ring-1 focus:ring-zinc-700 ${!isEditing && 'opacity-60 cursor-not-allowed bg-zinc-950/20'}`}
              />
            </div>
          )}
        </div>


        {/* BOTTONE DINAMICO DI INVIO */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={!isEditing}
            className={`w-full h-11 flex items-center justify-center rounded-xl text-xs font-semibold transition-all duration-300 shadow-md ${isEditing
              ? 'bg-emerald-500 hover:bg-emerald-600 text-black cursor-pointer active:scale-[0.99] shadow-emerald-500/5'
              : 'bg-zinc-800 text-zinc-500 cursor-not-allowed opacity-50 shadow-none'
              }`}
          >
            {isEditing ? 'Aggiorna Profilo' : 'Abilita la modifica per salvare'}
          </button>
        </div>
      </form>
    </div>
  );
}