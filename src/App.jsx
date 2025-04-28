
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import VisitorPage from "./components/VisitorPage";
import AdminDashboard from "./components/AdminDashboard";
import VisitorLogin from "./components/VisitorLogin";
import AdminLogin from "./components/AdminLogin";

function ProtectedRoute({ children, role }) {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user || user.role !== role) {
    return <Navigate to={role === "visitor" ? "/visitor-login" : "/admin-login"} />;
  }
  return children;
}

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-blue-800 text-white p-4">
          <div className="max-w-6xl mx-auto flex justify-between">
            <h1 className="text-xl font-bold">National Parks Camping</h1>
            {user && (
              <button
                className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
                onClick={handleLogout}
              >
                Logout
              </button>
            )}
          </div>
        </nav>
        <Routes>
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
          <Route path="/" element={<Navigate to="/visitor-login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
