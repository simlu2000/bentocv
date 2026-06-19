'use server';

import { createClient } from '../../src/utils/supabase/server';
import { redirect } from 'next/navigation';

export async function saveProfile(formData: FormData) {
  const supabase = await createClient();

  // 1. Controlla se l'utente è loggato
  const { data: { user }, error: authError } = await supabase.auth.getUser();
  if (authError || !user) {
    throw new Error("Utente non autenticato");
  }

  // 2. Estrai i dati dai campi del form usando i loro attributi "name"
  const profileData = {
    id: user.id, // L'ID deve essere quello dell'utente auth di Supabase
    username: formData.get('username') as string,
    name: formData.get('name') as string,
    surname: formData.get('surname') as string,
    avatar_url: formData.get('avatar_url') as string,
    title: formData.get('title') as string,
    bio: formData.get('bio') as string,
    location: formData.get('location') as string,
    cv_url: formData.get('resume_url') as string,
    other_data: formData.get('other_data') as string,
    last_update_at: new Date().toISOString(),
    age: null,
    birth_date: null,
    email: formData.get('email') as string || null,
    phone_number: null,
    social_links: [],
    tech_stack: [],
    project: [],
    life_motto: null,
    soft_skills: [],
    hard_skills: [],
    driving_license: [],
    languages: []
  };

  // 3. Salva su Supabase
  const { error } = await supabase
    .from('profiles') //tabella dove aggiungo i dati
    .upsert(profileData); // upsert = update se profilo esiste, sennò insert, dati che inserisco nella tabella del db

  if (error) {
    console.error("Errore durante il salvataggio:", error.message);
    throw new Error(`Salvataggio fallito: ${error.message}`);
  }

  // 4. Se il salvataggio va a buon fine, sposta l'utente allo step successivo (es. comporre la griglia)
  redirect('/grid');
}

export async function updateProfile(formData: FormData) {
  const supabase = await createClient();

  const { data: { user }, error: authError } = await supabase.auth.getUser();
  if (authError || !user) {
    throw new Error("Utente non autenticato");
  }

  // Conversione stringhe separate da virgola in array puliti
  const parseToArray = (key: string) => {
    const value = formData.get(key) as string;
    return value ? value.split(',').map(s => s.trim()).filter(Boolean) : null;
  };

  // Dati base fissi dal form
  const updatedData: any = {
    username: formData.get('username') as string,
    name: formData.get('name') as string,
    surname: formData.get('surname') as string,
    title: formData.get('title') as string,
    bio: formData.get('bio') as string,
    location: formData.get('location') as string,
    cv_url: formData.get('cv_url') as string,
    last_update_at: new Date().toISOString(),
  };

  // --- GESTIONE WIDGET ANAGRAFICI & CONTATTI ---
  if (formData.has('age')) {
    const ageVal = formData.get('age') as string;
    updatedData.age = ageVal ? parseInt(ageVal, 10) : null;
  }

  if (formData.has('dateOfBirth')) {
    updatedData.dateOfBirth = (formData.get('dateOfBirth') as string) || null;
  }

  if (formData.has('email')) updatedData.email = formData.get('email') as string;
  if (formData.has('phoneNumber')) updatedData.phoneNumber = formData.get('phoneNumber') as string;
  if (formData.has('motto')) updatedData.motto = formData.get('motto') as string;
  if (formData.has('driverLicense')) updatedData.driverLicense = formData.get('driverLicense') as string;
  if (formData.has('languages')) updatedData.languages = formData.get('languages') as string;

  // --- GESTIONE COVERSIONE ARRAY (TECH STACK) ---
  if (formData.has('techStack')) {
    updatedData.techStack = parseToArray('techStack');
  }

  // --- GESTIONE COVERSIONE JSONB DALLA STRUTTURA SOCIAL ---
  if (formData.has('social_github') || formData.has('social_linkedin')) {
    updatedData.social_links = {
      github: formData.get('social_github') as string || null,
      linkedin: formData.get('social_linkedin') as string || null,
      x: formData.get('social_x') as string || null,
      tiktok: formData.get('social_tiktok') as string || null,
      portfolio: formData.get('social_portfolio') as string || null,
      instagram: formData.get('social_instagram') as string || null,
    };
  }

  // --- GESTIONE COVERSIONE JSONB DEL PROGETTO VETRINA ---
  if (formData.has('projectName')) {
    updatedData.project = {
      name: formData.get('projectName') as string || null,
      description: formData.get('projectDescription') as string || null,
      technologies: formData.get('projectTechnologies') as string || null,
      link: formData.get('projectLink') as string || null,
    };
  }

  // Aggiornamento database
  const { error } = await supabase
    .from('profiles')
    .update(updatedData)
    .eq('id', user.id);

  if (error) {
    console.error("Errore durante l'aggiornamento del profilo:", error.message);
    throw new Error(error.message);
  }

  return { success: true };
}

export async function getProfile() {
  const supabase = await createClient();

  // 1. Recupera l'utente attualmente loggato nella sessione del browser
  const { data: { user }, error: authError } = await supabase.auth.getUser();

  if (authError || !user) {
    return null;
  }

  const { data: profile, error: dbError } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single(); // Restituisce un solo oggetto invece di un array

  if (dbError || !profile) {
    console.error("Profilo non trovato nel database:", dbError?.message);
    return null;
  }

  return profile;
}