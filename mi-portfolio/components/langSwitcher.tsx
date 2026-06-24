'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function LanguageSwitcher() {
    const pathname = usePathname(); // Ejemplo: "/es/about"

    const redirectedPathname = (locale: string) => {
        if (!pathname) return `/${locale}`;
        const segments = pathname.split("/");
        // Reemplazamos el primer segmento (el idioma) por el nuevo
        segments[1] = locale;
        return segments.join("/");
    };

    const locales = [
        { code: 'es', label: 'ES' },
        { code: 'en', label: 'EN' },
        { code: 'ca', label: 'CA' },
    ];

    return (
        <div className="flex gap-2 text-xs font-bold mr-4">
            {locales.map((loc) => (
                <Link
                    key={loc.code}
                    href={redirectedPathname(loc.code)}
                    className={`px-2 py-1 rounded transition-colors ${
                        pathname.startsWith(`/${loc.code}`)
                        ? 'bg-foreground text-background'
                        : 'bg-border text-text-muted hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                >
                    {loc.label}
                </Link>
            ))}
        </div>
    );
}