import ProjectsList from "@/app/components/ProjectsList";
import { getProjects } from "@/sanity/sanity-utils";

async function Home() {
  const projects = await getProjects();

  return (
    <div className="">
    <ProjectsList projects={projects}/>
    </div>
  )
}

export default Home;