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

