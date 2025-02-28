import { URL } from "@/api/cron/route";
import ProjectPage from "./ProjectPage";
import { Metadata } from "next";

async function getProject(id: string) {
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

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const id = params.id;
  const project = await getProject(id);

  const title = project?.title || "Default Project Title";
  const description = project?.details || "Default Project Description";
  

  return {
    title,
    description,
    keywords: project?.tags || ["projects", "portfolio", "example"],
    openGraph: {
      title,
      description,
     
      siteName: "Bhavin Sali",
      type: "website",
     
    },
    twitter: {
      title,
      description,
     
      card: "summary_large_image",
      site: "@bhavin_sali307",
    },
  };
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
