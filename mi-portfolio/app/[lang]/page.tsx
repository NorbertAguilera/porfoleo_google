import { getDictionary } from "@/lib/dictonary";

type Locale = "es" | "en" | "ca";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-12">

      {/* COLUMNA IZQUIERDA: Enlaces estilo Resultados de Google */}
      <div className="flex-1 space-y-10">
        <div className="space-y-8">

          {/* Enlace CV */}
          <div className="group cursor-pointer">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-6 h-6 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-[10px] font-bold text-text-muted">PDF</div>
              <span className="text-xs text-text-muted truncate">norbert-aguilera.com &gt; cv</span>
            </div>
            <a href={`${dict.home.cv_file}`} target="_blank" className="text-xl text-blue-600 dark:text-blue-400 group-hover:underline block mb-1">
              {dict.home.cv_link}
            </a>
            <p className="text-sm text-text-muted leading-relaxed pr-4">
              {dict.home.cv_desc}
            </p>
          </div>

          {/* Enlace Blog */}
          <div className="group cursor-pointer">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-6 h-6 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-[10px] font-bold text-text-muted">WEB</div>
              <span className="text-xs text-text-muted truncate">blog.norbert.com</span>
            </div>
            <a href="https://blog.norbert.com" target="_blank" className="text-xl text-blue-600 dark:text-blue-400 group-hover:underline block mb-1">
              {dict.home.blog_link}
            </a>
            <p className="text-sm text-text-muted leading-relaxed pr-4">
              {dict.home.blog_desc}
            </p>
          </div>

          {/* Enlace Experiencia */}
          <div className="group cursor-pointer">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-6 h-6 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-[10px] font-bold text-text-muted">EXP</div>
              <span className="text-xs text-text-muted truncate">norbert-aguilera.com &gt; experience</span>
            </div>
            <a href="/experience" className="text-xl text-blue-600 dark:text-blue-400 group-hover:underline block mb-1">
              {dict.home.experience_link}
            </a>
            <p className="text-sm text-text-muted leading-relaxed pr-4">
              {dict.home.experience_desc}
            </p>
          </div>

        </div>

        {/* Redes Sociales al final */}
        <div className="pt-4 flex gap-4">
          <a href="https://linkedin.com/in/norbert" target="_blank" className="p-2 border border-border rounded-full bg-header-bg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all text-text-muted hover:text-foreground">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 6h6v2h-6v-2zm0 11h6v2h-6v-2zm0-5h6v2h-6v-2z"/></svg>
          </a>
          <a href="https://github.com/norbert" target="_blank" className="p-2 border border-border rounded-full bg-header-bg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all text-text-muted hover:text-foreground">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.412-4.033-1.412-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.911 0-1.311.469-2.909 1.271-3.909-.126-.303-.43-1.522.141-3.385 0 0 1.041-.351 2.18 1.193 0 0 1.122-.192 2.303 1.193 0 0 1.041-.351 2.18-1.193z"/></svg>
          </a>
        </div>
      </div>

      {/* COLUMNA DERECHA: Panel de Conocimiento (Knowledge Panel) */}
      <div className="flex-[1.2] space-y-8">
        <div className="border border-border rounded-3xl p-6 bg-header-bg shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            {/* Galería de Imágenes */}
            <div className="grid grid-cols-2 gap-2 w-full md:w-48 shrink-0">
              <div className="aspect-square bg-border rounded-xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-text-muted text-[10px] italic">Foto 1</div>
              </div>
              <div className="aspect-square bg-border rounded-xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-text-muted text-[10px] italic">Foto 2</div>
              </div>
              <div className="aspect-square bg-border rounded-xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-text-muted text-[10px] italic">Foto 3</div>
              </div>
              <div className="aspect-square bg-border rounded-xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-text-muted text-[10px] italic">Foto 4</div>
              </div>
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl font-bold text-foreground">{dict.home.title}</h1>
              <p className="text-lg text-text-muted">{dict.home.description}</p>
              <p className="text-foreground leading-relaxed opacity-80 text-sm">
                {dict.ia.description}
              </p>
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t border-border">
            <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider">{dict.home.education_title}</h2>
            <ul className="space-y-2">
              {dict.home.studies.map((study, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-foreground">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  <span>{study}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
}
