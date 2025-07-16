import { Link } from "react-router-dom";

function Button({ to = "", children, onClick, className }) {
  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
