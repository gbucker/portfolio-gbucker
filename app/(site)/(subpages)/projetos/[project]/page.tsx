import { getProject, urlFor } from "@/sanity/sanity-utils";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import ProjectLink from "@/app/components/ProjectLink";
import GradientText from "@/app/components/GradientText";

type Props = {
  params: {project: string}
}

export default async function Project({params}: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
  <div className="ml-5 mr-5">
    <div className="flex items-bottom justify-left gap-10">
    <Image
          src={urlFor(project.image).width(50).height(50).auto('format')
          .fit('max').url()}
          alt={project.name}
          width={50}
          height={50}
          className="object-cover rounded-md border-1 border-gray-700"
          />
      <GradientText className="text-4xl font-extrabold">{project.name}</GradientText>
    </div>

      <div className="text-lg text-gray-700 mt-5">
        <div className="mb-10">
        <PortableText value={project.content} />
        </div>
        <ProjectLink url={project.url} />
      </div>


  </div>
  )
}