import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

let locales = ['en', 'es', 'ca']

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname

    // 1. Miramos si la URL ya tiene el idioma
    const pathnameIsMissingLocale = locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    )

    // 2. Si no lo tiene, redirigimos al idioma por defecto (es)
    if (pathnameIsMissingLocale) {
        return NextResponse.redirect(
            new URL(`/es${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url)
        )
    }
}

export const config = {
    // Evitamos que el middleware actúe sobre imágenes o archivos internos
    matcher: ['/((?!api|_next/static|_next/image|Curiculums|favicon.ico).*)'],
}