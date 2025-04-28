// import { useState, useEffect } from "react";
// import axios from "axios";

// const nationalParks = [
//   { id: 1, name: "Yellowstone", rooms: ["Cabin A", "Cabin B"], campsites: ["Site 1", "Site 2"] },
//   { id: 2, name: "Yosemite", rooms: ["Suite 1", "Suite 2"], campsites: ["Site A", "Site B"] },
//   { id: 3, name: "Grand Canyon", rooms: ["Room 101", "Room 102"], campsites: ["Site X", "Site Y"] },
// ];

// function AdminDashboard() {
//   const [bookings, setBookings] = useState([]);
//   const [complaints, setComplaints] = useState([]);
//   const [report, setReport] = useState({});
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       setError("");
//       try {
//         const [bookingsRes, complaintsRes, reportRes] = await Promise.all([
//           axios.get("http://localhost:3000/api/bookings"),
//           axios.get("http://localhost:3000/api/complaints"),
//           axios.get("http://localhost:3000/api/reports"),
//         ]);
//         setBookings(bookingsRes.data);
//         setComplaints(complaintsRes.data);
//         setReport(reportRes.data);
//       } catch (err) {
//         setError("Failed to fetch data. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   // Helper function to format dates
//   const formatDate = (dateString) => {
//     if (!dateString) return "N/A";
//     return new Date(dateString).toLocaleDateString("en-US", {
//       year: "numeric",
//       month: "short",
//       day: "numeric",
//     });
//   };

//   return (
//     <div className="p-6 max-w-6xl mx-auto">
//       <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
//       {error && <p className="text-red-600 mb-4">{error}</p>}
//       {loading && <p className="text-gray-600 mb-4">Loading data...</p>}
      
//       <h2 className="text-2xl font-semibold mb-4">National Parks</h2>
//       <ul className="list-disc pl-6 mb-6">
//         {nationalParks.map((park) => (
//           <li key={park.id}>{park.name}</li>
//         ))}
//       </ul>

//       <h2 className="text-2xl font-semibold mb-4">Bookings</h2>
//       {bookings.length === 0 && !loading && (
//         <p className="text-gray-600 mb-4">No bookings available.</p>
//       )}
//       {bookings.length > 0 && (
//         <table className="w-full border-collapse mb-6">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border p-2">Park</th>
//               <th className="border p-2">Check-In</th>
//               <th className="border p-2">Check-Out</th>
//               <th className="border p-2">Room</th>
//               <th className="border p-2">Campsite</th>
//               <th className="border p-2">Special Request</th>
//             </tr>
//           </thead>
//           <tbody>
//             {bookings.map((booking) => (
//               <tr key={booking._id || booking.id} className="border">
//                 <td className="border p-2">
//                   {nationalParks.find((p) => p.id === booking.parkId)?.name || "Unknown Park"}
//                 </td>
//                 <td className="border p-2">{formatDate(booking.checkIn)}</td>
//                 <td className="border p-2">{formatDate(booking.checkOut)}</td>
//                 <td className="border p-2">{booking.room || "N/A"}</td>
//                 <td className="border p-2">{booking.campsite || "N/A"}</td>
//                 <td className="border p-2">{booking.specialRequest || "None"}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}

//       <h2 className="text-2xl font-semibold mb-4">Room Service Complaints</h2>
//       {complaints.length === 0 && !loading && (
//         <p className="text-gray-600 mb-4">No complaints available.</p>
//       )}
//       {complaints.length > 0 && (
//         <table className="w-full border-collapse mb-6">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border p-2">Park</th>
//               <th className="border p-2">Complaint</th>
//             </tr>
//           </thead>
//           <tbody>
//             {complaints.map((complaint) => (
//               <tr key={complaint._id || complaint.id} className="border">
//                 <td className="border p-2">
//                   {nationalParks.find((p) => p.id === complaint.parkId)?.name || "Unknown Park"}
//                 </td>
//                 <td className="border p-2">{complaint.complaint || "N/A"}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}

//       <h2 className="text-2xl font-semibold mb-4">Reports</h2>
//       {Object.keys(report.occupancy || {}).length === 0 && !loading && (
//         <p className="text-gray-600 mb-4">No occupancy data available.</p>
//       )}
//       {Object.keys(report.occupancy || {}).length > 0 && (
//         <div>
//           <p>Occupancy by Park:</p>
//           <ul className="list-disc pl-6">
//             {Object.entries(report.occupancy || {}).map(([parkId, count]) => (
//               <li key={parkId}>
//                 {nationalParks.find((p) => p.id === Number(parkId))?.name || "Unknown Park"}: {count} bookings
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// export default AdminDashboard;



// import { useState, useEffect } from "react";

// const nationalParks = [
//   { id: 1, name: "Yellowstone", rooms: ["Cabin A", "Cabin B"], campsites: ["Site 1", "Site 2"] },
//   { id: 2, name: "Yosemite", rooms: ["Suite 1", "Suite 2"], campsites: ["Site A", "Site B"] },
//   { id: 3, name: "Grand Canyon", rooms: ["Room 101", "Room 102"], campsites: ["Site X", "Site Y"] },
// ];

// function AdminDashboard() {
//   const [bookings, setBookings] = useState([]);
//   const [roomServiceRequests, setRoomServiceRequests] = useState([]);
//   const [occupancy, setOccupancy] = useState({});

//   useEffect(() => {
//     // Aggregate bookings and room service requests from localStorage
//     const loadLocalStorageData = () => {
//       const allBookings = [];
//       const allRoomServiceRequests = [];
//       const occupancyCount = {};

//       // Iterate through localStorage keys
//       Object.keys(localStorage).forEach((key) => {
//         if (key.startsWith("bookings_")) {
//           try {
//             const data = JSON.parse(localStorage.getItem(key) || "[]");
//             if (Array.isArray(data)) {
//               data.forEach((booking) => {
//                 // Validate booking structure
//                 if (booking.visitorId && booking.parkId) {
//                   allBookings.push(booking);
//                   // Update occupancy count
//                   const parkId = booking.parkId;
//                   occupancyCount[parkId] = (occupancyCount[parkId] || 0) + 1;
//                 }
//               });
//             }
//           } catch (e) {
//             console.error(`Failed to parse ${key}:`, e);
//           }
//         } else if (key.startsWith("roomServiceRequests_")) {
//           try {
//             const data = JSON.parse(localStorage.getItem(key) || "[]");
//             if (Array.isArray(data)) {
//               data.forEach((request) => {
//                 // Validate request structure
//                 if (request.visitorId && request.bookingId) {
//                   allRoomServiceRequests.push(request);
//                 }
//               });
//             }
//           } catch (e) {
//             console.error(`Failed to parse ${key}:`, e);
//           }
//         }
//       });

//       setBookings(allBookings);
//       setRoomServiceRequests(allRoomServiceRequests);
//       setOccupancy(occupancyCount);
//       console.log("Loaded bookings:", allBookings);
//       console.log("Loaded room service requests:", allRoomServiceRequests);
//       console.log("Occupancy:", occupancyCount);
//     };

//     loadLocalStorageData();
//   }, []);

//   // Helper function to format dates
//   const formatDate = (dateString) => {
//     if (!dateString) return "N/A";
//     return new Date(dateString).toLocaleDateString("en-US", {
//       year: "numeric",
//       month: "short",
//       day: "numeric",
//     });
//   };

//   return (
//     <div className="p-6 max-w-6xl mx-auto">
//       <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

//       <h2 className="text-2xl font-semibold mb-4">National Parks</h2>
//       <ul className="list-disc pl-6 mb-6">
//         {nationalParks.map((park) => (
//           <li key={park.id}>{park.name}</li>
//         ))}
//       </ul>

//       <h2 className="text-2xl font-semibold mb-4">Bookings</h2>
//       {bookings.length === 0 && (
//         <p className="text-gray-600 mb-4">No bookings available.</p>
//       )}
//       {bookings.length > 0 && (
//         <table className="w-full border-collapse mb-6">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border p-2">Park</th>
//               <th className="border p-2">Check-In</th>
//               <th className="border p-2">Check-Out</th>
//               <th className="border p-2">Room</th>
//               <th className="border p-2">Campsite</th>
//               <th className="border p-2">Special Request</th>
//             </tr>
//           </thead>
//           <tbody>
//             {bookings.map((booking) => (
//               <tr key={`${booking.visitorId}_${booking.id}`} className="border">
//                 <td className="border p-2">{booking.parkName || "Unknown Park"}</td>
//                 <td className="border p-2">{formatDate(booking.checkIn)}</td>
//                 <td className="border p-2">{formatDate(booking.checkOut)}</td>
//                 <td className="border p-2">{booking.room || "N/A"}</td>
//                 <td className="border p-2">{booking.campsite || "N/A"}</td>
//                 <td className="border p-2">{booking.specialRequest || "None"}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}

//       <h2 className="text-2xl font-semibold mb-4">Room Service Requests</h2>
//       {roomServiceRequests.length === 0 && (
//         <p className="text-gray-600 mb-4">No room service requests available.</p>
//       )}
//       {roomServiceRequests.length > 0 && (
//         <table className="w-full border-collapse mb-6">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border p-2">Park</th>
//               <th className="border p-2">Booking ID</th>
//               <th className="border p-2">Service Type</th>
//               <th className="border p-2">Special Request</th>
//             </tr>
//           </thead>
//           <tbody>
//             {roomServiceRequests.map((request) => (
//               <tr key={`${request.visitorId}_${request.id}`} className="border">
//                 <td className="border p-2">{request.parkName || "Unknown Park"}</td>
//                 <td className="border p-2">{request.bookingId}</td>
//                 <td className="border p-2">{request.serviceType || "N/A"}</td>
//                 <td className="border p-2">{request.specialRequest || "None"}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}

//       <h2 className="text-2xl font-semibold mb-4">Occupancy by Park</h2>
//       {Object.keys(occupancy).length === 0 && (
//         <p className="text-gray-600 mb-4">No occupancy data available.</p>
//       )}
//       {Object.keys(occupancy).length > 0 && (
//         <div>
//           <ul className="list-disc pl-6">
//             {Object.entries(occupancy).map(([parkId, count]) => (
//               <li key={parkId}>
//                 {nationalParks.find((p) => p.id === Number(parkId))?.name || "Unknown Park"}: {count} bookings
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// export default AdminDashboard;



// import { useState, useEffect } from "react";

// const nationalParks = [
//   { id: 1, name: "Yellowstone", rooms: ["Cabin A", "Cabin B"], campsites: ["Site 1", "Site 2"] },
//   { id: 2, name: "Yosemite", rooms: ["Suite 1", "Suite 2"], campsites: ["Site A", "Site B"] },
//   { id: 3, name: "Grand Canyon", rooms: ["Room 101", "Room 102"], campsites: ["Site X", "Site Y"] },
// ];

// function AdminDashboard() {
//   const [bookings, setBookings] = useState([]);
//   const [roomServiceRequests, setRoomServiceRequests] = useState([]);
//   const [occupancy, setOccupancy] = useState({});
//   const [activeSection, setActiveSection] = useState("nationalParks");

//   useEffect(() => {
//     // Aggregate bookings and room service requests from localStorage
//     const loadLocalStorageData = () => {
//       const allBookings = [];
//       const allRoomServiceRequests = [];
//       const occupancyCount = {};

//       Object.keys(localStorage).forEach((key) => {
//         if (key.startsWith("bookings_")) {
//           try {
//             const data = JSON.parse(localStorage.getItem(key) || "[]");
//             if (Array.isArray(data)) {
//               data.forEach((booking) => {
//                 if (booking.visitorId && booking.parkId) {
//                   allBookings.push(booking);
//                   const parkId = booking.parkId;
//                   occupancyCount[parkId] = (occupancyCount[parkId] || 0) + 1;
//                 }
//               });
//             }
//           } catch (e) {
//             console.error(`Failed to parse ${key}:`, e);
//           }
//         } else if (key.startsWith("roomServiceRequests_")) {
//           try {
//             const data = JSON.parse(localStorage.getItem(key) || "[]");
//             if (Array.isArray(data)) {
//               data.forEach((request) => {
//                 if (request.visitorId && request.bookingId) {
//                   allRoomServiceRequests.push(request);
//                 }
//               });
//             }
//           } catch (e) {
//             console.error(`Failed to parse ${key}:`, e);
//           }
//         }
//       });

//       setBookings(allBookings);
//       setRoomServiceRequests(allRoomServiceRequests);
//       setOccupancy(occupancyCount);
//       console.log("Loaded bookings:", allBookings);
//       console.log("Loaded room service requests:", allRoomServiceRequests);
//       console.log("Occupancy:", occupancyCount);
//     };

//     loadLocalStorageData();
//   }, []);

//   // Helper function to format dates
//   const formatDate = (dateString) => {
//     if (!dateString) return "N/A";
//     return new Date(dateString).toLocaleDateString("en-US", {
//       year: "numeric",
//       month: "short",
//       day: "numeric",
//     });
//   };

//   // Sidebar button component
//   const SidebarButton = ({ section, label, icon }) => (
//     <button
//       className={`flex items-center w-full p-4 text-left text-gray-700 rounded-lg transition-colors duration-200 ${
//         activeSection === section
//           ? "bg-blue-600 text-white"
//           : "hover:bg-blue-100"
//       }`}
//       onClick={() => setActiveSection(section)}
//     >
//       <span className="mr-3">{icon}</span>
//       {label}
//     </button>
//   );

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg">
//         <div className="p-6">
//           <h1 className="text-2xl font-bold text-blue-600">Admin Dashboard</h1>
//         </div>
//         <nav className="mt-4 space-y-2">
//           <SidebarButton
//             section="nationalParks"
//             label="National Parks"
//             icon={
//               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
//                 <path d="M10 2a8 8 0 00-8 8c0 4.42 3.58 8 8 8s8-3.58 8-8a8 8 0 00-8-8zm0 14a6 6 0 01-6-6c0-3.31 2.69-6 6-6s6 2.69 6 6a6 6 0 01-6 6z" />
//               </svg>
//             }
//           />
//           <SidebarButton
//             section="bookings"
//             label="Bookings"
//             icon={
//               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
//                 <path d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7l-4-4H6zm5 3v2h2V5h-2z" />
//               </svg>
//             }
//           />
//           <SidebarButton
//             section="roomService"
//             label="Room Service Requests"
//             icon={
//               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
//                 <path d="M9 2a7 7 0 00-7 7v6a2 2 0 002 2h12a2 2 0 002-2V9a7 7 0 00-7-7H9zm0 2h2a5 5 0 015 5H4a5 5 0 015-5z" />
//               </svg>
//             }
//           />
//           <SidebarButton
//             section="occupancy"
//             label="Occupancy by Park"
//             icon={
//               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
//                 <path d="M10 2a8 8 0 00-8 8c0 4.42 3.58 8 8 8s8-3.58 8-8a8 8 0 00-8-8zm0 14a6 6 0 01-6-6c0-3.31 2.69-6 6-6s6 2.69 6 6a6 6 0 01-6 6z" />
//               </svg>
//             }
//           />
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div className="ml-64 flex-1 p-8">
//         <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-6 transition-opacity duration-300">
//           {/* National Parks Section */}
//           {activeSection === "nationalParks" && (
//             <div>
//               <h2 className="text-3xl font-bold text-gray-800 mb-6">National Parks</h2>
//               <ul className="space-y-3">
//                 {nationalParks.map((park) => (
//                   <li
//                     key={park.id}
//                     className="p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition-colors duration-200"
//                   >
//                     <span className="text-lg font-medium text-gray-700">{park.name}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           {/* Bookings Section */}
//           {activeSection === "bookings" && (
//             <div>
//               <h2 className="text-3xl font-bold text-gray-800 mb-6">Bookings</h2>
//               {bookings.length === 0 && (
//                 <p className="text-gray-500 text-lg">No bookings available.</p>
//               )}
//               {bookings.length > 0 && (
//                 <div className="overflow-x-auto">
//                   <table className="w-full border-collapse">
//                     <thead>
//                       <tr className="bg-blue-600 text-white">
//                         <th className="p-4 text-left">Park</th>
//                         <th className="p-4 text-left">Check-In</th>
//                         <th className="p-4 text-left">Check-Out</th>
//                         <th className="p-4 text-left">Room</th>
//                         <th className="p-4 text-left">Campsite</th>
//                         <th className="p-4 text-left">Special Request</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {bookings.map((booking, index) => (
//                         <tr
//                           key={`${booking.visitorId}_${booking.id}`}
//                           className={`border-b ${
//                             index % 2 === 0 ? "bg-gray-50" : "bg-white"
//                           } hover:bg-blue-50 transition-colors duration-200`}
//                         >
//                           <td className="p-4">{booking.parkName || "Unknown Park"}</td>
//                           <td className="p-4">{formatDate(booking.checkIn)}</td>
//                           <td className="p-4">{formatDate(booking.checkOut)}</td>
//                           <td className="p-4">{booking.room || "N/A"}</td>
//                           <td className="p-4">{booking.campsite || "N/A"}</td>
//                           <td className="p-4">{booking.specialRequest || "None"}</td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               )}
//             </div>
//           )}

//           {/* Room Service Requests Section */}
//           {activeSection === "roomService" && (
//             <div>
//               <h2 className="text-3xl font-bold text-gray-800 mb-6">Room Service Requests</h2>
//               {roomServiceRequests.length === 0 && (
//                 <p className="text-gray-500 text-lg">No room service requests available.</p>
//               )}
//               {roomServiceRequests.length > 0 && (
//                 <div className="overflow-x-auto">
//                   <table className="w-full border-collapse">
//                     <thead>
//                       <tr className="bg-blue-600 text-white">
//                         <th className="p-4 text-left">Park</th>
//                         <th className="p-4 text-left">Booking ID</th>
//                         <th className="p-4 text-left">Service Type</th>
//                         <th className="p-4 text-left">Special Request</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {roomServiceRequests.map((request, index) => (
//                         <tr
//                           key={`${request.visitorId}_${request.id}`}
//                           className={`border-b ${
//                             index % 2 === 0 ? "bg-gray-50" : "bg-white"
//                           } hover:bg-blue-50 transition-colors duration-200`}
//                         >
//                           <td className="p-4">{request.parkName || "Unknown Park"}</td>
//                           <td className="p-4">{request.bookingId}</td>
//                           <td className="p-4">{request.serviceType || "N/A"}</td>
//                           <td className="p-4">{request.specialRequest || "None"}</td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               )}
//             </div>
//           )}

//           {/* Occupancy by Park Section */}
//           {activeSection === "occupancy" && (
//             <div>
//               <h2 className="text-3xl font-bold text-gray-800 mb-6">Occupancy by Park</h2>
//               {Object.keys(occupancy).length === 0 && (
//                 <p className="text-gray-500 text-lg">No occupancy data available.</p>
//               )}
//               {Object.keys(occupancy).length > 0 && (
//                 <ul className="space-y-3">
//                   {Object.entries(occupancy).map(([parkId, count]) => (
//                     <li
//                       key={parkId}
//                       className="p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition-colors duration-200"
//                     >
//                       <span className="text-lg font-medium text-gray-700">
//                         {nationalParks.find((p) => p.id === Number(parkId))?.name ||
//                           "Unknown Park"}
//                         : {count} bookings
//                       </span>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AdminDashboard;




// import { useState, useEffect } from "react";

// const nationalParks = [
//   {
//     id: 1,
//     name: "Yellowstone",
//     rooms: ["Cabin A", "Cabin B"],
//     campsites: ["Site 1", "Site 2"],
//     images: [
//       "https://media.istockphoto.com/id/1254906773/photo/grand-prismatic-spring-yellowstone-national-park.jpg?b=1&s=612x612&w=0&k=20&c=Q6csMFyyRrRUtOPI7Rw4VTV_piy15gtw7AjtnfGoHOs=&auto=format&fit=crop&w=500&q=60",
//     ],
//   },
//   {
//     id: 2,
//     name: "Yosemite",
//     rooms: ["Suite 1", "Suite 2"],
//     campsites: ["Site A", "Site B"],
//     images: [
//       "https://c4.wallpaperflare.com/wallpaper/382/231/775/yosemite-valley-el-capitan-united-states-california-wallpaper-preview.jpg",
//     ],
//   },
//   {
//     id: 3,
//     name: "Grand Canyon",
//     rooms: ["Room 101", "Room 102"],
//     campsites: ["Site X", "Site Y"],
//     images: [
//       "https://images.pexels.com/photos/20879885/pexels-photo-20879885/free-photo-of-grand-canyon-national-park.jpeg",
//     ],
//   },
// ];

// function AdminDashboard() {
//   const [bookings, setBookings] = useState([]);
//   const [roomServiceRequests, setRoomServiceRequests] = useState([]);
//   const [occupancy, setOccupancy] = useState({});
//   const [activeSection, setActiveSection] = useState("nationalParks");

//   useEffect(() => {
//     // Aggregate bookings and room service requests from localStorage
//     const loadLocalStorageData = () => {
//       const allBookings = [];
//       const allRoomServiceRequests = [];
//       const occupancyCount = {};

//       Object.keys(localStorage).forEach((key) => {
//         if (key.startsWith("bookings_")) {
//           try {
//             const data = JSON.parse(localStorage.getItem(key) || "[]");
//             if (Array.isArray(data)) {
//               data.forEach((booking) => {
//                 if (booking.visitorId && booking.parkId) {
//                   allBookings.push(booking);
//                   const parkId = booking.parkId;
//                   occupancyCount[parkId] = (occupancyCount[parkId] || 0) + 1;
//                 }
//               });
//             }
//           } catch (e) {
//             console.error(`Failed to parse ${key}:`, e);
//           }
//         } else if (key.startsWith("roomServiceRequests_")) {
//           try {
//             const data = JSON.parse(localStorage.getItem(key) || "[]");
//             if (Array.isArray(data)) {
//               data.forEach((request) => {
//                 if (request.visitorId && request.bookingId) {
//                   // Load serviceAppointed status from localStorage
//                   const statusKey = `roomServiceStatus_${request.visitorId}_${request.id}`;
//                   const serviceAppointed = localStorage.getItem(statusKey) === "true";
//                   allRoomServiceRequests.push({
//                     ...request,
//                     serviceAppointed,
//                   });
//                 }
//               });
//             }
//           } catch (e) {
//             console.error(`Failed to parse ${key}:`, e);
//           }
//         }
//       });

//       setBookings(allBookings);
//       setRoomServiceRequests(allRoomServiceRequests);
//       setOccupancy(occupancyCount);
//       console.log("Loaded bookings:", allBookings);
//       console.log("Loaded room service requests:", allRoomServiceRequests);
//       console.log("Occupancy:", occupancyCount);
//     };

//     loadLocalStorageData();
//   }, []);

//   // Helper function to format dates
//   const formatDate = (dateString) => {
//     if (!dateString) return "N/A";
//     return new Date(dateString).toLocaleDateString("en-US", {
//       year: "numeric",
//       month: "short",
//       day: "numeric",
//     });
//   };

//   // Toggle service appointed status
//   const toggleServiceAppointed = (request) => {
//     const statusKey = `roomServiceStatus_${request.visitorId}_${request.id}`;
//     const newStatus = !request.serviceAppointed;
//     localStorage.setItem(statusKey, newStatus.toString());
//     setRoomServiceRequests((prev) =>
//       prev.map((r) =>
//         r.visitorId === request.visitorId && r.id === request.id
//           ? { ...r, serviceAppointed: newStatus }
//           : r
//       )
//     );
//     console.log(`Toggled ${statusKey} to ${newStatus}`);
//   };

//   // Sidebar button component
//   const SidebarButton = ({ section, label, icon }) => (
//     <button
//       className={`flex items-center w-full p-4 text-left text-gray-700 rounded-lg transition-colors duration-200 ${
//         activeSection === section
//           ? "bg-blue-600 text-white"
//           : "hover:bg-blue-100"
//       }`}
//       onClick={() => setActiveSection(section)}
//     >
//       <span className="mr-3">{icon}</span>
//       {label}
//     </button>
//   );

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg">
//         <div className="p-6">
//           <h1 className="text-2xl font-bold text-blue-600">Admin Dashboard</h1>
//         </div>
//         <nav className="mt-4 space-y-2">
//           <SidebarButton
//             section="nationalParks"
//             label="National Parks"
//             icon={
//               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
//                 <path d="M10 2a8 8 0 00-8 8c0 4.42 3.58 8 8 8s8-3.58 8-8a8 8 0 00-8-8zm0 14a6 6 0 01-6-6c0-3.31 2.69-6 6-6s6 2.69 6 6a6 6 0 01-6 6z" />
//               </svg>
//             }
//           />
//           <SidebarButton
//             section="bookings"
//             label="Bookings"
//             icon={
//               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
//                 <path d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7l-4-4H6zm5 3v2h2V5h-2z" />
//               </svg>
//             }
//           />
//           <SidebarButton
//             section="roomService"
//             label="Room Service Requests"
//             icon={
//               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
//                 <path d="M9 2a7 7 0 00-7 7v6a2 2 0 002 2h12a2 2 0 002-2V9a7 7 0 00-7-7H9zm0 2h2a5 5 0 015 5H4a5 5 0 015-5z" />
//               </svg>
//             }
//           />
//           <SidebarButton
//             section="occupancy"
//             label="Occupancy by Park"
//             icon={
//               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
//                 <path d="M10 2a8 8 0 00-8 8c0 4.42 3.58 8 8 8s8-3.58 8-8a8 8 0 00-8-8zm0 14a6 6 0 01-6-6c0-3.31 2.69-6 6-6s6 2.69 6 6a6 6 0 01-6 6z" />
//               </svg>
//             }
//           />
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div className="ml-64 flex-1 p-8">
//         <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-6 transition-opacity duration-300">
//           {/* National Parks Section */}
//           {activeSection === "nationalParks" && (
//             <div>
//               <h2 className="text-3xl font-bold text-gray-800 mb-6">National Parks</h2>
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {nationalParks.map((park) => (
//                   <div
//                     key={park.id}
//                     className="relative bg-gray-50 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-200"
//                   >
//                     <img
//                       src={park.images[0] || "https://via.placeholder.com/300"}
//                       alt={`${park.name} view`}
//                       className="w-full h-48 object-cover"
//                     />
//                     <div className="p-4">
//                       <h3 className="text-lg font-semibold text-gray-700">{park.name}</h3>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Bookings Section */}
//           {activeSection === "bookings" && (
//             <div>
//               <h2 className="text-3xl font-bold text-gray-800 mb-6">Bookings</h2>
//               {bookings.length === 0 && (
//                 <p className="text-gray-500 text-lg">No bookings available.</p>
//               )}
//               {bookings.length > 0 && (
//                 <div className="overflow-x-auto">
//                   <table className="w-full border-collapse">
//                     <thead>
//                       <tr className="bg-blue-600 text-white">
//                         <th className="p-4 text-left">Park</th>
//                         <th className="p-4 text-left">Check-In</th>
//                         <th className="p-4 text-left">Check-Out</th>
//                         <th className="p-4 text-left">Room</th>
//                         <th className="p-4 text-left">Campsite</th>
//                         <th className="p-4 text-left">Special Request</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {bookings.map((booking, index) => (
//                         <tr
//                           key={`${booking.visitorId}_${booking.id}`}
//                           className={`border-b ${
//                             index % 2 === 0 ? "bg-gray-50" : "bg-white"
//                           } hover:bg-blue-50 transition-colors duration-200`}
//                         >
//                           <td className="p-4">{booking.parkName || "Unknown Park"}</td>
//                           <td className="p-4">{formatDate(booking.checkIn)}</td>
//                           <td className="p-4">{formatDate(booking.checkOut)}</td>
//                           <td className="p-4">{booking.room || "N/A"}</td>
//                           <td className="p-4">{booking.campsite || "N/A"}</td>
//                           <td className="p-4">{booking.specialRequest || "None"}</td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               )}
//             </div>
//           )}

//           {/* Room Service Requests Section */}
//           {activeSection === "roomService" && (
//             <div>
//               <h2 className="text-3xl font-bold text-gray-800 mb-6">Room Service Requests</h2>
//               {roomServiceRequests.length === 0 && (
//                 <p className="text-gray-500 text-lg">No room service requests available.</p>
//               )}
//               {roomServiceRequests.length > 0 && (
//                 <div className="overflow-x-auto">
//                   <table className="w-full border-collapse">
//                     <thead>
//                       <tr className="bg-blue-600 text-white">
//                         <th className="p-4 text-left">Park</th>
//                         <th className="p-4 text-left">Booking ID</th>
//                         <th className="p-4 text-left">Service Type</th>
//                         <th className="p-4 text-left">Special Request</th>
//                         <th className="p-4 text-left">Service Appointed</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {roomServiceRequests.map((request, index) => (
//                         <tr
//                           key={`${request.visitorId}_${request.id}`}
//                           className={`border-b ${
//                             index % 2 === 0 ? "bg-gray-50" : "bg-white"
//                           } hover:bg-blue-50 transition-colors duration-200`}
//                         >
//                           <td className="p-4">{request.parkName || "Unknown Park"}</td>
//                           <td className="p-4">{request.bookingId}</td>
//                           <td className="p-4">{request.serviceType || "N/A"}</td>
//                           <td className="p-4">{request.specialRequest || "None"}</td>
//                           <td className="p-4">
//                             <button
//                               onClick={() => toggleServiceAppointed(request)}
//                               className={`px-3 py-1 rounded-full text-white text-sm font-medium transition-colors duration-200 ${
//                                 request.serviceAppointed
//                                   ? "bg-green-500 hover:bg-green-600"
//                                   : "bg-red-500 hover:bg-red-600"
//                               }`}
//                             >
//                               {request.serviceAppointed ? "Yes" : "No"}
//                             </button>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               )}
//             </div>
//           )}

//           {/* Occupancy by Park Section */}
//           {activeSection === "occupancy" && (
//             <div>
//               <h2 className="text-3xl font-bold text-gray-800 mb-6">Occupancy by Park</h2>
//               {Object.keys(occupancy).length === 0 && (
//                 <p className="text-gray-500 text-lg">No occupancy data available.</p>
//               )}
//               {Object.keys(occupancy).length > 0 && (
//                 <ul className="space-y-3">
//                   {Object.entries(occupancy).map(([parkId, count]) => (
//                     <li
//                       key={parkId}
//                       className="p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition-colors duration-200"
//                     >
//                       <span className="text-lg font-medium text-gray-700">
//                         {nationalParks.find((p) => p.id === Number(parkId))?.name ||
//                           "Unknown Park"}
//                         : {count} bookings
//                       </span>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AdminDashboard;



import { useState, useEffect } from "react";

const nationalParks = [
  {
    id: 1,
    name: "Yellowstone",
    rooms: ["Cabin A", "Cabin B"],
    campsites: ["Site 1", "Site 2"],
    images: [
      "https://media.istockphoto.com/id/1254906773/photo/grand-prismatic-spring-yellowstone-national-park.jpg?b=1&s=612x612&w=0&k=20&c=Q6csMFyyRrRUtOPI7Rw4VTV_piy15gtw7AjtnfGoHOs=&auto=format&fit=crop&w=500&q=60",
    ],
  },
  {
    id: 2,
    name: "Yosemite",
    rooms: ["Suite 1", "Suite 2"],
    campsites: ["Site A", "Site B"],
    images: [
      "https://c4.wallpaperflare.com/wallpaper/382/231/775/yosemite-valley-el-capitan-united-states-california-wallpaper-preview.jpg",
    ],
  },
  {
    id: 3,
    name: "Grand Canyon",
    rooms: ["Room 101", "Room 102"],
    campsites: ["Site X", "Site Y"],
    images: [
      "https://images.pexels.com/photos/20879885/pexels-photo-20879885/free-photo-of-grand-canyon-national-park.jpeg",
    ],
  },
];

function AdminDashboard() {
  const [bookings, setBookings] = useState([]);
  const [roomServiceRequests, setRoomServiceRequests] = useState([]);
  const [occupancy, setOccupancy] = useState({});
  const [activeSection, setActiveSection] = useState("nationalParks");

  useEffect(() => {
    // Aggregate bookings and room service requests from localStorage
    const loadLocalStorageData = () => {
      const allBookings = [];
      const allRoomServiceRequests = [];
      const occupancyCount = {};

      Object.keys(localStorage).forEach((key) => {
        if (key.startsWith("bookings_")) {
          try {
            const data = JSON.parse(localStorage.getItem(key) || "[]");
            if (Array.isArray(data)) {
              data.forEach((booking) => {
                if (booking.visitorId && booking.parkId) {
                  allBookings.push(booking);
                  const parkId = booking.parkId;
                  occupancyCount[parkId] = (occupancyCount[parkId] || 0) + 1;
                }
              });
            }
          } catch (e) {
            console.error(`Failed to parse ${key}:`, e);
          }
        } else if (key.startsWith("roomServiceRequests_")) {
          try {
            const data = JSON.parse(localStorage.getItem(key) || "[]");
            if (Array.isArray(data)) {
              data.forEach((request) => {
                if (request.visitorId && request.bookingId) {
                  // Load serviceAppointed and isDone status from localStorage
                  const statusKey = `roomServiceStatus_${request.visitorId}_${request.id}`;
                  const doneKey = `roomServiceDone_${request.visitorId}_${request.id}`;
                  const serviceAppointed = localStorage.getItem(statusKey) === "true";
                  const isDone = localStorage.getItem(doneKey) === "true";
                  allRoomServiceRequests.push({
                    ...request,
                    serviceAppointed,
                    isDone,
                  });
                }
              });
            }
          } catch (e) {
            console.error(`Failed to parse ${key}:`, e);
          }
        }
      });

      setBookings(allBookings);
      setRoomServiceRequests(allRoomServiceRequests);
      setOccupancy(occupancyCount);
      console.log("Loaded bookings:", allBookings);
      console.log("Loaded room service requests:", allRoomServiceRequests);
      console.log("Occupancy:", occupancyCount);
    };

    loadLocalStorageData();
  }, []);

  // Helper function to format dates
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Toggle service appointed status
  const toggleServiceAppointed = (request) => {
    const statusKey = `roomServiceStatus_${request.visitorId}_${request.id}`;
    const newStatus = !request.serviceAppointed;
    localStorage.setItem(statusKey, newStatus.toString());
    setRoomServiceRequests((prev) =>
      prev.map((r) =>
        r.visitorId === request.visitorId && r.id === request.id
          ? { ...r, serviceAppointed: newStatus }
          : r
      )
    );
    console.log(`Toggled ${statusKey} to ${newStatus}`);
  };

  // Toggle mark as done status
  const toggleMarkAsDone = (request) => {
    const doneKey = `roomServiceDone_${request.visitorId}_${request.id}`;
    const newStatus = !request.isDone;
    localStorage.setItem(doneKey, newStatus.toString());
    setRoomServiceRequests((prev) =>
      prev.map((r) =>
        r.visitorId === request.visitorId && r.id === request.id
          ? { ...r, isDone: newStatus }
          : r
      )
    );
    console.log(`Toggled ${doneKey} to ${newStatus}`);
  };

  // Sidebar button component
  const SidebarButton = ({ section, label, icon }) => (
    <button
      className={`flex items-center w-full p-4 text-left text-gray-700 rounded-lg transition-colors duration-200 ${
        activeSection === section
          ? "bg-blue-600 text-white"
          : "hover:bg-blue-100"
      }`}
      onClick={() => setActiveSection(section)}
    >
      <span className="mr-3">{icon}</span>
      {label}
    </button>
  );

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-blue-600">Admin Dashboard</h1>
        </div>
        <nav className="mt-4 space-y-2">
          <SidebarButton
            section="nationalParks"
            label="National Parks"
            icon={
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a8 8 0 00-8 8c0 4.42 3.58 8 8 8s8-3.58 8-8a8 8 0 00-8-8zm0 14a6 6 0 01-6-6c0-3.31 2.69-6 6-6s6 2.69 6 6a6 6 0 01-6 6z" />
              </svg>
            }
          />
          <SidebarButton
            section="bookings"
            label="Bookings"
            icon={
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7l-4-4H6zm5 3v2h2V5h-2z" />
              </svg>
            }
          />
          <SidebarButton
            section="roomService"
            label="Room Service Requests"
            icon={
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a7 7 0 00-7 7v6a2 2 0 002 2h12a2 2 0 002-2V9a7 7 0 00-7-7H9zm0 2h2a5 5 0 015 5H4a5 5 0 015-5z" />
              </svg>
            }
          />
          <SidebarButton
            section="occupancy"
            label="Occupancy by Park"
            icon={
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a8 8 0 00-8 8c0 4.42 3.58 8 8 8s8-3.58 8-8a8 8 0 00-8-8zm0 14a6 6 0 01-6-6c0-3.31 2.69-6 6-6s6 2.69 6 6a6 6 0 01-6 6z" />
              </svg>
            }
          />
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-64 flex-1 p-8">
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-6 transition-opacity duration-300">
          {/* National Parks Section */}
          {activeSection === "nationalParks" && (
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">National Parks</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {nationalParks.map((park) => (
                  <div
                    key={park.id}
                    className="relative bg-gray-50 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-200"
                  >
                    <img
                      src={park.images[0] || "https://via.placeholder.com/300"}
                      alt={`${park.name} view`}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-700">{park.name}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bookings Section */}
          {activeSection === "bookings" && (
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Bookings</h2>
              {bookings.length === 0 && (
                <p className="text-gray-500 text-lg">No bookings available.</p>
              )}
              {bookings.length > 0 && (
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th className="p-4 text-left">Park</th>
                        <th className="p-4 text-left">Check-In</th>
                        <th className="p-4 text-left">Check-Out</th>
                        <th className="p-4 text-left">Room</th>
                        <th className="p-4 text-left">Campsite</th>
                        <th className="p-4 text-left">Special Request</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bookings.map((booking, index) => (
                        <tr
                          key={`${booking.visitorId}_${booking.id}`}
                          className={`border-b ${
                            index % 2 === 0 ? "bg-gray-50" : "bg-white"
                          } hover:bg-blue-50 transition-colors duration-200`}
                        >
                          <td className="p-4">{booking.parkName || "Unknown Park"}</td>
                          <td className="p-4">{formatDate(booking.checkIn)}</td>
                          <td className="p-4">{formatDate(booking.checkOut)}</td>
                          <td className="p-4">{booking.room || "N/A"}</td>
                          <td className="p-4">{booking.campsite || "N/A"}</td>
                          <td className="p-4">{booking.specialRequest || "None"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* Room Service Requests Section */}
          {activeSection === "roomService" && (
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Room Service Requests</h2>
              {roomServiceRequests.length === 0 && (
                <p className="text-gray-500 text-lg">No room service requests available.</p>
              )}
              {roomServiceRequests.length > 0 && (
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th className="p-4 text-left">Park</th>
                        <th className="p-4 text-left">Booking ID</th>
                        <th className="p-4 text-left">Service Type</th>
                        <th className="p-4 text-left">Special Request</th>
                        <th className="p-4 text-left">Service Appointed</th>
                        <th className="p-4 text-left">Mark as Done</th>
                      </tr>
                    </thead>
                    <tbody>
                      {roomServiceRequests.map((request, index) => (
                        <tr
                          key={`${request.visitorId}_${request.id}`}
                          className={`border-b ${
                            index % 2 === 0 ? "bg-gray-50" : "bg-white"
                          } hover:bg-blue-50 transition-colors duration-200`}
                        >
                          <td className="p-4">{request.parkName || "Unknown Park"}</td>
                          <td className="p-4">{request.bookingId}</td>
                          <td className="p-4">{request.serviceType || "N/A"}</td>
                          <td className="p-4">{request.specialRequest || "None"}</td>
                          <td className="p-4">
                            <button
                              onClick={() => toggleServiceAppointed(request)}
                              className={`px-3 py-1 rounded-full text-white text-sm font-medium transition-colors duration-200 ${
                                request.serviceAppointed
                                  ? "bg-green-500 hover:bg-green-600"
                                  : "bg-red-500 hover:bg-red-600"
                              }`}
                            >
                              {request.serviceAppointed ? "Yes" : "No"}
                            </button>
                          </td>
                          <td className="p-4">
                            <label className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                checked={request.isDone}
                                onChange={() => toggleMarkAsDone(request)}
                                className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                              />
                              <span className="text-sm text-gray-700">Done</span>
                            </label>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* Occupancy by Park Section */}
          {activeSection === "occupancy" && (
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Occupancy by Park</h2>
              {Object.keys(occupancy).length === 0 && (
                <p className="text-gray-500 text-lg">No occupancy data available.</p>
              )}
              {Object.keys(occupancy).length > 0 && (
                <ul className="space-y-3">
                  {Object.entries(occupancy).map(([parkId, count]) => (
                    <li
                      key={parkId}
                      className="p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition-colors duration-200"
                    >
                      <span className="text-lg font-medium text-gray-700">
                        {nationalParks.find((p) => p.id === Number(parkId))?.name ||
                          "Unknown Park"}
                        : {count} bookings
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;