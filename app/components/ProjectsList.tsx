"use client"
import { urlFor } from "@/sanity/sanity-utils"
import { Project } from '@/types/Project';
import Link from 'next/link';
import Image from "next/image";
import React, { useState } from 'react';

function filterProjects(projects: Project[], selectedOption: string): Project[] {
  const newProjects = projects.sort((a: Project, b: Project) => new Date(b.date).getTime() - new Date(a.date).getTime())

  if (selectedOption === 'todos') {
    return newProjects;
  }

  return newProjects.filter(project => project.tags.includes(selectedOption.toLowerCase()));
}

function ProjectsList({projects}: {projects: Project[]}) {
  const [selectedOption, setSelectedOption] = useState('todos');

  const handleLinkClick = (value: string) => {
    setSelectedOption(value);
  };
  
  // Filtering projects based on the selected option
  const filteredProjects = filterProjects(projects, selectedOption);

  const categories: { title: string; tag: string }[] = [
    { title: "Todos", tag: "todos" },
    { title: "Roteiro", tag: "roteiro" },
    { title: "Direção", tag: "direcao" },
    { title: "Atuação", tag: "atuacao" },
    { title: "Stand-Up", tag: "standup" }
  ]

  return (
    <>
      <h3 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-10">Projetos</h3>
      <div className="grid justify-items-center md:justify-items-start text-gray-700">
        <ul className="max-w-min grid grid-rows-2 sm:grid-rows-1 grid-flow-col row-auto sm:justify-between gap-2 md:gap-5 mb-10 text-xl ">
          {categories.map((category, index) => (
            <li key={index} className="grid list-none whitespace-nowrap">
              <a
                className={` hover:text-gray-800 hover:cursor-pointer ${
                  selectedOption === category.tag ? 'text-gray-800 font-bold' : ''
                }`}
                onClick={() => handleLinkClick(category.tag)}
              >
                {category.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center justify-self-center">
        {filteredProjects.map((project) => (
          <Link key={project._id} className="grid w-auto bg-white border border-gray-700 hover:border-indigo-500 hover:border-2  hover:scale-105 hover:text-indigo-500 transition" href={`/projetos/${project.slug}`}>
            {project.image && (
              <Image
              src={urlFor(project.image).width(400).height(400).crop('focalpoint').fit('crop').url()}
              alt={project.name}
              width={400}
              height={400}
              className="object-cover"
              priority={true}
              />
            )}
            <div className="mt-2 mb-2 text-center text-lg font-bold">{project.name}</div>
          </Link>
        ))}
        </div>
      </div>
    </>
  );
}

export default ProjectsList;