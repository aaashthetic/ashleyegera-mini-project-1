"use client";
import React, { use } from "react";
import { useRouter } from "next/navigation";
import { projectData } from "../../data/projects";
import GradientBlob from "@/components/GradientBlob";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ExternalLink, ArrowLeft } from "lucide-react";

export default function ProjectDetail({ params }) {
  const router = useRouter();
  const resolvedParams = use(params);
  const { id } = resolvedParams; 

  const project = projectData.find((p) => p.id === id);

  if (!project) return <div className="pt-40 text-center text-[#FA9DA6] font-bold">Project not found</div>;
  return (
    <section className="relative min-h-screen w-full font-playfair bg-transparent pb-32">
      <GradientBlob color="#FBDFA2" className="w-[800px] h-[800px] -top-40 left-1/2 -translate-x-1/2" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-40">
        <Button 
            variant="ghost" 
            onClick={() => router.back()} 
            className="group mb-8 text-[#8EB694] hover:text-[#FA9DA6] hover:bg-transparent p-0 flex items-center gap-2 font-bold uppercase tracking-widest text-sm transition-all"
        >
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          Back
        </Button>
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="w-full md:w-1/2">
            <img src={project.image} alt={project.title} className="rounded-2xl border-1 border-[#FA9DA6] shadow-2xl w-full" />
          </div>

          <div className="w-full md:w-1/2 space-y-6">
            <div className="flex items-center gap-4">
               <Badge className="bg-[#8EB694] text-white px-4 py-1">{project.badge}</Badge>
               <a href={project.link} target="_blank" className="flex items-center gap-2 text-sm font-bold text-[#FA9DA6] hover:text-[#8EB694]">
                 Live Demo <ExternalLink size={16} />
               </a>
            </div>
            <h1 className="text-5xl font-bold text-[#FA9DA6]">{project.title}</h1>
            <p className="text-lg text-gray-700 leading-relaxed font-arial italic">{project.description}</p>
            
            <Separator className="bg-[#FA9DA6]/20" />
            
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-[#FA9DA6] mb-4 font-arial">Technical Stack</p>
              <div className="flex gap-5">
                {project.techIcons.map((icon, i) => (
                  <img key={i} src={icon} className="w-10 h-10 object-contain hover:scale-110 transition-transform" alt="tech" />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 p-10 bg-white/40 backdrop-blur-md rounded-3xl border-2 border-[#FA9DA6] shadow-xl">
          <h2 className="text-3xl font-bold text-[#8EB694] mb-6">Key Contributions</h2>
          <p className="text-gray-700 font-arial leading-loose font-regular italic text-lg">{project.details}</p>
        </div>
      </div>
    </section>
  );
}