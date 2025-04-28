
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// function AdminLogin() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post("http://localhost:3000/api/login", {
//         username,
//         password,
//         role: "admin",
//       });
//       if (response.data.user) {
//         localStorage.setItem("user", JSON.stringify(response.data.user));
//         navigate("/admin");
//       }
//     } catch (err) {
//       setError("Invalid username or password. Try admin1/admin123 or admin2/admin456.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
//         <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
//         <div className="mb-4">
//           <label className="block text-lg font-medium mb-2">Username</label>
//           <input
//             type="text"
//             className="border p-2 rounded w-full"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             placeholder="e.g., admin1"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-lg font-medium mb-2">Password</label>
//           <input
//             type="password"
//             className="border p-2 rounded w-full"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="e.g., admin123"
//           />
//         </div>
//         {error && <p className="text-red-600 mb-4">{error}</p>}
//         <button
//           className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700"
//           onClick={handleLogin}
//         >
//           Login
//         </button>
//         <p className="mt-4 text-center">
//           Visitor?{" "}
//           <a href="/visitor-login" className="text-blue-600 hover:underline">
//             Login here
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default AdminLogin;




// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// function AdminLogin() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post("http://localhost:3000/api/login", {
//         username,
//         password,
//         role: "admin",
//       });
//       if (response.data.user) {
//         localStorage.setItem("user", JSON.stringify(response.data.user));
//         navigate("/admin");
//       }
//     } catch (err) {
//       setError("Invalid username or password. Try admin1/admin123 or admin2/admin456.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
//         <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
//         <div className="mb-4">
//           <label className="block text-lg font-medium mb-2">Username</label>
//           <input
//             type="text"
//             className="border p-2 rounded w-full"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             placeholder="e.g., admin1"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-lg font-medium mb-2">Password</label>
//           <input
//             type="password"
//             className="border p-2 rounded w-full"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="e.g., admin123"
//           />
//         </div>
//         {error && <p className="text-red-600 mb-4">{error}</p>}
//         <button
//           className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700"
//           onClick={handleLogin}
//         >
//           Login
//         </button>
//         <p className="mt-4 text-center">
//           Visitor?{" "}
//           <a href="/visitor-login" className="text-blue-600 hover:underline">
//             Login here
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default AdminLogin;




// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function AdminLogin() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const mockUser = {
//     username: "admin",
//     password: "pass123",
//     role: "admin"
//   };

//   const handleLogin = () => {
//     if (username === mockUser.username && password === mockUser.password) {
//       localStorage.setItem("user", JSON.stringify({ username, role: mockUser.role }));
//       navigate("/admin");
//     } else {
//       setError("Invalid username or password. Try admin/pass123.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
//         <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
//         <div className="mb-4">
//           <label className="block text-lg font-medium mb-2">Username</label>
//           <input
//             type="text"
//             className="border p-2 rounded w-full"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             placeholder="e.g., admin"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-lg font-medium mb-2">Password</label>
//           <input
//             type="password"
//             className="border p-2 rounded w-full"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="e.g., pass123"
//           />
//         </div>
//         {error && <p className="text-red-600 mb-4">{error}</p>}
//         <button
//           className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700"
//           onClick={handleLogin}
//         >
//           Login
//         </button>
//         <p className="mt-4 text-center">
//           Visitor?{" "}
//           <a href="/visitor-login" className="text-blue-600 hover:underline">
//             Login here
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default AdminLogin;


import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const mockUser = {
    username: "admin",
    password: "pass123",
    role: "admin",
  };

  const handleLogin = () => {
    if (username === mockUser.username && password === mockUser.password) {
      try {
        const user = { username, role: mockUser.role, id: `admin_${Date.now()}` };
        localStorage.setItem("user", JSON.stringify(user));
        // Dispatch storage event to notify App.js
        window.dispatchEvent(new Event("storage"));
        navigate("/admin");
      } catch (error) {
        setError("Failed to log in. Please try again.");
      }
    } else {
      setError("Invalid username or password. Try admin/pass123.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-6">
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg max-w-md w-full transform transition-all duration-300 hover:shadow-xl">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
          Admin Login
        </h1>
        <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
          <div className="mb-4 sm:mb-5">
            <label
              htmlFor="username"
              className="block text-sm sm:text-base font-medium text-gray-700 mb-2"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              className="border border-gray-300 p-3 sm:p-4 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="e.g., admin"
              required
            />
          </div>
          <div className="mb-4 sm:mb-5">
            <label
              htmlFor="password"
              className="block text-sm sm:text-base font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              className="border border-gray-300 p-3 sm:p-4 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="e.g., pass123"
              required
            />
          </div>
          {error && (
            <p className="text-red-600 text-sm sm:text-base mb-4 sm:mb-5 text-center">
              {error}
            </p>
          )}
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg w-full hover:from-blue-700 hover:to-blue-800 focus:ring-4 focus:ring-blue-300 transition-all duration-200 text-sm sm:text-base font-medium"
          >
            Login
          </button>
        </form>
        <p className="mt-4 sm:mt-5 text-center text-sm sm:text-base text-gray-600">
          Visitor?{" "}
          <a
            href="/visitor-login"
            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
          >
            Login here
          </a>
        </p>
      </div>
    </div>
  );
}

export default AdminLogin;