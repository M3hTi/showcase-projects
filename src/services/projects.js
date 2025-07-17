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
