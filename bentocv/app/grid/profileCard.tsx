'use client';

import { useState } from 'react';
import { updateProfile } from '../../app/create/actions';

interface ProfileCardProps {
  profile: any;
}

export default function ProfileCard({ profile }: ProfileCardProps) {
  const [isEditing, setIsEditing] = useState(false);

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