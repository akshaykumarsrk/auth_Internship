import { createContext, useState } from "react";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const storedToken = localStorage.getItem("token");

  const [token, setToken] = useState(storedToken);
  const [role, setRole] = useState(storedToken ? jwtDecode(storedToken).role : null);

  const login = (jwt) => {
    localStorage.setItem("token", jwt);
    setToken(jwt);
    setRole(jwtDecode(jwt).role); // extract role from token
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setRole(null);
  };

  return (
    <AuthContext.Provider value={{ token, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
