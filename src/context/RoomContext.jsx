// import { createContext, useState } from 'react';

// export const RoomContext = createContext();

// export function RoomProvider({ children }) {
//   const [rooms, setRooms] = useState([
//     { id: 1, number: '101', type: 'Standard', status: 'Available', guest: null },
//     { id: 2, number: '102', type: 'Deluxe', status: 'Occupied', guest: 'John Doe' },
//     { id: 3, number: '103', type: 'Standard', status: 'Needs Cleaning', guest: null },
//   ]);

//   const checkIn = (roomId, guestName) => {
//     setRooms(rooms.map(room =>
//       room.id === roomId ? { ...room, status: 'Occupied', guest: guestName } : room
//     ));
//     alert(`Checked in ${guestName} to Room ${roomId}`);
//   };

//   const checkOut = (roomId) => {
//     setRooms(rooms.map(room =>
//       room.id === roomId ? { ...room, status: 'Needs Cleaning', guest: null } : room
//     ));
//     alert(`Checked out from Room ${roomId}`);
//   };

//   return (
//     <RoomContext.Provider value={{ rooms, checkIn, checkOut }}>
//       {children}
//     </RoomContext.Provider>
//   );
// }


import { createContext, useState } from 'react';

export const RoomContext = createContext();

export function RoomProvider({ children }) {
  const [rooms, setRooms] = useState([
    { id: 1, number: '101', type: 'Standard', status: 'Available', guest: null },
    { id: 2, number: '102', type: 'Deluxe', status: 'Occupied', guest: 'John Doe' },
    { id: 3, number: '103', type: 'Standard', status: 'Needs Cleaning', guest: null },
  ]);

  const checkIn = (roomId, guestName) => {
    setRooms(rooms.map(room =>
      room.id === roomId ? { ...room, status: 'Occupied', guest: guestName } : room
    ));
  };

  const checkOut = (roomId) => {
    setRooms(rooms.map(room =>
      room.id === roomId ? { ...room, status: 'Needs Cleaning', guest: null } : room
    ));
  };

  return (
    <RoomContext.Provider value={{ rooms, checkIn, checkOut }}>
      {children}
    </RoomContext.Provider>
  );
}