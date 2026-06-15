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

export async function getProfile() {
  const supabase = await createClient();

  const { data: { user }, error: authError } = await supabase.auth.getUser();
  if (authError || !user) {
    console.error("Utente non autenticato o sessione scaduta", authError?.message);
    return null;
  }

  const { data: profile, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id) //eq = equals
    .single(); // una sola riga, no array

  if (error) {
    console.error("Errore durante recupero dati utente", error.message);
    return;
  }

  return profile;

}
