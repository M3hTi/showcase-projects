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

// for log out
export async function logOutApi() {
  try {
    let { error } = await supabase.auth.signOut();

    if (error)
      throw new Error(`You can't signout right now!!, Error: ${error.message}`);
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

/**
 * Retrieves the currently authenticated user from Supabase.
 * @async
 * @function getCurrentUser
 * @returns {Promise<Object|null>} Returns the user object if authenticated, null if no session exists
 * @throws {Error} Throws an error if authentication check fails
 */
export async function getCurrentUser() {
  try {
    const { data: session } = await supabase.auth.getSession();
    if (!session.session) return null;

    const { data: user, error } = await supabase.auth.getUser();

    if (error) throw new Error(`An Error occurred!, Error: ${error.message} `);

    return user?.user;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export async function updateUser({ email, password, data: { fullname, bio } }) {
  try {
    const { data, error } = await supabase.auth.updateUser({
      email,
      password,
      data: { fullname, bio },
    });

    if (error)
      throw new Error(
        `You can't update information at this point!, pls comeback later.`,
      );
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}
