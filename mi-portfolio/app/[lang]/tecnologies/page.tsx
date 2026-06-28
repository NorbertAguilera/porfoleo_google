import { getDictionary } from "@/lib/dictonary";
import TechGrid from "@/components/TechGrid";

type Locale = "es" | "en" | "ca";

export default async function TecnologiesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  const techStack = [
    { name: "Java", color: "#ED8B00", logo: "openjdk", category: "languages" },
    { name: "Python", color: "#3670A0", logo: "python", category: "languages" },
    { name: "C", color: "#00599C", logo: "c", category: "languages" },
    { name: "C++", color: "#00599C", logo: "c%2B%2B", category: "languages" },
    { name: "C#", color: "#239120", logo: "c-sharp", category: "languages" },
    { name: "JavaScript", color: "#323330", logo: "javascript", category: "languages" },
    { name: "Haskell", color: "5e5086", logo: "haskell", category: "languages" },
    { name: "React", color: "#20232b", logo: "react", category: "frontend" },
    { name: "Next.js", color: "#000000", logo: "nextdotjs", category: "frontend" },
    { name: "HTML5", color: "#E34F26", logo: "html5", category: "frontend" },
    { name: "CSS3", color: "#1572B6", logo: "css3", category: "frontend" },
    { name: "TailwindCSS", color: "#38B2AC", logo: "tailwind-css", category: "frontend" },
    { name: "Bootstrap", color: "#8511FA", logo: "bootstrap", category: "frontend" },
    { name: "Flutter", color: "#02569B", logo: "Flutter", category: "frontend" },
    { name: "Android", color: "3DDC84", logo: "android", category: "frontend" },
    { name: "Node.js", color: "6DA55F", logo: "node.dot-js", category: "backend" },
    { name: "Django", color: "#092e20", logo: "django", category: "backend" },
    { name: "PostgreSQL", color: "316192", logo: "postgresql", category: "backend" },
    { name: "MongoDB", color: "#4ea94b", logo: "mongodb", category: "backend" },
    { name: "MySQL", color: "#00f", logo: "mysql", category: "backend" },
    { name: "Git", color: "#F05033", logo: "git", category: "tools" },
    { name: "Docker", color: "#0db7ed", logo: "docker", category: "tools" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-foreground">{dict.tecnologies.title}</h1>
        <p className="text-text-muted">{dict.tecnologies.subtitle}</p>
      </div>

      <TechGrid techs={techStack} categories={dict.tecnologies.categories} />
    </div>
  );
}
