import { getDictionary } from "@/lib/dictonary";

export default async function TecnologiesPage({
  params,
}: {
  params: Promise<{ lang: "es" | "en" | "ca" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{dict.header.tecnologies}</h1>
      <p>{lang === 'es' ? 'Próximamente las tecnologías que uso...' : 
         lang === 'en' ? 'Technologies I use coming soon...' : 
         'Properament les tecnologies que faig servir...'}</p>
    </div>
  );
}
