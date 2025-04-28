// import { useContext } from 'react';
// import { RoomContext } from '../context/RoomContext';

// function Dashboard() {
//   const { rooms } = useContext(RoomContext);

//   return (
//     <div>
//       <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <div className="bg-white p-4 rounded shadow">
//           <h3 className="font-bold">Total Rooms</h3>
//           <p className="text-2xl">{rooms.length}</p>
//         </div>
//         <div className="bg-white p-4 rounded shadow">
//           <h3 className="font-bold">Occupied</h3>
//           <p className="text-2xl">{rooms.filter(r => r.status === 'Occupied').length}</p>
//         </div>
//         <div className="bg-white p-4 rounded shadow">
//           <h3 className="font-bold">Available</h3>
//           <p className="text-2xl">{rooms.filter(r => r.status === 'Available').length}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;


// import { useContext } from 'react';
// import { RoomContext } from '../context/RoomContext';

// function Dashboard() {
//   const { rooms } = useContext(RoomContext);

//   return (
//     <div>
//       <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <div className="bg-white p-4 rounded shadow">
//           <h3 className="font-bold">Total Rooms</h3>
//           <p className="text-2xl">{rooms.length}</p>
//         </div>
//         <div className="bg-white p-4 rounded shadow">
//           <h3 className="font-bold">Occupied</h3>
//           <p className="text-2xl">{rooms.filter(r => r.status === 'Occupied').length}</p>
//         </div>
//         <div className="bg-white p-4 rounded shadow">
//           <h3 className="font-bold">Available</h3>
//           <p className="text-2xl">{rooms.filter(r => r.status === 'Available').length}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;



import { useContext } from 'react';
import { RoomContext } from '../context/RoomContext';

function Dashboard() {
  const { rooms } = useContext(RoomContext);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-bold">Total Rooms</h3>
          <p className="text-2xl">{rooms.length}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-bold">Occupied</h3>
          <p className="text-2xl">{rooms.filter(r => r.status === 'Occupied').length}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-bold">Available</h3>
          <p className="text-2xl">{rooms.filter(r => r.status === 'Available').length}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;