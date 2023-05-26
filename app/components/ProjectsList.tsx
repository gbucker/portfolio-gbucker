"use client"
import { urlFor } from "@/sanity/sanity-utils"
import { Project } from '@/types/Project';
import Link from 'next/link';
import Image from "next/image";
import React, { Suspense, useState } from 'react';
import GradientText from './GradientText';

function filterProjects(projects: Project[], selectedOption: string): Project[] {
  if (selectedOption === 'todos') {
    return projects;
  }

  return projects.filter(project => project.tags.includes(selectedOption.toLowerCase()));
}

function ProjectsList({projects}: {projects: Project[]}) {
  const [selectedOption, setSelectedOption] = useState('todos');

  const handleLinkClick = async (value: string) => {
    await setSelectedOption(value);
  };
  
  // Filtering projects based on the selected option
  const filteredProjects = filterProjects(projects, selectedOption);

  return (
    <>
      <h2 className="text-4xl font-extrabold text-gray-800 mb-10">Projetos</h2>
      <div className="mt-5 flex items-bottom pb-10 justify-left gap-5 text-xl text-gray-600">
        <a className={`hover:cursor-pointer ${selectedOption === 'todos' && 'font-bold'}`} onClick={() => handleLinkClick('todos')}>Todos</a>
        <a className={`hover:cursor-pointer ${selectedOption === 'roteiro' && 'font-bold'}`} onClick={() => handleLinkClick('roteiro')}>Roteiro</a>
        <a className={`hover:cursor-pointer ${selectedOption === 'direcao' && 'font-bold'}`} onClick={() => handleLinkClick('direcao')}>Direção</a>
        <a className={`hover:cursor-pointer ${selectedOption === 'atuacao' && 'font-bold'}`} onClick={() => handleLinkClick('atuacao')}>Atuação</a>
        <a className={`hover:cursor-pointer ${selectedOption === 'standup' && 'font-bold'}`} onClick={() => handleLinkClick('standup')}>Stand-Up</a>
      </div>
      <div className="grid grid-col-1 md:grid-col-2 lg:grid-cols-3 gap-8">
      {filteredProjects.map((project) => (
        <Link key={project._id} className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-purple-500 transition" href={`/projetos/${project.slug}`}>
          {project.image && (
            <Image
            src={urlFor(project.image).width(400).height(400).url()}
            alt={project.name}
            width={400}
            height={400}
            className="object-cover rounded-lg border border-gray-500"
            />
          )}
          <div className="mt-2 ml-1 mb-2 text-center"><GradientText className="text-md font-extrabold">{project.name}</GradientText></div>
        </Link>
      ))}
      </div>
    </>
  );
}

export default ProjectsList;