import { getDictionary } from "@/lib/dictonary";

type Locale = "es" | "en" | "ca";

export default async function IAPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Sección de Presentación Estilo AI Overview */}
      <div className="bg-header-bg border border-border rounded-3xl p-6 mb-8 shadow-sm">
        <div className="flex items-center gap-2 mb-4 text-text-muted">
          <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-[10px] font-bold">
            AI
          </div>
          <span className="text-sm font-medium">Vista general de IA</span>
        </div>

        <h1 className="text-2xl font-semibold text-foreground mb-4">
          {dict.ia.welcome}
        </h1>

        <p className="text-lg leading-relaxed text-foreground opacity-90">
          {dict.ia.description}
        </p>
      </div>

      {/* Espacio para contenido adicional (simulando los resultados de búsqueda) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 border border-border rounded-2xl bg-header-bg shadow-sm">
            <h3 className="font-bold text-foreground mb-2">Experiencia</h3>
            <p className="text-text-muted text-sm">Detalles sobre mi trayectoria profesional y proyectos destacados.</p>
        </div>
        <div className="p-6 border border-border rounded-2xl bg-header-bg shadow-sm">
            <h3 className="font-bold text-foreground mb-2">Habilidades</h3>
            <p className="text-text-muted text-sm">Dominio de tecnologías Full stack, desde el frontend hasta el backend.</p>
        </div>
      </div>
    </div>
  );
}
