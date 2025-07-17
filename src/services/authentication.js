import supabase from "./supabase";
/**
 * Authenticates user with email and password using Supabase authentication.
 * @async
 * @param {Object} credentials - The login credentials
 * @param {string} credentials.email - User's email address
 * @param {string} credentials.password - User's password
 * @returns {Promise<Object>} The user object if login is successful
 * @throws {Error} When login fails
 */
export async function loginApi({ email, password }) {
  try {
    let { data: user, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error)
      throw new Error(`You can't login at this point, pls try again later!`);

    return user;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}
