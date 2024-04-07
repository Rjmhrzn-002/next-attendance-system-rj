import { getToken, setAdminToken } from "@/app/admin/adminAuth";
import { createContext, useMemo, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => {
    getToken();
  });

  const tokenSetter = (newToken) => {
    setAdminToken(newToken);
    setToken(newToken);
  };

  const contextValue = useMemo(() => {
    return { token, tokenSetter };
  });

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
