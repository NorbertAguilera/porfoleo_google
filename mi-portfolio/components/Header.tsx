'use client';
// components/Header.tsx
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
// Usaremos iconos básicos para simular la barra de búsqueda de Google
import { MagnifyingGlassIcon, MicrophoneIcon, CameraIcon, XMarkIcon } from '@heroicons/react/24/outline';
import LanguageSwitcher from './langSwitcher';


// Un mini-componente para el logo de "Norbert" con los colores de Google
const NorbertLogo = () => (
    <span className="font-medium font-bold text-2xl tracking-tighter cursor-pointer">
        <span className="text-[#4285F4]">N</span> {/* Azul */}
        <span className="text-[#EA4335]">o</span> {/* Rojo */}
        <span className="text-[#FBBC05]">r</span> {/* Amarillo */}
        <span className="text-[#4285F4]">b</span> {/* Azul */}
        <span className="text-[#34A853]">e</span> {/* Verde */}
        <span className="text-[#EA4335]">r</span> {/* Rojo */}
        <span className="text-[#FBBC05]">t</span> {/* Amarillo (Google usa 6 letras, nosotros 7, repetimos amarillo para 't') */}
    </span>
);

interface HeaderProps {
    dict: {
        iaMode: string;
        home: string;
        projects: string;
        tecnologies: string;
        about: string;
        contact: string;
    };
    lang: string;
}

export default function Header({ dict, lang }: HeaderProps) {

    const pathname = usePathname().split('/')[2] == undefined ? 'inicio' : usePathname().split('/')[2];
    //console.log(pathname);
    // Simulación de los nombres de pestañas que pediste
    const navItems = {
        "Inicio": "/", "Proyectos": "/projects", "Tecnologías": "/tecnologies", "Sobre mí": "/about", "Contacto": "/contact"
    };

    return (
        <header className="sticky top-0 z-50 bg-header-bg border-b border-border antialiased">
            {/* --- Fila Superior: Logo + Barra de Búsqueda --- */}
            <div className="flex items-center justify-between px-6 py-3">
                <div className="flex items-center gap-8 flex-1">
                    {/* Logo Personalizado */}
                    <Link href="/">
                        <NorbertLogo />
                    </Link>

                    {/* Barra de Búsqueda Estilo Google */}
                    <div className="relative flex-1 max-w-2xl">
                        <input
                            type="text"
                            placeholder="google" // Placeholder que pediste
                            className="w-full h-[46px] pl-6 pr-24 border border-input-border bg-input-bg rounded-full text-base focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-blue-300 transition-all shadow-sm hover:shadow-md text-foreground"
                        />
                        {/* Iconos de la barra de búsqueda */}
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-3 text-text-muted">
                            <XMarkIcon className="h-5 w-5 cursor-pointer hover:text-foreground" />
                            <div className="h-6 w-px bg-border" /> {/* Separador vertical */}
                            <MicrophoneIcon className="h-6 w-6 cursor-pointer text-[#4285F4]" />
                            <CameraIcon className="h-6 w-6 cursor-pointer text-[#4285F4]" />
                            <MagnifyingGlassIcon className="h-6 w-6 cursor-pointer text-[#4285F4] ml-1" />
                        </div>
                    </div>
                </div>

                {/* --- Sección Derecha (Perfil) --- */}
                <div className="flex items-center gap-4">
                    {/* Icono de rejilla de apps */}
                    {/*<button className="p-2 text-gray-600 rounded-full hover:bg-gray-100">
                        <svg className="w-6 h-6" viewBox="0 0 24 24"><path fill="currentColor" d="M6,8H18V10H6V8M6,14H18V16H6V14Z"></path></svg>
                    </button>*/}
                    <LanguageSwitcher />
                    {/* Avatar de perfil */}
                    <div className="relative w-8 h-8 overflow-hidden bg-border rounded-full cursor-pointer">
                        <svg className="absolute w-10 h-10 text-text-muted -left-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                    </div>
                </div>
            </div>

            {/* --- Fila Inferior: Pestañas de Navegación --- */}
            <div className="px-6">
                <nav className="flex items-center gap-4 text-[14px] text-text-muted font-normal">

                    <Link
                        key={'IA'}
                        href={`/${lang}/IA`}
                        // El índice 1 ("Todo") es el activo por defecto

                        className={`pb-3 pt-1 cursor-pointer border-b-2 transition-colors ${pathname === 'IA' ? 'text-foreground border-foreground font-medium' : 'border-transparent hover:text-foreground'
                            }`
                        }
                    >
                        {dict.iaMode}
                    </Link>
                    <Link
                        key={'Inicio'}
                        href={`/${lang}`}
                        // El índice 1 ("Todo") es el activo por defecto

                        className={`pb-3 pt-1 cursor-pointer border-b-2 transition-colors ${pathname === 'inicio' ? 'text-foreground border-foreground font-medium' : 'border-transparent hover:text-foreground'
                            }`}
                    >
                        {dict.home}
                    </Link>

                    <Link
                        key={'Proyectos'}
                        href={`/${lang}/projects`}
                        // El índice 1 ("Todo") es el activo por defecto

                        className={`pb-3 pt-1 cursor-pointer border-b-2 transition-colors ${pathname === 'projects' ? 'text-foreground border-foreground font-medium' : 'border-transparent hover:text-foreground'
                            }`
                        }
                    >
                        {dict.projects}
                    </Link>

                    {/* Opciones con menú desplegable (Más, Herramientas) */}

                    {/*<button className="flex items-center gap-1 pb-3 pt-1 border-b-2 border-transparent text-text-muted hover:text-foreground ml-4">
                        Herramientas <svg className="w-3 h-3" viewBox="0 0 24 24"><path fill="currentColor" d="M7 10l5 5 5-5z"></path></svg>
                    </button>*/}

                    <Link
                        key={'tecnologies'}
                        href={`/${lang}/tecnologies`}
                        // El índice 1 ("Todo") es el activo por defecto

                        className={`pb-3 pt-1 cursor-pointer border-b-2 transition-colors ${pathname === 'tecnologies' ? 'text-foreground border-foreground font-medium' : 'border-transparent hover:text-foreground'
                            }`
                        }
                    >
                        {dict.tecnologies}
                    </Link>
                </nav>
            </div>
        </header>
    );
}