import { getDictionary } from "@/lib/dictonary";
import Link from "next/link";

type Locale = "es" | "en" | "ca";

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  const projectDetails = dict.projects.details;
  const projectIds = Object.keys(projectDetails) as Array<keyof typeof projectDetails>;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-10">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">{dict.projects.title}</h1>
        <p className="text-text-muted">{dict.projects.subtitle}</p>
      </div>

      <div className="flex flex-col gap-12">
        {projectIds.map((id) => {
          const project = projectDetails[id];
          return (
            <div key={id} className="group flex flex-col md:flex-row gap-6">
              {/* Text Content */}
              <div className="flex-1 space-y-2">
                {/* URL Style Breadcrumb */}
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-[8px] font-bold text-text-muted">
                    GH
                  </div>
                  <span className="text-xs text-text-muted truncate">
                    github.com {` > `} {project.title}
                  </span>
                </div>

                {/* Main Link */}
                <a
                  href={project.link}
                  target="_blank"
                  className="text-xl text-blue-600 dark:text-blue-400 group-hover:underline block mb-1"
                >
                  {project.title}
                </a>

                {/* Description */}
                <p className="text-sm text-text-muted leading-relaxed pr-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex items-center gap-2 mt-2 text-[12px] text-text-muted">
                  <span className="font-medium text-foreground/70">Tecnologies:</span>
                  <span className="truncate">
                    {project.tecnologies.join(", ")}
                  </span>
                </div>
              </div>

              {/* Image Space (Thumbnail) */}
              <div className="shrink-0">
                <div className="w-32 h-20 bg-border rounded-xl overflow-hidden border border-border flex items-center justify-center text-text-muted text-[10px] italic group-hover:border-blue-300 transition-colors">
                  {/* Aquí anirà la imatge: <img src={project.image} alt={project.title} className="w-full h-full object-cover" /> */}
                  Imatge
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
