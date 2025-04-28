// import { useContext } from 'react';
// import { AuthContext } from '../context/AuthContext';

// function Housekeeping() {
//   const { isAuthenticated } = useContext(AuthContext);

//   // Mock housekeeping data
//   const housekeepingTasks = [
//     { room: '101', status: 'Clean', lastCleaned: '2025-04-26' },
//     { room: '102', status: 'In Progress', lastCleaned: '2025-04-25' },
//     { room: '103', status: 'Dirty', lastCleaned: '2025-04-24' },
//   ];

//   const updateHousekeeping = (roomNumber, status) => {
//     alert(`Housekeeping updated for Room ${roomNumber} to ${status}`);
//   };

//   if (!isAuthenticated) {
//     return (
//       <div className="text-center">
//         <h2 className="text-xl font-semibold mb-4">Access Denied</h2>
//         <p>Please log in to manage housekeeping.</p>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <h2 className="text-xl font-semibold mb-4">Housekeeping Management</h2>
//       <div className="bg-white rounded shadow overflow-x-auto">
//         <table className="min-w-full">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="p-2 text-left">Room</th>
//               <th className="p-2 text-left">Status</th>
//               <th className="p-2 text-left">Last Cleaned</th>
//               <th className="p-2 text-left">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {housekeepingTasks.map((task, index) => (
//               <tr key={index} className="border-t">
//                 <td className="p-2">{task.room}</td>
//                 <td className="p-2">{task.status}</td>
//                 <td className="p-2">{task.lastCleaned}</td>
//                 <td className="p-2">
//                   <button
//                     className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700"
//                     onClick={() => updateHousekeeping(task.room, 'Clean')}
//                   >
//                     Mark Clean
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Housekeeping;


// import { useContext } from 'react';
// import { AuthContext } from '../context/AuthContext';

// function Housekeeping() {
//   const { userType } = useContext(AuthContext);

//   // Mock housekeeping data
//   const housekeepingTasks = [
//     { room: '101', status: 'Clean', lastCleaned: '2025-04-26' },
//     { room: '102', status: 'In Progress', lastCleaned: '2025-04-25' },
//     { room: '103', status: 'Dirty', lastCleaned: '2025-04-24' },
//   ];

//   const updateHousekeeping = (roomNumber, status) => {
//     alert(`Housekeeping updated for Room ${roomNumber} to ${status}`);
//   };

//   if (userType !== 'admin') {
//     return (
//       <div className="text-center">
//         <h2 className="text-xl font-semibold mb-4">Access Denied</h2>
//         <p>Only admins can manage housekeeping.</p>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <h2 className="text-xl font-semibold mb-4">Housekeeping Management</h2>
//       <div className="bg-white rounded shadow overflow-x-auto">
//         <table className="min-w-full">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="p-2 text-left">Room</th>
//               <th className="p-2 text-left">Status</th>
//               <th className="p-2 text-left">Last Cleaned</th>
//               <th className="p-2 text-left">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {housekeepingTasks.map((task, index) => (
//               <tr key={index} className="border-t">
//                 <td className="p-2">{task.room}</td>
//                 <td className="p-2">{task.status}</td>
//                 <td className="p-2">{task.lastCleaned}</td>
//                 <td className="p-2">
//                   <button
//                     className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700"
//                     onClick={() => updateHousekeeping(task.room, 'Clean')}
//                   >
//                     Mark Clean
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Housekeeping;


import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function Housekeeping() {
  const { userType } = useContext(AuthContext);

  const housekeepingTasks = [
    { room: '101', status: 'Clean', lastCleaned: '2025-04-26' },
    { room: '102', status: 'In Progress', lastCleaned: '2025-04-25' },
    { room: '103', status: 'Dirty', lastCleaned: '2025-04-24' },
  ];

  const updateHousekeeping = (roomNumber, status) => {
    alert(`Housekeeping updated for Room ${roomNumber} to ${status}`);
  };

  if (userType !== 'admin') {
    return (
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-4">Access Denied</h2>
        <p>Only admins can manage housekeeping.</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Housekeeping Management</h2>
      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 text-left">Room</th>
              <th className="p-2 text-left">Status</th>
              <th className="p-2 text-left">Last Cleaned</th>
              <th className="p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {housekeepingTasks.map((task, index) => (
              <tr key={index} className="border-t">
                <td className="p-2">{task.room}</td>
                <td className="p-2">{task.status}</td>
                <td className="p-2">{task.lastCleaned}</td>
                <td className="p-2">
                  <button
                    className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700"
                    onClick={() => updateHousekeeping(task.room, 'Clean')}
                  >
                    Mark Clean
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Housekeeping;