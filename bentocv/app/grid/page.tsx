// page.tsx (o il nome del tuo file Server Component)
import { getProfile } from "../create/actions";
import { redirect } from "next/navigation";
import ClientGridEditor from "./clientGridEditor";

export default async function GridEditor() {
  const profile = await getProfile();

  if (!profile) {
    redirect('/create');
  }

  // Passiamo il profilo recuperato come prop al componente Client
  return <ClientGridEditor initialProfile={profile} />;
}