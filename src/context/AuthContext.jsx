// import { createContext, useState } from 'react';

// export const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const login = () => {
//     setIsAuthenticated(true);
//   };

//   const logout = () => {
//     setIsAuthenticated(false);
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }


// import { createContext, useState } from 'react';

// export const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [userType, setUserType] = useState(null); // null, 'admin', or 'visitor'

//   const login = (type) => {
//     setUserType(type);
//   };

//   const logout = () => {
//     setUserType(null);
//   };

//   return (
//     <AuthContext.Provider value={{ userType, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }


import { createContext, useState } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [userType, setUserType] = useState(null);

  const login = (type) => {
    setUserType(type);
  };

  const logout = () => {
    setUserType(null);
  };

  return (
    <AuthContext.Provider value={{ userType, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}