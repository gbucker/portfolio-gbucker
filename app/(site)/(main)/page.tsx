"use client";
import { getProjects } from "@/sanity/sanity-utils"
import ProjectsList from "@/app/components/ProjectsList";

async function Home() {
  const projects = await getProjects();

  return (
    <div className="">
    <ProjectsList projects={projects}/>
    </div>
  )
}

export default Home;