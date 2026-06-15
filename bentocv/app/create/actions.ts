'use server';

import { create } from 'domain';
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
    projects: [],
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
    console.error("Errore:", error.message);
    // Ritorniamo l'errore al client invece di fare un return vuoto
    return;
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

  // conversione stringhe separate da virgola in array puliti
  const parseToArray = (key: string) => {
    const value = formData.get(key) as string;
    return value ? value.split(',').map(s => s.trim()).filter(Boolean) : null;
  };

  // conversione stringhe JSON in oggetti, o ritornare null/vuoto se non valide
  const parseJson = (key: string) => {
    const value = formData.get(key) as string;
    if (!value) return null;
    try {
      return JSON.parse(value);
    } catch (e) {
      console.error(`Errore nel parsing JSON per il campo ${key}:`, e);
      return null;
    }
  };

  //dati dal form
  const updatedData: any = {
    username: formData.get('username') as string,
    name: formData.get('name') as string,
    surname: formData.get('surname') as string,
    title: formData.get('title') as string,
    bio: formData.get('bio') as string,
    location: formData.get('location') as string,
    cv_url: formData.get('cv_url') as string,
    other_data: formData.get('other_data') as string,
    last_update_at: new Date().toISOString(),
  };

  //se ho dati dal form  presi dai widgets -> li gestisco per aggiungerli nel db
  if (formData.has('age')) {
    const ageVal = formData.get('age') as string;
    updatedData.age = ageVal ? parseInt(ageVal, 10) : null;
  }

  if (formData.has('birth_date')) {
    updatedData.birth_date = (formData.get('birth_date') as string) || null;
  }

  if (formData.has('email')) updatedData.email = formData.get('email') as string;
  if (formData.has('phone_number')) updatedData.phone_number = formData.get('phone_number') as string;
  if (formData.has('life_motto')) updatedData.life_motto = formData.get('life_motto') as string;
  if (formData.has('driving_license')) updatedData.driving_license = formData.get('driving_license') as string;

  if (formData.has('tech_stack')) updatedData.tech_stack = parseToArray('tech_stack');
  if (formData.has('soft_skills')) updatedData.soft_skills = parseToArray('soft_skills');
  if (formData.has('hard_skills')) updatedData.hard_skills = parseToArray('hard_skills');

  if (formData.has('social_links')) updatedData.social_links = parseJson('social_links');
  if (formData.has('projects')) updatedData.projects = parseJson('projects');
  if (formData.has('languages')) updatedData.languages = parseJson('languages');

  //aggiornamento db
  const { error } = await supabase
    .from('profiles')
    .update(updatedData)
    .eq('id', user.id);

  if (error) {
    console.error("Errore durante l'aggiornamento del profilo:", error.message);
    return ;
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