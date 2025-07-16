import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";

function HomeIcon({ className = "" }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/")}
      className={`fixed top-6 left-6 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-black/40 text-white shadow-lg backdrop-blur-sm transition-all hover:bg-black/60 hover:text-orange-500 hover:shadow-xl focus:ring-2 focus:ring-orange-500/20 focus:outline-none ${className}`}
      aria-label="Return to home page"
    >
      <FaHome className="h-5 w-5" />
    </button>
  );
}

export default HomeIcon;
