import { getDictionary } from "@/lib/dictonary";

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ lang: "es" | "en" | "ca" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{dict.header.projects}</h1>
      <p>{lang === 'es' ? 'Próximamente mis proyectos...' : 
         lang === 'en' ? 'My projects coming soon...' : 
         'Properament els meus projectes...'}</p>
    </div>
  );
}
