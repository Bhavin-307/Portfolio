export const URL = "https://bhavin-portfolio-api.onrender.com/v1/api";

async function getProject() {
    const data = await fetch(`${URL}/project`, {
      next: {
        revalidate: 60 * 60 * 12,
      },
    });
    const result = await data.json();
    return result;
  }
  
  export default getProject;
  