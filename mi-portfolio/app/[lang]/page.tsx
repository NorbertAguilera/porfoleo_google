import { getDictionary } from "@/lib/dictonary";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: "es" | "en" | "ca" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-4xl font-bold text-gray-800">
        {dict.header.home}
      </h1>
      <p className="mt-4 text-gray-600">
        {lang === 'es' ? 'Bienvenido a mi portfolio' : 
         lang === 'en' ? 'Welcome to my portfolio' : 
         'Benvingut al meu porfoli'}
      </p>
    </div>
  );
}

