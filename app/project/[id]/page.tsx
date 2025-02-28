import { URL } from "@/api/cron/route";
import ProjectPage from "./ProjectPage";

interface ProjectType {
  id: string
}

async function getProject(id: string): Promise<ProjectType | null> {
  try {
    const response = await fetch(`${URL}/project/${id}`, { cache: "no-store" });
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data.project;
  } catch (error) {
    console.error("Error fetching project data:", error);
    return null;
  }
}

const Project = async ({ params }: { params: { id: string } }) => {
  const project = await getProject(params.id);

  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <>
      <ProjectPage project={project} />
    </>
  );
};

export default Project;

