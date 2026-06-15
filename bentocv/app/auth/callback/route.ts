/*
Quando l'utente finisce lo scambio di dati sicuro con GitHub, 
Supabase riceve un "codice temporaneo" che Next.js deve scambiare con una sessione reale basata su cookie.
Per fare questo in modo automatico, usare script fornito da supabase:
*/
import { NextResponse } from 'next/server'
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  // Se c'è un parametro 'next', reindirizziamo lì, altrimenti andiamo su /create
  const next = searchParams.get('next') ?? '/create'

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
              // Questo blocco può essere ignorato se la rotta è chiamata da un Server Component
            }
          },
        },
      }
    )
    
    // Scambia il codice con una sessione reale salvata nei cookie
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    if (!error) {
      return NextResponse.redirect(`${origin}${next}`)
    }
  }

  // In caso di errore, rimanda alla pagina di login
  return NextResponse.redirect(`${origin}/login`)
}