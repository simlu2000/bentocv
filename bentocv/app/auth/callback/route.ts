import { NextResponse } from 'next/server'
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')

  const nextParam = searchParams.get('next')

  if (code) {
    const cookieStore = await cookies()
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return cookieStore.getAll()
          },
          setAll(cookiesToSet) {
            try {
              cookiesToSet.forEach(({ name, value, options }) =>
                cookieStore.set(name, value, options)
              )
            } catch {

            }
          },
        },
      }
    )

    const { data: { user }, error } = await supabase.auth.exchangeCodeForSession(code)

    if (!error && user) {
      //  Verifica se utente ha gia compilato un profilo
      const { data: profile } = await supabase
        .from('profiles')
        .select('id') //vedo se ce un profilo sul db
        .eq('id', user.id) //il cui id corrisponde a quello dell'utente che si è loggato con github
        .single()

      if (profile) {
        // Se il profilo esiste già, redirect alla grid
        return NextResponse.redirect(`${origin}${nextParam ?? '/grid'}`)
      } else {
        // Se il profilo NON esiste, pagina compilazione profilo
        return NextResponse.redirect(`${origin}/create`)
      }
    }
  }

  //errore autenticazione - torna indietro
  return NextResponse.redirect(`${origin}/`)
}