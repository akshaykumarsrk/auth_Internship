import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function PrivateRoute({ children, requiredRole }) {
  const { token, role } = useContext(AuthContext);

  if (!token) return <Navigate to="/login" />;

  if (requiredRole && role !== requiredRole) return <Navigate to="/profile" />;

  return children;
}
