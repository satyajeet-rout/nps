
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// function VisitorLogin() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post("http://localhost:3000/api/login", {
//         username,
//         password,
//         role: "visitor",
//       });
//       if (response.data.user) {
//         localStorage.setItem("user", JSON.stringify(response.data.user));
//         navigate("/visitor");
//       }
//     } catch (err) {
//       setError("Invalid username or password. Try visitor1/pass123 or visitor2/pass456.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
//         <h1 className="text-2xl font-bold mb-6 text-center">Visitor Login</h1>
//         <div className="mb-4">
//           <label className="block text-lg font-medium mb-2">Username</label>
//           <input
//             type="text"
//             className="border p-2 rounded w-full"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             placeholder="e.g., visitor1"
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
//           Admin?{" "}
//           <a href="/admin-login" className="text-blue-600 hover:underline">
//             Login here
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default VisitorLogin;




// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function VisitorLogin() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const mockUser = {
//     username: "visitor",
//     password: "pass123",
//     role: "visitor"
//   };

//   const handleLogin = () => {
//     if (username === mockUser.username && password === mockUser.password) {
//       localStorage.setItem("user", JSON.stringify({ username, role: mockUser.role }));
//       navigate("/visitor");
//     } else {
//       setError("Invalid username or password. Try visitor/pass123.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
//         <h1 className="text-2xl font-bold mb-6 text-center">Visitor Login</h1>
//         <div className="mb-4">
//           <label className="block text-lg font-medium mb-2">Username</label>
//           <input
//             type="text"
//             className="border p-2 rounded w-full"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             placeholder="e.g., visitor"
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
//           Admin?{" "}
//           <a href="/admin-login" className="text-blue-600 hover:underline">
//             Login here
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default VisitorLogin;


// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function VisitorLogin() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const mockUser = {
//     username: "visitor",
//     password: "pass123",
//     role: "visitor",
//   };

//   const handleLogin = () => {
//     if (username === mockUser.username && password === mockUser.password) {
//       try {
//         const user = { username, role: mockUser.role, id: `visitor_${Date.now()}` };
//         localStorage.setItem("user", JSON.stringify(user));
//         // Dispatch storage event to notify App.js
//         window.dispatchEvent(new Event("storage"));
//         navigate("/visitor");
//       } catch (error) {
//         setError("Failed to log in. Please try again.");
//       }
//     } else {
//       setError("Invalid username or password. Try visitor/pass123.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-6">
//       <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg max-w-md w-full transform transition-all duration-300 hover:shadow-xl">
//         <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
//           Visitor Login
//         </h1>
//         <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
//           <div className="mb-4 sm:mb-5">
//             <label
//               htmlFor="username"
//               className="block text-sm sm:text-base font-medium text-gray-700 mb-2"
//             >
//               Username
//             </label>
//             <input
//               id="username"
//               type="text"
//               className="border border-gray-300 p-3 sm:p-4 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               placeholder="e.g., visitor"
//               required
//             />
//           </div>
//           <div className="mb-4 sm:mb-5">
//             <label
//               htmlFor="password"
//               className="block text-sm sm:text-base font-medium text-gray-700 mb-2"
//             >
//               Password
//             </label>
//             <input
//               id="password"
//               type="password"
//               className="border border-gray-300 p-3 sm:p-4 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="e.g., pass123"
//               required
//             />
//           </div>
//           {error && (
//             <p className="text-red-600 text-sm sm:text-base mb-4 sm:mb-5 text-center">
//               {error}
//             </p>
//           )}
//           <button
//             type="submit"
//             className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg w-full hover:from-blue-700 hover:to-blue-800 focus:ring-4 focus:ring-blue-300 transition-all duration-200 text-sm sm:text-base font-medium"
//           >
//             Login
//           </button>
//         </form>
//         <p className="mt-4 sm:mt-5 text-center text-sm sm:text-base text-gray-600">
//           Admin?{" "}
//           <a
//             href="/admin-login"
//             className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
//           >
//             Login here
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default VisitorLogin;


import { useState } from "react";
import { useNavigate } from "react-router-dom";

function VisitorLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const mockUser = {
    username: "visitor",
    password: "pass123",
    role: "visitor",
  };

  const handleLogin = () => {
    if (username === mockUser.username && password === mockUser.password) {
      try {
        const user = { username, role: mockUser.role, id: `visitor_${username}` }; // Consistent ID
        localStorage.setItem("user", JSON.stringify(user));
        window.dispatchEvent(new Event("storage"));
        navigate("/visitor");
      } catch (error) {
        setError("An error occurred during login. Please try again.");
        console.error("Login error:", error);
      }
    } else {
      setError("Invalid username or password. Try visitor/pass123.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-6">
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg max-w-md w-full transform transition-all duration-300 hover:shadow-xl">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
          Visitor Login
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
              placeholder="e.g., visitor"
              required
              aria-describedby={error ? "login-error" : undefined}
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
              aria-describedby={error ? "login-error" : undefined}
            />
          </div>
          {error && (
            <p id="login-error" className="text-red-600 text-sm sm:text-base mb-4 sm:mb-5 text-center">
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
          Admin?{" "}
          <a
            href="/admin-login"
            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
          >
            Login here
          </a>
        </p>
      </div>
    </div>
  );
}

export default VisitorLogin;