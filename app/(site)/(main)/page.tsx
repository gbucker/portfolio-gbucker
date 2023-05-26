import { getProjects } from "@/sanity/sanity-utils"
import ProjectsList from "@/app/components/ProjectsList";

async function Home() {
  const projects = await getProjects();

  return (
    <div className="mt-10">
    <ProjectsList projects={projects}/>
    </div>
  )
}

export default Home;