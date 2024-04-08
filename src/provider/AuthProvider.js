import { getToken, setAdminToken } from "@/app/admin/adminAuth";
import { createContext, useMemo, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => {
    getToken();
  });

  const contextValue = useMemo(() => {
    const tokenSetter = (newToken) => {
      setToken(newToken);
      setAdminToken(newToken);
    };

    return { token, tokenSetter };
  }, [token]);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
