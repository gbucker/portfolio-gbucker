
import { getProject, urlFor } from "@/sanity/sanity-utils";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import ProjectLink from "@/app/components/ProjectLink";

type Props = {
  params: {project: string}
}

export default async function Project({params}: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
  <div className="">
    <div className="flex items-bottom justify-left gap-10">
    <Image
          src={urlFor(project.image).width(50).height(50).auto('format')
          .fit('max').url()}
          alt={project.name}
          width={50}
          height={50}
          className="hidden md:flex object-cover rounded-md border-1 border-gray-700 w-50"
          />
      <div className="text-4xl font-extrabold text-gray-600">{project.name}</div>
    </div>

      <div className="text-lg text-gray-700 mt-5">
        <div className="mb-10">
        <PortableText value={project.content} />
        </div>
        <div>
          {project.urls.map((url, index) =>
            <ProjectLink key={index} url={url} />
          )}
        
        </div>
      </div>
  </div>
  )
}