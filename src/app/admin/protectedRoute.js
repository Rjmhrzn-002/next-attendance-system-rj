import { Navigate } from "next/navigation";
import { useContext } from "react";
import { AuthContext } from "@/provider/AuthProvider";

const ProtectedRoute = ({ children }) => {
  const { token } = useContext(AuthContext);
  return token ? children : <Navigate to="/admin/login" />;
};

export default ProtectedRoute;
