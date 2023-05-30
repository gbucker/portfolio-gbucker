"use client"
import { urlFor } from "@/sanity/sanity-utils"
import { Project } from '@/types/Project';
import Link from 'next/link';
import Image from "next/image";
import React, { useState } from 'react';
import GradientText from './GradientText';

function filterProjects(projects: Project[], selectedOption: string): Project[] {
  if (selectedOption === 'todos') {
    return projects;
  }

  return projects.filter(project => project.tags.includes(selectedOption.toLowerCase()));
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
      <div className="grid justify-items-center md:justify-items-start">
        <ul className="max-w-min grid grid-rows-2 sm:grid-rows-1 grid-flow-col row-auto sm:justify-between  mb-10 py-5 px-5 md:px-10 gap-2 md:gap-5 bg-gray-100 border-2 border-gray-400 rounded-lg text-lg md:text-xl text-gray-700">
          {categories.map((category, index) => (
            <li key={index} className="grid list-none whitespace-nowrap">
              <a
                className={`hover:cursor-pointer ${
                  selectedOption === category.tag ? 'font-bold' : ''
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
          <Link key={project._id} className="grid w-auto bg-gray-100 border-2 border-gray-400 rounded-lg p-1 hover:scale-105 hover:border-indigo-400 transition" href={`/projetos/${project.slug}`}>
            {project.image && (
              <Image
              src={urlFor(project.image).width(400).height(400).crop('focalpoint').fit('crop').url()}
              alt={project.name}
              width={400}
              height={400}
              className="object-cover rounded-lg border border-gray-400"
              priority={true}
              />
            )}
            <div className="mt-2 ml-1 mb-2 text-center"><GradientText className="text-md font-extrabold">{project.name}</GradientText></div>
          </Link>
        ))}
        </div>
      </div>
    </>
  );
}

export default ProjectsList;