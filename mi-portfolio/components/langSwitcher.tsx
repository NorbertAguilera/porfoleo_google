'use client';
import { usePathname, useRouter } from 'next/navigation';

export default function LanguageSwitcher() {
    const pathname = usePathname(); // Ejemplo: "/es/about"
    const router = useRouter();

    const subscribedLocales = ['es', 'en'];

    const redirectedPathname = (locale: string) => {
        if (!pathname) return "/";
        const segments = pathname.split("/");
        // Reemplazamos el primer segmento (el idioma) por el nuevo
        segments[1] = locale;
        return segments.join("/");
    };

    return (
        <div className="flex gap-2 text-xs font-bold mr-4">
            <button
                onClick={() => router.push(redirectedPathname('es'))}
                className={`px-2 py-1 rounded ${pathname.startsWith('/es') ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600'}`}
            >
                ES
            </button>
            <button
                onClick={() => router.push(redirectedPathname('en'))}
                className={`px-2 py-1 rounded ${pathname.startsWith('/en') ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600'}`}
            >
                EN
            </button>
            <button
                onClick={() => router.push(redirectedPathname('ca'))}
                className={`px-2 py-1 rounded ${pathname.startsWith('/ca') ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600'}`}
            >
                CA
            </button>
        </div>
    );
}