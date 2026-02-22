import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isAuth = localStorage.getItem("isAuth") === "true";

  if (!isAuth) {
    alert("Сначала войдите в аккаунт!");
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;