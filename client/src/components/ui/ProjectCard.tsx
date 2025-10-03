import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  demoUrl?: string;
  image: string;
}

export default function ProjectCard({
  title,
  description,
  tech,
  githubUrl,
  demoUrl,
  image,
}: ProjectCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative shadow-md rounded-lg overflow-hidden transition hover:scale-105">
      {!imgError ? (
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover object-top"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="w-full h-full absolute inset-0 bg-gray-300 dark:bg-gray-700" />
      )}
      <div className="relative flex flex-col justify-end h-64">
        <div className="absolute bottom-0 w-full p-4 bg-black/50 dark:bg-black/60">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="text-sm text-gray-200 mt-1">{description}</p>

          <div className="flex flex-wrap gap-2 mt-2">
            {tech.map((t) => (
              <span
                key={t}
                className="text-xs px-2 py-1 rounded bg-white/20 text-white"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-3 mt-3">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-300 hover:underline"
              >
                GitHub
              </a>
            )}
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-green-300 hover:underline"
              >
                Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
