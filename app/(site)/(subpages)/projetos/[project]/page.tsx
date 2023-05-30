
import { getProject, urlFor } from "@/sanity/sanity-utils";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import ProjectLink from "@/app/components/ProjectLink";
import { Metadata } from "next";
import { components } from '@/app/components/PTComponents';
import GradientText from "@/app/components/GradientText";

type ProjectProps = {
  params: {project: string}
}

export default async function Project({params}: ProjectProps) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
  <div className="bg-gray-100 border-2 border-indigo-300 rounded-xl p-5">
    <div className="flex items-bottom justify-left gap-10">
    <Image
          src={urlFor(project.image).width(50).height(50).auto('format').crop('focalpoint').fit('crop').url()}
          alt={project.name}
          width={50}
          height={50}
          className="hidden md:flex object-cover rounded-md border border-gray-700 w-50"
          />
      <div className=""><GradientText className="text-4xl font-extrabold text-gray-700">{project.name}</GradientText></div>
    </div>
      <div className="text-lg text-gray-700 mt-5">
        <div className="mb-10">
        <PortableText value={project.content} components={components}/>
        </div>
        <div className="grid grid-cols-1 justify-center gap-10">
          {project.urls.map((urlObject, index) =>
            <div key={index}>
              <ProjectLink url={urlObject.url} />
            </div>
          )}
        </div>
      </div>
  </div>
  )
}

export async function generateMetadata(
  { params }: ProjectProps
): Promise<Metadata> {
  const page = await getProject(params.project);
 
  return {
    title: `${page.name} - Gustavo Bucker`,
  };
}
