import { Link } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";
import { useUser } from "../features/authentication/useUser";
import Button from "../ui/Button";
import MiniLoading from "./MiniLoading";

function Header() {
  const { user, isAuthenticate } = useUser();
  return (
    <header className="bg-black px-4 py-6 text-white shadow-lg">
      <nav className="container mx-auto flex flex-col items-center justify-center gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Link
          to="/"
          className="text-3xl font-bold text-orange-500 transition-colors hover:text-orange-400"
        >
          Showcase
        </Link>

        <div className="flex items-center gap-8">
          <Link
            to="/home"
            className="text-lg font-medium text-white transition-colors hover:text-orange-500"
          >
            Home
          </Link>
          {isAuthenticate ? (
            <Button
              to="/profile/my-projects"
              className="flex items-center gap-2 rounded-lg bg-orange-500 px-6 py-2.5 font-medium text-white transition-all hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/25"
            >
              {user?.user_metadata?.fullname || user.email}
            </Button>
          ) : (
            <Button
              to="/signup"
              className="flex items-center gap-2 rounded-lg bg-orange-500 px-6 py-2.5 font-medium text-white transition-all hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/25"
            >
              <FaUserPlus />
              Sign up
            </Button>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
