import supabase, { supabaseUrl } from "./supabase";
/**
 * Fetches all projects from the Supabase database
 * @returns {Promise<Array>} Array of project objects, or undefined if there's an error
 */
export async function getProjects(userId = null) {
  try {
    let query = supabase.from("projects").select("*,user_id(full_name)");

    if (userId) {
      query = await query.eq("user_id", userId);
    }

    let { data: projects, error } = await query;
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
    const { name, description, githubUrl, demoUrl, user_id, image, techStack } =
      projectData;

    const imageFile = image[0];

    const imageName = `${Math.random()}-${imageFile?.name}`.replaceAll("/", "");

    const imagePath = `${supabaseUrl}/storage/v1/object/public/projects-image//${imageName}`;

    const techArr = (techStack || "")
      .split(",")
      .map((t) => t.trim())
      .filter((t) => t.length > 0)
      .map((t) => t.charAt(0).toUpperCase() + t.slice(1).toLowerCase());

    const { data, error } = await supabase
      .from("projects")
      .insert([
        {
          name,
          description,
          github_url: githubUrl,
          livedemo_url: demoUrl,
          user_id,
          image: imagePath,
          tech_stack: techArr,
        },
      ])
      .select();

    if (error)
      throw new Error(
        "You can't add or create project at this point, please try again later!!",
      );

    // 2.uploading image into bucket
    const { error: uploadError } = await supabase.storage
      .from("projects-image")
      .upload(imageName, imageFile);

    if (uploadError)
      throw new Error(`You can't upload your image, Please try again later!!`);

    return data;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export async function deleteProjectApi(projectId) {
  try {
    const { data: projectToDelete, error: fetchError } = await supabase
      .from("projects")
      .select("name")
      .eq("id", projectId)
      .single();

    console.log("Project to delete:", projectToDelete); // Debug log

    if (fetchError) {
      console.error("Fetch error:", fetchError); // Debug log
      throw new Error(`You can't fetch this project, Please try again later!!`);
    }

    const { error: deleteError } = await supabase
      .from("projects")
      .delete()
      .eq("id", projectId);

    if (deleteError) {
      console.error("Delete error:", deleteError); // Debug log
      throw new Error(
        `You can't delete this project at this point, Please try again later!!`,
      );
    }

    console.log("Returning:", projectToDelete); // Debug log
    return projectToDelete;
  } catch (error) {
    console.error("Delete API error:", error);
    throw error;
  }
}
