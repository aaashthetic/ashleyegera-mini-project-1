// components/ProjectCard.tsx
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <Card className="group bg-white/40 backdrop-blur-md border-2 border-[#FA9DA6] shadow-lg hover:scale-105 transition-all duration-300 flex flex-col overflow-hidden rounded-[1rem]">
      
      <div className="p-4 pt-0 pb-0"> 
        <div className="relative h-48 w-full overflow-hidden rounded-[0.5rem]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>

      <CardContent className="p-6 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-3">
          <Badge className="bg-[#8EB694] hover:bg-[#8EB694]/80 text-white px-3 py-0.5 border-none">
            {project.badge}
          </Badge>
          {project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#FA9DA6] hover:text-[#8EB694] transition-colors"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>

        <h3 className="text-2xl font-bold text-[#FA9DA6] mb-2 font-playfair tracking-tight">
          {project.title}
        </h3>

        <p className="text-sm text-gray-600 line-clamp- font-arial flex-grow leading-relaxed">
          {project.description}
        </p>

        <Link
          href={`/projects/${project.id}`}
          className="mt-4 text-sm font-bold text-[#8EB694] hover:underline uppercase tracking-widest"
        >
          View Details →
        </Link>
      </CardContent>
    </Card>
  );
}