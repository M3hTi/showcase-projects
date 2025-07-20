import supabase from "./supabase";
/**
 * Fetches all projects from the Supabase database
 * @returns {Promise<Array>} Array of project objects, or undefined if there's an error
 */
export async function getProjects() {
  try {
    let { data: projects, error } = await supabase.from("projects").select("*");
    if (error)
      throw new Error(`We can't fetch projects, Error : ${error.message}`);

    return projects;
  } catch (error) {
    console.log(error.message);
  }
}

/**
 * Creates a new project in the Supabase database
 * @param {Object} projectData - The project data object
 * @param {string} projectData.name - The name of the project
 * @param {string} projectData.description - The project description
 * @param {string} projectData.githubUrl - GitHub repository URL
 * @param {string} projectData.demoUrl - Live demo URL
 * @param {string} projectData.user_id - User ID associated with the project
 * @throws {Error} If project creation fails
 */
export async function createProjectApi(projectData) {
  try {
    const { name, description, githubUrl, demoUrl, user_id } = projectData;
    const { data, error } = await supabase
      .from("projects")
      .insert([
        {
          name,
          description,
          github_url: githubUrl,
          livedemo_url: demoUrl,
          user_id,
        },
      ])
      .select();

    if (error)
      throw new Error(
        "You can't add or create project at this point, please try again later!!",
      );

    return data;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}
