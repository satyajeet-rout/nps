// import { useContext, useState } from 'react';
// import { RoomContext } from '../context/RoomContext';

// function VisitorPortal() {
//   const { rooms, checkIn } = useContext(RoomContext);
//   const [selectedPark, setSelectedPark] = useState('');
//   const [visitDate, setVisitDate] = useState('');
//   const [bookRoom, setBookRoom] = useState(false);
//   const [selectedRoom, setSelectedRoom] = useState('');
//   const [guestName, setGuestName] = useState('');
//   const [bookingStatus, setBookingStatus] = useState('');

//   const parks = [
//     { id: 1, name: 'Grand Canyon National Park' },
//     { id: 2, name: 'Yellowstone National Park' },
//     { id: 3, name: 'Yosemite National Park' },
//   ];

//   const availableRooms = rooms.filter(room => room.status === 'Available');

//   const handleParkBooking = (e) => {
//     e.preventDefault();
//     if (!selectedPark || !visitDate || !guestName) {
//       setBookingStatus('Please fill all fields');
//       return;
//     }

//     let bookingMessage = `Booked visit to ${selectedPark} on ${visitDate} for ${guestName}`;
//     if (bookRoom && selectedRoom) {
//       const room = rooms.find(r => r.number === selectedRoom);
//       if (room) {
//         checkIn(room.id, guestName);
//         bookingMessage += ` and reserved Room ${selectedRoom}`;
//       }
//     }
//     setBookingStatus(bookingMessage);
//     // Reset form
//     setSelectedPark('');
//     setVisitDate('');
//     setBookRoom(false);
//     setSelectedRoom('');
//     setGuestName('');
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <header className="bg-blue-800 text-white p-4 flex justify-between items-center">
//         <div>
//           <h1 className="text-2xl font-bold">NPS Visitor Portal</h1>
//           <p className="text-sm">Book Your National Park Adventure</p>
//         </div>
//         <button
//           className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
//           onClick={() => window.location.reload()} // Simple logout for demo
//         >
//           Logout
//         </button>
//       </header>
//       <main className="mt-6">
//         <h2 className="text-xl font-semibold mb-4">Book a National Park Visit</h2>
//         <div className="bg-white p-6 rounded shadow-md max-w-lg mx-auto">
//           <div>
//             <div className="mb-4">
//               <label className="block text-gray-700 mb-2" htmlFor="guestName">
//                 Your Name
//               </label>
//               <input
//                 type="text"
//                 id="guestName"
//                 value={guestName}
//                 onChange={(e) => setGuestName(e.target.value)}
//                 className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
//                 placeholder="Enter your name"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 mb-2" htmlFor="park">
//                 Select National Park
//               </label>
//               <select
//                 id="park"
//                 value={selectedPark}
//                 onChange={(e) => setSelectedPark(e.target.value)}
//                 className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
//               >
//                 <option value="">Choose a park</option>
//                 {parks.map(park => (
//                   <option key={park.id} value={park.name}>{park.name}</option>
//                 ))}
//               </select>
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 mb-2" htmlFor="visitDate">
//                 Visit Date
//               </label>
//               <input
//                 type="date"
//                 id="visitDate"
//                 value={visitDate}
//                 onChange={(e) => setVisitDate(e.target.value)}
//                 className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="flex items-center">
//                 <input
//                   type="checkbox"
//                   checked={bookRoom}
//                   onChange={(e) => setBookRoom(e.target.checked)}
//                   className="mr-2"
//                 />
//                 Book a room at the park
//               </label>
//             </div>
//             {bookRoom && (
//               <div className="mb-4">
//                 <label className="block text-gray-700 mb-2" htmlFor="room">
//                   Select Room
//                 </label>
//                 <select
//                   id="room"
//                   value={selectedRoom}
//                   onChange={(e) => setSelectedRoom(e.target.value)}
//                   className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
//                 >
//                   <option value="">Choose a room</option>
//                   {availableRooms.map(room => (
//                     <option key={room.id} value={room.number}>Room {room.number} ({room.type})</option>
//                   ))}
//                 </select>
//               </div>
//             )}
//             <button
//               onClick={handleParkBooking}
//               className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
//             >
//               Book Now
//             </button>
//             {bookingStatus && <p className="mt-4 text-center text-green-600">{bookingStatus}</p>}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default VisitorPortal;


// import { useContext, useState } from 'react';
// import { RoomContext } from '../context/RoomContext';
// import { AuthContext } from '../context/AuthContext';

// function VisitorPortal() {
//   const { rooms, checkIn } = useContext(RoomContext);
//   const { logout } = useContext(AuthContext);
//   const [filter, setFilter] = useState('all');
//   const [selectedPark, setSelectedPark] = useState(null);
//   const [visitDate, setVisitDate] = useState('');
//   const [bookRoom, setBookRoom] = useState(false);
//   const [selectedRoom, setSelectedRoom] = useState('');
//   const [guestName, setGuestName] = useState('');
//   const [bookingStatus, setBookingStatus] = useState('');

//   const parks = [
//     {
//       id: 1,
//       name: 'Grand Canyon National Park',
//       imageUrl: 'https://images.pexels.com/photos/20879885/pexels-photo-20879885/free-photo-of-grand-canyon-national-park.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//       campaignEndDate: '2025-06-30',
//       description: 'Experience the majestic Grand Canyon with breathtaking views.',
//       isPopular: true,
//     },
//     {
//       id: 2,
//       name: 'Yellowstone National Park',
//       imageUrl: 'https://images.pexels.com/photos/2416600/pexels-photo-2416600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//       campaignEndDate: '2025-07-15',
//       description: 'Discover geysers and wildlife in America’s first national park.',
//       isPopular: true,
//     },
//     {
//       id: 3,
//       name: 'Yosemite National Park',
//       imageUrl: 'https://cdn.aarp.net/content/dam/aarp/travel/destinations/2020/09/1140-yosemite-hero.imgcache.rev.web.1044.600.jpg',
//       campaignEndDate: '2025-08-01',
//       description: 'Explore granite cliffs and serene valleys in Yosemite.',
//       isPopular: false,
//     },
//   ];

//   const filteredParks = filter === 'popular' ? parks.filter(park => park.isPopular) : parks;
//   const availableRooms = rooms.filter(room => room.status === 'Available');

//   const handleParkBooking = (e) => {
//     e.preventDefault();
//     if (!selectedPark || !visitDate || !guestName) {
//       setBookingStatus('Please fill all fields');
//       return;
//     }

//     const parkData = parks.find(park => park.name === selectedPark);
//     if (parkData && new Date(visitDate) > new Date(parkData.campaignEndDate)) {
//       setBookingStatus(`Booking unavailable: Campaign ends on ${parkData.campaignEndDate}`);
//       return;
//     }

//     let bookingMessage = `Booked visit to ${selectedPark} on ${visitDate} for ${guestName}`;
//     if (bookRoom && selectedRoom) {
//       const room = rooms.find(r => r.number === selectedRoom);
//       if (room) {
//         checkIn(room.id, guestName);
//         bookingMessage += ` and reserved Room ${selectedRoom}`;
//       }
//     }
//     setBookingStatus(bookingMessage);
//     // Reset form
//     setSelectedPark(null);
//     setVisitDate('');
//     setBookRoom(false);
//     setSelectedRoom('');
//     setGuestName('');
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <header className="bg-blue-800 text-white p-4 flex justify-between items-center">
//         <div>
//           <h1 className="text-2xl font-bold">NPS Visitor Portal</h1>
//           <p className="text-sm">Book Your National Park Adventure</p>
//         </div>
//         <button
//           className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
//           onClick={logout}
//         >
//           Logout
//         </button>
//       </header>
//       <main className="max-w-7xl mx-auto p-6">
//         <h2 className="text-2xl font-semibold mb-6 text-gray-800">Explore National Parks</h2>
//         {/* Filter Bar */}
//         <div className="flex space-x-4 mb-6">
//           <button
//             className={`px-4 py-2 rounded-lg ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
//             onClick={() => setFilter('all')}
//           >
//             All Parks
//           </button>
//           <button
//             className={`px-4 py-2 rounded-lg ${filter === 'popular' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
//             onClick={() => setFilter('popular')}
//           >
//             Popular Parks
//           </button>
//         </div>
//         {/* Park Cards or Booking Form */}
//         {!selectedPark ? (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {filteredParks.map(park => (
//               <div
//                 key={park.id}
//                 className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
//               >
//                 <img
//                   src={park.imageUrl}
//                   alt={park.name}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-4">
//                   <h3 className="text-lg font-semibold text-gray-800">{park.name}</h3>
//                   <p className="text-sm text-gray-600 mt-1">{park.description}</p>
//                   <p className="text-sm text-blue-600 mt-2">
//                     Special Offer: Book by {park.campaignEndDate}
//                   </p>
//                   <button
//                     className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
//                     onClick={() => setSelectedPark(park.name)}
//                   >
//                     Book Now
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
//             <h3 className="text-lg font-semibold mb-4 text-gray-800">Book {selectedPark}</h3>
//             <img
//               src={parks.find(p => p.name === selectedPark).imageUrl}
//               alt={selectedPark}
//               className="w-full h-48 object-cover rounded-lg mb-4"
//             />
//             <div>
//               <div className="mb-4">
//                 <label className="block text-gray-700 mb-2" htmlFor="guestName">
//                   Your Name
//                 </label>
//                 <input
//                   type="text"
//                   id="guestName"
//                   value={guestName}
//                   onChange={(e) => setGuestName(e.target.value)}
//                   className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
//                   placeholder="Enter your name"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700 mb-2" htmlFor="visitDate">
//                   Visit Date
//                 </label>
//                 <input
//                   type="date"
//                   id="visitDate"
//                   value={visitDate}
//                   onChange={(e) => setVisitDate(e.target.value)}
//                   max={parks.find(p => p.name === selectedPark).campaignEndDate}
//                   className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     type="checkbox"
//                     checked={bookRoom}
//                     onChange={(e) => setBookRoom(e.target.checked)}
//                     className="mr-2"
//                   />
//                   Book a room at the park
//                 </label>
//               </div>
//               {bookRoom && (
//                 <div className="mb-4">
//                   <label className="block text-gray-700 mb-2" htmlFor="room">
//                     Select Room
//                   </label>
//                   <select
//                     id="room"
//                     value={selectedRoom}
//                     onChange={(e) => setSelectedRoom(e.target.value)}
//                     className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
//                   >
//                     <option value="">Choose a room</option>
//                     {availableRooms.map(room => (
//                       <option key={room.id} value={room.number}>
//                         Room {room.number} ({room.type})
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               )}
//               <div className="flex space-x-4">
//                 <button
//                   onClick={handleParkBooking}
//                   className="flex-1 bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
//                 >
//                   Confirm Booking
//                 </button>
//                 <button
//                   onClick={() => setSelectedPark(null)}
//                   className="flex-1 bg-gray-300 text-gray-700 p-2 rounded hover:bg-gray-400"
//                 >
//                   Back to Parks
//                 </button>
//               </div>
//               {bookingStatus && (
//                 <p className={`mt-4 text-center ${bookingStatus.includes('unavailable') ? 'text-red-600' : 'text-green-600'}`}>
//                   {bookingStatus}
//                 </p>
//               )}
//             </div>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// }

// export default VisitorPortal;



// import { useContext, useState } from 'react';
// import { RoomContext } from '../context/RoomContext';
// import { AuthContext } from '../context/AuthContext';

// function VisitorPortal() {
//   const { rooms, checkIn } = useContext(RoomContext);
//   const { logout } = useContext(AuthContext);
//   const [filter, setFilter] = useState('all');
//   const [selectedPark, setSelectedPark] = useState(null);
//   const [checkInDate, setCheckInDate] = useState('');
//   const [checkOutDate, setCheckOutDate] = useState('');
//   const [bookRoom, setBookRoom] = useState(false);
//   const [selectedRoom, setSelectedRoom] = useState('');
//   const [guestName, setGuestName] = useState('');
//   const [bookingStatus, setBookingStatus] = useState('');
//   const [showPayment, setShowPayment] = useState(false);
//   const [paymentDetails, setPaymentDetails] = useState({
//     cardNumber: '',
//     expiry: '',
//     cvv: '',
//   });
//   const [bookings, setBookings] = useState([]);
//   const [paymentCompleted, setPaymentCompleted] = useState(false);

//   const parks = [
//     {
//       id: 1,
//       name: 'Grand Canyon National Park',
//       imageUrl: 'https://images.pexels.com/photos/20879885/pexels-photo-20879885/free-photo-of-grand-canyon-national-park.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//       campaignEndDate: '2025-06-30',
//       description: 'Experience the majestic Grand Canyon with breathtaking views.',
//       isPopular: true,
//     },
//     {
//       id: 2,
//       name: 'Yellowstone National Park',
//       imageUrl: 'https://images.pexels.com/photos/2416600/pexels-photo-2416600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//       campaignEndDate: '2025-07-15',
//       description: 'Discover geysers and wildlife in America’s first national park.',
//       isPopular: true,
//     },
//     {
//       id: 3,
//       name: 'Yosemite National Park',
//       imageUrl: 'https://cdn.aarp.net/content/dam/aarp/travel/destinations/2020/09/1140-yosemite-hero.imgcache.rev.web.1044.600.jpg',
//       campaignEndDate: '2025-08-01',
//       description: 'Explore granite cliffs and serene valleys in Yosemite.',
//       isPopular: false,
//     },
//   ];

//   const filteredParks = filter === 'popular' ? parks.filter(park => park.isPopular) : parks;
//   const availableRooms = rooms.filter(room => room.status === 'Available');

//   const handlePaymentChange = (e) => {
//     setPaymentDetails({
//       ...paymentDetails,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleBooking = (e) => {
//     e.preventDefault();
//     if (!selectedPark || !checkInDate || !checkOutDate || !guestName) {
//       setBookingStatus('Please fill all fields');
//       return;
//     }

//     const parkData = parks.find(park => park.name === selectedPark);
//     if (parkData && new Date(checkInDate) > new Date(parkData.campaignEndDate)) {
//       setBookingStatus(`Booking unavailable: Campaign ends on ${parkData.campaignEndDate}`);
//       return;
//     }

//     if (new Date(checkOutDate) <= new Date(checkInDate)) {
//       setBookingStatus('Check-out date must be after check-in date');
//       return;
//     }

//     setShowPayment(true);
//     setPaymentCompleted(false);
//   };

//   const handlePaymentSubmit = (e) => {
//     e.preventDefault();
//     if (!paymentDetails.cardNumber || !paymentDetails.expiry || !paymentDetails.cvv) {
//       setBookingStatus('Please fill all payment details');
//       return;
//     }

//     setPaymentCompleted(true);
    
//     let bookingMessage = `Booked visit to ${selectedPark} from ${checkInDate} to ${checkOutDate} for ${guestName}`;
//     let roomDetails = '';
//     if (bookRoom && selectedRoom) {
//       const room = rooms.find(r => r.number === selectedRoom);
//       if (room) {
//         checkIn(room.id, guestName);
//         roomDetails = `Room ${selectedRoom}`;
//         bookingMessage += ` and reserved Room ${selectedRoom}`;
//       }
//     }

//     // Add to bookings
//     setBookings([...bookings, {
//       id: bookings.length + 1,
//       park: selectedPark,
//       guestName,
//       checkInDate,
//       checkOutDate,
//       room: roomDetails,
//       paymentStatus: 'Completed'
//     }]);

//     setBookingStatus(bookingMessage);
//     setShowPayment(false);
//     // Reset form
//     setSelectedPark(null);
//     setCheckInDate('');
//     setCheckOutDate('');
//     setBookRoom(false);
//     setSelectedRoom('');
//     setGuestName('');
//     setPaymentDetails({ cardNumber: '', expiry: '', cvv: '' });
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <header className="bg-blue-800 text-white p-4 flex justify-between items-center">
//         <div>
//           <h1 className="text-2xl font-bold">NPS Visitor Portal</h1>
//           <p className="text-sm">Book Your National Park Adventure</p>
//         </div>
//         <button
//           className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
//           onClick={logout}
//         >
//           Logout
//         </button>
//       </header>
//       <main className="max-w-7xl mx-auto p-6">
//         <h2 className="text-2xl font-semibold mb-6 text-gray-800">Explore National Parks</h2>
//         <div className="flex space-x-4 mb-6">
//           <button
//             className={`px-4 py-2 rounded-lg ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
//             onClick={() => setFilter('all')}
//           >
//             All Parks
//           </button>
//           <button
//             className={`px-4 py-2 rounded-lg ${filter === 'popular' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
//             onClick={() => setFilter('popular')}
//           >
//             Popular Parks
//           </button>
//         </div>
//         {!selectedPark ? (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {filteredParks.map(park => (
//               <div
//                 key={park.id}
//                 className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
//               >
//                 <img
//                   src={park.imageUrl}
//                   alt={park.name}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-4">
//                   <h3 className="text-lg font-semibold text-gray-800">{park.name}</h3>
//                   <p className="text-sm text-gray-600 mt-1">{park.description}</p>
//                   <p className="text-sm text-blue-600 mt-2">
//                     Special Offer: Book by {park.campaignEndDate}
//                   </p>
//                   <button
//                     className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
//                     onClick={() => setSelectedPark(park.name)}
//                   >
//                     Book Now
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
//             <h3 className="text-lg font-semibold mb-4 text-gray-800">Book {selectedPark}</h3>
//             <img
//               src={parks.find(p => p.name === selectedPark).imageUrl}
//               alt={selectedPark}
//               className="w-full h-48 object-cover rounded-lg mb-4"
//             />
//             {showPayment ? (
//               <div>
//                 <h4 className="text-md font-semibold mb-4 text-gray-800">Payment Details</h4>
//                 <div className="mb-4">
//                   <label className="block text-gray-700 mb-2" htmlFor="cardNumber">
//                     Card Number
//                   </label>
//                   <input
//                     type="text"
//                     id="cardNumber"
//                     name="cardNumber"
//                     value={paymentDetails.cardNumber}
//                     onChange={handlePaymentChange}
//                     className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
//                     placeholder="1234 5678 9012 3456"
//                   />
//                 </div>
//                 <div className="flex space-x-4 mb-4">
//                   <div className="flex-1">
//                     <label className="block text-gray-700 mb-2" htmlFor="expiry">
//                       Expiry Date
//                     </label>
//                     <input
//                       type="text"
//                       id="expiry"
//                       name="expiry"
//                       value={paymentDetails.expiry}
//                       onChange={handlePaymentChange}
//                       className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
//                       placeholder="MM/YY"
//                     />
//                   </div>
//                   <div className="flex-1">
//                     <label className="block text-gray-700 mb-2" htmlFor="cvv">
//                       CVV
//                     </label>
//                     <input
//                       type="text"
//                       id="cvv"
//                       name="cvv"
//                       value={paymentDetails.cvv}
//                       onChange={handlePaymentChange}
//                       className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
//                       placeholder="123"
//                     />
//                   </div>
//                 </div>
//                 <div className="flex space-x-4">
//                   <button
//                     onClick={handlePaymentSubmit}
//                     className="flex-1 bg-green-600 text-white p-2 rounded hover:bg-green-700"
//                   >
//                     Pay Now
//                   </button>
//                   <button
//                     onClick={() => setShowPayment(false)}
//                     className="flex-1 bg-gray-300 text-gray-700 p-2 rounded hover:bg-gray-400"
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               </div>
//             ) : (
//               <div>
//                 <div className="mb-4">
//                   <label className="block text-gray-700 mb-2" htmlFor="guestName">
//                     Your Name
//                   </label>
//                   <input
//                     type="text"
//                     id="guestName"
//                     value={guestName}
//                     onChange={(e) => setGuestName(e.target.value)}
//                     className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
//                     placeholder="Enter your name"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label className="block text-gray-700 mb-2" htmlFor="checkInDate">
//                     Check-in Date
//                   </label>
//                   <input
//                     type="date"
//                     id="checkInDate"
//                     value={checkInDate}
//                     onChange={(e) => setCheckInDate(e.target.value)}
//                     max={parks.find(p => p.name === selectedPark).campaignEndDate}
//                     className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label className="block text-gray-700 mb-2" htmlFor="checkOutDate">
//                     Check-out Date
//                   </label>
//                   <input
//                     type="date"
//                     id="checkOutDate"
//                     value={checkOutDate}
//                     onChange={(e) => setCheckOutDate(e.target.value)}
//                     max={parks.find(p => p.name === selectedPark).campaignEndDate}
//                     className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label className="flex items-center">
//                     <input
//                       type="checkbox"
//                       checked={bookRoom}
//                       onChange={(e) => setBookRoom(e.target.checked)}
//                       className="mr-2"
//                     />
//                     Book a room at the park
//                   </label>
//                 </div>
//                 {bookRoom && (
//                   <div className="mb-4">
//                     <label className="block text-gray-700 mb-2" htmlFor="room">
//                       Select Room
//                     </label>
//                     <select
//                       id="room"
//                       value={selectedRoom}
//                       onChange={(e) => setSelectedRoom(e.target.value)}
//                       className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
//                     >
//                       <option value="">Choose a room</option>
//                       {availableRooms.map(room => (
//                         <option key={room.id} value={room.number}>
//                           Room {room.number} ({room.type})
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                 )}
//                 <div className="flex space-x-4">
//                   <button
//                     onClick={handleBooking}
//                     className="flex-1 bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
//                   >
//                     Confirm Booking
//                   </button>
//                   <button
//                     onClick={() => setSelectedPark(null)}
//                     className="flex-1 bg-gray-300 text-gray-700 p-2 rounded hover:bg-gray-400"
//                   >
//                     Back to Parks
//                   </button>
//                 </div>
//               </div>
//             )}
//             {bookingStatus && (
//               <p className={`mt-4 text-center ${bookingStatus.includes('unavailable') || bookingStatus.includes('must be') ? 'text-red-600' : 'text-green-600'}`}>
//                 {bookingStatus}
//                 {paymentCompleted && ' - Payment Completed'}
//               </p>
//             )}
//           </div>
//         )}
//         {/* Bookings Section */}
//         <section className="mt-12">
//           <h2 className="text-2xl font-semibold mb-6 text-gray-800">Your Bookings</h2>
//           {bookings.length === 0 ? (
//             <p className="text-gray-600">No bookings yet.</p>
//           ) : (
//             <div className="bg-white rounded-lg shadow-md p-6">
//               <div className="grid grid-cols-1 gap-4">
//                 {bookings.map(booking => (
//                   <div
//                     key={booking.id}
//                     className="border-b last:border-b-0 pb-4 last:pb-0"
//                   >
//                     <h3 className="text-lg font-semibold text-gray-800">{booking.park}</h3>
//                     <p className="text-sm text-gray-600">Guest: {booking.guestName}</p>
//                     <p className="text-sm text-gray-600">
//                       Check-in: {booking.checkInDate}
//                     </p>
//                     <p className="text-sm text-gray-600">
//                       Check-out: {booking.checkOutDate}
//                     </p>
//                     {booking.room && (
//                       <p className="text-sm text-gray-600">Room: {booking.room}</p>
//                     )}
//                     <p className="text-sm text-green-600">
//                       Payment Status: {booking.paymentStatus}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </section>
//       </main>
//     </div>
//   );
// }

// export default VisitorPortal;



import { useContext, useState } from 'react';
import { RoomContext } from '../context/RoomContext';
import { AuthContext } from '../context/AuthContext';

function VisitorPortal() {
  const { rooms, checkIn } = useContext(RoomContext);
  const { logout } = useContext(AuthContext);
  const [filter, setFilter] = useState('all');
  const [selectedPark, setSelectedPark] = useState(null);
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [bookRoom, setBookRoom] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState('');
  const [guestName, setGuestName] = useState('');
  const [bookingStatus, setBookingStatus] = useState('');
  const [showPayment, setShowPayment] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiry: '',
    cvv: '',
  });
  const [bookings, setBookings] = useState([]);
  const [paymentCompleted, setPaymentCompleted] = useState(false);

  const parks = [
    {
      id: 1,
      name: 'Grand Canyon National Park',
      imageUrl: 'https://images.pexels.com/photos/20879885/pexels-photo-20879885/free-photo-of-grand-canyon-national-park.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      campaignEndDate: '2025-06-30',
      description: 'Experience the majestic Grand Canyon with breathtaking views.',
      isPopular: true,
    },
    {
      id: 2,
      name: 'Yellowstone National Park',
      imageUrl: 'https://images.pexels.com/photos/2416600/pexels-photo-2416600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      campaignEndDate: '2025-07-15',
      description: 'Discover geysers and wildlife in America’s first national park.',
      isPopular: true,
    },
    {
      id: 3,
      name: 'Yosemite National Park',
      imageUrl: 'https://cdn.aarp.net/content/dam/aarp/travel/destinations/2020/09/1140-yosemite-hero.imgcache.rev.web.1044.600.jpg',
      campaignEndDate: '2025-08-01',
      description: 'Explore granite cliffs and serene valleys in Yosemite.',
      isPopular: false,
    },
  ];

  const filteredParks = filter === 'popular' ? parks.filter(park => park.isPopular) : parks;
  const availableRooms = rooms.filter(room => room.status === 'Available');

  const handlePaymentChange = (e) => {
    setPaymentDetails({
      ...paymentDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleBooking = (e) => {
    e.preventDefault();
    if (!selectedPark || !checkInDate || !checkOutDate || !guestName) {
      setBookingStatus('Please fill all fields');
      return;
    }

    const parkData = parks.find(park => park.name === selectedPark);
    if (parkData && new Date(checkInDate) > new Date(parkData.campaignEndDate)) {
      setBookingStatus(`Booking unavailable: Campaign ends on ${parkData.campaignEndDate}`);
      return;
    }

    if (new Date(checkOutDate) <= new Date(checkInDate)) {
      setBookingStatus('Check-out date must be after check-in date');
      return;
    }

    // Simulate Pay.gov payment form redirect
    const transactionId = `TX${Date.now()}`;
    const amount = bookRoom && selectedRoom ? 200.00 : 100.00; // Example amount
    const returnUrl = `${window.location.origin}/payment-callback?tx=${transactionId}`;
    const payGovUrl = `https://www.pay.gov/public/form/start?amount=${amount}&account_number=${guestName}&return_url=${encodeURIComponent(returnUrl)}`;

    // Store booking details temporarily (in a real app, use session storage or backend)
    const tempBooking = {
      id: transactionId,
      park: selectedPark,
      guestName,
      checkInDate,
      checkOutDate,
      room: bookRoom && selectedRoom ? `Room ${selectedRoom}` : '',
      paymentStatus: 'Pending'
    };
    setBookings([...bookings, tempBooking]);

    // Redirect to Pay.gov (simulated)
    setBookingStatus('Redirecting to Pay.gov for payment...');
    setTimeout(() => {
      window.location.href = payGovUrl; // In production, this would redirect to Pay.gov
    }, 1000);
  };

  // Simulate Pay.gov callback handling
  const handlePaymentCallback = () => {
    // In a real app, this would be a separate route handling Pay.gov's redirect
    const urlParams = new URLSearchParams(window.location.search);
    const transactionId = urlParams.get('tx');
    const paymentStatus = urlParams.get('status') || 'success'; // Simulated status

    if (!transactionId) {
      setBookingStatus('Error: Invalid payment callback');
      return;
    }

    setBookings(prevBookings =>
      prevBookings.map(booking => {
        if (booking.id === transactionId) {
          const updatedBooking = {
            ...booking,
            paymentStatus: paymentStatus === 'success' ? 'Completed' : 'Failed'
          };
          if (paymentStatus === 'success') {
            setPaymentCompleted(true);
            setBookingStatus(`Booking confirmed for ${booking.park} - Payment Completed`);
            // Check-in room if applicable
            if (booking.room) {
              const roomNumber = booking.room.replace('Room ', '');
              const room = rooms.find(r => r.number === roomNumber);
              if (room) {
                checkIn(room.id, booking.guestName);
              }
            }
          } else {
            setBookingStatus('Payment failed. Please try again.');
          }
          return updatedBooking;
        }
        return booking;
      })
    );

    // Clear form
    setSelectedPark(null);
    setCheckInDate('');
    setCheckOutDate('');
    setBookRoom(false);
    setSelectedRoom('');
    setGuestName('');
    setShowPayment(false);
  };

  // Check for payment callback on component mount
  React.useEffect(() => {
    if (window.location.search.includes('tx=')) {
      handlePaymentCallback();
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-800 text-white p-4 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">NPS Visitor Portal</h1>
          <p className="text-sm">Book Your National Park Adventure</p>
        </div>
        <button
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          onClick={logout}
        >
          Logout
        </button>
      </header>
      <main className="max-w-7xl mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Explore National Parks</h2>
        <div className="flex space-x-4 mb-6">
          <button
            className={`px-4 py-2 rounded-lg ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setFilter('all')}
          >
            All Parks
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${filter === 'popular' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setFilter('popular')}
          >
            Popular Parks
          </button>
        </div>
        {!selectedPark ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredParks.map(park => (
              <div
                key={park.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={park.imageUrl}
                  alt={park.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">{park.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{park.description}</p>
                  <p className="text-sm text-blue-600 mt-2">
                    Special Offer: Book by {park.campaignEndDate}
                  </p>
                  <button
                    className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                    onClick={() => setSelectedPark(park.name)}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Book {selectedPark}</h3>
            <img
              src={parks.find(p => p.name === selectedPark).imageUrl}
              alt={selectedPark}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="guestName">
                  Your Name
                </label>
                <input
                  type="text"
                  id="guestName"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="checkInDate">
                  Check-in Date
                </label>
                <input
                  type="date"
                  id="checkInDate"
                  value={checkInDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                  max={parks.find(p => p.name === selectedPark).campaignEndDate}
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="checkOutDate">
                  Check-out Date
                </label>
                <input
                  type="date"
                  id="checkOutDate"
                  value={checkOutDate}
                  onChange={(e) => setCheckOutDate(e.target.value)}
                  max={parks.find(p => p.name === selectedPark).campaignEndDate}
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div className="mb-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={bookRoom}
                    onChange={(e) => setBookRoom(e.target.checked)}
                    className="mr-2"
                  />
                  Book a room at the park
                </label>
              </div>
              {bookRoom && (
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="room">
                    Select Room
                  </label>
                  <select
                    id="room"
                    value={selectedRoom}
                    onChange={(e) => setSelectedRoom(e.target.value)}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    <option value="">Choose a room</option>
                    {availableRooms.map(room => (
                      <option key={room.id} value={room.number}>
                        Room {room.number} ({room.type})
                      </option>
                    ))}
                  </select>
                </div>
              )}
              <div className="flex space-x-4">
                <button
                  onClick={handleBooking}
                  className="flex-1 bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
                >
                  Confirm Booking
                </button>
                <button
                  onClick={() => setSelectedPark(null)}
                  className="flex-1 bg-gray-300 text-gray-700 p-2 rounded hover:bg-gray-400"
                >
                  Back to Parks
                </button>
              </div>
            </div>
            {bookingStatus && (
              <p className={`mt-4 text-center ${bookingStatus.includes('unavailable') || bookingStatus.includes('must be') || bookingStatus.includes('Error') ? 'text-red-600' : 'text-green-600'}`}>
                {bookingStatus}
                {paymentCompleted && ' - Payment Completed via Pay.gov'}
              </p>
            )}
          </div>
        )}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Your Bookings</h2>
          {bookings.length === 0 ? (
            <p className="text-gray-600">No bookings yet.</p>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="grid grid-cols-1 gap-4">
                {bookings.map(booking => (
                  <div
                    key={booking.id}
                    className="border-b last:border-b-0 pb-4 last:pb-0"
                  >
                    <h3 className="text-lg font-semibold text-gray-800">{booking.park}</h3>
                    <p className="text-sm text-gray-600">Transaction ID: {booking.id}</p>
                    <p className="text-sm text-gray-600">Guest: {booking.guestName}</p>
                    <p className="text-sm text-gray-600">
                      Check-in: {booking.checkInDate}
                    </p>
                    <p className="text-sm text-gray-600">
                      Check-out: {booking.checkOutDate}
                    </p>
                    {booking.room && (
                      <p className="text-sm text-gray-600">Room: {booking.room}</p>
                    )}
                    <p className={`text-sm ${booking.paymentStatus === 'Completed' ? 'text-green-600' : 'text-red-600'}`}>
                      Payment Status: {booking.paymentStatus}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default VisitorPortal;