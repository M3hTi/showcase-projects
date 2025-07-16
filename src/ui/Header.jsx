import { Link } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";

function Header() {
  return (
    <header className="bg-black p-4 text-white shadow-md">
      <nav className="container mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-bold text-orange-500 hover:text-orange-400"
        >
          Showcase
        </Link>

        <div className="flex items-center gap-6">
          <Link
            to="/home"
            className="text-white transition-colors hover:text-orange-500"
          >
            Home
          </Link>
          <Link
            to="/signup"
            className="flex items-center gap-2 rounded-lg bg-orange-500 px-4 py-2 text-white transition-colors hover:bg-orange-600"
          >
            <FaUserPlus />
            Sign up
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
