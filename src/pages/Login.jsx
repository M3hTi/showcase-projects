import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 px-4 py-12">
      <div className="w-full max-w-md space-y-8 rounded-xl bg-black/40 p-8 backdrop-blur-sm">
        <div className="text-center">
          <Link
            to="/"
            className="text-3xl font-bold text-orange-500 hover:text-orange-400"
          >
            Showcase
          </Link>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white">
            Welcome back
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Sign in to continue to your portfolio
          </p>
        </div>

        <form className="mt-8 space-y-6">
          <div className="space-y-4 rounded-md">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="relative block w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="relative block w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none"
                placeholder="Password"
              />
            </div>
          </div>

          {/* <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-700 bg-gray-800 text-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:ring-offset-gray-900"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-400"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <Link
                to="/forgot-password"
                className="text-orange-500 hover:text-orange-400"
              >
                Forgot password?
              </Link>
            </div>
          </div> */}

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-lg bg-orange-500 px-4 py-3 text-sm font-medium text-white transition-all hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/25 focus:ring-2 focus:ring-orange-500/20 focus:outline-none"
            >
              Sign in
            </button>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700"></div>
            </div>
           
          </div>

         
        </form>

        <p className="mt-4 text-center text-sm text-gray-400">
          Not registered yet?{" "}
          <Link to="/signup" className="text-orange-500 hover:text-orange-400">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
