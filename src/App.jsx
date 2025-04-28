

// import { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import VisitorPage from "./components/VisitorPage";
// import AdminDashboard from "./components/AdminDashboard";
// import VisitorLogin from "./components/VisitorLogin";
// import AdminLogin from "./components/AdminLogin";

// function ProtectedRoute({ children, role }) {
//   const user = JSON.parse(localStorage.getItem("user"));
//   if (!user || user.role !== role) {
//     return <Navigate to={role === "visitor" ? "/visitor-login" : "/admin-login"} />;
//   }
//   return children;
// }

// function NavBar({ user, handleLogout }) {
//   return (
//     <nav className="bg-blue-800 text-white p-3 sm:p-4">
//       <div className="max-w-6xl mx-auto flex items-center">
//         {!user && (
//           <h1 className="text-lg sm:text-xl font-bold">National Parks Management System</h1>
//         )}
//         {user && (
//           <button
//             className="ml-auto bg-blue-600 px-3 sm:px-4 py-2 rounded hover:bg-blue-700 text-sm sm:text-base"
//             onClick={handleLogout}
//           >
//             Logout
//           </button>
//         )}
//       </div>
//     </nav>
//   );
// }

// function App() {
//   const [user, setUser] = useState(null);

//   const syncUserState = () => {
//     try {
//       const storedUser = localStorage.getItem("user");
//       if (storedUser) {
//         const parsedUser = JSON.parse(storedUser);
//         if (parsedUser && parsedUser.role) {
//           setUser(parsedUser);
//         } else {
//           localStorage.removeItem("user");
//           setUser(null);
//         }
//       } else {
//         setUser(null);
//       }
//     } catch (error) {
//       console.error("Error parsing user from localStorage:", error);
//       localStorage.removeItem("user");
//       setUser(null);
//     }
//   };

//   useEffect(() => {
//     syncUserState(); // Initial sync on mount

//     // Listen for storage changes (e.g., login from another component)
//     const handleStorageChange = () => {
//       syncUserState();
//     };

//     window.addEventListener("storage", handleStorageChange);
//     return () => {
//       window.removeEventListener("storage", handleStorageChange);
//     };
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     setUser(null);
//   };

//   return (
//     <Router>
//       <div className="min-h-screen bg-gray-100">
//         <NavBar user={user} handleLogout={handleLogout} />
//         <Routes>
//           <Route path="/visitor-login" element={<VisitorLogin />} />
//           <Route path="/admin-login" element={<AdminLogin />} />
//           <Route
//             path="/visitor"
//             element={
//               <ProtectedRoute role="visitor">
//                 <VisitorPage />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/admin"
//             element={
//               <ProtectedRoute role="admin">
//                 <AdminDashboard />
//               </ProtectedRoute>
//             }
//           />
//           <Route path="/" element={<Navigate to="/visitor-login" />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;



// import { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import VisitorPage from "./components/VisitorPage";
// import AdminDashboard from "./components/AdminDashboard";
// import VisitorLogin from "./components/VisitorLogin";
// import AdminLogin from "./components/AdminLogin";
// import LandingPage from "./components/LandingPage";

// function ProtectedRoute({ children, role }) {
//   const user = JSON.parse(localStorage.getItem("user"));
//   if (!user || user.role !== role) {
//     return <Navigate to={role === "visitor" ? "/visitor-login" : "/admin-login"} />;
//   }
//   return children;
// }

// function NavBar({ user, handleLogout }) {
//   return (
//     <nav className="bg-blue-800 text-white p-3 sm:p-4">
//       <div className="max-w-6xl mx-auto flex items-center justify-between">
//         <h1 className="text-lg sm:text-xl font-bold">National Parks Management System</h1>
//         {user ? (
//           <button
//             className="bg-blue-600 px-3 sm:px-4 py-2 rounded hover:bg-blue-700 text-sm sm:text-base"
//             onClick={handleLogout}
//           >
//             Logout
//           </button>
//         ) : (
//           <div className="flex space-x-2 sm:space-x-4">
//             {/* <a 
//               href="/visitor-login" 
//               className="bg-green-600 px-3 sm:px-4 py-2 rounded hover:bg-green-700 text-sm sm:text-base"
//             >
//               Visitor Login
//             </a>
//             <a 
//               href="/admin-login" 
//               className="bg-blue-600 px-3 sm:px-4 py-2 rounded hover:bg-blue-700 text-sm sm:text-base"
//             >
//               Admin Login
//             </a> */}
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }

// function App() {
//   const [user, setUser] = useState(null);

//   const syncUserState = () => {
//     try {
//       const storedUser = localStorage.getItem("user");
//       if (storedUser) {
//         const parsedUser = JSON.parse(storedUser);
//         if (parsedUser && parsedUser.role) {
//           setUser(parsedUser);
//         } else {
//           localStorage.removeItem("user");
//           setUser(null);
//         }
//       } else {
//         setUser(null);
//       }
//     } catch (error) {
//       console.error("Error parsing user from localStorage:", error);
//       localStorage.removeItem("user");
//       setUser(null);
//     }
//   };

//   useEffect(() => {
//     syncUserState(); // Initial sync on mount

//     // Listen for storage changes (e.g., login from another component)
//     const handleStorageChange = () => {
//       syncUserState();
//     };

//     window.addEventListener("storage", handleStorageChange);
//     return () => {
//       window.removeEventListener("storage", handleStorageChange);
//     };
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     setUser(null);
//     window.location.href = "/";
//   };

//   return (
//     <Router>
//       <div className="min-h-screen bg-gray-100 flex flex-col">
//         <NavBar user={user} handleLogout={handleLogout} />
//         <div className="flex-grow">
//           <Routes>
//             <Route path="/" element={<LandingPage />} />
//             <Route path="/visitor-login" element={<VisitorLogin />} />
//             <Route path="/admin-login" element={<AdminLogin />} />
//             <Route
//               path="/visitor"
//               element={
//                 <ProtectedRoute role="visitor">
//                   <VisitorPage />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/admin"
//               element={
//                 <ProtectedRoute role="admin">
//                   <AdminDashboard />
//                 </ProtectedRoute>
//               }
//             />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;


import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import VisitorPage from "./components/VisitorPage";
import AdminDashboard from "./components/AdminDashboard";
import VisitorLogin from "./components/VisitorLogin";
import AdminLogin from "./components/AdminLogin";
import LandingPage from "./components/LandingPage";

function ProtectedRoute({ children, role }) {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user || user.role !== role) {
    return <Navigate to={role === "visitor" ? "/visitor-login" : "/admin-login"} />;
  }
  return children;
}

function NavBar({ user, handleLogout }) {
  return (
    <nav className="bg-blue-800 text-white p-3 sm:p-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {!user && (
          <h1 className="text-lg sm:text-xl font-bold">National Parks Management System</h1>
        )}
        {user && (
          <div></div> // Empty div to maintain the justify-between spacing
        )}
        {user && (
          <button
            className="bg-blue-600 px-3 sm:px-4 py-2 rounded hover:bg-blue-700 text-sm sm:text-base"
            onClick={handleLogout}
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

function App() {
  const [user, setUser] = useState(null);

  const syncUserState = () => {
    try {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        if (parsedUser && parsedUser.role) {
          setUser(parsedUser);
        } else {
          localStorage.removeItem("user");
          setUser(null);
        }
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error("Error parsing user from localStorage:", error);
      localStorage.removeItem("user");
      setUser(null);
    }
  };

  useEffect(() => {
    syncUserState(); // Initial sync on mount

    // Listen for storage changes (e.g., login from another component)
    const handleStorageChange = () => {
      syncUserState();
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.location.href = "/";
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <NavBar user={user} handleLogout={handleLogout} />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/visitor-login" element={<VisitorLogin />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route
              path="/visitor"
              element={
                <ProtectedRoute role="visitor">
                  <VisitorPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin"
              element={
                <ProtectedRoute role="admin">
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;