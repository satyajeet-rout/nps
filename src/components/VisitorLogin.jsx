
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function VisitorLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/login", {
        username,
        password,
        role: "visitor",
      });
      if (response.data.user) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        navigate("/visitor");
      }
    } catch (err) {
      setError("Invalid username or password. Try visitor1/pass123 or visitor2/pass456.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-center">Visitor Login</h1>
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">Username</label>
          <input
            type="text"
            className="border p-2 rounded w-full"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="e.g., visitor1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">Password</label>
          <input
            type="password"
            className="border p-2 rounded w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="e.g., pass123"
          />
        </div>
        {error && <p className="text-red-600 mb-4">{error}</p>}
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700"
          onClick={handleLogin}
        >
          Login
        </button>
        <p className="mt-4 text-center">
          Admin?{" "}
          <a href="/admin-login" className="text-blue-600 hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
}

export default VisitorLogin;
