// import { useState } from 'react';
// import AdminLogin from './AdminLogin';
// import VisitorLogin from './VisitorLogin';

// function Landing() {
//   const [loginType, setLoginType] = useState(null);

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <div className="bg-white p-8 rounded shadow-md w-full max-w-md text-center">
//         <h2 className="text-2xl font-bold text-green-800 mb-6">NPS PMS Demo</h2>
//         <p className="text-gray-600 mb-6">Welcome to the National Park Service Property Management System. Please select your role to log in.</p>
//         {loginType === 'admin' && <AdminLogin />}
//         {loginType === 'visitor' && <VisitorLogin />}
//         {!loginType && (
//           <div className="flex flex-col space-y-4">
//             <button
//               className="bg-green-600 text-white p-2 rounded hover:bg-green-700"
//               onClick={() => setLoginType('admin')}
//             >
//               Admin Login
//             </button>
//             <button
//               className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
//               onClick={() => setLoginType('visitor')}
//             >
//               Visitor Login
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Landing;


import { useState } from 'react';
import AdminLogin from './AdminLogin';
import VisitorLogin from './VisitorLogin';

function Landing() {
  const [loginType, setLoginType] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md text-center">
        <h2 className="text-2xl font-bold text-green-800 mb-6">NPS PMS Demo</h2>
        <p className="text-gray-600 mb-6">Welcome to the National Park Service Property Management System. Please select your role to log in.</p>
        {loginType === 'admin' && <AdminLogin />}
        {loginType === 'visitor' && <VisitorLogin />}
        {!loginType && (
          <div className="flex flex-col space-y-4">
            <button
              className="bg-green-600 text-white p-2 rounded hover:bg-green-700"
              onClick={() => setLoginType('admin')}
            >
              Admin Login
            </button>
            <button
              className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
              onClick={() => setLoginType('visitor')}
            >
              Visitor Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Landing;