import { useLocation, useNavigate, matchPath } from "react-router-dom";

function FloatingNavButton() {
  const location = useLocation();
  const navigate = useNavigate();

  let to = "/cart";
  let label = "Go to Cart";

  if (location.pathname === "/cart" || matchPath("/item/:id", location.pathname)) {
    to = "/";
    label = "Back to Products";
  }

  return (
    <button
      onClick={() => navigate(to)}
      className="fixed bottom-4 right-4 !bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg z-40"
    >
      {label}
    </button>
  );
}

export default FloatingNavButton;
