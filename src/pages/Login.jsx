import { FaGithub } from "react-icons/fa";
import Form from "../ui/Form";
import Button from "../ui/Button";

function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 px-4 py-12">
      <div className="w-full max-w-md space-y-8 rounded-xl bg-black/40 p-8 backdrop-blur-sm">
        <div className="text-center">
          <Button
            to="/"
            className="text-3xl font-bold text-orange-500 hover:text-orange-400"
          >
            Showcase
          </Button>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white">
            Welcome back
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Sign in to continue to your portfolio
          </p>
        </div>

        <Form type="login" />

        <p className="mt-4 text-center text-sm text-gray-400">
          Not registered yet?{" "}
          <Button to="/signup" className="text-orange-500 hover:text-orange-400">
            Create an account
          </Button>
        </p>
      </div>
    </div>
  );
}

export default Login;
