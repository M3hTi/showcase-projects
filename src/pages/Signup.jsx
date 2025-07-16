import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import Form from "../ui/Form";
import Button from "../ui/Button";
import HomeIcon from "../ui/HomeIcon";

function Signup() {
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
            Create your account
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Start showcasing your projects today
          </p>
        </div>

        <Form type="signup" />

        <p className="mt-4 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Button to="/login" className="text-orange-500 hover:text-orange-400">
            Sign in
          </Button>
        </p>
      </div>
      <HomeIcon />
    </div>
  );
}

export default Signup;
