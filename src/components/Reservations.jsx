// import { useContext } from 'react';
// import { RoomContext } from '../context/RoomContext';
// import { AuthContext } from '../context/AuthContext';

// function Reservations() {
//   const { rooms, checkIn, checkOut } = useContext(RoomContext);
//   const { isAuthenticated } = useContext(AuthContext);

//   if (!isAuthenticated) {
//     return (
//       <div className="text-center">
//         <h2 className="text-xl font-semibold mb-4">Access Denied</h2>
//         <p>Please log in to manage reservations.</p>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <h2 className="text-xl font-semibold mb-4">Room Reservations</h2>
//       <div className="bg-white rounded shadow overflow-x-auto">
//         <table className="min-w-full">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="p-2 text-left">Room</th>
//               <th className="p-2 text-left">Type</th>
//               <th className="p-2 text-left">Status</th>
//               <th className="p-2 text-left">Guest</th>
//               <th className="p-2 text-left">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {rooms.map(room => (
//               <tr key={room.id} className="border-t">
//                 <td className="p-2">{room.number}</td>
//                 <td className="p-2">{room.type}</td>
//                 <td className="p-2">{room.status}</td>
//                 <td className="p-2">{room.guest || '-'}</td>
//                 <td className="p-2">
//                   {room.status === 'Available' && (
//                     <button
//                       className="bg-green-600 text-white px-2 py-1 rounded mr-2 hover:bg-green-700"
//                       onClick={() => checkIn(room.id, prompt('Enter guest name:'))}
//                     >
//                       Check In
//                     </button>
//                   )}
//                   {room.status === 'Occupied' && (
//                     <button
//                       className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
//                       onClick={() => checkOut(room.id)}
//                     >
//                       Check Out
//                     </button>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Reservations;


// import { useContext } from 'react';
// import { RoomContext } from '../context/RoomContext';
// import { AuthContext } from '../context/AuthContext';

// function Reservations() {
//   const { rooms, checkIn, checkOut } = useContext(RoomContext);
//   const { userType } = useContext(AuthContext);

//   if (userType !== 'admin') {
//     return (
//       <div className="text-center">
//         <h2 className="text-xl font-semibold mb-4">Access Denied</h2>
//         <p>Only admins can manage reservations.</p>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <h2 className="text-xl font-semibold mb-4">Room Reservations</h2>
//       <div className="bg-white rounded shadow overflow-x-auto">
//         <table className="min-w-full">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="p-2 text-left">Room</th>
//               <th className="p-2 text-left">Type</th>
//               <th className="p-2 text-left">Status</th>
//               <th className="p-2 text-left">Guest</th>
//               <th className="p-2 text-left">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {rooms.map(room => (
//               <tr key={room.id} className="border-t">
//                 <td className="p-2">{room.number}</td>
//                 <td className="p-2">{room.type}</td>
//                 <td className="p-2">{room.status}</td>
//                 <td className="p-2">{room.guest || '-'}</td>
//                 <td className="p-2">
//                   {room.status === 'Available' && (
//                     <button
//                       className="bg-green-600 text-white px-2 py-1 rounded mr-2 hover:bg-green-700"
//                       onClick={() => checkIn(room.id, prompt('Enter guest name:'))}
//                     >
//                       Check In
//                     </button>
//                   )}
//                   {room.status === 'Occupied' && (
//                     <button
//                       className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
//                       onClick={() => checkOut(room.id)}
//                     >
//                       Check Out
//                     </button>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Reservations;



import { useContext } from 'react';
import { RoomContext } from '../context/RoomContext';
import { AuthContext } from '../context/AuthContext';

function Reservations() {
  const { rooms, checkIn, checkOut } = useContext(RoomContext);
  const { userType } = useContext(AuthContext);

  if (userType !== 'admin') {
    return (
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-4">Access Denied</h2>
        <p>Only admins can manage reservations.</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Room Reservations</h2>
      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 text-left">Room</th>
              <th className="p-2 text-left">Type</th>
              <th className="p-2 text-left">Status</th>
              <th className="p-2 text-left">Guest</th>
              <th className="p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rooms.map(room => (
              <tr key={room.id} className="border-t">
                <td className="p-2">{room.number}</td>
                <td className="p-2">{room.type}</td>
                <td className="p-2">{room.status}</td>
                <td className="p-2">{room.guest || '-'}</td>
                <td className="p-2">
                  {room.status === 'Available' && (
                    <button
                      className="bg-green-600 text-white px-2 py-1 rounded mr-2 hover:bg-green-700"
                      onClick={() => checkIn(room.id, prompt('Enter guest name:'))}
                    >
                      Check In
                    </button>
                  )}
                  {room.status === 'Occupied' && (
                    <button
                      className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
                      onClick={() => checkOut(room.id)}
                    >
                      Check Out
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Reservations;