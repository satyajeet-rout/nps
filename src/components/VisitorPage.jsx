


// import { useState, useEffect } from "react";
// import axios from "axios";

// // Move nationalParks to a separate file or API for scalability
// const nationalParks = [
//   {
//     id: 1,
//     name: "Yellowstone National Park",
//     location: "Wyoming, USA",
//     starRating: 4,
//     rating: 4.5,
//     reviews: 305,
//     originalPrice: 180, // USD
//     discountedPrice: 144, // USD
//     taxesAndFees: 22, // USD
//     tags: ["Free Cancellation till check-in"],
//     images: [
//       "https://media.istockphoto.com/id/1254906773/photo/grand-prismatic-spring-yellowstone-national-park.jpg?b=1&s=612x612&w=0&k=20&c=Q6csMFyyRrRUtOPI7Rw4VTV_piy15gtw7AjtnfGoHOs=&auto=format&fit=crop&w=500&q=60",
//     ],
//     rooms: ["Cabin A", "Cabin B"],
//     campsites: ["Site 1", "Site 2"],
//     description: "Explore the geysers and wildlife of Yellowstone National Park.",
//   },
//   {
//     id: 2,
//     name: "Yosemite National Park",
//     location: "California, USA",
//     starRating: 4,
//     rating: 4.3,
//     reviews: 521,
//     originalPrice: 216, // USD
//     discountedPrice: 168, // USD
//     taxesAndFees: 25, // USD
//     tags: ["Free Cancellation till check-in", "Early Bird Deal"],
//     images: [
//       "https://c4.wallpaperflare.com/wallpaper/382/231/775/yosemite-valley-el-capitan-united-states-california-wallpaper-preview.jpg",
//     ],
//     rooms: ["Suite 1", "Suite 2"],
//     campsites: ["Site A", "Site B"],
//     description: "Experience the stunning views of Yosemite National Park.",
//   },
//   {
//     id: 3,
//     name: "Grand Canyon National Park",
//     location: "Arizona, USA",
//     starRating: 5,
//     rating: 4.8,
//     reviews: 422,
//     originalPrice: 240, // USD
//     discountedPrice: 192, // USD
//     taxesAndFees: 29, // USD
//     tags: ["Early Bird Deal"],
//     images: [
//       "https://images.pexels.com/photos/20879885/pexels-photo-20879885/free-photo-of-grand-canyon-national-park.jpeg",
//     ],
//     rooms: ["Room 101", "Room 102"],
//     campsites: ["Site X", "Site Y"],
//     description: "Discover the breathtaking vistas of Grand Canyon National Park.",
//   },
// ];

// function VisitorPage() {
//   // Initialize state from localStorage or empty array
//   const [selectedPark, setSelectedPark] = useState(null);
//   const [checkIn, setCheckIn] = useState("");
//   const [checkOut, setCheckOut] = useState("");
//   const [wantRoom, setWantRoom] = useState(false);
//   const [room, setRoom] = useState("");
//   const [campsite, setCampsite] = useState("");
//   const [specialRequest, setSpecialRequest] = useState("");
//   const [complaint, setComplaint] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [paymentProcessing, setPaymentProcessing] = useState(false);
//   const [paymentStep, setPaymentStep] = useState("");
//   const [bookings, setBookings] = useState(() => {
//     try {
//       const saved = localStorage.getItem("bookings");
//       return saved ? JSON.parse(saved) : [];
//     } catch (e) {
//       console.error("Failed to parse bookings from localStorage:", e);
//       return [];
//     }
//   });
//   const [showBookings, setShowBookings] = useState(false);
//   const [showRoomServiceRequests, setShowRoomServiceRequests] = useState(false);
//   const [confirmationMessage, setConfirmationMessage] = useState("");
//   const [roomServiceConfirmation, setRoomServiceConfirmation] = useState("");
//   const [selectedBookingId, setSelectedBookingId] = useState(null);
//   const [roomServiceType, setRoomServiceType] = useState("");
//   const [roomServiceRequest, setRoomServiceRequest] = useState("");
//   const [roomServiceRequests, setRoomServiceRequests] = useState(() => {
//     try {
//       const saved = localStorage.getItem("roomServiceRequests");
//       return saved ? JSON.parse(saved) : [];
//     } catch (e) {
//       console.error("Failed to parse roomServiceRequests from localStorage:", e);
//       return [];
//     }
//   });

//   // Save bookings to localStorage whenever it changes
//   useEffect(() => {
//     try {
//       localStorage.setItem("bookings", JSON.stringify(bookings));
//     } catch (e) {
//       console.error("Failed to save bookings to localStorage:", e);
//     }
//   }, [bookings]);

//   // Save roomServiceRequests to localStorage whenever it changes
//   useEffect(() => {
//     try {
//       localStorage.setItem("roomServiceRequests", JSON.stringify(roomServiceRequests));
//     } catch (e) {
//       console.error("Failed to save roomServiceRequests to localStorage:", e);
//     }
//   }, [roomServiceRequests]);

//   // Validate booking form inputs
//   const validateBooking = () => {
//     if (!checkIn || !checkOut) {
//       return "Please select both check-in and check-out dates.";
//     }
//     if (new Date(checkOut) <= new Date(checkIn)) {
//       return "Check-out date must be after check-in date.";
//     }
//     if (!campsite) {
//       return "Please select a campsite.";
//     }
//     if (wantRoom && !room) {
//       return "Please select a room.";
//     }
//     return "";
//   };

//   // Simulate a dummy payment process
//   const processDummyPayment = async () => {
//     setPaymentProcessing(true);
//     setPaymentStep("Processing Payment...");
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     setPaymentStep("Verifying Payment...");
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     setPaymentStep("Payment Successful!");
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     setPaymentProcessing(false);
//     setPaymentStep("");
//   };

//   // Handle booking submission
//   const handleBooking = async (parkId) => {
//     const validationError = validateBooking();
//     if (validationError) {
//       setError(validationError);
//       return;
//     }

//     setLoading(true);
//     setError("");

//     try {
//       await processDummyPayment();

//       const newBooking = {
//         id: bookings.length + 1,
//         parkId,
//         parkName: nationalParks.find((p) => p.id === parkId).name,
//         checkIn,
//         checkOut,
//         room: wantRoom ? room : null,
//         campsite,
//         specialRequest: specialRequest || null,
//         status: "Confirmed",
//         createdAt: new Date().toISOString(),
//       };

//       setBookings([...bookings, newBooking]);
//       setConfirmationMessage("Booking Confirmed!");
//       setTimeout(() => {
//         setSelectedPark(null);
//         setCheckIn("");
//         setCheckOut("");
//         setWantRoom(false);
//         setRoom("");
//         setCampsite("");
//         setSpecialRequest("");
//         setConfirmationMessage("");
//       }, 3000);
//     } catch (err) {
//       setError("Failed to create booking. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Handle complaint submission
//   const handleComplaint = async (parkId) => {
//     if (!complaint.trim()) {
//       setError("Please describe the issue in the complaint.");
//       return;
//     }

//     setLoading(true);
//     setError("");

//     try {
//       await new Promise((resolve) => setTimeout(resolve, 1000));
//       setConfirmationMessage("Complaint submitted successfully!");
//       setTimeout(() => {
//         setComplaint("");
//         setSelectedPark(null);
//         setConfirmationMessage("");
//       }, 3000);
//     } catch (err) {
//       setError("Failed to submit complaint. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Handle room service request submission
//   const handleRoomServiceRequest = async (bookingId) => {
//     if (!roomServiceType) {
//       setError("Please select a room service type.");
//       return;
//     }

//     setLoading(true);
//     setError("");

//     try {
//       await new Promise((resolve) => setTimeout(resolve, 1000));
//       const newRequest = {
//         id: roomServiceRequests.length + 1,
//         bookingId,
//         parkName: bookings.find((b) => b.id === bookingId).parkName,
//         serviceType: roomServiceType,
//         specialRequest: roomServiceRequest || null,
//         createdAt: new Date().toISOString(),
//       };
//       setRoomServiceRequests([...roomServiceRequests, newRequest]);
//       setRoomServiceConfirmation("Request Submitted Successfully!");
//       setTimeout(() => {
//         setRoomServiceType("");
//         setRoomServiceRequest("");
//         setSelectedBookingId(null);
//         setRoomServiceConfirmation("");
//       }, 3000);
//     } catch (err) {
//       setError("Failed to submit room service request. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-6 max-w-6xl mx-auto">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl font-bold">Book Your National Park Adventure</h1>
//         <div className="space-x-2">
//           <button
//             className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//             onClick={() => setShowBookings(true)}
//           >
//             My Bookings
//           </button>
//           <button
//             className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
//             onClick={() => setShowRoomServiceRequests(true)}
//           >
//             View Room Service Requests
//           </button>
//         </div>
//       </div>

//       {/* Confirmation Message in the Middle of the Page with Tick Mark */}
//       {confirmationMessage && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg text-center">
//             <svg
//               className="w-12 h-12 text-green-600 mx-auto mb-4"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M5 13l4 4L19 7"
//               ></path>
//             </svg>
//             <h3 className="text-2xl font-semibold text-green-600 mb-4">
//               {confirmationMessage}
//             </h3>
//             <p className="text-gray-600">Thank you for your request!</p>
//           </div>
//         </div>
//       )}

//       {/* My Bookings Modal */}
//       {showBookings && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full">
//             <h2 className="text-2xl font-bold mb-4">My Bookings</h2>
//             {bookings.length === 0 ? (
//               <p className="text-gray-600">No bookings found.</p>
//             ) : (
//               <div className="space-y-4">
//                 {bookings.map((booking) => (
//                   <div
//                     key={booking.id}
//                     className="border rounded-lg p-4 bg-gray-50"
//                   >
//                     <h3 className="text-lg font-semibold">{booking.parkName}</h3>
//                     <p>
//                       <strong>Check-In:</strong>{" "}
//                       {new Date(booking.checkIn).toLocaleDateString()}
//                     </p>
//                     <p>
//                       <strong>Check-Out:</strong>{" "}
//                       {new Date(booking.checkOut).toLocaleDateString()}
//                     </p>
//                     {booking.room && (
//                       <p>
//                         <strong>Room:</strong> {booking.room}
//                       </p>
//                     )}
//                     <p>
//                       <strong>Campsite:</strong> {booking.campsite}
//                     </p>
//                     {booking.specialRequest && (
//                       <p>
//                         <strong>Special Request:</strong>{" "}
//                         {booking.specialRequest}
//                       </p>
//                     )}
//                     <p>
//                       <strong>Status:</strong> {booking.status}
//                     </p>
//                     <p>
//                       <strong>Booked On:</strong>{" "}
//                       {new Date(booking.createdAt).toLocaleString()}
//                     </p>
//                     <button
//                       className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//                       onClick={() =>
//                         setSelectedBookingId(
//                           selectedBookingId === booking.id ? null : booking.id
//                         )
//                       }
//                     >
//                       {selectedBookingId === booking.id
//                         ? "Close Room Service"
//                         : "Request Room Service"}
//                     </button>
//                     {selectedBookingId === booking.id && (
//                       <div className="mt-4 border-t pt-4">
//                         <h4 className="text-lg font-semibold mb-2">
//                           Room Service Request
//                         </h4>
//                         {error && (
//                           <p className="text-red-600 mb-4">{error}</p>
//                         )}
//                         <div className="mb-4">
//                           <label
//                             htmlFor={`serviceType-${booking.id}`}
//                             className="block text-lg font-medium"
//                           >
//                             Service Type
//                           </label>
//                           <select
//                             id={`serviceType-${booking.id}`}
//                             className="border p-2 rounded w-full"
//                             value={roomServiceType}
//                             onChange={(e) =>
//                               setRoomServiceType(e.target.value)
//                             }
//                             disabled={loading}
//                           >
//                             <option value="">Select Service</option>
//                             <option value="Extra Towels">Extra Towels</option>
//                             <option value="Food Delivery">Food Delivery</option>
//                             <option value="Cleaning Service">
//                               Cleaning Service
//                             </option>
//                             <option value="Other">Other</option>
//                           </select>
//                         </div>
//                         <div className="mb-4">
//                           <label
//                             htmlFor={`serviceRequest-${booking.id}`}
//                             className="block text-lg font-medium"
//                           >
//                             Special Request
//                           </label>
//                           <textarea
//                             id={`serviceRequest-${booking.id}`}
//                             className="border p-2 rounded w-full"
//                             value={roomServiceRequest}
//                             onChange={(e) =>
//                               setRoomServiceRequest(e.target.value)
//                             }
//                             disabled={loading}
//                             rows={4}
//                             placeholder="Any specific requests?"
//                           />
//                         </div>
//                         <button
//                           className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:bg-green-400"
//                           onClick={() => handleRoomServiceRequest(booking.id)}
//                           disabled={loading}
//                         >
//                           {loading ? "Submitting..." : "Submit Request"}
//                         </button>
//                         {roomServiceConfirmation &&
//                           selectedBookingId === booking.id && (
//                             <p className="mt-4 text-green-600 font-semibold">
//                               {roomServiceConfirmation}
//                             </p>
//                           )}
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             )}
//             <button
//               className="mt-4 bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
//               onClick={() => setShowBookings(false)}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Room Service Requests Modal */}
//       {showRoomServiceRequests && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full">
//             <h2 className="text-2xl font-bold mb-4">Room Service Requests</h2>
//             {roomServiceRequests.length === 0 ? (
//               <p className="text-gray-600">No room service requests found.</p>
//             ) : (
//               <div className="space-y-4">
//                 {roomServiceRequests.map((request) => (
//                   <div
//                     key={request.id}
//                     className="border rounded-lg p-4 bg-gray-50"
//                   >
//                     <h3 className="text-lg font-semibold">{request.parkName}</h3>
//                     <p>
//                       <strong>Booking ID:</strong> {request.bookingId}
//                     </p>
//                     <p>
//                       <strong>Service Type:</strong> {request.serviceType}
//                     </p>
//                     {request.specialRequest && (
//                       <p>
//                         <strong>Special Request:</strong>{" "}
//                         {request.specialRequest}
//                       </p>
//                     )}
//                     <p>
//                       <strong>Requested On:</strong>{" "}
//                       {new Date(request.createdAt).toLocaleString()}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             )}
//             <button
//               className="mt-4 bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
//               onClick={() => setShowRoomServiceRequests(false)}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}

//       {/* National Park Listings or Booking Form */}
//       {!selectedPark ? (
//         <div className="space-y-6">
//           {nationalParks.map((park) => (
//             <div
//               key={park.id}
//               className="flex border rounded-lg shadow-md p-4 bg-gray-300"
//             >
//               <div className="flex-shrink-0 w-1/3">
//                 <img
//                   src={park.images[0] || "https://via.placeholder.com/150"}
//                   alt={`${park.name} main view`}
//                   className="w-full h-40 object-cover rounded-lg"
//                 />
//                 <div className="flex mt-2 space-x-2">
//                   {park.images.slice(1).map((img, idx) => (
//                     <img
//                       key={idx}
//                       src={img}
//                       alt={`${park.name} thumbnail ${idx + 1}`}
//                       className="w-16 h-16 object-cover rounded"
//                     />
//                   ))}
//                 </div>
//               </div>
//               <div className="flex-grow px-4">
//                 <div className="flex justify-between items-start">
//                   <div>
//                     <h2 className="text-xl font-semibold">{park.name}</h2>
//                     <p className="text-gray-600">{park.location}</p>
//                     <div
//                       className="flex items-center mt-1"
//                       aria-label={`Star rating: ${park.starRating} out of 5`}
//                     >
//                       {[...Array(5)].map((_, i) => (
//                         <svg
//                           key={i}
//                           className={`w-4 h-4 ${
//                             i < park.starRating
//                               ? "text-yellow-600"
//                               : "text-gray-300"
//                           }`}
//                           fill="currentColor"
//                           viewBox="0 0 20 20"
//                         >
//                           <path d="M10 15l-5.5 3 1-5.5L1 7.5l5.5-.5L10 2l3.5 5 5.5.5-4 4.5 1 5.5z" />
//                         </svg>
//                       ))}
//                     </div>
//                     <p className="text-sm text-gray-500 mt-1">
//                       {park.description}
//                     </p>
//                   </div>
//                   <div className="text-right">
//                     <div className="flex items-center justify-end">
//                       <span className="text-green-600 font-semibold mr-2">
//                         {park.rating}
//                       </span>
//                       <span className="text-gray-600 text-sm">
//                         ({park.reviews} Ratings)
//                       </span>
//                     </div>
//                     {park.tags.includes("Early Bird Deal") && (
//                       <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded mt-1">
//                         Early Bird Deal
//                       </span>
//                     )}
//                     <p className="text-gray-500 line-through mt-2">
//                       ${park.originalPrice.toFixed(2)}
//                     </p>
//                     <p className="text-xl font-bold">
//                       ${park.discountedPrice.toFixed(2)}
//                     </p>
//                     <p className="text-gray-600 text-sm">
//                       + ${park.taxesAndFees.toFixed(2)} taxes & fees
//                     </p>
//                     <p className="text-gray-600 text-sm">Per Night (USD)</p>
//                   </div>
//                 </div>
//                 <div className="mt-2">
//                   {park.tags.map((tag, idx) => (
//                     <p key={idx} className="text-green-600 text-sm">
//                       ✓ {tag}
//                     </p>
//                   ))}
//                 </div>
//               </div>
//               <div className="flex-shrink-0">
//                 <button
//                   className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//                   onClick={() => setSelectedPark(park)}
//                 >
//                   Book
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div className="border rounded-lg p-6 bg-white shadow-md relative">
//           <h2 className="text-2xl font-bold mb-4">
//             Book Your Stay at {selectedPark?.name || "Unknown Park"}
//           </h2>
//           {error && <p className="text-red-600 mb-4">{error}</p>}
//           <div className="grid grid-cols-2 gap-4 mb-4">
//             <div>
//               <label htmlFor="checkIn" className="block text-lg font-medium">
//                 Check-In Date
//               </label>
//               <input
//                 id="checkIn"
//                 type="date"
//                 className="border p-2 rounded w-full"
//                 value={checkIn}
//                 onChange={(e) => setCheckIn(e.target.value)}
//                 disabled={loading}
//                 min={new Date().toISOString().split("T")[0]}
//               />
//             </div>
//             <div>
//               <label htmlFor="checkOut" className="block text-lg font-medium">
//                 Check-Out Date
//               </label>
//               <input
//                 id="checkOut"
//                 type="date"
//                 className="border p-2 rounded w-full"
//                 value={checkOut}
//                 onChange={(e) => setCheckOut(e.target.value)}
//                 disabled={loading}
//                 min={
//                   checkIn
//                     ? new Date(
//                         new Date(checkIn).setDate(
//                           new Date(checkIn).getDate() + 1
//                         )
//                       )
//                         .toISOString()
//                         .split("T")[0]
//                     : new Date().toISOString().split("T")[0]
//                 }
//               />
//             </div>
//           </div>
//           <div className="mb-4">
//             <label className="flex items-center">
//               <input
//                 type="checkbox"
//                 className="mr-2"
//                 checked={wantRoom}
//                 onChange={() => setWantRoom(!wantRoom)}
//                 disabled={loading}
//               />
//               Book a Cabin/Room
//             </label>
//             {wantRoom && (
//               <select
//                 className="border p-2 rounded w-full mt-2"
//                 value={room}
//                 onChange={(e) => setRoom(e.target.value)}
//                 disabled={loading}
//               >
//                 <option value="">Select Room</option>
//                 {(selectedPark?.rooms || []).map((r) => (
//                   <option key={r} value={r}>
//                     {r}
//                   </option>
//                 ))}
//               </select>
//             )}
//           </div>
//           <div className="mb-4">
//             <label htmlFor="campsite" className="block text-lg font-medium">
//               Campsite
//             </label>
//             <select
//               id="campsite"
//               className="border p-2 rounded w-full"
//               value={campsite}
//               onChange={(e) => setCampsite(e.target.value)}
//               disabled={loading}
//             >
//               <option value="">Select Campsite</option>
//               {(selectedPark?.campsites || []).map((c) => (
//                 <option key={c} value={c}>
//                   {c}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div className="mb-4">
//             <label
//               htmlFor="specialRequest"
//               className="block text-lg font-medium"
//             >
//               Special Requests
//             </label>
//             <textarea
//               id="specialRequest"
//               className="border p-2 rounded w-full"
//               value={specialRequest}
//               onChange={(e) => setSpecialRequest(e.target.value)}
//               disabled={loading}
//               rows={4}
//               placeholder="Any specific requests?"
//             />
//           </div>
//           <div className="flex space-x-4">
//             <button
//               className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-blue-400"
//               onClick={() => handleBooking(selectedPark.id)}
//               disabled={loading}
//             >
//               {loading ? "Processing..." : "Confirm Booking"}
//             </button>
//             <button
//               className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
//               onClick={() => setSelectedPark(null)}
//               disabled={loading}
//             >
//               Cancel
//             </button>
//           </div>

//           {paymentProcessing && (
//             <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//               <div className="bg-white p-6 rounded-lg shadow-lg text-center">
//                 <h3 className="text-xl font-semibold mb-4">
//                   Processing Your Payment
//                 </h3>
//                 <p className="text-gray-600">{paymentStep}</p>
//                 <div className="mt-4 flex justify-center">
//                   <svg
//                     className="animate-spin h-8 w-8 text-blue-600"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                   >
//                     <circle
//                       className="opacity-25"
//                       cx="12"
//                       cy="12"
//                       r="10"
//                       stroke="currentColor"
//                       strokeWidth="4"
//                     ></circle>
//                     <path
//                       className="opacity-75"
//                       fill="currentColor"
//                       d="M4 12a8 8 0 018-8v8H4z"
//                     ></path>
//                   </svg>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default VisitorPage;




// import { useState, useEffect } from "react";
// import axios from "axios";

// // Move nationalParks to a separate file or API for scalability
// const nationalParks = [
//   {
//     id: 1,
//     name: "Yellowstone National Park",
//     location: "Wyoming, USA",
//     starRating: 4,
//     rating: 4.5,
//     reviews: 305,
//     originalPrice: 180, // USD
//     discountedPrice: 144, // USD
//     taxesAndFees: 22, // USD
//     tags: ["Free Cancellation till check-in"],
//     images: [
//       "https://media.istockphoto.com/id/1254906773/photo/grand-prismatic-spring-yellowstone-national-park.jpg?b=1&s=612x612&w=0&k=20&c=Q6csMFyyRrRUtOPI7Rw4VTV_piy15gtw7AjtnfGoHOs=&auto=format&fit=crop&w=500&q=60",
//     ],
//     rooms: ["Cabin A", "Cabin B"],
//     campsites: ["Site 1", "Site 2"],
//     description: "Explore the geysers and wildlife of Yellowstone National Park.",
//   },
//   {
//     id: 2,
//     name: "Yosemite National Park",
//     location: "California, USA",
//     starRating: 4,
//     rating: 4.3,
//     reviews: 521,
//     originalPrice: 216, // USD
//     discountedPrice: 168, // USD
//     taxesAndFees: 25, // USD
//     tags: ["Free Cancellation till check-in", "Early Bird Deal"],
//     images: [
//       "https://c4.wallpaperflare.com/wallpaper/382/231/775/yosemite-valley-el-capitan-united-states-california-wallpaper-preview.jpg",
//     ],
//     rooms: ["Suite 1", "Suite 2"],
//     campsites: ["Site A", "Site B"],
//     description: "Experience the stunning views of Yosemite National Park.",
//   },
//   {
//     id: 3,
//     name: "Grand Canyon National Park",
//     location: "Arizona, USA",
//     starRating: 5,
//     rating: 4.8,
//     reviews: 422,
//     originalPrice: 240, // USD
//     discountedPrice: 192, // USD
//     taxesAndFees: 29, // USD
//     tags: ["Early Bird Deal"],
//     images: [
//       "https://images.pexels.com/photos/20879885/pexels-photo-20879885/free-photo-of-grand-canyon-national-park.jpeg",
//     ],
//     rooms: ["Room 101", "Room 102"],
//     campsites: ["Site X", "Site Y"],
//     description: "Discover the breathtaking vistas of Grand Canyon National Park.",
//   },
// ];

// function VisitorPage({ visitorId = null }) {
//   // Generate or retrieve visitorId from localStorage
//   const [currentVisitorId] = useState(() => {
//     if (visitorId) return visitorId; // Use prop if provided
//     const storedId = localStorage.getItem("visitorId");
//     if (storedId) return storedId;
//     const newId = `visitor_${Date.now()}`; // Unique ID based on timestamp
//     localStorage.setItem("visitorId", newId);
//     return newId;
//   });

//   // Initialize state from visitor-specific localStorage
//   const [selectedPark, setSelectedPark] = useState(null);
//   const [checkIn, setCheckIn] = useState("");
//   const [checkOut, setCheckOut] = useState("");
//   const [wantRoom, setWantRoom] = useState(false);
//   const [room, setRoom] = useState("");
//   const [campsite, setCampsite] = useState("");
//   const [specialRequest, setSpecialRequest] = useState("");
//   const [complaint, setComplaint] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [paymentProcessing, setPaymentProcessing] = useState(false);
//   const [paymentStep, setPaymentStep] = useState("");
//   const [bookings, setBookings] = useState(() => {
//     try {
//       const saved = localStorage.getItem(`bookings_${currentVisitorId}`);
//       const parsed = saved ? JSON.parse(saved) : [];
//       // Ensure only current visitor's data is loaded
//       const filtered = Array.isArray(parsed)
//         ? parsed.filter(b => b.visitorId === currentVisitorId)
//         : [];
//       console.log(`Loaded bookings for ${currentVisitorId}:`, filtered);
//       return filtered;
//     } catch (e) {
//       console.error(`Failed to parse bookings for ${currentVisitorId}:`, e);
//       return [];
//     }
//   });
//   const [showBookings, setShowBookings] = useState(false);
//   const [showRoomServiceRequests, setShowRoomServiceRequests] = useState(false);
//   const [confirmationMessage, setConfirmationMessage] = useState("");
//   const [roomServiceConfirmation, setRoomServiceConfirmation] = useState("");
//   const [selectedBookingId, setSelectedBookingId] = useState(null);
//   const [roomServiceType, setRoomServiceType] = useState("");
//   const [roomServiceRequest, setRoomServiceRequest] = useState("");
//   const [roomServiceRequests, setRoomServiceRequests] = useState(() => {
//     try {
//       const saved = localStorage.getItem(`roomServiceRequests_${currentVisitorId}`);
//       const parsed = saved ? JSON.parse(saved) : [];
//       // Ensure only current visitor's data is loaded
//       const filtered = Array.isArray(parsed)
//         ? parsed.filter(r => r.visitorId === currentVisitorId)
//         : [];
//       console.log(`Loaded roomServiceRequests for ${currentVisitorId}:`, filtered);
//       return filtered;
//     } catch (e) {
//       console.error(`Failed to parse roomServiceRequests for ${currentVisitorId}:`, e);
//       return [];
//     }
//   });

//   // Save bookings to visitor-specific localStorage
//   useEffect(() => {
//     try {
//       localStorage.setItem(`bookings_${currentVisitorId}`, JSON.stringify(bookings));
//       console.log(`Saved bookings for ${currentVisitorId}:`, bookings);
//     } catch (e) {
//       console.error(`Failed to save bookings for ${currentVisitorId}:`, e);
//     }
//   }, [bookings, currentVisitorId]);

//   // Save roomServiceRequests to visitor-specific localStorage
//   useEffect(() => {
//     try {
//       localStorage.setItem(`roomServiceRequests_${currentVisitorId}`, JSON.stringify(roomServiceRequests));
//       console.log(`Saved roomServiceRequests for ${currentVisitorId}:`, roomServiceRequests);
//     } catch (e) {
//       console.error(`Failed to save roomServiceRequests for ${currentVisitorId}:`, e);
//     }
//   }, [roomServiceRequests, currentVisitorId]);

//   // Clear legacy localStorage data (for testing/resetting)
//   const clearVisitorData = () => {
//     try {
//       localStorage.removeItem(`bookings_${currentVisitorId}`);
//       localStorage.removeItem(`roomServiceRequests_${currentVisitorId}`);
//       setBookings([]);
//       setRoomServiceRequests([]);
//       console.log(`Cleared data for ${currentVisitorId}`);
//     } catch (e) {
//       console.error(`Failed to clear data for ${currentVisitorId}:`, e);
//     }
//   };

//   // Validate booking form inputs
//   const validateBooking = () => {
//     if (!checkIn || !checkOut) {
//       return "Please select both check-in and check-out dates.";
//     }
//     if (new Date(checkOut) <= new Date(checkIn)) {
//       return "Check-out date must be after check-in date.";
//     }
//     if (!campsite) {
//       return "Please select a campsite.";
//     }
//     if (wantRoom && !room) {
//       return "Please select a room.";
//     }
//     return "";
//   };

//   // Simulate a dummy payment process
//   const processDummyPayment = async () => {
//     setPaymentProcessing(true);
//     setPaymentStep("Processing Payment...");
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     setPaymentStep("Verifying Payment...");
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     setPaymentStep("Payment Successful!");
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     setPaymentProcessing(false);
//     setPaymentStep("");
//   };

//   // Handle booking submission
//   const handleBooking = async (parkId) => {
//     const validationError = validateBooking();
//     if (validationError) {
//       setError(validationError);
//       return;
//     }

//     setLoading(true);
//     setError("");

//     try {
//       await processDummyPayment();

//       const newBooking = {
//         id: bookings.length + 1,
//         visitorId: currentVisitorId,
//         parkId,
//         parkName: nationalParks.find((p) => p.id === parkId).name,
//         checkIn,
//         checkOut,
//         room: wantRoom ? room : null,
//         campsite,
//         specialRequest: specialRequest || null,
//         status: "Confirmed",
//         createdAt: new Date().toISOString(),
//       };

//       setBookings([...bookings, newBooking]);
//       setConfirmationMessage("Booking Confirmed!");
//       setTimeout(() => {
//         setSelectedPark(null);
//         setCheckIn("");
//         setCheckOut("");
//         setWantRoom(false);
//         setRoom("");
//         setCampsite("");
//         setSpecialRequest("");
//         setConfirmationMessage("");
//       }, 3000);
//     } catch (err) {
//       setError("Failed to create booking. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Handle complaint submission
//   const handleComplaint = async (parkId) => {
//     if (!complaint.trim()) {
//       setError("Please describe the issue in the complaint.");
//       return;
//     }

//     setLoading(true);
//     setError("");

//     try {
//       await new Promise((resolve) => setTimeout(resolve, 1000));
//       setConfirmationMessage("Complaint submitted successfully!");
//       setTimeout(() => {
//         setComplaint("");
//         setSelectedPark(null);
//         setConfirmationMessage("");
//       }, 3000);
//     } catch (err) {
//       setError("Failed to submit complaint. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Handle room service request submission
//   const handleRoomServiceRequest = async (bookingId) => {
//     if (!roomServiceType) {
//       setError("Please select a room service type.");
//       return;
//     }

//     setLoading(true);
//     setError("");

//     try {
//       await new Promise((resolve) => setTimeout(resolve, 1000));
//       const newRequest = {
//         id: roomServiceRequests.length + 1,
//         visitorId: currentVisitorId,
//         bookingId,
//         parkName: bookings.find((b) => b.id === bookingId && b.visitorId === currentVisitorId).parkName,
//         serviceType: roomServiceType,
//         specialRequest: roomServiceRequest || null,
//         createdAt: new Date().toISOString(),
//       };
//       setRoomServiceRequests([...roomServiceRequests, newRequest]);
//       setRoomServiceConfirmation("Request Submitted Successfully!");
//       setTimeout(() => {
//         setRoomServiceType("");
//         setRoomServiceRequest("");
//         setSelectedBookingId(null);
//         setRoomServiceConfirmation("");
//       }, 3000);
//     } catch (err) {
//       setError("Failed to submit room service request. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-6 max-w-6xl mx-auto">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl font-bold">Book Your National Park Adventure</h1>
//         <div className="space-x-2">
//           <button
//             className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//             onClick={() => setShowBookings(true)}
//           >
//             My Bookings
//           </button>
//           <button
//             className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
//             onClick={() => setShowRoomServiceRequests(true)}
//           >
//             View Room Service Requests
//           </button>
//           <button
//             className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
//             onClick={clearVisitorData}
//           >
//             Clear My Data
//           </button>
//         </div>
//       </div>

//       {/* Confirmation Message in the Middle of the Page with Tick Mark */}
//       {confirmationMessage && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg text-center">
//             <svg
//               className="w-12 h-12 text-green-600 mx-auto mb-4"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M5 13l4 4L19 7"
//               ></path>
//             </svg>
//             <h3 className="text-2xl font-semibold text-green-600 mb-4">
//               {confirmationMessage}
//             </h3>
//             <p className="text-gray-600">Thank you for your request!</p>
//           </div>
//         </div>
//       )}

//       {/* My Bookings Modal */}
//       {showBookings && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full">
//             <h2 className="text-2xl font-bold mb-4">My Bookings</h2>
//             {bookings.length === 0 ? (
//               <p className="text-gray-600">No bookings found.</p>
//             ) : (
//               <div className="space-y-4">
//                 {bookings.map((booking) => (
//                   <div
//                     key={booking.id}
//                     className="border rounded-lg p-4 bg-gray-50"
//                   >
//                     <h3 className="text-lg font-semibold">{booking.parkName}</h3>
//                     <p>
//                       <strong>Check-In:</strong>{" "}
//                       {new Date(booking.checkIn).toLocaleDateString()}
//                     </p>
//                     <p>
//                       <strong>Check-Out:</strong>{" "}
//                       {new Date(booking.checkOut).toLocaleDateString()}
//                     </p>
//                     {booking.room && (
//                       <p>
//                         <strong>Room:</strong> {booking.room}
//                       </p>
//                     )}
//                     <p>
//                       <strong>Campsite:</strong> {booking.campsite}
//                     </p>
//                     {booking.specialRequest && (
//                       <p>
//                         <strong>Special Request:</strong>{" "}
//                         {booking.specialRequest}
//                       </p>
//                     )}
//                     <p>
//                       <strong>Status:</strong> {booking.status}
//                     </p>
//                     <p>
//                       <strong>Booked On:</strong>{" "}
//                       {new Date(booking.createdAt).toLocaleString()}
//                     </p>
//                     <button
//                       className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//                       onClick={() =>
//                         setSelectedBookingId(
//                           selectedBookingId === booking.id ? null : booking.id
//                         )
//                       }
//                     >
//                       {selectedBookingId === booking.id
//                         ? "Close Room Service"
//                         : "Request Room Service"}
//                     </button>
//                     {selectedBookingId === booking.id && (
//                       <div className="mt-4 border-t pt-4">
//                         <h4 className="text-lg font-semibold mb-2">
//                           Room Service Request
//                         </h4>
//                         {error && (
//                           <p className="text-red-600 mb-4">{error}</p>
//                         )}
//                         <div className="mb-4">
//                           <label
//                             htmlFor={`serviceType-${booking.id}`}
//                             className="block text-lg font-medium"
//                           >
//                             Service Type
//                           </label>
//                           <select
//                             id={`serviceType-${booking.id}`}
//                             className="border p-2 rounded w-full"
//                             value={roomServiceType}
//                             onChange={(e) =>
//                               setRoomServiceType(e.target.value)
//                             }
//                             disabled={loading}
//                           >
//                             <option value="">Select Service</option>
//                             <option value="Extra Towels">Extra Towels</option>
//                             <option value="Food Delivery">Food Delivery</option>
//                             <option value="Cleaning Service">
//                               Cleaning Service
//                             </option>
//                             <option value="Other">Other</option>
//                           </select>
//                         </div>
//                         <div className="mb-4">
//                           <label
//                             htmlFor={`serviceRequest-${booking.id}`}
//                             className="block text-lg font-medium"
//                           >
//                             Special Request
//                           </label>
//                           <textarea
//                             id={`serviceRequest-${booking.id}`}
//                             className="border p-2 rounded w-full"
//                             value={roomServiceRequest}
//                             onChange={(e) =>
//                               setRoomServiceRequest(e.target.value)
//                             }
//                             disabled={loading}
//                             rows={4}
//                             placeholder="Any specific requests?"
//                           />
//                         </div>
//                         <button
//                           className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:bg-green-400"
//                           onClick={() => handleRoomServiceRequest(booking.id)}
//                           disabled={loading}
//                         >
//                           {loading ? "Submitting..." : "Submit Request"}
//                         </button>
//                         {roomServiceConfirmation &&
//                           selectedBookingId === booking.id && (
//                             <p className="mt-4 text-green-600 font-semibold">
//                               {roomServiceConfirmation}
//                             </p>
//                           )}
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             )}
//             <button
//               className="mt-4 bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
//               onClick={() => setShowBookings(false)}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Room Service Requests Modal */}
//       {showRoomServiceRequests && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full">
//             <h2 className="text-2xl font-bold mb-4">Room Service Requests</h2>
//             {roomServiceRequests.length === 0 ? (
//               <p className="text-gray-600">No room service requests found.</p>
//             ) : (
//               <div className="space-y-4">
//                 {roomServiceRequests.map((request) => (
//                   <div
//                     key={request.id}
//                     className="border rounded-lg p-4 bg-gray-50"
//                   >
//                     <h3 className="text-lg font-semibold">{request.parkName}</h3>
//                     <p>
//                       <strong>Booking ID:</strong> {request.bookingId}
//                     </p>
//                     <p>
//                       <strong>Service Type:</strong> {request.serviceType}
//                     </p>
//                     {request.specialRequest && (
//                       <p>
//                         <strong>Special Request:</strong>{" "}
//                         {request.specialRequest}
//                       </p>
//                     )}
//                     <p>
//                       <strong>Requested On:</strong>{" "}
//                       {new Date(request.createdAt).toLocaleString()}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             )}
//             <button
//               className="mt-4 bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
//               onClick={() => setShowRoomServiceRequests(false)}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}

//       {/* National Park Listings or Booking Form */}
//       {!selectedPark ? (
//         <div className="space-y-6">
//           {nationalParks.map((park) => (
//             <div
//               key={park.id}
//               className="flex border rounded-lg shadow-md p-4 bg-gray-300"
//             >
//               <div className="flex-shrink-0 w-1/3">
//                 <img
//                   src={park.images[0] || "https://via.placeholder.com/150"}
//                   alt={`${park.name} main view`}
//                   className="w-full h-40 object-cover rounded-lg"
//                 />
//                 <div className="flex mt-2 space-x-2">
//                   {park.images.slice(1).map((img, idx) => (
//                     <img
//                       key={idx}
//                       src={img}
//                       alt={`${park.name} thumbnail ${idx + 1}`}
//                       className="w-16 h-16 object-cover rounded"
//                     />
//                   ))}
//                 </div>
//               </div>
//               <div className="flex-grow px-4">
//                 <div className="flex justify-between items-start">
//                   <div>
//                     <h2 className="text-xl font-semibold">{park.name}</h2>
//                     <p className="text-gray-600">{park.location}</p>
//                     <div
//                       className="flex items-center mt-1"
//                       aria-label={`Star rating: ${park.starRating} out of 5`}
//                     >
//                       {[...Array(5)].map((_, i) => (
//                         <svg
//                           key={i}
//                           className={`w-4 h-4 ${
//                             i < park.starRating
//                               ? "text-yellow-600"
//                               : "text-gray-300"
//                           }`}
//                           fill="currentColor"
//                           viewBox="0 0 20 20"
//                         >
//                           <path d="M10 15l-5.5 3 1-5.5L1 7.5l5.5-.5L10 2l3.5 5 5.5.5-4 4.5 1 5.5z" />
//                         </svg>
//                       ))}
//                     </div>
//                     <p className="text-sm text-gray-500 mt-1">
//                       {park.description}
//                     </p>
//                   </div>
//                   <div className="text-right">
//                     <div className="flex items-center justify-end">
//                       <span className="text-green-600 font-semibold mr-2">
//                         {park.rating}
//                       </span>
//                       <span className="text-gray-600 text-sm">
//                         ({park.reviews} Ratings)
//                       </span>
//                     </div>
//                     {park.tags.includes("Early Bird Deal") && (
//                       <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded mt-1">
//                         Early Bird Deal
//                       </span>
//                     )}
//                     <p className="text-gray-500 line-through mt-2">
//                       ${park.originalPrice.toFixed(2)}
//                     </p>
//                     <p className="text-xl font-bold">
//                       ${park.discountedPrice.toFixed(2)}
//                     </p>
//                     <p className="text-gray-600 text-sm">
//                       + ${park.taxesAndFees.toFixed(2)} taxes & fees
//                     </p>
//                     <p className="text-gray-600 text-sm">Per Night (USD)</p>
//                   </div>
//                 </div>
//                 <div className="mt-2">
//                   {park.tags.map((tag, idx) => (
//                     <p key={idx} className="text-green-600 text-sm">
//                       ✓ {tag}
//                     </p>
//                   ))}
//                 </div>
//               </div>
//               <div className="flex-shrink-0">
//                 <button
//                   className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//                   onClick={() => setSelectedPark(park)}
//                 >
//                   Book
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div className="border rounded-lg p-6 bg-white shadow-md relative">
//           <h2 className="text-2xl font-bold mb-4">
//             Book Your Stay at {selectedPark?.name || "Unknown Park"}
//           </h2>
//           {error && <p className="text-red-600 mb-4">{error}</p>}
//           <div className="grid grid-cols-2 gap-4 mb-4">
//             <div>
//               <label htmlFor="checkIn" className="block text-lg font-medium">
//                 Check-In Date
//               </label>
//               <input
//                 id="checkIn"
//                 type="date"
//                 className="border p-2 rounded w-full"
//                 value={checkIn}
//                 onChange={(e) => setCheckIn(e.target.value)}
//                 disabled={loading}
//                 min={new Date().toISOString().split("T")[0]}
//               />
//             </div>
//             <div>
//               <label htmlFor="checkOut" className="block text-lg font-medium">
//                 Check-Out Date
//               </label>
//               <input
//                 id="checkOut"
//                 type="date"
//                 className="border p-2 rounded w-full"
//                 value={checkOut}
//                 onChange={(e) => setCheckOut(e.target.value)}
//                 disabled={loading}
//                 min={
//                   checkIn
//                     ? new Date(
//                         new Date(checkIn).setDate(
//                           new Date(checkIn).getDate() + 1
//                         )
//                       )
//                         .toISOString()
//                         .split("T")[0]
//                     : new Date().toISOString().split("T")[0]
//                 }
//               />
//             </div>
//           </div>
//           <div className="mb-4">
//             <label className="flex items-center">
//               <input
//                 type="checkbox"
//                 className="mr-2"
//                 checked={wantRoom}
//                 onChange={() => setWantRoom(!wantRoom)}
//                 disabled={loading}
//               />
//               Book a Cabin/Room
//             </label>
//             {wantRoom && (
//               <select
//                 className="border p-2 rounded w-full mt-2"
//                 value={room}
//                 onChange={(e) => setRoom(e.target.value)}
//                 disabled={loading}
//               >
//                 <option value="">Select Room</option>
//                 {(selectedPark?.rooms || []).map((r) => (
//                   <option key={r} value={r}>
//                     {r}
//                   </option>
//                 ))}
//               </select>
//             )}
//           </div>
//           <div className="mb-4">
//             <label htmlFor="campsite" className="block text-lg font-medium">
//               Campsite
//             </label>
//             <select
//               id="campsite"
//               className="border p-2 rounded w-full"
//               value={campsite}
//               onChange={(e) => setCampsite(e.target.value)}
//               disabled={loading}
//             >
//               <option value="">Select Campsite</option>
//               {(selectedPark?.campsites || []).map((c) => (
//                 <option key={c} value={c}>
//                   {c}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div className="mb-4">
//             <label
//               htmlFor="specialRequest"
//               className="block text-lg font-medium"
//             >
//               Special Requests
//             </label>
//             <textarea
//               id="specialRequest"
//               className="border p-2 rounded w-full"
//               value={specialRequest}
//               onChange={(e) => setSpecialRequest(e.target.value)}
//               disabled={loading}
//               rows={4}
//               placeholder="Any specific requests?"
//             />
//           </div>
//           <div className="flex space-x-4">
//             <button
//               className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-blue-400"
//               onClick={() => handleBooking(selectedPark.id)}
//               disabled={loading}
//             >
//               {loading ? "Processing..." : "Confirm Booking"}
//             </button>
//             <button
//               className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
//               onClick={() => setSelectedPark(null)}
//               disabled={loading}
//             >
//               Cancel
//             </button>
//           </div>

//           {paymentProcessing && (
//             <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//               <div className="bg-white p-6 rounded-lg shadow-lg text-center">
//                 <h3 className="text-xl font-semibold mb-4">
//                   Processing Your Payment
//                 </h3>
//                 <p className="text-gray-600">{paymentStep}</p>
//                 <div className="mt-4 flex justify-center">
//                   <svg
//                     className="animate-spin h-8 w-8 text-blue-600"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                   >
//                     <circle
//                       className="opacity-25"
//                       cx="12"
//                       cy="12"
//                       r="10"
//                       stroke="currentColor"
//                       strokeWidth="4"
//                     ></circle>
//                     <path
//                       className="opacity-75"
//                       fill="currentColor"
//                       d="M4 12a8 8 0 018-8v8H4z"
//                     ></path>
//                   </svg>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default VisitorPage;


// import { useState, useEffect } from "react";
// import axios from "axios";

// // Move nationalParks to a separate file or API for scalability
// const nationalParks = [
//   {
//     id: 1,
//     name: "Yellowstone National Park",
//     location: "Wyoming, USA",
//     starRating: 4,
//     rating: 4.5,
//     reviews: 305,
//     originalPrice: 180,
//     discountedPrice: 144,
//     taxesAndFees: 22,
//     tags: ["Free Cancellation till check-in"],
//     images: [
//       "https://media.istockphoto.com/id/1254906773/photo/grand-prismatic-spring-yellowstone-national-park.jpg?b=1&s=612x612&w=0&k=20&c=Q6csMFyyRrRUtOPI7Rw4VTV_piy15gtw7AjtnfGoHOs=&auto=format&fit=crop&w=500&q=60",
//     ],
//     rooms: ["Cabin A", "Cabin B"],
//     campsites: ["Site 1", "Site 2"],
//     description: "Explore the geysers and wildlife of Yellowstone National Park.",
//   },
//   {
//     id: 2,
//     name: "Yosemite National Park",
//     location: "California, USA",
//     starRating: 4,
//     rating: 4.3,
//     reviews: 521,
//     originalPrice: 216,
//     discountedPrice: 168,
//     taxesAndFees: 25,
//     tags: ["Free Cancellation till check-in", "Early Bird Deal"],
//     images: [
//       "https://c4.wallpaperflare.com/wallpaper/382/231/775/yosemite-valley-el-capitan-united-states-california-wallpaper-preview.jpg",
//     ],
//     rooms: ["Suite 1", "Suite 2"],
//     campsites: ["Site A", "Site B"],
//     description: "Experience the stunning views of Yosemite National Park.",
//   },
//   {
//     id: 3,
//     name: "Grand Canyon National Park",
//     location: "Arizona, USA",
//     starRating: 5,
//     rating: 4.8,
//     reviews: 422,
//     originalPrice: 240,
//     discountedPrice: 192,
//     taxesAndFees: 29,
//     tags: ["Early Bird Deal"],
//     images: [
//       "https://images.pexels.com/photos/20879885/pexels-photo-20879885/free-photo-of-grand-canyon-national-park.jpeg",
//     ],
//     rooms: ["Room 101", "Room 102"],
//     campsites: ["Site X", "Site Y"],
//     description: "Discover the breathtaking vistas of Grand Canyon National Park.",
//   },
// ];

// function VisitorPage({ visitorId = null }) {
//   const [currentVisitorId, setCurrentVisitorId] = useState(() => {
//     if (visitorId) return visitorId;
//     const storedId = localStorage.getItem("visitorId");
//     if (storedId) return storedId;
//     const newId = `visitor_${Date.now()}`;
//     localStorage.setItem("visitorId", newId);
//     return newId;
//   });
//   const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("visitorId"));
//   const [selectedPark, setSelectedPark] = useState(null);
//   const [checkIn, setCheckIn] = useState("");
//   const [checkOut, setCheckOut] = useState("");
//   const [wantRoom, setWantRoom] = useState(false);
//   const [room, setRoom] = useState("");
//   const [campsite, setCampsite] = useState("");
//   const [specialRequest, setSpecialRequest] = useState("");
//   const [complaint, setComplaint] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [paymentProcessing, setPaymentProcessing] = useState(false);
//   const [paymentStep, setPaymentStep] = useState("");
//   const [bookings, setBookings] = useState(() => {
//     try {
//       const saved = localStorage.getItem(`bookings_${currentVisitorId}`);
//       const parsed = saved ? JSON.parse(saved) : [];
//       return Array.isArray(parsed)
//         ? parsed.filter((b) => b.visitorId === currentVisitorId)
//         : [];
//     } catch (e) {
//       console.error(`Failed to parse bookings for ${currentVisitorId}:`, e);
//       return [];
//     }
//   });
//   const [selectedBookingId, setSelectedBookingId] = useState(null);
//   const [roomServiceType, setRoomServiceType] = useState("");
//   const [roomServiceRequest, setRoomServiceRequest] = useState("");
//   const [roomServiceRequests, setRoomServiceRequests] = useState(() => {
//     try {
//       const saved = localStorage.getItem(`roomServiceRequests_${currentVisitorId}`);
//       const parsed = saved ? JSON.parse(saved) : [];
//       return Array.isArray(parsed)
//         ? parsed.filter((r) => r.visitorId === currentVisitorId)
//         : [];
//     } catch (e) {
//       console.error(`Failed to parse roomServiceRequests for ${currentVisitorId}:`, e);
//       return [];
//     }
//   });
//   const [currentView, setCurrentView] = useState("parks"); // Manage sidebar views
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Mobile sidebar toggle
//   const [confirmationMessage, setConfirmationMessage] = useState("");
//   const [roomServiceConfirmation, setRoomServiceConfirmation] = useState("");

//   useEffect(() => {
//     try {
//       localStorage.setItem(`bookings_${currentVisitorId}`, JSON.stringify(bookings));
//     } catch (e) {
//       console.error(`Failed to save bookings for ${currentVisitorId}:`, e);
//     }
//   }, [bookings, currentVisitorId]);

//   useEffect(() => {
//     try {
//       localStorage.setItem(`roomServiceRequests_${currentVisitorId}`, JSON.stringify(roomServiceRequests));
//     } catch (e) {
//       console.error(`Failed to save roomServiceRequests for ${currentVisitorId}:`, e);
//     }
//   }, [roomServiceRequests, currentVisitorId]);

//   const handleLogout = () => {
//     localStorage.removeItem("visitorId");
//     localStorage.removeItem(`bookings_${currentVisitorId}`);
//     localStorage.removeItem(`roomServiceRequests_${currentVisitorId}`);
//     setCurrentVisitorId(null);
//     setIsLoggedIn(false);
//     setBookings([]);
//     setRoomServiceRequests([]);
//     setSelectedPark(null);
//     setCurrentView("parks");
//   };

//   const validateBooking = () => {
//     if (!checkIn || !checkOut) return "Please select both check-in and check-out dates.";
//     if (new Date(checkOut) <= new Date(checkIn)) return "Check-out date must be after check-in date.";
//     if (!campsite) return "Please select a campsite.";
//     if (wantRoom && !room) return "Please select a room.";
//     return "";
//   };

//   const processDummyPayment = async () => {
//     setPaymentProcessing(true);
//     setPaymentStep("Processing Payment...");
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     setPaymentStep("Verifying Payment...");
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     setPaymentStep("Payment Successful!");
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     setPaymentProcessing(false);
//     setPaymentStep("");
//   };

//   const handleBooking = async (parkId) => {
//     const validationError = validateBooking();
//     if (validationError) {
//       setError(validationError);
//       return;
//     }
//     setLoading(true);
//     setError("");
//     try {
//       await processDummyPayment();
//       const newBooking = {
//         id: bookings.length + 1,
//         visitorId: currentVisitorId,
//         parkId,
//         parkName: nationalParks.find((p) => p.id === parkId).name,
//         checkIn,
//         checkOut,
//         room: wantRoom ? room : null,
//         campsite,
//         specialRequest: specialRequest || null,
//         status: "Confirmed",
//         createdAt: new Date().toISOString(),
//       };
//       setBookings([...bookings, newBooking]);
//       setConfirmationMessage("Booking Confirmed!");
//       setTimeout(() => {
//         setSelectedPark(null);
//         setCheckIn("");
//         setCheckOut("");
//         setWantRoom(false);
//         setRoom("");
//         setCampsite("");
//         setSpecialRequest("");
//         setConfirmationMessage("");
//         setCurrentView("parks");
//       }, 3000);
//     } catch (err) {
//       setError("Failed to create booking. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleComplaint = async (parkId) => {
//     if (!complaint.trim()) {
//       setError("Please describe the issue in the complaint.");
//       return;
//     }
//     setLoading(true);
//     setError("");
//     try {
//       await new Promise((resolve) => setTimeout(resolve, 1000));
//       setConfirmationMessage("Complaint submitted successfully!");
//       setTimeout(() => {
//         setComplaint("");
//         setSelectedPark(null);
//         setConfirmationMessage("");
//         setCurrentView("parks");
//       }, 3000);
//     } catch (err) {
//       setError("Failed to submit complaint. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleRoomServiceRequest = async (bookingId) => {
//     if (!roomServiceType) {
//       setError("Please select a room service type.");
//       return;
//     }
//     setLoading(true);
//     setError("");
//     try {
//       await new Promise((resolve) => setTimeout(resolve, 1000));
//       const newRequest = {
//         id: roomServiceRequests.length + 1,
//         visitorId: currentVisitorId,
//         bookingId,
//         parkName: bookings.find((b) => b.id === bookingId && b.visitorId === currentVisitorId).parkName,
//         serviceType: roomServiceType,
//         specialRequest: roomServiceRequest || null,
//         createdAt: new Date().toISOString(),
//       };
//       setRoomServiceRequests([...roomServiceRequests, newRequest]);
//       setRoomServiceConfirmation("Request Submitted Successfully!");
//       setTimeout(() => {
//         setRoomServiceType("");
//         setRoomServiceRequest("");
//         setSelectedBookingId(null);
//         setRoomServiceConfirmation("");
//       }, 3000);
//     } catch (err) {
//       setError("Failed to submit room service request. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="flex min-h-screen">
//       {/* Sidebar */}
//       <div
//         className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-white transform ${
//           isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//         } md:translate-x-0 transition-transform duration-300 ease-in-out z-50 md:static md:w-64 md:flex md:flex-col`}
//       >
//         <div className="flex items-center justify-between p-4 border-b border-gray-700">
//           <h2 className="text-xl font-bold">Park Booking</h2>
//           <button className="md:hidden text-white" onClick={toggleSidebar}>
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               ></path>
//             </svg>
//           </button>
//         </div>
//         <nav className="flex-1 p-4 space-y-2">
//           <button
//             className={`w-full text-left px-4 py-2 rounded ${
//               currentView === "parks" ? "bg-gray-700" : "hover:bg-gray-700"
//             }`}
//             onClick={() => {
//               setCurrentView("parks");
//               setSelectedPark(null);
//               setIsSidebarOpen(false);
//             }}
//           >
//             National Parks
//           </button>
//           <button
//             className={`w-full text-left px-4 py-2 rounded ${
//               currentView === "bookings" ? "bg-gray-700" : "hover:bg-gray-700"
//             }`}
//             onClick={() => {
//               setCurrentView("bookings");
//               setSelectedPark(null);
//               setIsSidebarOpen(false);
//             }}
//           >
//             My Bookings
//           </button>
//           <button
//             className={`w-full text-left px-4 py-2 rounded ${
//               currentView === "roomService" ? "bg-gray-700" : "hover:bg-gray-700"
//             }`}
//             onClick={() => {
//               setCurrentView("roomService");
//               setSelectedPark(null);
//               setIsSidebarOpen(false);
//             }}
//           >
//             Room Service Requests
//           </button>
//         </nav>
//         {isLoggedIn && (
//           <div className="p-4 border-t border-gray-700">
//             <button
//               className="w-full bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
//               onClick={handleLogout}
//             >
//               Logout
//             </button>
//           </div>
//         )}
//       </div>

//       {/* Mobile Hamburger Menu */}
//       <div className="md:hidden fixed top-4 left-4 z-50">
//         <button className="text-white" onClick={toggleSidebar}>
//           <svg
//             className="w-8 h-8"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 12h16M4 18h16"
//             ></path>
//           </svg>
//         </button>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-4 sm:p-6 max-w-full mx-auto">
//         <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center sm:text-left">
//           Book Your National Park Adventure
//         </h1>

//         {confirmationMessage && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//             <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-[90%] sm:max-w-md">
//               <svg
//                 className="w-12 h-12 text-green-600 mx-auto mb-4"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M5 13l4 4L19 7"
//                 ></path>
//               </svg>
//               <h3 className="text-xl sm:text-2xl font-semibold text-green-600 mb-4">
//                 {confirmationMessage}
//               </h3>
//               <p className="text-gray-600 text-sm sm:text-base">Thank you for your request!</p>
//             </div>
//           </div>
//         )}

//         {currentView === "parks" && !selectedPark && (
//           <div className="space-y-6">
//             {nationalParks.map((park) => (
//               <div
//                 key={park.id}
//                 className="flex flex-col sm:flex-row border rounded-lg shadow-md p-4 bg-gray-100"
//               >
//                 <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
//                   <img
//                     src={park.images[0] || "https://via.placeholder.com/150"}
//                     alt={`${park.name} main view`}
//                     className="w-full h-40 sm:h-48 object-cover rounded-lg"
//                   />
//                   <div className="flex mt-2 space-x-2 overflow-x-auto">
//                     {park.images.slice(1).map((img, idx) => (
//                       <img
//                         key={idx}
//                         src={img}
//                         alt={`${park.name} thumbnail ${idx + 1}`}
//                         className="w-16 h-16 object-cover rounded"
//                       />
//                     ))}
//                   </div>
//                 </div>
//                 <div className="flex-grow px-0 sm:px-4">
//                   <div className="flex flex-col sm:flex-row justify-between items-start">
//                     <div className="w-full">
//                       <h2 className="text-lg sm:text-xl font-semibold">{park.name}</h2>
//                       <p className="text-gray-600 text-sm sm:text-base">{park.location}</p>
//                       <div
//                         className="flex items-center mt-1"
//                         aria-label={`Star rating: ${park.starRating} out of 5`}
//                       >
//                         {[...Array(5)].map((_, i) => (
//                           <svg
//                             key={i}
//                             className={`w-4 h-4 ${
//                               i < park.starRating ? "text-yellow-600" : "text-gray-300"
//                             }`}
//                             fill="currentColor"
//                             viewBox="0 0 20 20"
//                           >
//                             <path d="M10 15l-5.5 3 1-5.5L1 7.5l5.5-.5L10 2l3.5 5 5.5.5-4 4.5 1 5.5z" />
//                           </svg>
//                         ))}
//                       </div>
//                       <p className="text-xs sm:text-sm text-gray-500 mt-1">{park.description}</p>
//                     </div>
//                     <div className="text-left sm:text-right mt-4 sm:mt-0 w-full sm:w-auto">
//                       <div className="flex items-center justify-start sm:justify-end">
//                         <span className="text-green-600 font-semibold mr-2 text-sm sm:text-base">
//                           {park.rating}
//                         </span>
//                         <span className="text-gray-600 text-xs sm:text-sm">
//                           ({park.reviews} Ratings)
//                         </span>
//                       </div>
//                       {park.tags.includes("Early Bird Deal") && (
//                         <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded mt-1">
//                           Early Bird Deal
//                         </span>
//                       )}
//                       <p className="text-gray-500 line-through mt-2 text-sm sm:text-base">
//                         ${park.originalPrice.toFixed(2)}
//                       </p>
//                       <p className="text-lg sm:text-xl font-bold">
//                         ${park.discountedPrice.toFixed(2)}
//                       </p>
//                       <p className="text-gray-600 text-xs sm:text-sm">
//                         + ${park.taxesAndFees.toFixed(2)} taxes & fees
//                       </p>
//                       <p className="text-gray-600 text-xs sm:text-sm">Per Night (USD)</p>
//                     </div>
//                   </div>
//                   <div className="mt-2">
//                     {park.tags.map((tag, idx) => (
//                       <p key={idx} className="text-green-600 text-xs sm:text-sm">
//                         ✓ {tag}
//                       </p>
//                     ))}
//                     <button
//                       className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full sm:w-auto text-base"
//                       onClick={() => setSelectedPark(park)}
//                     >
//                       Book
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         {currentView === "bookings" && (
//           <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg max-w-[90%] sm:max-w-4xl w-full">
//             <h2 className="text-xl sm:text-2xl font-bold mb-4">My Bookings</h2>
//             {bookings.length === 0 ? (
//               <p className="text-gray-600 text-sm sm:text-base">No bookings found.</p>
//             ) : (
//               <div className="space-y-4">
//                 {bookings.map((booking) => (
//                   <div key={booking.id} className="border rounded-lg p-4 bg-gray-50">
//                     <h3 className="text-base sm:text-lg font-semibold">{booking.parkName}</h3>
//                     <p className="text-sm sm:text-base">
//                       <strong>Check-In:</strong>{" "}
//                       {new Date(booking.checkIn).toLocaleDateString()}
//                     </p>
//                     <p className="text-sm sm:text-base">
//                       <strong>Check-Out:</strong>{" "}
//                       {new Date(booking.checkOut).toLocaleDateString()}
//                     </p>
//                     {booking.room && (
//                       <p className="text-sm sm:text-base">
//                         <strong>Room:</strong> {booking.room}
//                       </p>
//                     )}
//                     <p className="text-sm sm:text-base">
//                       <strong>Campsite:</strong> {booking.campsite}
//                     </p>
//                     {booking.specialRequest && (
//                       <p className="text-sm sm:text-base">
//                         <strong>Special Request:</strong> {booking.specialRequest}
//                       </p>
//                     )}
//                     <p className="text-sm sm:text-base">
//                       <strong>Status:</strong> {booking.status}
//                     </p>
//                     <p className="text-sm sm:text-base">
//                       <strong>Booked On:</strong>{" "}
//                       {new Date(booking.createdAt).toLocaleString()}
//                     </p>
//                     <button
//                       className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full sm:w-auto text-base"
//                       onClick={() =>
//                         setSelectedBookingId(
//                           selectedBookingId === booking.id ? null : booking.id
//                         )
//                       }
//                     >
//                       {selectedBookingId === booking.id
//                         ? "Close Room Service"
//                         : "Request Room Service"}
//                     </button>
//                     {selectedBookingId === booking.id && (
//                       <div className="mt-4 border-t pt-4">
//                         <h4 className="text-base sm:text-lg font-semibold mb-2">
//                           Room Service Request
//                         </h4>
//                         {error && <p className="text-red-600 mb-4 text-sm sm:text-base">{error}</p>}
//                         <div className="mb-4">
//                           <label
//                             htmlFor={`serviceType-${booking.id}`}
//                             className="block text-sm sm:text-lg font-medium"
//                           >
//                             Service Type
//                           </label>
//                           <select
//                             id={`serviceType-${booking.id}`}
//                             className="border p-2 rounded w-full text-sm sm:text-base"
//                             value={roomServiceType}
//                             onChange={(e) => setRoomServiceType(e.target.value)}
//                             disabled={loading}
//                           >
//                             <option value="">Select Service</option>
//                             <option value="Extra Towels">Extra Towels</option>
//                             <option value="Food Delivery">Food Delivery</option>
//                             <option value="Cleaning Service">Cleaning Service</option>
//                             <option value="Other">Other</option>
//                           </select>
//                         </div>
//                         <div className="mb-4">
//                           <label
//                             htmlFor={`serviceRequest-${booking.id}`}
//                             className="block text-sm sm:text-lg font-medium"
//                           >
//                             Special Request
//                           </label>
//                           <textarea
//                             id={`serviceRequest-${booking.id}`}
//                             className="border p-2 rounded w-full text-sm sm:text-base"
//                             value={roomServiceRequest}
//                             onChange={(e) => setRoomServiceRequest(e.target.value)}
//                             disabled={loading}
//                             rows={4}
//                             placeholder="Any specific requests?"
//                           />
//                         </div>
//                         <button
//                           className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:bg-green-400 w-full sm:w-auto text-base"
//                           onClick={() => handleRoomServiceRequest(booking.id)}
//                           disabled={loading}
//                         >
//                           {loading ? "Submitting..." : "Submit Request"}
//                         </button>
//                         {roomServiceConfirmation && selectedBookingId === booking.id && (
//                           <p className="mt-4 text-green-600 font-semibold text-sm sm:text-base">
//                             {roomServiceConfirmation}
//                           </p>
//                         )}
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         )}

//         {currentView === "roomService" && (
//           <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg max-w-[90%] sm:max-w-4xl w-full">
//             <h2 className="text-xl sm:text-2xl font-bold mb-4">Room Service Requests</h2>
//             {roomServiceRequests.length === 0 ? (
//               <p className="text-gray-600 text-sm sm:text-base">No room service requests found.</p>
//             ) : (
//               <div className="space-y-4">
//                 {roomServiceRequests.map((request) => (
//                   <div key={request.id} className="border rounded-lg p-4 bg-gray-50">
//                     <h3 className="text-base sm:text-lg font-semibold">{request.parkName}</h3>
//                     <p className="text-sm sm:text-base">
//                       <strong>Booking ID:</strong> {request.bookingId}
//                     </p>
//                     <p className="text-sm sm:text-base">
//                       <strong>Service Type:</strong> {request.serviceType}
//                     </p>
//                     {request.specialRequest && (
//                       <p className="text-sm sm:text-base">
//                         <strong>Special Request:</strong> {request.specialRequest}
//                       </p>
//                     )}
//                     <p className="text-sm sm:text-base">
//                       <strong>Requested On:</strong>{" "}
//                       {new Date(request.createdAt).toLocaleString()}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         )}

//         {selectedPark && (
//           <div className="border rounded-lg p-4 sm:p-6 bg-white shadow-md relative">
//             <h2 className="text-xl sm:text-2xl font-bold mb-4">
//               Book Your Stay at {selectedPark?.name || "Unknown Park"}
//             </h2>
//             {error && <p className="text-red-600 mb-4 text-sm sm:text-base">{error}</p>}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
//               <div>
//                 <label htmlFor="checkIn" className="block text-sm sm:text-lg font-medium">
//                   Check-In Date
//                 </label>
//                 <input
//                   id="checkIn"
//                   type="date"
//                   className="border p-2 rounded w-full text-sm sm:text-base"
//                   value={checkIn}
//                   onChange={(e) => setCheckIn(e.target.value)}
//                   disabled={loading}
//                   min={new Date().toISOString().split("T")[0]}
//                 />
//               </div>
//               <div>
//                 <label htmlFor="checkOut" className="block text-sm sm:text-lg font-medium">
//                   Check-Out Date
//                 </label>
//                 <input
//                   id="checkOut"
//                   type="date"
//                   className="border p-2 rounded w-full text-sm sm:text-base"
//                   value={checkOut}
//                   onChange={(e) => setCheckOut(e.target.value)}
//                   disabled={loading}
//                   min={
//                     checkIn
//                       ? new Date(new Date(checkIn).setDate(new Date(checkIn).getDate() + 1))
//                           .toISOString()
//                           .split("T")[0]
//                       : new Date().toISOString().split("T")[0]
//                   }
//                 />
//               </div>
//             </div>
//             <div className="mb-4">
//               <label className="flex items-center">
//                 <input
//                   type="checkbox"
//                   className="mr-2 h-5 w-5"
//                   checked={wantRoom}
//                   onChange={() => setWantRoom(!wantRoom)}
//                   disabled={loading}
//                 />
//                 <span className="text-sm sm:text-base">Book a Cabin/Room</span>
//               </label>
//               {wantRoom && (
//                 <select
//                   className="border p-2 rounded w-full mt-2 text-sm sm:text-base"
//                   value={room}
//                   onChange={(e) => setRoom(e.target.value)}
//                   disabled={loading}
//                 >
//                   <option value="">Select Room</option>
//                   {(selectedPark?.rooms || []).map((r) => (
//                     <option key={r} value={r}>
//                       {r}
//                     </option>
//                   ))}
//                 </select>
//               )}
//             </div>
//             <div className="mb-4">
//               <label htmlFor="campsite" className="block text-sm sm:text-lg font-medium">
//                 Campsite
//               </label>
//               <select
//                 id="campsite"
//                 className="border p-2 rounded w-full text-sm sm:text-base"
//                 value={campsite}
//                 onChange={(e) => setCampsite(e.target.value)}
//                 disabled={loading}
//               >
//                 <option value="">Select Campsite</option>
//                 {(selectedPark?.campsites || []).map((c) => (
//                   <option key={c} value={c}>
//                     {c}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div className="mb-4">
//               <label htmlFor="specialRequest" className="block text-sm sm:text-lg font-medium">
//                 Special Requests
//               </label>
//               <textarea
//                 id="specialRequest"
//                 className="border p-2 rounded w-full text-sm sm:text-base"
//                 value={specialRequest}
//                 onChange={(e) => setSpecialRequest(e.target.value)}
//                 disabled={loading}
//                 rows={4}
//                 placeholder="Any specific requests?"
//               />
//             </div>
//             <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
//               <button
//                 className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-blue-400 w-full sm:w-auto text-base"
//                 onClick={() => handleBooking(selectedPark.id)}
//                 disabled={loading}
//               >
//                 {loading ? "Processing..." : "Confirm Booking"}
//               </button>
//               <button
//                 className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 w-full sm:w-auto text-base"
//                 onClick={() => setSelectedPark(null)}
//                 disabled={loading}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         )}

//         {paymentProcessing && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//             <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-[90%] sm:max-w-md">
//               <h3 className="text-lg sm:text-xl font-semibold mb-4">
//                 Processing Your Payment
//               </h3>
//               <p className="text-gray-600 text-sm sm:text-base">{paymentStep}</p>
//               <div className="mt-4 flex justify-center">
//                 <svg
//                   className="animate-spin h-8 w-8 text-blue-600"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                 >
//                   <circle
//                     className="opacity-25"
//                     cx="12"
//                     cy="12"
//                     r="10"
//                     stroke="currentColor"
//                     strokeWidth="4"
//                   ></circle>
//                   <path
//                     className="opacity-75"
//                     fill="currentColor"
//                     d="M4 12a8 8 0 018-8v8H4z"
//                   ></path>
//                 </svg>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default VisitorPage;




// import { useState, useEffect } from "react";
// import axios from "axios";

// // Move nationalParks to a separate file or API for scalability
// const nationalParks = [
//   {
//     id: 1,
//     name: "Yellowstone National Park",
//     location: "Wyoming, USA",
//     starRating: 4,
//     rating: 4.5,
//     reviews: 305,
//     originalPrice: 180,
//     discountedPrice: 144,
//     taxesAndFees: 22,
//     tags: ["Free Cancellation till check-in"],
//     images: [
//       "https://media.istockphoto.com/id/1254906773/photo/grand-prismatic-spring-yellowstone-national-park.jpg?b=1&s=612x612&w=0&k=20&c=Q6csMFyyRrRUtOPI7Rw4VTV_piy15gtw7AjtnfGoHOs=&auto=format&fit=crop&w=500&q=60",
//     ],
//     rooms: ["Cabin A", "Cabin B"],
//     campsites: ["Site 1", "Site 2"],
//     description: "Explore the geysers and wildlife of Yellowstone National Park.",
//   },
//   {
//     id: 2,
//     name: "Yosemite National Park",
//     location: "California, USA",
//     starRating: 4,
//     rating: 4.3,
//     reviews: 521,
//     originalPrice: 216,
//     discountedPrice: 168,
//     taxesAndFees: 25,
//     tags: ["Free Cancellation till check-in", "Early Bird Deal"],
//     images: [
//       "https://c4.wallpaperflare.com/wallpaper/382/231/775/yosemite-valley-el-capitan-united-states-california-wallpaper-preview.jpg",
//     ],
//     rooms: ["Suite 1", "Suite 2"],
//     campsites: ["Site A", "Site B"],
//     description: "Experience the stunning views of Yosemite National Park.",
//   },
//   {
//     id: 3,
//     name: "Grand Canyon National Park",
//     location: "Arizona, USA",
//     starRating: 5,
//     rating: 4.8,
//     reviews: 422,
//     originalPrice: 240,
//     discountedPrice: 192,
//     taxesAndFees: 29,
//     tags: ["Early Bird Deal"],
//     images: [
//       "https://images.pexels.com/photos/20879885/pexels-photo-20879885/free-photo-of-grand-canyon-national-park.jpeg",
//     ],
//     rooms: ["Room 101", "Room 102"],
//     campsites: ["Site X", "Site Y"],
//     description: "Discover the breathtaking vistas of Grand Canyon National Park.",
//   },
// ];

// function VisitorPage({ visitorId = null }) {
//   const [currentVisitorId, setCurrentVisitorId] = useState(() => {
//     if (visitorId) return visitorId;
//     const storedId = localStorage.getItem("visitorId");
//     if (storedId) return storedId;
//     const newId = `visitor_${Date.now()}`;
//     localStorage.setItem("visitorId", newId);
//     return newId;
//   });
//   const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("visitorId"));
//   const [selectedPark, setSelectedPark] = useState(null);
//   const [checkIn, setCheckIn] = useState("");
//   const [checkOut, setCheckOut] = useState("");
//   const [wantRoom, setWantRoom] = useState(false);
//   const [room, setRoom] = useState("");
//   const [campsite, setCampsite] = useState("");
//   const [specialRequest, setSpecialRequest] = useState("");
//   const [complaint, setComplaint] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [paymentProcessing, setPaymentProcessing] = useState(false);
//   const [paymentStep, setPaymentStep] = useState("");
//   const [bookings, setBookings] = useState(() => {
//     try {
//       const saved = localStorage.getItem(`bookings_${currentVisitorId}`);
//       const parsed = saved ? JSON.parse(saved) : [];
//       return Array.isArray(parsed)
//         ? parsed.filter((b) => b.visitorId === currentVisitorId)
//         : [];
//     } catch (e) {
//       console.error(`Failed to parse bookings for ${currentVisitorId}:`, e);
//       return [];
//     }
//   });
//   const [selectedBookingId, setSelectedBookingId] = useState(null);
//   const [roomServiceType, setRoomServiceType] = useState("");
//   const [roomServiceRequest, setRoomServiceRequest] = useState("");
//   const [roomServiceRequests, setRoomServiceRequests] = useState(() => {
//     try {
//       const saved = localStorage.getItem(`roomServiceRequests_${currentVisitorId}`);
//       const parsed = saved ? JSON.parse(saved) : [];
//       return Array.isArray(parsed)
//         ? parsed.filter((r) => r.visitorId === currentVisitorId)
//         : [];
//     } catch (e) {
//       console.error(`Failed to parse roomServiceRequests for ${currentVisitorId}:`, e);
//       return [];
//     }
//   });
//   const [currentView, setCurrentView] = useState("parks"); // Manage sidebar views
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Mobile sidebar toggle
//   const [confirmationMessage, setConfirmationMessage] = useState("");
//   const [roomServiceConfirmation, setRoomServiceConfirmation] = useState("");

//   useEffect(() => {
//     try {
//       localStorage.setItem(`bookings_${currentVisitorId}`, JSON.stringify(bookings));
//     } catch (e) {
//       console.error(`Failed to save bookings for ${currentVisitorId}:`, e);
//     }
//   }, [bookings, currentVisitorId]);

//   useEffect(() => {
//     try {
//       localStorage.setItem(`roomServiceRequests_${currentVisitorId}`, JSON.stringify(roomServiceRequests));
//     } catch (e) {
//       console.error(`Failed to save roomServiceRequests for ${currentVisitorId}:`, e);
//     }
//   }, [roomServiceRequests, currentVisitorId]);

//   const handleLogout = () => {
//     localStorage.removeItem("visitorId");
//     localStorage.removeItem(`bookings_${currentVisitorId}`);
//     localStorage.removeItem(`roomServiceRequests_${currentVisitorId}`);
//     setCurrentVisitorId(null);
//     setIsLoggedIn(false);
//     setBookings([]);
//     setRoomServiceRequests([]);
//     setSelectedPark(null);
//     setCurrentView("parks");
//   };

//   const validateBooking = () => {
//     if (!checkIn || !checkOut) return "Please select both check-in and check-out dates.";
//     if (new Date(checkOut) <= new Date(checkIn)) return "Check-out date must be after check-in date.";
//     if (!campsite) return "Please select a campsite.";
//     if (wantRoom && !room) return "Please select a room.";
//     return "";
//   };

//   const processDummyPayment = async () => {
//     setPaymentProcessing(true);
//     setPaymentStep("Processing Payment...");
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     setPaymentStep("Verifying Payment...");
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     setPaymentStep("Payment Successful!");
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     setPaymentProcessing(false);
//     setPaymentStep("");
//   };

//   const handleBooking = async (parkId) => {
//     const validationError = validateBooking();
//     if (validationError) {
//       setError(validationError);
//       return;
//     }
//     setLoading(true);
//     setError("");
//     try {
//       await processDummyPayment();
//       const newBooking = {
//         id: bookings.length + 1,
//         visitorId: currentVisitorId,
//         parkId,
//         parkName: nationalParks.find((p) => p.id === parkId).name,
//         checkIn,
//         checkOut,
//         room: wantRoom ? room : null,
//         campsite,
//         specialRequest: specialRequest || null,
//         status: "Confirmed",
//         createdAt: new Date().toISOString(),
//       };
//       setBookings([...bookings, newBooking]);
//       setConfirmationMessage("Booking Confirmed!");
//       setTimeout(() => {
//         setSelectedPark(null);
//         setCheckIn("");
//         setCheckOut("");
//         setWantRoom(false);
//         setRoom("");
//         setCampsite("");
//         setSpecialRequest("");
//         setConfirmationMessage("");
//         setCurrentView("parks");
//       }, 3000);
//     } catch (err) {
//       setError("Failed to create booking. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleComplaint = async (parkId) => {
//     if (!complaint.trim()) {
//       setError("Please describe the issue in the complaint.");
//       return;
//     }
//     setLoading(true);
//     setError("");
//     try {
//       await new Promise((resolve) => setTimeout(resolve, 1000));
//       setConfirmationMessage("Complaint submitted successfully!");
//       setTimeout(() => {
//         setComplaint("");
//         setSelectedPark(null);
//         setConfirmationMessage("");
//         setCurrentView("parks");
//       }, 3000);
//     } catch (err) {
//       setError("Failed to submit complaint. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleRoomServiceRequest = async (bookingId) => {
//     if (!roomServiceType) {
//       setError("Please select a room service type.");
//       return;
//     }
//     setLoading(true);
//     setError("");
//     try {
//       await new Promise((resolve) => setTimeout(resolve, 1000));
//       const newRequest = {
//         id: roomServiceRequests.length + 1,
//         visitorId: currentVisitorId,
//         bookingId,
//         parkName: bookings.find((b) => b.id === bookingId && b.visitorId === currentVisitorId).parkName,
//         serviceType: roomServiceType,
//         specialRequest: roomServiceRequest || null,
//         createdAt: new Date().toISOString(),
//       };
//       setRoomServiceRequests([...roomServiceRequests, newRequest]);
//       setRoomServiceConfirmation("Request Submitted Successfully!");
//       setTimeout(() => {
//         setRoomServiceType("");
//         setRoomServiceRequest("");
//         setSelectedBookingId(null);
//         setRoomServiceConfirmation("");
//       }, 3000);
//     } catch (err) {
//       setError("Failed to submit room service request. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="flex min-h-screen">
//       {/* Sidebar */}
//       <div
//         className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-white transform ${
//           isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//         } md:translate-x-0 transition-transform duration-300 ease-in-out z-50 md:static md:w-64 md:flex md:flex-col`}
//       >
//         <div className="flex items-center justify-between p-4 border-b border-gray-700">
//           <h2 className="text-xl font-bold">Park Booking</h2>
//           <button className="md:hidden text-white" onClick={toggleSidebar}>
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               ></path>
//             </svg>
//           </button>
//         </div>
//         <nav className="flex-1 p-4 space-y-2">
//           <button
//             className={`w-full text-left px-4 py-2 rounded ${
//               currentView === "parks" ? "bg-gray-700" : "hover:bg-gray-700"
//             }`}
//             onClick={() => {
//               setCurrentView("parks");
//               setSelectedPark(null);
//               setIsSidebarOpen(false);
//             }}
//           >
//             National Parks
//           </button>
//           <button
//             className={`w-full text-left px-4 py-2 rounded ${
//               currentView === "bookings" ? "bg-gray-700" : "hover:bg-gray-700"
//             }`}
//             onClick={() => {
//               setCurrentView("bookings");
//               setSelectedPark(null);
//               setIsSidebarOpen(false);
//             }}
//           >
//             My Bookings
//           </button>
//           <button
//             className={`w-full text-left px-4 py-2 rounded ${
//               currentView === "roomService" ? "bg-gray-700" : "hover:bg-gray-700"
//             }`}
//             onClick={() => {
//               setCurrentView("roomService");
//               setSelectedPark(null);
//               setIsSidebarOpen(false);
//             }}
//           >
//             Room Service Requests
//           </button>
//         </nav>
        
//       </div>

//       {/* Mobile Hamburger Menu */}
//       {/* Mobile Hamburger Menu */}
// <div className="md:hidden fixed top-4 left-4 z-50">
//   <button
//     className={`text-white transition-opacity duration-300 ${
//       isSidebarOpen ? "opacity-0" : "opacity-100"
//     }`}
//     onClick={toggleSidebar}
//     disabled={isSidebarOpen} // Optional: Disable button when sidebar is open
//   >
//     <svg
//       className="w-8 h-8"
//       fill="none"
//       stroke="currentColor"
//       viewBox="0 0 24 20"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth="2"
//         d="M4 6h16M4 10h16M4 14h16"
//       ></path>
//     </svg>
//   </button>
// </div>

//       {/* Main Content */}
//       <div className="flex-1 p-4 pt-20 md:p-6 max-w-full mx-auto">
//         <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center sm:text-left">
//           Book Your National Park Adventure
//         </h1>

//         {confirmationMessage && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//             <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-[90%] sm:max-w-md">
//               <svg
//                 className="w-12 h-12 text-green-600 mx-auto mb-4"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M5 13l4 4L19 7"
//                 ></path>
//               </svg>
//               <h3 className="text-xl sm:text-2xl font-semibold text-green-600 mb-4">
//                 {confirmationMessage}
//               </h3>
//               <p className="text-gray-600 text-sm sm:text-base">Thank you for your request!</p>
//             </div>
//           </div>
//         )}

//         {currentView === "parks" && !selectedPark && (
//           <div className="space-y-6">
//             {nationalParks.map((park) => (
//               <div
//                 key={park.id}
//                 className="flex flex-col sm:flex-row border rounded-lg shadow-md p-4 bg-gray-100"
//               >
//                 <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
//                   <img
//                     src={park.images[0] || "https://via.placeholder.com/150"}
//                     alt={`${park.name} main view`}
//                     className="w-full h-40 sm:h-48 object-cover rounded-lg"
//                   />
//                   <div className="flex mt-2 space-x-2 overflow-x-auto">
//                     {park.images.slice(1).map((img, idx) => (
//                       <img
//                         key={idx}
//                         src={img}
//                         alt={`${park.name} thumbnail ${idx + 1}`}
//                         className="w-16 h-16 object-cover rounded"
//                       />
//                     ))}
//                   </div>
//                 </div>
//                 <div className="flex-grow px-0 sm:px-4">
//                   <div className="flex flex-col sm:flex-row justify-between items-start">
//                     <div className="w-full">
//                       <h2 className="text-lg sm:text-xl font-semibold">{park.name}</h2>
//                       <p className="text-gray-600 text-sm sm:text-base">{park.location}</p>
//                       <div
//                         className="flex items-center mt-1"
//                         aria-label={`Star rating: ${park.starRating} out of 5`}
//                       >
//                         {[...Array(5)].map((_, i) => (
//                           <svg
//                             key={i}
//                             className={`w-4 h-4 ${
//                               i < park.starRating ? "text-yellow-600" : "text-gray-300"
//                             }`}
//                             fill="currentColor"
//                             viewBox="0 0 20 20"
//                           >
//                             <path d="M10 15l-5.5 3 1-5.5L1 7.5l5.5-.5L10 2l3.5 5 5.5.5-4 4.5 1 5.5z" />
//                           </svg>
//                         ))}
//                       </div>
//                       <p className="text-xs sm:text-sm text-gray-500 mt-1">{park.description}</p>
//                     </div>
//                     <div className="text-left sm:text-right mt-4 sm:mt-0 w-full sm:w-auto">
//                       <div className="flex items-center justify-start sm:justify-end">
//                         <span className="text-green-600 font-semibold mr-2 text-sm sm:text-base">
//                           {park.rating}
//                         </span>
//                         <span className="text-gray-600 text-xs sm:text-sm">
//                           ({park.reviews} Ratings)
//                         </span>
//                       </div>
//                       {park.tags.includes("Early Bird Deal") && (
//                         <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded mt-1">
//                           Early Bird Deal
//                         </span>
//                       )}
//                       <p className="text-gray-500 line-through mt-2 text-sm sm:text-base">
//                         ${park.originalPrice.toFixed(2)}
//                       </p>
//                       <p className="text-lg sm:text-xl font-bold">
//                         ${park.discountedPrice.toFixed(2)}
//                       </p>
//                       <p className="text-gray-600 text-xs sm:text-sm">
//                         + ${park.taxesAndFees.toFixed(2)} taxes & fees
//                       </p>
//                       <p className="text-gray-600 text-xs sm:text-sm">Per Night (USD)</p>
//                     </div>
//                   </div>
//                   <div className="mt-2">
//                     {park.tags.map((tag, idx) => (
//                       <p key={idx} className="text-green-600 text-xs sm:text-sm">
//                         ✓ {tag}
//                       </p>
//                     ))}
//                     <button
//                       className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full sm:w-auto text-base"
//                       onClick={() => setSelectedPark(park)}
//                     >
//                       Book
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         {currentView === "bookings" && (
//           <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg max-w-[90%] sm:max-w-4xl w-full">
//             <h2 className="text-xl sm:text-2xl font-bold mb-4">My Bookings</h2>
//             {bookings.length === 0 ? (
//               <p className="text-gray-600 text-sm sm:text-base">No bookings found.</p>
//             ) : (
//               <div className="space-y-4">
//                 {bookings.map((booking) => (
//                   <div key={booking.id} className="border rounded-lg p-4 bg-gray-50">
//                     <h3 className="text-base sm:text-lg font-semibold">{booking.parkName}</h3>
//                     <p className="text-sm sm:text-base">
//                       <strong>Check-In:</strong>{" "}
//                       {new Date(booking.checkIn).toLocaleDateString()}
//                     </p>
//                     <p className="text-sm sm:text-base">
//                       <strong>Check-Out:</strong>{" "}
//                       {new Date(booking.checkOut).toLocaleDateString()}
//                     </p>
//                     {booking.room && (
//                       <p className="text-sm sm:text-base">
//                         <strong>Room:</strong> {booking.room}
//                       </p>
//                     )}
//                     <p className="text-sm sm:text-base">
//                       <strong>Campsite:</strong> {booking.campsite}
//                     </p>
//                     {booking.specialRequest && (
//                       <p className="text-sm sm:text-base">
//                         <strong>Special Request:</strong> {booking.specialRequest}
//                       </p>
//                     )}
//                     <p className="text-sm sm:text-base">
//                       <strong>Status:</strong> {booking.status}
//                     </p>
//                     <p className="text-sm sm:text-base">
//                       <strong>Booked On:</strong>{" "}
//                       {new Date(booking.createdAt).toLocaleString()}
//                     </p>
//                     <button
//                       className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full sm:w-auto text-base"
//                       onClick={() =>
//                         setSelectedBookingId(
//                           selectedBookingId === booking.id ? null : booking.id
//                         )
//                       }
//                     >
//                       {selectedBookingId === booking.id
//                         ? "Close Room Service"
//                         : "Request Room Service"}
//                     </button>
//                     {selectedBookingId === booking.id && (
//                       <div className="mt-4 border-t pt-4">
//                         <h4 className="text-base sm:text-lg font-semibold mb-2">
//                           Room Service Request
//                         </h4>
//                         {error && <p className="text-red-600 mb-4 text-sm sm:text-base">{error}</p>}
//                         <div className="mb-4">
//                           <label
//                             htmlFor={`serviceType-${booking.id}`}
//                             className="block text-sm sm:text-lg font-medium"
//                           >
//                             Service Type
//                           </label>
//                           <select
//                             id={`serviceType-${booking.id}`}
//                             className="border p-2 rounded w-full text-sm sm:text-base"
//                             value={roomServiceType}
//                             onChange={(e) => setRoomServiceType(e.target.value)}
//                             disabled={loading}
//                           >
//                             <option value="">Select Service</option>
//                             <option value="Extra Towels">Extra Towels</option>
//                             <option value="Food Delivery">Food Delivery</option>
//                             <option value="Cleaning Service">Cleaning Service</option>
//                             <option value="Other">Other</option>
//                           </select>
//                         </div>
//                         <div className="mb-4">
//                           <label
//                             htmlFor={`serviceRequest-${booking.id}`}
//                             className="block text-sm sm:text-lg font-medium"
//                           >
//                             Special Request
//                           </label>
//                           <textarea
//                             id={`serviceRequest-${booking.id}`}
//                             className="border p-2 rounded w-full text-sm sm:text-base"
//                             value={roomServiceRequest}
//                             onChange={(e) => setRoomServiceRequest(e.target.value)}
//                             disabled={loading}
//                             rows={4}
//                             placeholder="Any specific requests?"
//                           />
//                         </div>
//                         <button
//                           className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:bg-green-400 w-full sm:w-auto text-base"
//                           onClick={() => handleRoomServiceRequest(booking.id)}
//                           disabled={loading}
//                         >
//                           {loading ? "Submitting..." : "Submit Request"}
//                         </button>
//                         {roomServiceConfirmation && selectedBookingId === booking.id && (
//                           <p className="mt-4 text-green-600 font-semibold text-sm sm:text-base">
//                             {roomServiceConfirmation}
//                           </p>
//                         )}
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         )}

//         {currentView === "roomService" && (
//           <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg max-w-[90%] sm:max-w-4xl w-full">
//             <h2 className="text-xl sm:text-2xl font-bold mb-4">Room Service Requests</h2>
//             {roomServiceRequests.length === 0 ? (
//               <p className="text-gray-600 text-sm sm:text-base">No room service requests found.</p>
//             ) : (
//               <div className="space-y-4">
//                 {roomServiceRequests.map((request) => (
//                   <div key={request.id} className="border rounded-lg p-4 bg-gray-50">
//                     <h3 className="text-base sm:text-lg font-semibold">{request.parkName}</h3>
//                     <p className="text-sm sm:text-base">
//                       <strong>Booking ID:</strong> {request.bookingId}
//                     </p>
//                     <p className="text-sm sm:text-base">
//                       <strong>Service Type:</strong> {request.serviceType}
//                     </p>
//                     {request.specialRequest && (
//                       <p className="text-sm sm:text-base">
//                         <strong>Special Request:</strong> {request.specialRequest}
//                       </p>
//                     )}
//                     <p className="text-sm sm:text-base">
//                       <strong>Requested On:</strong>{" "}
//                       {new Date(request.createdAt).toLocaleString()}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         )}

//         {selectedPark && (
//           <div className="border rounded-lg p-4 sm:p-6 bg-white shadow-md relative">
//             <h2 className="text-xl sm:text-2xl font-bold mb-4">
//               Book Your Stay at {selectedPark?.name || "Unknown Park"}
//             </h2>
//             {error && <p className="text-red-600 mb-4 text-sm sm:text-base">{error}</p>}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
//               <div>
//                 <label htmlFor="checkIn" className="block text-sm sm:text-lg font-medium">
//                   Check-In Date
//                 </label>
//                 <input
//                   id="checkIn"
//                   type="date"
//                   className="border p-2 rounded w-full text-sm sm:text-base"
//                   value={checkIn}
//                   onChange={(e) => setCheckIn(e.target.value)}
//                   disabled={loading}
//                   min={new Date().toISOString().split("T")[0]}
//                 />
//               </div>
//               <div>
//                 <label htmlFor="checkOut" className="block text-sm sm:text-lg font-medium">
//                   Check-Out Date
//                 </label>
//                 <input
//                   id="checkOut"
//                   type="date"
//                   className="border p-2 rounded w-full text-sm sm:text-base"
//                   value={checkOut}
//                   onChange={(e) => setCheckOut(e.target.value)}
//                   disabled={loading}
//                   min={
//                     checkIn
//                       ? new Date(new Date(checkIn).setDate(new Date(checkIn).getDate() + 1))
//                           .toISOString()
//                           .split("T")[0]
//                       : new Date().toISOString().split("T")[0]
//                   }
//                 />
//               </div>
//             </div>
//             <div className="mb-4">
//               <label className="flex items-center">
//                 <input
//                   type="checkbox"
//                   className="mr-2 h-5 w-5"
//                   checked={wantRoom}
//                   onChange={() => setWantRoom(!wantRoom)}
//                   disabled={loading}
//                 />
//                 <span className="text-sm sm:text-base">Book a Cabin/Room</span>
//               </label>
//               {wantRoom && (
//                 <select
//                   className="border p-2 rounded w-full mt-2 text-sm sm:text-base"
//                   value={room}
//                   onChange={(e) => setRoom(e.target.value)}
//                   disabled={loading}
//                 >
//                   <option value="">Select Room</option>
//                   {(selectedPark?.rooms || []).map((r) => (
//                     <option key={r} value={r}>
//                       {r}
//                     </option>
//                   ))}
//                 </select>
//               )}
//             </div>
//             <div className="mb-4">
//               <label htmlFor="campsite" className="block text-sm sm:text-lg font-medium">
//                 Campsite
//               </label>
//               <select
//                 id="campsite"
//                 className="border p-2 rounded w-full text-sm sm:text-base"
//                 value={campsite}
//                 onChange={(e) => setCampsite(e.target.value)}
//                 disabled={loading}
//               >
//                 <option value="">Select Campsite</option>
//                 {(selectedPark?.campsites || []).map((c) => (
//                   <option key={c} value={c}>
//                     {c}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div className="mb-4">
//               <label htmlFor="specialRequest" className="block text-sm sm:text-lg font-medium">
//                 Special Requests
//               </label>
//               <textarea
//                 id="specialRequest"
//                 className="border p-2 rounded w-full text-sm sm:text-base"
//                 value={specialRequest}
//                 onChange={(e) => setSpecialRequest(e.target.value)}
//                 disabled={loading}
//                 rows={4}
//                 placeholder="Any specific requests?"
//               />
//             </div>
//             <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
//               <button
//                 className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-blue-400 w-full sm:w-auto text-base"
//                 onClick={() => handleBooking(selectedPark.id)}
//                 disabled={loading}
//               >
//                 {loading ? "Processing..." : "Confirm Booking"}
//               </button>
//               <button
//                 className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 w-full sm:w-auto text-base"
//                 onClick={() => setSelectedPark(null)}
//                 disabled={loading}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         )}

//         {paymentProcessing && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//             <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-[90%] sm:max-w-md">
//               <h3 className="text-lg sm:text-xl font-semibold mb-4">
//                 Processing Your Payment
//               </h3>
//               <p className="text-gray-600 text-sm sm:text-base">{paymentStep}</p>
//               <div className="mt-4 flex justify-center">
//                 <svg
//                   className="animate-spin h-8 w-8 text-blue-600"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                 >
//                   <circle
//                     className="opacity-25"
//                     cx="12"
//                     cy="12"
//                     r="10"
//                     stroke="currentColor"
//                     strokeWidth="4"
//                   ></circle>
//                   <path
//                     className="opacity-75"
//                     fill="currentColor"
//                     d="M4 12a8 8 0 018-8v8H4z"
//                   ></path>
//                 </svg>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default VisitorPage;



// import { useState, useEffect } from "react";

// // Move nationalParks to a separate file or API for scalability
// const nationalParks = [
//   {
//     id: 1,
//     name: "Yellowstone National Park",
//     location: "Wyoming, USA",
//     starRating: 4,
//     rating: 4.5,
//     reviews: 305,
//     originalPrice: 180,
//     discountedPrice: 144,
//     taxesAndFees: 22,
//     tags: ["Free Cancellation till check-in"],
//     images: [
//       "https://media.istockphoto.com/id/1254906773/photo/grand-prismatic-spring-yellowstone-national-park.jpg?b=1&s=612x612&w=0&k=20&c=Q6csMFyyRrRUtOPI7Rw4VTV_piy15gtw7AjtnfGoHOs=&auto=format&fit=crop&w=500&q=60",
//     ],
//     rooms: ["Cabin A", "Cabin B"],
//     campsites: ["Site 1", "Site 2"],
//     description: "Explore the geysers and wildlife of Yellowstone National Park.",
//   },
//   {
//     id: 2,
//     name: "Yosemite National Park",
//     location: "California, USA",
//     starRating: 4,
//     rating: 4.3,
//     reviews: 521,
//     originalPrice: 216,
//     discountedPrice: 168,
//     taxesAndFees: 25,
//     tags: ["Free Cancellation till check-in", "Early Bird Deal"],
//     images: [
//       "https://c4.wallpaperflare.com/wallpaper/382/231/775/yosemite-valley-el-capitan-united-states-california-wallpaper-preview.jpg",
//     ],
//     rooms: ["Suite 1", "Suite 2"],
//     campsites: ["Site A", "Site B"],
//     description: "Experience the stunning views of Yosemite National Park.",
//   },
//   {
//     id: 3,
//     name: "Grand Canyon National Park",
//     location: "Arizona, USA",
//     starRating: 5,
//     rating: 4.8,
//     reviews: 422,
//     originalPrice: 240,
//     discountedPrice: 192,
//     taxesAndFees: 29,
//     tags: ["Early Bird Deal"],
//     images: [
//       "https://images.pexels.com/photos/20879885/pexels-photo-20879885/free-photo-of-grand-canyon-national-park.jpeg",
//     ],
//     rooms: ["Room 101", "Room 102"],
//     campsites: ["Site X", "Site Y"],
//     description: "Discover the breathtaking vistas of Grand Canyon National Park.",
//   },
// ];

// function VisitorPage() {
//   const [user, setUser] = useState(() => {
//     try {
//       const storedUser = localStorage.getItem("user");
//       return storedUser ? JSON.parse(storedUser) : null;
//     } catch (error) {
//       console.error("Error parsing user from localStorage:", error);
//       return null;
//     }
//   });
//   const [selectedPark, setSelectedPark] = useState(null);
//   const [checkIn, setCheckIn] = useState("");
//   const [checkOut, setCheckOut] = useState("");
//   const [wantRoom, setWantRoom] = useState(false);
//   const [room, setRoom] = useState("");
//   const [campsite, setCampsite] = useState("");
//   const [specialRequest, setSpecialRequest] = useState("");
//   const [complaint, setComplaint] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [paymentProcessing, setPaymentProcessing] = useState(false);
//   const [paymentStep, setPaymentStep] = useState("");
//   const [bookings, setBookings] = useState(() => {
//     try {
//       const saved = localStorage.getItem(`bookings_${user?.id || ""}`);
//       const parsed = saved ? JSON.parse(saved) : [];
//       return Array.isArray(parsed)
//         ? parsed.filter((b) => b.visitorId === user?.id)
//         : [];
//     } catch (e) {
//       console.error(`Failed to parse bookings for ${user?.id}:`, e);
//       return [];
//     }
//   });
//   const [selectedBookingId, setSelectedBookingId] = useState(null);
//   const [roomServiceType, setRoomServiceType] = useState("");
//   const [roomServiceRequest, setRoomServiceRequest] = useState("");
//   const [roomServiceRequests, setRoomServiceRequests] = useState(() => {
//     try {
//       const saved = localStorage.getItem(`roomServiceRequests_${user?.id || ""}`);
//       const parsed = saved ? JSON.parse(saved) : [];
//       return Array.isArray(parsed)
//         ? parsed.filter((r) => r.visitorId === user?.id)
//         : [];
//     } catch (e) {
//       console.error(`Failed to parse roomServiceRequests for ${user?.id}:`, e);
//       return [];
//     }
//   });
//   const [currentView, setCurrentView] = useState("parks");
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [confirmationMessage, setConfirmationMessage] = useState("");
//   const [roomServiceConfirmation, setRoomServiceConfirmation] = useState("");

//   useEffect(() => {
//     try {
//       const storedUser = localStorage.getItem("user");
//       if (storedUser) {
//         const parsedUser = JSON.parse(storedUser);
//         if (parsedUser && parsedUser.role === "visitor") {
//           setUser(parsedUser);
//         } else {
//           localStorage.removeItem("user");
//           setUser(null);
//         }
//       }
//     } catch (error) {
//       console.error("Error parsing user from localStorage:", error);
//       localStorage.removeItem("user");
//       setUser(null);
//     }
//   }, []);

//   useEffect(() => {
//     try {
//       localStorage.setItem(`bookings_${user?.id || ""}`, JSON.stringify(bookings));
//     } catch (e) {
//       console.error(`Failed to save bookings for ${user?.id}:`, e);
//     }
//   }, [bookings, user]);

//   useEffect(() => {
//     try {
//       localStorage.setItem(
//         `roomServiceRequests_${user?.id || ""}`,
//         JSON.stringify(roomServiceRequests)
//       );
//     } catch (e) {
//       console.error(`Failed to save roomServiceRequests for ${user?.id}:`, e);
//     }
//   }, [roomServiceRequests, user]);

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     localStorage.removeItem(`bookings_${user?.id || ""}`);
//     localStorage.removeItem(`roomServiceRequests_${user?.id || ""}`);
//     setUser(null);
//     setBookings([]);
//     setRoomServiceRequests([]);
//     setSelectedPark(null);
//     setCurrentView("parks");
//   };

//   const validateBooking = () => {
//     if (!checkIn || !checkOut) return "Please select both check-in and check-out dates.";
//     if (new Date(checkOut) <= new Date(checkIn)) return "Check-out date must be after check-in date.";
//     if (!campsite) return "Please select a campsite.";
//     if (wantRoom && !room) return "Please select a room.";
//     return "";
//   };

//   const processDummyPayment = async () => {
//     setPaymentProcessing(true);
//     setPaymentStep("Processing Payment...");
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     setPaymentStep("Verifying Payment...");
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     setPaymentStep("Payment Successful!");
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     setPaymentProcessing(false);
//     setPaymentStep("");
//   };

//   const handleBooking = async (parkId) => {
//     const validationError = validateBooking();
//     if (validationError) {
//       setError(validationError);
//       return;
//     }
//     setLoading(true);
//     setError("");
//     try {
//       await processDummyPayment();
//       const newBooking = {
//         id: bookings.length + 1,
//         visitorId: user?.id,
//         parkId,
//         parkName: nationalParks.find((p) => p.id === parkId).name,
//         checkIn,
//         checkOut,
//         room: wantRoom ? room : null,
//         campsite,
//         specialRequest: specialRequest || null,
//         status: "Confirmed",
//         createdAt: new Date().toISOString(),
//       };
//       setBookings([...bookings, newBooking]);
//       setConfirmationMessage("Booking Confirmed!");
//       setTimeout(() => {
//         setSelectedPark(null);
//         setCheckIn("");
//         setCheckOut("");
//         setWantRoom(false);
//         setRoom("");
//         setCampsite("");
//         setSpecialRequest("");
//         setConfirmationMessage("");
//         setCurrentView("parks");
//       }, 3000);
//     } catch (err) {
//       setError("Failed to create booking. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleComplaint = async (parkId) => {
//     if (!complaint.trim()) {
//       setError("Please describe the issue in the complaint.");
//       return;
//     }
//     setLoading(true);
//     setError("");
//     try {
//       await new Promise((resolve) => setTimeout(resolve, 1000));
//       setConfirmationMessage("Complaint submitted successfully!");
//       setTimeout(() => {
//         setComplaint("");
//         setSelectedPark(null);
//         setConfirmationMessage("");
//         setCurrentView("parks");
//       }, 3000);
//     } catch (err) {
//       setError("Failed to submit complaint. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleRoomServiceRequest = async (bookingId) => {
//     if (!roomServiceType) {
//       setError("Please select a room service type.");
//       return;
//     }
//     setLoading(true);
//     setError("");
//     try {
//       await new Promise((resolve) => setTimeout(resolve, 1000));
//       const newRequest = {
//         id: roomServiceRequests.length + 1,
//         visitorId: user?.id,
//         bookingId,
//         parkName: bookings.find((b) => b.id === bookingId && b.visitorId === user?.id).parkName,
//         serviceType: roomServiceType,
//         specialRequest: roomServiceRequest || null,
//         createdAt: new Date().toISOString(),
//       };
//       setRoomServiceRequests([...roomServiceRequests, newRequest]);
//       setRoomServiceConfirmation("Request Submitted Successfully!");
//       setTimeout(() => {
//         setRoomServiceType("");
//         setRoomServiceRequest("");
//         setSelectedBookingId(null);
//         setRoomServiceConfirmation("");
//       }, 3000);
//     } catch (err) {
//       setError("Failed to submit room service request. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="flex min-h-screen">
//       {/* Sidebar */}
//       <div
//         className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-white transform ${
//           isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//         } md:translate-x-0 transition-transform duration-300 ease-in-out z-50 md:static md:w-64 md:flex md:flex-col`}
//       >
//         <div className="flex items-center justify-between p-4 border-b border-gray-700">
//           <h2 className="text-xl font-bold">Park Booking</h2>
//           <button className="md:hidden text-white" onClick={toggleSidebar}>
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               ></path>
//             </svg>
//           </button>
//         </div>
//         <nav className="flex-1 p-4 space-y-2">
//           <button
//             className={`w-full text-left px-4 py-2 rounded ${
//               currentView === "parks" ? "bg-gray-700" : "hover:bg-gray-700"
//             }`}
//             onClick={() => {
//               setCurrentView("parks");
//               setSelectedPark(null);
//               setIsSidebarOpen(false);
//             }}
//           >
//             National Parks
//           </button>
//           <button
//             className={`w-full text-left px-4 py-2 rounded ${
//               currentView === "bookings" ? "bg-gray-700" : "hover:bg-gray-700"
//             }`}
//             onClick={() => {
//               setCurrentView("bookings");
//               setSelectedPark(null);
//               setIsSidebarOpen(false);
//             }}
//           >
//             My Bookings
//           </button>
//           <button
//             className={`w-full text-left px-4 py-2 rounded ${
//               currentView === "roomService" ? "bg-gray-700" : "hover:bg-gray-700"
//             }`}
//             onClick={() => {
//               setCurrentView("roomService");
//               setSelectedPark(null);
//               setIsSidebarOpen(false);
//             }}
//           >
//             Room Service Requests
//           </button>
//         </nav>
//         {user && (
//           <div className="p-4 border-t border-gray-700">
//             <button
//               className="w-full bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
//               onClick={handleLogout}
//             >
//               Logout
//             </button>
//           </div>
//         )}
//       </div>

//       {/* Mobile Hamburger Menu */}
//       <div className="md:hidden fixed top-4 left-4 z-50">
//         <button
//           className={`text-green-400 transition-opacity duration-300 ${
//             isSidebarOpen ? "opacity-0" : "opacity-100"
//           }`}
//           onClick={toggleSidebar}
//           disabled={isSidebarOpen}
//         >
//           <svg
//             className="w-8 h-8"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 20"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 10h16M4 14h16"
//             ></path>
//           </svg>
//         </button>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-4 pt-20 md:p-6 max-w-full mx-auto">
//         {confirmationMessage && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//             <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-[90%] sm:max-w-md">
//               <svg
//                 className="w-12 h-12 text-green-600 mx-auto mb-4"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M5 13l4 4L19 7"
//                 ></path>
//               </svg>
//               <h3 className="text-xl sm:text-2xl font-semibold text-green-600 mb-4">
//                 {confirmationMessage}
//               </h3>
//               <p className="text-gray-600 text-sm sm:text-base">Thank you for your request!</p>
//             </div>
//           </div>
//         )}

//         {currentView === "parks" && !selectedPark && (
//           <div className="space-y-6">
//             {nationalParks.map((park) => (
//               <div
//                 key={park.id}
//                 className="flex flex-col sm:flex-row border rounded-lg shadow-md p-4 bg-gray-100"
//               >
//                 <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
//                   <img
//                     src={park.images[0] || "https://via.placeholder.com/150"}
//                     alt={`${park.name} main view`}
//                     className="w-full h-40 sm:h-48 object-cover rounded-lg"
//                   />
//                   <div className="flex mt-2 space-x-2 overflow-x-auto">
//                     {park.images.slice(1).map((img, idx) => (
//                       <img
//                         key={idx}
//                         src={img}
//                         alt={`${park.name} thumbnail ${idx + 1}`}
//                         className="w-16 h-16 object-cover rounded"
//                       />
//                     ))}
//                   </div>
//                 </div>
//                 <div className="flex-grow px-0 sm:px-4">
//                   <div className="flex flex-col sm:flex-row justify-between items-start">
//                     <div className="w-full">
//                       <h2 className="text-lg sm:text-xl font-semibold">{park.name}</h2>
//                       <p className="text-gray-600 text-sm sm:text-base">{park.location}</p>
//                       <div
//                         className="flex items-center mt-1"
//                         aria-label={`Star rating: ${park.starRating} out of 5`}
//                       >
//                         {[...Array(5)].map((_, i) => (
//                           <svg
//                             key={i}
//                             className={`w-4 h-4 ${
//                               i < park.starRating ? "text-yellow-600" : "text-gray-300"
//                             }`}
//                             fill="currentColor"
//                             viewBox="0 0 20 20"
//                           >
//                             <path d="M10 15l-5.5 3 1-5.5L1 7.5l5.5-.5L10 2l3.5 5 5.5.5-4 4.5 1 5.5z" />
//                           </svg>
//                         ))}
//                       </div>
//                       <p className="text-xs sm:text-sm text-gray-500 mt-1">{park.description}</p>
//                     </div>
//                     <div className="text-left sm:text-right mt-4 sm:mt-0 w-full sm:w-auto">
//                       <div className="flex items-center justify-start sm:justify-end">
//                         <span className="text-green-600 font-semibold mr-2 text-sm sm:text-base">
//                           {park.rating}
//                         </span>
//                         <span className="text-gray-600 text-xs sm:text-sm">
//                           ({park.reviews} Ratings)
//                         </span>
//                       </div>
//                       {park.tags.includes("Early Bird Deal") && (
//                         <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded mt-1">
//                           Early Bird Deal
//                         </span>
//                       )}
//                       <p className="text-gray-500 line-through mt-2 text-sm sm:text-base">
//                         ${park.originalPrice.toFixed(2)}
//                       </p>
//                       <p className="text-lg sm:text-xl font-bold">
//                         ${park.discountedPrice.toFixed(2)}
//                       </p>
//                       <p className="text-gray-600 text-xs sm:text-sm">
//                         + ${park.taxesAndFees.toFixed(2)} taxes & fees
//                       </p>
//                       <p className="text-gray-600 text-xs sm:text-sm">Per Night (USD)</p>
//                     </div>
//                   </div>
//                   <div className="mt-2">
//                     {park.tags.map((tag, idx) => (
//                       <p key={idx} className="text-green-600 text-xs sm:text-sm">
//                         ✓ {tag}
//                       </p>
//                     ))}
//                     <button
//                       className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full sm:w-auto text-base"
//                       onClick={() => setSelectedPark(park)}
//                     >
//                       Book
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         {currentView === "bookings" && (
//           <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg max-w-[90%] sm:max-w-4xl w-full">
//             <h2 className="text-xl sm:text-2xl font-bold mb-4">My Bookings</h2>
//             {bookings.length === 0 ? (
//               <p className="text-gray-600 text-sm sm:text-base">No bookings found.</p>
//             ) : (
//               <div className="space-y-4">
//                 {bookings.map((booking) => (
//                   <div key={booking.id} className="border rounded-lg p-4 bg-gray-50">
//                     <h3 className="text-base sm:text-lg font-semibold">{booking.parkName}</h3>
//                     <p className="text-sm sm:text-base">
//                       <strong>Check-In:</strong>{" "}
//                       {new Date(booking.checkIn).toLocaleDateString()}
//                     </p>
//                     <p className="text-sm sm:text-base">
//                       <strong>Check-Out:</strong>{" "}
//                       {new Date(booking.checkOut).toLocaleDateString()}
//                     </p>
//                     {booking.room && (
//                       <p className="text-sm sm:text-base">
//                         <strong>Room:</strong> {booking.room}
//                       </p>
//                     )}
//                     <p className="text-sm sm:text-base">
//                       <strong>Campsite:</strong> {booking.campsite}
//                     </p>
//                     {booking.specialRequest && (
//                       <p className="text-sm sm:text-base">
//                         <strong>Special Request:</strong> {booking.specialRequest}
//                       </p>
//                     )}
//                     <p className="text-sm sm:text-base">
//                       <strong>Status:</strong> {booking.status}
//                     </p>
//                     <p className="text-sm sm:text-base">
//                       <strong>Booked On:</strong>{" "}
//                       {new Date(booking.createdAt).toLocaleString()}
//                     </p>
//                     <button
//                       className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full sm:w-auto text-base"
//                       onClick={() =>
//                         setSelectedBookingId(
//                           selectedBookingId === booking.id ? null : booking.id
//                         )
//                       }
//                     >
//                       {selectedBookingId === booking.id
//                         ? "Close Room Service"
//                         : "Request Room Service"}
//                     </button>
//                     {selectedBookingId === booking.id && (
//                       <div className="mt-4 border-t pt-4">
//                         <h4 className="text-base sm:text-lg font-semibold mb-2">
//                           Room Service Request
//                         </h4>
//                         {error && <p className="text-red-600 mb-4 text-sm sm:text-base">{error}</p>}
//                         <div className="mb-4">
//                           <label
//                             htmlFor={`serviceType-${booking.id}`}
//                             className="block text-sm sm:text-lg font-medium"
//                           >
//                             Service Type
//                           </label>
//                           <select
//                             id={`serviceType-${booking.id}`}
//                             className="border p-2 rounded w-full text-sm sm:text-base"
//                             value={roomServiceType}
//                             onChange={(e) => setRoomServiceType(e.target.value)}
//                             disabled={loading}
//                           >
//                             <option value="">Select Service</option>
//                             <option value="Extra Towels">Extra Towels</option>
//                             <option value="Food Delivery">Food Delivery</option>
//                             <option value="Cleaning Service">Cleaning Service</option>
//                             <option value="Other">Other</option>
//                           </select>
//                         </div>
//                         <div className="mb-4">
//                           <label
//                             htmlFor={`serviceRequest-${booking.id}`}
//                             className="block text-sm sm:text-lg font-medium"
//                           >
//                             Special Request
//                           </label>
//                           <textarea
//                             id={`serviceRequest-${booking.id}`}
//                             className="border p-2 rounded w-full text-sm sm:text-base"
//                             value={roomServiceRequest}
//                             onChange={(e) => setRoomServiceRequest(e.target.value)}
//                             disabled={loading}
//                             rows={4}
//                             placeholder="Any specific requests?"
//                           />
//                         </div>
//                         <button
//                           className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:bg-green-400 w-full sm:w-auto text-base"
//                           onClick={() => handleRoomServiceRequest(booking.id)}
//                           disabled={loading}
//                         >
//                           {loading ? "Submitting..." : "Submit Request"}
//                         </button>
//                         {roomServiceConfirmation && selectedBookingId === booking.id && (
//                           <p className="mt-4 text-green-600 font-semibold text-sm sm:text-base">
//                             {roomServiceConfirmation}
//                           </p>
//                         )}
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         )}

//         {currentView === "roomService" && (
//           <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg max-w-[90%] sm:max-w-4xl w-full">
//             <h2 className="text-xl sm:text-2xl font-bold mb-4">Room Service Requests</h2>
//             {roomServiceRequests.length === 0 ? (
//               <p className="text-gray-600 text-sm sm:text-base">No room service requests found.</p>
//             ) : (
//               <div className="space-y-4">
//                 {roomServiceRequests.map((request) => (
//                   <div key={request.id} className="border rounded-lg p-4 bg-gray-50">
//                     <h3 className="text-base sm:text-lg font-semibold">{request.parkName}</h3>
//                     <p className="text-sm sm:text-base">
//                       <strong>Booking ID:</strong> {request.bookingId}
//                     </p>
//                     <p className="text-sm sm:text-base">
//                       <strong>Service Type:</strong> {request.serviceType}
//                     </p>
//                     {request.specialRequest && (
//                       <p className="text-sm sm:text-base">
//                         <strong>Special Request:</strong> {request.specialRequest}
//                       </p>
//                     )}
//                     <p className="text-sm sm:text-base">
//                       <strong>Requested On:</strong>{" "}
//                       {new Date(request.createdAt).toLocaleString()}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         )}

//         {selectedPark && (
//           <div className="border rounded-lg p-4 sm:p-6 bg-white shadow-md relative">
//             <h2 className="text-xl sm:text-2xl font-bold mb-4">
//               Book Your Stay at {selectedPark?.name || "Unknown Park"}
//             </h2>
//             {error && <p className="text-red-600 mb-4 text-sm sm:text-base">{error}</p>}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
//               <div>
//                 <label htmlFor="checkIn" className="block text-sm sm:text-lg font-medium">
//                   Check-In Date
//                 </label>
//                 <input
//                   id="checkIn"
//                   type="date"
//                   className="border p-2 rounded w-full text-sm sm:text-base"
//                   value={checkIn}
//                   onChange={(e) => setCheckIn(e.target.value)}
//                   disabled={loading}
//                   min={new Date().toISOString().split("T")[0]}
//                 />
//               </div>
//               <div>
//                 <label htmlFor="checkOut" className="block text-sm sm:text-lg font-medium">
//                   Check-Out Date
//                 </label>
//                 <input
//                   id="checkOut"
//                   type="date"
//                   className="border p-2 rounded w-full text-sm sm:text-base"
//                   value={checkOut}
//                   onChange={(e) => setCheckOut(e.target.value)}
//                   disabled={loading}
//                   min={
//                     checkIn
//                       ? new Date(new Date(checkIn).setDate(new Date(checkIn).getDate() + 1))
//                           .toISOString()
//                           .split("T")[0]
//                       : new Date().toISOString().split("T")[0]
//                   }
//                 />
//               </div>
//             </div>
//             <div className="mb-4">
//               <label className="flex items-center">
//                 <input
//                   type="checkbox"
//                   className="mr-2 h-5 w-5"
//                   checked={wantRoom}
//                   onChange={() => setWantRoom(!wantRoom)}
//                   disabled={loading}
//                 />
//                 <span className="text-sm sm:text-base">Book a Cabin/Room</span>
//               </label>
//               {wantRoom && (
//                 <select
//                   className="border p-2 rounded w-full mt-2 text-sm sm:text-base"
//                   value={room}
//                   onChange={(e) => setRoom(e.target.value)}
//                   disabled={loading}
//                 >
//                   <option value="">Select Room</option>
//                   {(selectedPark?.rooms || []).map((r) => (
//                     <option key={r} value={r}>
//                       {r}
//                     </option>
//                   ))}
//                 </select>
//               )}
//             </div>
//             <div className="mb-4">
//               <label htmlFor="campsite" className="block text-sm sm:text-lg font-medium">
//                 Campsite
//               </label>
//               <select
//                 id="campsite"
//                 className="border p-2 rounded w-full text-sm sm:text-base"
//                 value={campsite}
//                 onChange={(e) => setCampsite(e.target.value)}
//                 disabled={loading}
//               >
//                 <option value="">Select Campsite</option>
//                 {(selectedPark?.campsites || []).map((c) => (
//                   <option key={c} value={c}>
//                     {c}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div className="mb-4">
//               <label htmlFor="specialRequest" className="block text-sm sm:text-lg font-medium">
//                 Special Requests
//               </label>
//               <textarea
//                 id="specialRequest"
//                 className="border p-2 rounded w-full text-sm sm:text-base"
//                 value={specialRequest}
//                 onChange={(e) => setSpecialRequest(e.target.value)}
//                 disabled={loading}
//                 rows={4}
//                 placeholder="Any specific requests?"
//               />
//             </div>
//             <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
//               <button
//                 className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-blue-400 w-full sm:w-auto text-base"
//                 onClick={() => handleBooking(selectedPark.id)}
//                 disabled={loading}
//               >
//                 {loading ? "Processing..." : "Confirm Booking"}
//               </button>
//               <button
//                 className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 w-full sm:w-auto text-base"
//                 onClick={() => setSelectedPark(null)}
//                 disabled={loading}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         )}

//         {paymentProcessing && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//             <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-[90%] sm:max-w-md">
//               <h3 className="text-lg sm:text-xl font-semibold mb-4">
//                 Processing Your Payment
//               </h3>
//               <p className="text-gray-600 text-sm sm:text-base">{paymentStep}</p>
//               <div className="mt-4 flex justify-center">
//                 <svg
//                   className="animate-spin h-8 w-8 text-blue-600"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                 >
//                   <circle
//                     className="opacity-25"
//                     cx="12"
//                     cy="12"
//                     r="10"
//                     stroke="currentColor"
//                     strokeWidth="4"
//                   ></circle>
//                   <path
//                     className="opacity-75"
//                     fill="currentColor"
//                     d="M4 12a8 8 0 018-8v8H4z"
//                   ></path>
//                 </svg>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default VisitorPage;


// import { useState, useEffect } from "react";

// // Move nationalParks to a separate file or API for scalability
// const nationalParks = [
//   {
//     id: 1,
//     name: "Yellowstone National Park",
//     location: "Wyoming, USA",
//     starRating: 4,
//     rating: 4.5,
//     reviews: 305,
//     originalPrice: 180,
//     discountedPrice: 144,
//     taxesAndFees: 22,
//     tags: ["Free Cancellation till check-in"],
//     images: [
//       "https://media.istockphoto.com/id/1254906773/photo/grand-prismatic-spring-yellowstone-national-park.jpg?b=1&s=612x612&w=0&k=20&c=Q6csMFyyRrRUtOPI7Rw4VTV_piy15gtw7AjtnfGoHOs=&auto=format&fit=crop&w=500&q=60",
//     ],
//     rooms: ["Cabin A", "Cabin B"],
//     campsites: ["Site 1", "Site 2"],
//     description: "Explore the geysers and wildlife of Yellowstone National Park.",
//   },
//   {
//     id: 2,
//     name: "Yosemite National Park",
//     location: "California, USA",
//     starRating: 4,
//     rating: 4.3,
//     reviews: 521,
//     originalPrice: 216,
//     discountedPrice: 168,
//     taxesAndFees: 25,
//     tags: ["Free Cancellation till check-in", "Early Bird Deal"],
//     images: [
//       "https://c4.wallpaperflare.com/wallpaper/382/231/775/yosemite-valley-el-capitan-united-states-california-wallpaper-preview.jpg",
//     ],
//     rooms: ["Suite 1", "Suite 2"],
//     campsites: ["Site A", "Site B"],
//     description: "Experience the stunning views of Yosemite National Park.",
//   },
//   {
//     id: 3,
//     name: "Grand Canyon National Park",
//     location: "Arizona, USA",
//     starRating: 5,
//     rating: 4.8,
//     reviews: 422,
//     originalPrice: 240,
//     discountedPrice: 192,
//     taxesAndFees: 29,
//     tags: ["Early Bird Deal"],
//     images: [
//       "https://images.pexels.com/photos/20879885/pexels-photo-20879885/free-photo-of-grand-canyon-national-park.jpeg",
//     ],
//     rooms: ["Room 101", "Room 102"],
//     campsites: ["Site X", "Site Y"],
//     description: "Discover the breathtaking vistas of Grand Canyon National Park.",
//   },
// ];

// function VisitorPage() {
//   const [user, setUser] = useState(null);
//   const [selectedPark, setSelectedPark] = useState(null);
//   const [checkIn, setCheckIn] = useState("");
//   const [checkOut, setCheckOut] = useState("");
//   const [wantRoom, setWantRoom] = useState(false);
//   const [room, setRoom] = useState("");
//   const [campsite, setCampsite] = useState("");
//   const [specialRequest, setSpecialRequest] = useState("");
//   const [complaint, setComplaint] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [paymentProcessing, setPaymentProcessing] = useState(false);
//   const [paymentStep, setPaymentStep] = useState("");
//   const [bookings, setBookings] = useState([]);
//   const [selectedBookingId, setSelectedBookingId] = useState(null);
//   const [roomServiceType, setRoomServiceType] = useState("");
//   const [roomServiceRequest, setRoomServiceRequest] = useState("");
//   const [roomServiceRequests, setRoomServiceRequests] = useState([]);
//   const [currentView, setCurrentView] = useState("parks");
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [confirmationMessage, setConfirmationMessage] = useState("");
//   const [roomServiceConfirmation, setRoomServiceConfirmation] = useState("");

//   // Load user and bookings in a single useEffect to avoid race conditions
//   useEffect(() => {
//     const initializeData = () => {
//       // Load user
//       try {
//         const storedUser = localStorage.getItem("user");
//         if (storedUser) {
//           const parsedUser = JSON.parse(storedUser);
//           if (parsedUser && parsedUser.role === "visitor") {
//             setUser(parsedUser);
//             console.log("Loaded user:", parsedUser);

//             // Load bookings for the user
//             const bookingsKey = `bookings_${parsedUser.id}`;
//             const savedBookings = localStorage.getItem(bookingsKey);
//             const parsedBookings = savedBookings ? JSON.parse(savedBookings) : [];
//             const userBookings = Array.isArray(parsedBookings)
//               ? parsedBookings.filter((b) => b.visitorId === parsedUser.id)
//               : [];
//             setBookings(userBookings);
//             console.log(`Loaded bookings for ${bookingsKey}:`, userBookings);

//             // Load room service requests for the user
//             const requestsKey = `roomServiceRequests_${parsedUser.id}`;
//             const savedRequests = localStorage.getItem(requestsKey);
//             const parsedRequests = savedRequests ? JSON.parse(savedRequests) : [];
//             const userRequests = Array.isArray(parsedRequests)
//               ? parsedRequests.filter((r) => r.visitorId === parsedUser.id)
//               : [];
//             setRoomServiceRequests(userRequests);
//             console.log(`Loaded room service requests for ${requestsKey}:`, userRequests);
//           } else {
//             localStorage.removeItem("user");
//             setUser(null);
//             setBookings([]);
//             setRoomServiceRequests([]);
//           }
//         } else {
//           setUser(null);
//           setBookings([]);
//           setRoomServiceRequests([]);
//         }
//       } catch (error) {
//         console.error("Error initializing data from localStorage:", error);
//         localStorage.removeItem("user");
//         setUser(null);
//         setBookings([]);
//         setRoomServiceRequests([]);
//       }
//     };

//     initializeData();
//   }, []);

//   // Save bookings to localStorage when they change
//   useEffect(() => {
//     if (user && user.id) {
//       try {
//         const bookingsKey = `bookings_${user.id}`;
//         localStorage.setItem(bookingsKey, JSON.stringify(bookings));
//         console.log(`Saved bookings to ${bookingsKey}:`, bookings);
//       } catch (e) {
//         console.error(`Failed to save bookings for ${user.id}:`, e);
//       }
//     }
//   }, [bookings, user]);

//   // Save room service requests to localStorage when they change
//   useEffect(() => {
//     if (user && user.id) {
//       try {
//         const requestsKey = `roomServiceRequests_${user.id}`;
//         localStorage.setItem(requestsKey, JSON.stringify(roomServiceRequests));
//         console.log(`Saved room service requests to ${requestsKey}:`, roomServiceRequests);
//       } catch (e) {
//         console.error(`Failed to save roomServiceRequests for ${user.id}:`, e);
//       }
//     }
//   }, [roomServiceRequests, user]);

//   const handleLogout = () => {
//     if (user && user.id) {
//       localStorage.removeItem("user");
//       localStorage.removeItem(`bookings_${user.id}`);
//       localStorage.removeItem(`roomServiceRequests_${user.id}`);
//     }
//     setUser(null);
//     setBookings([]);
//     setRoomServiceRequests([]);
//     setSelectedPark(null);
//     setCurrentView("parks");
//     window.location.href = "/visitor-login"; // Redirect to login
//   };

//   const validateBooking = () => {
//     if (!checkIn || !checkOut) return "Please select both check-in and check-out dates.";
//     if (new Date(checkOut) <= new Date(checkIn)) return "Check-out date must be after check-in date.";
//     if (!campsite) return "Please select a campsite.";
//     if (wantRoom && !room) return "Please select a room.";
//     return "";
//   };

//   const processDummyPayment = async () => {
//     setPaymentProcessing(true);
//     setPaymentStep("Processing Payment...");
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     setPaymentStep("Verifying Payment...");
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     setPaymentStep("Payment Successful!");
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     setPaymentProcessing(false);
//     setPaymentStep("");
//   };

//   const handleBooking = async (parkId) => {
//     if (!user || !user.id) {
//       setError("User not authenticated. Please log in again.");
//       return;
//     }

//     const validationError = validateBooking();
//     if (validationError) {
//       setError(validationError);
//       return;
//     }
//     setLoading(true);
//     setError("");
//     try {
//       await processDummyPayment();
//       const newBooking = {
//         id: bookings.length + 1,
//         visitorId: user.id,
//         parkId,
//         parkName: nationalParks.find((p) => p.id === parkId).name,
//         checkIn,
//         checkOut,
//         room: wantRoom ? room : null,
//         campsite,
//         specialRequest: specialRequest || null,
//         status: "Confirmed",
//         createdAt: new Date().toISOString(),
//       };
//       setBookings((prev) => {
//         const updatedBookings = [...prev, newBooking];
//         console.log("Updated bookings state:", updatedBookings);
//         return updatedBookings;
//       });
//       setConfirmationMessage("Booking Confirmed!");
//       setTimeout(() => {
//         setSelectedPark(null);
//         setCheckIn("");
//         setCheckOut("");
//         setWantRoom(false);
//         setRoom("");
//         setCampsite("");
//         setSpecialRequest("");
//         setConfirmationMessage("");
//         setCurrentView("bookings"); // Navigate to bookings view to show the new booking
//       }, 3000);
//     } catch (err) {
//       setError("Failed to create booking. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleComplaint = async (parkId) => {
//     if (!complaint.trim()) {
//       setError("Please describe the issue in the complaint.");
//       return;
//     }
//     setLoading(true);
//     setError("");
//     try {
//       await new Promise((resolve) => setTimeout(resolve, 1000));
//       setConfirmationMessage("Complaint submitted successfully!");
//       setTimeout(() => {
//         setComplaint("");
//         setSelectedPark(null);
//         setConfirmationMessage("");
//         setCurrentView("parks");
//       }, 3000);
//     } catch (err) {
//       setError("Failed to submit complaint. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleRoomServiceRequest = async (bookingId) => {
//     if (!roomServiceType) {
//       setError("Please select a room service type.");
//       return;
//     }
//     setLoading(true);
//     setError("");
//     try {
//       await new Promise((resolve) => setTimeout(resolve, 1000));
//       const newRequest = {
//         id: roomServiceRequests.length + 1,
//         visitorId: user.id,
//         bookingId,
//         parkName: bookings.find((b) => b.id === bookingId && b.visitorId === user.id).parkName,
//         serviceType: roomServiceType,
//         specialRequest: roomServiceRequest || null,
//         createdAt: new Date().toISOString(),
//       };
//       setRoomServiceRequests((prev) => {
//         const updatedRequests = [...prev, newRequest];
//         console.log("Updated room service requests state:", updatedRequests);
//         return updatedRequests;
//       });
//       setRoomServiceConfirmation("Request Submitted Successfully!");
//       setTimeout(() => {
//         setRoomServiceType("");
//         setRoomServiceRequest("");
//         setSelectedBookingId(null);
//         setRoomServiceConfirmation("");
//         setCurrentView("roomService"); // Navigate to room service view to show the new request
//       }, 3000);
//     } catch (err) {
//       setError("Failed to submit room service request. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="flex min-h-screen">
//       {/* Sidebar */}
//       <div
//         className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-white transform ${
//           isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//         } md:translate-x-0 transition-transform duration-300 ease-in-out z-50 md:static md:w-64 md:flex md:flex-col`}
//       >
//         <div className="flex items-center justify-between p-4 border-b border-gray-700">
//           <h2 className="text-xl font-bold">Park Booking</h2>
//           <button className="md:hidden text-white" onClick={toggleSidebar}>
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               ></path>
//             </svg>
//           </button>
//         </div>
//         <nav className="flex-1 p-4 space-y-2">
//           <button
//             className={`w-full text-left px-4 py-2 rounded ${
//               currentView === "parks" ? "bg-gray-700" : "hover:bg-gray-700"
//             }`}
//             onClick={() => {
//               setCurrentView("parks");
//               setSelectedPark(null);
//               setIsSidebarOpen(false);
//             }}
//           >
//             National Parks
//           </button>
//           <button
//             className={`w-full text-left px-4 py-2 rounded ${
//               currentView === "bookings" ? "bg-gray-700" : "hover:bg-gray-700"
//             }`}
//             onClick={() => {
//               setCurrentView("bookings");
//               setSelectedPark(null);
//               setIsSidebarOpen(false);
//             }}
//           >
//             My Bookings
//           </button>
//           <button
//             className={`w-full text-left px-4 py-2 rounded ${
//               currentView === "roomService" ? "bg-gray-700" : "hover:bg-gray-700"
//             }`}
//             onClick={() => {
//               setCurrentView("roomService");
//               setSelectedPark(null);
//               setIsSidebarOpen(false);
//             }}
//           >
//             Room Service Requests
//           </button>
//         </nav>
//         {user && (
//           <div className="p-4 border-t border-gray-700">
//             <button
//               className="w-full bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
//               onClick={handleLogout}
//             >
//               Logout
//             </button>
//           </div>
//         )}
//       </div>

//       {/* Mobile Hamburger Menu */}
//       <div className="md:hidden fixed top-4 left-4 z-50">
//         <button
//           className={`text-gray-700 transition-opacity duration-300 ${
//             isSidebarOpen ? "opacity-0" : "opacity-100"
//           }`}
//           onClick={toggleSidebar}
//           disabled={isSidebarOpen}
//         >
//           <svg
//             className="w-8 h-8"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 20"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 10h16M4 14h16"
//             ></path>
//           </svg>
//         </button>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-4 pt-20 md:p-6 max-w-full mx-auto">
//         {confirmationMessage && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//             <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-[90%] sm:max-w-md">
//               <svg
//                 className="w-12 h-12 text-green-600 mx-auto mb-4"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M5 13l4 4L19 7"
//                 ></path>
//               </svg>
//               <h3 className="text-xl sm:text-2xl font-semibold text-green-600 mb-4">
//                 {confirmationMessage}
//               </h3>
//               <p className="text-gray-600 text-sm sm:text-base">Thank you for your request!</p>
//             </div>
//           </div>
//         )}

//         {currentView === "parks" && !selectedPark && (
//           <div className="space-y-6">
//             {nationalParks.map((park) => (
//               <div
//                 key={park.id}
//                 className="flex flex-col sm:flex-row border rounded-lg shadow-md p-4 bg-gray-100"
//               >
//                 <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
//                   <img
//                     src={park.images[0] || "https://via.placeholder.com/150"}
//                     alt={`${park.name} main view`}
//                     className="w-full h-40 sm:h-48 object-cover rounded-lg"
//                   />
//                   <div className="flex mt-2 space-x-2 overflow-x-auto">
//                     {park.images.slice(1).map((img, idx) => (
//                       <img
//                         key={idx}
//                         src={img}
//                         alt={`${park.name} thumbnail ${idx + 1}`}
//                         className="w-16 h-16 object-cover rounded"
//                       />
//                     ))}
//                   </div>
//                 </div>
//                 <div className="flex-grow px-0 sm:px-4">
//                   <div className="flex flex-col sm:flex-row justify-between items-start">
//                     <div className="w-full">
//                       <h2 className="text-lg sm:text-xl font-semibold">{park.name}</h2>
//                       <p className="text-gray-600 text-sm sm:text-base">{park.location}</p>
//                       <div
//                         className="flex items-center mt-1"
//                         aria-label={`Star rating: ${park.starRating} out of 5`}
//                       >
//                         {[...Array(5)].map((_, i) => (
//                           <svg
//                             key={i}
//                             className={`w-4 h-4 ${
//                               i < park.starRating ? "text-yellow-600" : "text-gray-300"
//                             }`}
//                             fill="currentColor"
//                             viewBox="0 0 20 20"
//                           >
//                             <path d="M10 15l-5.5 3 1-5.5L1 7.5l5.5-.5L10 2l3.5 5 5.5.5-4 4.5 1 5.5z" />
//                           </svg>
//                         ))}
//                       </div>
//                       <p className="text-xs sm:text-sm text-gray-500 mt-1">{park.description}</p>
//                     </div>
//                     <div className="text-left sm:text-right mt-4 sm:mt-0 w-full sm:w-auto">
//                       <div className="flex items-center justify-start sm:justify-end">
//                         <span className="text-green-600 font-semibold mr-2 text-sm sm:text-base">
//                           {park.rating}
//                         </span>
//                         <span className="text-gray-600 text-xs sm:text-sm">
//                           ({park.reviews} Ratings)
//                         </span>
//                       </div>
//                       {park.tags.includes("Early Bird Deal") && (
//                         <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded mt-1">
//                           Early Bird Deal
//                         </span>
//                       )}
//                       <p className="text-gray-500 line-through mt-2 text-sm sm:text-base">
//                         ${park.originalPrice.toFixed(2)}
//                       </p>
//                       <p className="text-lg sm:text-xl font-bold">
//                         ${park.discountedPrice.toFixed(2)}
//                       </p>
//                       <p className="text-gray-600 text-xs sm:text-sm">
//                         + ${park.taxesAndFees.toFixed(2)} taxes & fees
//                       </p>
//                       <p className="text-gray-600 text-xs sm:text-sm">Per Night (USD)</p>
//                     </div>
//                   </div>
//                   <div className="mt-2">
//                     {park.tags.map((tag, idx) => (
//                       <p key={idx} className="text-green-600 text-xs sm:text-sm">
//                         ✓ {tag}
//                       </p>
//                     ))}
//                     <button
//                       className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full sm:w-auto text-base"
//                       onClick={() => setSelectedPark(park)}
//                     >
//                       Book
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         {currentView === "bookings" && (
//           <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg max-w-[90%] sm:max-w-4xl w-full">
//             <h2 className="text-xl sm:text-2xl font-bold mb-4">My Bookings</h2>
//             {bookings.length === 0 ? (
//               <p className="text-gray-600 text-sm sm:text-base">No bookings found.</p>
//             ) : (
//               <div className="space-y-4">
//                 {bookings.map((booking) => (
//                   <div key={booking.id} className="border rounded-lg p-4 bg-gray-50">
//                     <h3 className="text-base sm:text-lg font-semibold">{booking.parkName}</h3>
//                     <p className="text-sm sm:text-base">
//                       <strong>Check-In:</strong>{" "}
//                       {new Date(booking.checkIn).toLocaleDateString()}
//                     </p>
//                     <p className="text-sm sm:text-base">
//                       <strong>Check-Out:</strong>{" "}
//                       {new Date(booking.checkOut).toLocaleDateString()}
//                     </p>
//                     {booking.room && (
//                       <p className="text-sm sm:text-base">
//                         <strong>Room:</strong> {booking.room}
//                       </p>
//                     )}
//                     <p className="text-sm sm:text-base">
//                       <strong>Campsite:</strong> {booking.campsite}
//                     </p>
//                     {booking.specialRequest && (
//                       <p className="text-sm sm:text-base">
//                         <strong>Special Request:</strong> {booking.specialRequest}
//                       </p>
//                     )}
//                     <p className="text-sm sm:text-base">
//                       <strong>Status:</strong> {booking.status}
//                     </p>
//                     <p className="text-sm sm:text-base">
//                       <strong>Booked On:</strong>{" "}
//                       {new Date(booking.createdAt).toLocaleString()}
//                     </p>
//                     <button
//                       className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full sm:w-auto text-base"
//                       onClick={() =>
//                         setSelectedBookingId(
//                           selectedBookingId === booking.id ? null : booking.id
//                         )
//                       }
//                     >
//                       {selectedBookingId === booking.id
//                         ? "Close Room Service"
//                         : "Request Room Service"}
//                     </button>
//                     {selectedBookingId === booking.id && (
//                       <div className="mt-4 border-t pt-4">
//                         <h4 className="text-base sm:text-lg font-semibold mb-2">
//                           Room Service Request
//                         </h4>
//                         {error && <p className="text-red-600 mb-4 text-sm sm:text-base">{error}</p>}
//                         <div className="mb-4">
//                           <label
//                             htmlFor={`serviceType-${booking.id}`}
//                             className="block text-sm sm:text-lg font-medium"
//                           >
//                             Service Type
//                           </label>
//                           <select
//                             id={`serviceType-${booking.id}`}
//                             className="border p-2 rounded w-full text-sm sm:text-base"
//                             value={roomServiceType}
//                             onChange={(e) => setRoomServiceType(e.target.value)}
//                             disabled={loading}
//                           >
//                             <option value="">Select Service</option>
//                             <option value="Extra Towels">Extra Towels</option>
//                             <option value="Food Delivery">Food Delivery</option>
//                             <option value="Cleaning Service">Cleaning Service</option>
//                             <option value="Other">Other</option>
//                           </select>
//                         </div>
//                         <div className="mb-4">
//                           <label
//                             htmlFor={`serviceRequest-${booking.id}`}
//                             className="block text-sm sm:text-lg font-medium"
//                           >
//                             Special Request
//                           </label>
//                           <textarea
//                             id={`serviceRequest-${booking.id}`}
//                             className="border p-2 rounded w-full text-sm sm:text-base"
//                             value={roomServiceRequest}
//                             onChange={(e) => setRoomServiceRequest(e.target.value)}
//                             disabled={loading}
//                             rows={4}
//                             placeholder="Any specific requests?"
//                           />
//                         </div>
//                         <button
//                           className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:bg-green-400 w-full sm:w-auto text-base"
//                           onClick={() => handleRoomServiceRequest(booking.id)}
//                           disabled={loading}
//                         >
//                           {loading ? "Submitting..." : "Submit Request"}
//                         </button>
//                         {roomServiceConfirmation && selectedBookingId === booking.id && (
//                           <p className="mt-4 text-green-600 font-semibold text-sm sm:text-base">
//                             {roomServiceConfirmation}
//                           </p>
//                         )}
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         )}

//         {currentView === "roomService" && (
//           <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg max-w-[90%] sm:max-w-4xl w-full">
//             <h2 className="text-xl sm:text-2xl font-bold mb-4">Room Service Requests</h2>
//             {roomServiceRequests.length === 0 ? (
//               <p className="text-gray-600 text-sm sm:text-base">No room service requests found.</p>
//             ) : (
//               <div className="space-y-4">
//                 {roomServiceRequests.map((request) => (
//                   <div key={request.id} className="border rounded-lg p-4 bg-gray-50">
//                     <h3 className="text-base sm:text-lg font-semibold">{request.parkName}</h3>
//                     <p className="text-sm sm:text-base">
//                       <strong>Booking ID:</strong> {request.bookingId}
//                     </p>
//                     <p className="text-sm sm:text-base">
//                       <strong>Service Type:</strong> {request.serviceType}
//                     </p>
//                     {request.specialRequest && (
//                       <p className="text-sm sm:text-base">
//                         <strong>Special Request:</strong> {request.specialRequest}
//                       </p>
//                     )}
//                     <p className="text-sm sm:text-base">
//                       <strong>Requested On:</strong>{" "}
//                       {new Date(request.createdAt).toLocaleString()}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         )}

//         {selectedPark && (
//           <div className="border rounded-lg p-4 sm:p-6 bg-white shadow-md relative">
//             <h2 className="text-xl sm:text-2xl font-bold mb-4">
//               Book Your Stay at {selectedPark?.name || "Unknown Park"}
//             </h2>
//             {error && <p className="text-red-600 mb-4 text-sm sm:text-base">{error}</p>}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
//               <div>
//                 <label htmlFor="checkIn" className="block text-sm sm:text-lg font-medium">
//                   Check-In Date
//                 </label>
//                 <input
//                   id="checkIn"
//                   type="date"
//                   className="border p-2 rounded w-full text-sm sm:text-base"
//                   value={checkIn}
//                   onChange={(e) => setCheckIn(e.target.value)}
//                   disabled={loading}
//                   min={new Date().toISOString().split("T")[0]}
//                 />
//               </div>
//               <div>
//                 <label htmlFor="checkOut" className="block text-sm sm:text-lg font-medium">
//                   Check-Out Date
//                 </label>
//                 <input
//                   id="checkOut"
//                   type="date"
//                   className="border p-2 rounded w-full text-sm sm:text-base"
//                   value={checkIn}
//                   onChange={(e) => setCheckOut(e.target.value)}
//                   disabled={loading}
//                   min={
//                     checkIn
//                       ? new Date(new Date(checkIn).setDate(new Date(checkIn).getDate() + 1))
//                           .toISOString()
//                           .split("T")[0]
//                       : new Date().toISOString().split("T")[0]
//                   }
//                 />
//               </div>
//             </div>
//             <div className="mb-4">
//               <label className="flex items-center">
//                 <input
//                   type="checkbox"
//                   className="mr-2 h-5 w-5"
//                   checked={wantRoom}
//                   onChange={() => setWantRoom(!wantRoom)}
//                   disabled={loading}
//                 />
//                 <span className="text-sm sm:text-base">Book a Cabin/Room</span>
//               </label>
//               {wantRoom && (
//                 <select
//                   className="border p-2 rounded w-full mt-2 text-sm sm:text-base"
//                   value={room}
//                   onChange={(e) => setRoom(e.target.value)}
//                   disabled={loading}
//                 >
//                   <option value="">Select Room</option>
//                   {(selectedPark?.rooms || []).map((r) => (
//                     <option key={r} value={r}>
//                       {r}
//                     </option>
//                   ))}
//                 </select>
//               )}
//             </div>
//             <div className="mb-4">
//               <label htmlFor="campsite" className="block text-sm sm:text-lg font-medium">
//                 Campsite
//               </label>
//               <select
//                 id="campsite"
//                 className="border p-2 rounded w-full text-sm sm:text-base"
//                 value={campsite}
//                 onChange={(e) => setCampsite(e.target.value)}
//                 disabled={loading}
//               >
//                 <option value="">Select Campsite</option>
//                 {(selectedPark?.campsites || []).map((c) => (
//                   <option key={c} value={c}>
//                     {c}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div className="mb-4">
//               <label htmlFor="specialRequest" className="block text-sm sm:text-lg font-medium">
//                 Special Requests
//               </label>
//               <textarea
//                 id="specialRequest"
//                 className="border p-2 rounded w-full text-sm sm:text-base"
//                 value={specialRequest}
//                 onChange={(e) => setSpecialRequest(e.target.value)}
//                 disabled={loading}
//                 rows={4}
//                 placeholder="Any specific requests?"
//               />
//             </div>
//             <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
//               <button
//                 className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-blue-400 w-full sm:w-auto text-base"
//                 onClick={() => handleBooking(selectedPark.id)}
//                 disabled={loading}
//               >
//                 {loading ? "Processing..." : "Confirm Booking"}
//               </button>
//               <button
//                 className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 w-full sm:w-auto text-base"
//                 onClick={() => setSelectedPark(null)}
//                 disabled={loading}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         )}

//         {paymentProcessing && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//             <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-[90%] sm:max-w-md">
//               <h3 className="text-lg sm:text-xl font-semibold mb-4">
//                 Processing Your Payment
//               </h3>
//               <p className="text-gray-600 text-sm sm:text-base">{paymentStep}</p>
//               <div className="mt-4 flex justify-center">
//                 <svg
//                   className="animate-spin h-8 w-8 text-blue-600"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                 >
//                   <circle
//                     className="opacity-25"
//                     cx="12"
//                     cy="12"
//                     r="10"
//                     stroke="currentColor"
//                     strokeWidth="4"
//                   ></circle>
//                   <path
//                     className="opacity-75"
//                     fill="currentColor"
//                     d="M4 12a8 8 0 018-8v8H4z"
//                   ></path>
//                 </svg>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default VisitorPage;


import { useState, useEffect } from "react";

// Move nationalParks to a separate file or API for scalability
const nationalParks = [
  {
    id: 1,
    name: "Yellowstone National Park",
    location: "Wyoming, USA",
    starRating: 4,
    rating: 4.5,
    reviews: 305,
    originalPrice: 180,
    discountedPrice: 144,
    taxesAndFees: 22,
    tags: ["Free Cancellation till check-in"],
    images: [
      "https://media.istockphoto.com/id/1254906773/photo/grand-prismatic-spring-yellowstone-national-park.jpg?b=1&s=612x612&w=0&k=20&c=Q6csMFyyRrRUtOPI7Rw4VTV_piy15gtw7AjtnfGoHOs=&auto=format&fit=crop&w=500&q=60",
    ],
    rooms: ["Cabin A", "Cabin B"],
    campsites: ["Site 1", "Site 2"],
    description: "Explore the geysers and wildlife of Yellowstone National Park.",
  },
  {
    id: 2,
    name: "Yosemite National Park",
    location: "California, USA",
    starRating: 4,
    rating: 4.3,
    reviews: 521,
    originalPrice: 216,
    discountedPrice: 168,
    taxesAndFees: 25,
    tags: ["Free Cancellation till check-in", "Early Bird Deal"],
    images: [
      "https://c4.wallpaperflare.com/wallpaper/382/231/775/yosemite-valley-el-capitan-united-states-california-wallpaper-preview.jpg",
    ],
    rooms: ["Suite 1", "Suite 2"],
    campsites: ["Site A", "Site B"],
    description: "Experience the stunning views of Yosemite National Park.",
  },
  {
    id: 3,
    name: "Grand Canyon National Park",
    location: "Arizona, USA",
    starRating: 5,
    rating: 4.8,
    reviews: 422,
    originalPrice: 240,
    discountedPrice: 192,
    taxesAndFees: 29,
    tags: ["Early Bird Deal"],
    images: [
      "https://images.pexels.com/photos/20879885/pexels-photo-20879885/free-photo-of-grand-canyon-national-park.jpeg",
    ],
    rooms: ["Room 101", "Room 102"],
    campsites: ["Site X", "Site Y"],
    description: "Discover the breathtaking vistas of Grand Canyon National Park.",
  },
];

function VisitorPage() {
  const [user, setUser] = useState(null);
  const [selectedPark, setSelectedPark] = useState(null);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [wantRoom, setWantRoom] = useState(false);
  const [room, setRoom] = useState("");
  const [campsite, setCampsite] = useState("");
  const [specialRequest, setSpecialRequest] = useState("");
  const [complaint, setComplaint] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [paymentStep, setPaymentStep] = useState("");
  const [bookings, setBookings] = useState([]);
  const [selectedBookingId, setSelectedBookingId] = useState(null);
  const [roomServiceType, setRoomServiceType] = useState("");
  const [roomServiceRequest, setRoomServiceRequest] = useState("");
  const [roomServiceRequests, setRoomServiceRequests] = useState([]);
  const [currentView, setCurrentView] = useState("parks");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [roomServiceConfirmation, setRoomServiceConfirmation] = useState("");

  // Load user and bookings in a single useEffect to avoid race conditions
  useEffect(() => {
    const initializeData = () => {
      try {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);
          if (parsedUser && parsedUser.role === "visitor") {
            setUser(parsedUser);
            console.log("Loaded user:", parsedUser);

            // Load bookings for the user
            const bookingsKey = `bookings_${parsedUser.id}`;
            const savedBookings = localStorage.getItem(bookingsKey);
            const parsedBookings = savedBookings ? JSON.parse(savedBookings) : [];
            const userBookings = Array.isArray(parsedBookings)
              ? parsedBookings.filter((b) => b.visitorId === parsedUser.id)
              : [];
            setBookings(userBookings);
            console.log(`Loaded bookings for ${bookingsKey}:`, userBookings);

            // Load room service requests for the user
            const requestsKey = `roomServiceRequests_${parsedUser.id}`;
            const savedRequests = localStorage.getItem(requestsKey);
            const parsedRequests = savedRequests ? JSON.parse(savedRequests) : [];
            const userRequests = Array.isArray(parsedRequests)
              ? parsedRequests.filter((r) => r.visitorId === parsedUser.id)
              : [];
            setRoomServiceRequests(userRequests);
            console.log(`Loaded room service requests for ${requestsKey}:`, userRequests);
          } else {
            localStorage.removeItem("user");
            setUser(null);
            setBookings([]);
            setRoomServiceRequests([]);
          }
        } else {
          setUser(null);
          setBookings([]);
          setRoomServiceRequests([]);
        }
      } catch (error) {
        console.error("Error initializing data from localStorage:", error);
        localStorage.removeItem("user");
        setUser(null);
        setBookings([]);
        setRoomServiceRequests([]);
      }
    };

    initializeData();
  }, []);

  // Save bookings to localStorage when they change
  useEffect(() => {
    if (user && user.id) {
      try {
        const bookingsKey = `bookings_${user.id}`;
        localStorage.setItem(bookingsKey, JSON.stringify(bookings));
        console.log(`Saved bookings to ${bookingsKey}:`, bookings);
      } catch (e) {
        console.error(`Failed to save bookings for ${user.id}:`, e);
      }
    }
  }, [bookings, user]);

  // Save room service requests to localStorage when they change
  useEffect(() => {
    if (user && user.id) {
      try {
        const requestsKey = `roomServiceRequests_${user.id}`;
        localStorage.setItem(requestsKey, JSON.stringify(roomServiceRequests));
        console.log(`Saved room service requests to ${requestsKey}:`, roomServiceRequests);
      } catch (e) {
        console.error(`Failed to save roomServiceRequests for ${user.id}:`, e);
      }
    }
  }, [roomServiceRequests, user]);

  const handleLogout = () => {
    // Only remove the user data, keep bookings and room service requests in localStorage
    localStorage.removeItem("user");
    setUser(null);
    setBookings([]);
    setRoomServiceRequests([]);
    setSelectedPark(null);
    setCurrentView("parks");
    window.location.href = "/visitor-login"; // Redirect to login
  };

  const validateBooking = () => {
    if (!checkIn || !checkOut) return "Please select both check-in and check-out dates.";
    if (new Date(checkOut) <= new Date(checkIn)) return "Check-out date must be after check-in date.";
    if (!campsite) return "Please select a campsite.";
    if (wantRoom && !room) return "Please select a room.";
    return "";
  };

  const processDummyPayment = async () => {
    setPaymentProcessing(true);
    setPaymentStep("Processing Payment...");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setPaymentStep("Verifying Payment...");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setPaymentStep("Payment Successful!");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setPaymentProcessing(false);
    setPaymentStep("");
  };

  const handleBooking = async (parkId) => {
    if (!user || !user.id) {
      setError("User not authenticated. Please log in again.");
      return;
    }

    const validationError = validateBooking();
    if (validationError) {
      setError(validationError);
      return;
    }
    setLoading(true);
    setError("");
    try {
      await processDummyPayment();
      const newBooking = {
        id: bookings.length + 1,
        visitorId: user.id,
        parkId,
        parkName: nationalParks.find((p) => p.id === parkId).name,
        checkIn,
        checkOut,
        room: wantRoom ? room : null,
        campsite,
        specialRequest: specialRequest || null,
        status: "Confirmed",
        createdAt: new Date().toISOString(),
      };
      setBookings((prev) => {
        const updatedBookings = [...prev, newBooking];
        console.log("Updated bookings state:", updatedBookings);
        return updatedBookings;
      });
      setConfirmationMessage("Booking Confirmed!");
      setTimeout(() => {
        setSelectedPark(null);
        setCheckIn("");
        setCheckOut("");
        setWantRoom(false);
        setRoom("");
        setCampsite("");
        setSpecialRequest("");
        setConfirmationMessage("");
        setCurrentView("bookings");
      }, 3000);
    } catch (err) {
      setError("Failed to create booking. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleComplaint = async (parkId) => {
    if (!complaint.trim()) {
      setError("Please describe the issue in the complaint.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setConfirmationMessage("Complaint submitted successfully!");
      setTimeout(() => {
        setComplaint("");
        setSelectedPark(null);
        setConfirmationMessage("");
        setCurrentView("parks");
      }, 3000);
    } catch (err) {
      setError("Failed to submit complaint. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleRoomServiceRequest = async (bookingId) => {
    if (!roomServiceType) {
      setError("Please select a room service type.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const newRequest = {
        id: roomServiceRequests.length + 1,
        visitorId: user.id,
        bookingId,
        parkName: bookings.find((b) => b.id === bookingId && b.visitorId === user.id).parkName,
        serviceType: roomServiceType,
        specialRequest: roomServiceRequest || null,
        createdAt: new Date().toISOString(),
      };
      setRoomServiceRequests((prev) => {
        const updatedRequests = [...prev, newRequest];
        console.log("Updated room service requests state:", updatedRequests);
        return updatedRequests;
      });
      setRoomServiceConfirmation("Request Submitted Successfully!");
      setTimeout(() => {
        setRoomServiceType("");
        setRoomServiceRequest("");
        setSelectedBookingId(null);
        setRoomServiceConfirmation("");
        setCurrentView("roomService");
      }, 3000);
    } catch (err) {
      setError("Failed to submit room service request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-white transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out z-50 md:static md:w-64 md:flex md:flex-col`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold">Park Booking</h2>
          <button className="md:hidden text-white" onClick={toggleSidebar}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <button
            className={`w-full text-left px-4 py-2 rounded ${
              currentView === "parks" ? "bg-gray-700" : "hover:bg-gray-700"
            }`}
            onClick={() => {
              setCurrentView("parks");
              setSelectedPark(null);
              setIsSidebarOpen(false);
            }}
          >
            National Parks
          </button>
          <button
            className={`w-full text-left px-4 py-2 rounded ${
              currentView === "bookings" ? "bg-gray-700" : "hover:bg-gray-700"
            }`}
            onClick={() => {
              setCurrentView("bookings");
              setSelectedPark(null);
              setIsSidebarOpen(false);
            }}
          >
            My Bookings
          </button>
          <button
            className={`w-full text-left px-4 py-2 rounded ${
              currentView === "roomService" ? "bg-gray-700" : "hover:bg-gray-700"
            }`}
            onClick={() => {
              setCurrentView("roomService");
              setSelectedPark(null);
              setIsSidebarOpen(false);
            }}
          >
            Room Service Requests
          </button>
        </nav>
       
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          className={`text-green-500 transition-opacity duration-300 ${
            isSidebarOpen ? "opacity-0" : "opacity-100"
          }`}
          onClick={toggleSidebar}
          disabled={isSidebarOpen}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 10h16M4 14h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 pt-20 md:p-6 max-w-full mx-auto">
        {confirmationMessage && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-[90%] sm:max-w-md">
              <svg
                className="w-12 h-12 text-green-600 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <h3 className="text-xl sm:text-2xl font-semibold text-green-600 mb-4">
                {confirmationMessage}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">Thank you for your request!</p>
            </div>
          </div>
        )}

        {/* {currentView === "parks" && !selectedPark && (
          <div className="space-y-6">
            {nationalParks.map((park) => (
              <div
                key={park.id}
                className="flex flex-col sm:flex-row border rounded-lg shadow-md p-4 bg-gray-100"
              >
                <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
                  <img
                    src={park.images[0] || "https://via.placeholder.com/150"}
                    alt={`${park.name} main view`}
                    className="w-full h-40 sm:h-48 object-cover rounded-lg"
                  />
                  <div className="flex mt-2 space-x-2 overflow-x-auto">
                    {park.images.slice(1).map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`${park.name} thumbnail ${idx + 1}`}
                        className="w-16 h-16 object-cover rounded"
                      />
                    ))}
                  </div>
                </div>
                <div className="flex-grow px-0 sm:px-4">
                  <div className="flex flex-col sm:flex-row justify-between items-start">
                    <div className="w-full">
                      <h2 className="text-lg sm:text-xl font-semibold">{park.name}</h2>
                      <p className="text-gray-600 text-sm sm:text-base">{park.location}</p>
                      <div
                        className="flex items-center mt-1"
                        aria-label={`Star rating: ${park.starRating} out of 5`}
                      >
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${
                              i < park.starRating ? "text-yellow-600" : "text-gray-300"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15l-5.5 3 1-5.5L1 7.5l5.5-.5L10 2l3.5 5 5.5.5-4 4.5 1 5.5z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-xs sm:text-sm text-gray-500 mt-1">{park.description}</p>
                    </div>
                    <div className="text-left sm:text-right mt-4 sm:mt-0 w-full sm:w-auto">
                      <div className="flex items-center justify-start sm:justify-end">
                        <span className="text-green-600 font-semibold mr-2 text-sm sm:text-base">
                          {park.rating}
                        </span>
                        <span className="text-gray-600 text-xs sm:text-sm">
                          ({park.reviews} Ratings)
                        </span>
                      </div>
                      {park.tags.includes("Early Bird Deal") && (
                        <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded mt-1">
                          Early Bird Deal
                        </span>
                      )}
                      <p className="text-gray-500 line-through mt-2 text-sm sm:text-base">
                        ${park.originalPrice.toFixed(2)}
                      </p>
                      <p className="text-lg sm:text-xl font-bold">
                        ${park.discountedPrice.toFixed(2)}
                      </p>
                      <p className="text-gray-600 text-xs sm:text-sm">
                        + ${park.taxesAndFees.toFixed(2)} taxes & fees
                      </p>
                      <p className="text-gray-600 text-xs sm:text-sm">Per Night (USD)</p>
                    </div>
                  </div>
                  <div className="mt-2">
                    {park.tags.map((tag, idx) => (
                      <p key={idx} className="text-green-600 text-xs sm:text-sm">
                        ✓ {tag}
                      </p>
                    ))}
                    <button
                      className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full sm:w-auto text-base"
                      onClick={() => setSelectedPark(park)}
                    >
                      Book
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )} */}


        {currentView === "parks" && !selectedPark && (
  <div className="space-y-8 max-w-7xl mx-auto">
    {nationalParks.map((park) => (
      <div
        key={park.id}
        className="flex flex-col sm:flex-row border rounded-lg shadow-lg p-6 bg-white hover:shadow-xl transition-shadow duration-300"
      >
        <div className="w-full sm:w-2/5 lg:w-1/3 mb-4 sm:mb-0">
          <img
            src={park.images[0] || "https://via.placeholder.com/150"}
            alt={`${park.name} main view`}
            className="w-full h-48 sm:h-64 object-cover rounded-lg shadow"
          />
          <div className="flex mt-3 space-x-2 overflow-x-auto pb-1">
            {park.images.slice(1).map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${park.name} thumbnail ${idx + 1}`}
                className="w-16 h-16 object-cover rounded shadow hover:opacity-80 transition-opacity cursor-pointer"
              />
            ))}
          </div>
        </div>
        <div className="flex-grow px-0 sm:px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start">
            <div className="w-full lg:w-3/5">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800">{park.name}</h2>
              <p className="text-gray-600 text-sm sm:text-base mb-2">{park.location}</p>
              <div
                className="flex items-center mt-1 mb-2"
                aria-label={`Star rating: ${park.starRating} out of 5`}
              >
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < park.starRating ? "text-yellow-500" : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.5 3 1-5.5L1 7.5l5.5-.5L10 2l3.5 5 5.5.5-4 4.5 1 5.5z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm sm:text-base text-gray-600 mt-2 leading-relaxed">{park.description}</p>
              
              <div className="mt-4 space-y-1">
                {park.tags.map((tag, idx) => (
                  <p key={idx} className="text-green-600 text-sm flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {tag}
                  </p>
                ))}
              </div>
            </div>
            
            <div className="text-left lg:text-right mt-4 lg:mt-0 w-full lg:w-2/5 lg:pl-4">
              <div className="flex items-center justify-start lg:justify-end mb-2">
                <span className="text-green-600 font-bold text-lg sm:text-xl mr-2">
                  {park.rating}
                </span>
                <span className="text-gray-600 text-sm">
                  ({park.reviews} Ratings)
                </span>
              </div>
              
              {park.tags.includes("Early Bird Deal") && (
                <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full mb-2">
                  Early Bird Deal
                </span>
              )}
              
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm mt-2">
                <p className="text-gray-500 line-through text-sm sm:text-base">
                  ${park.originalPrice.toFixed(2)}
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  ${park.discountedPrice.toFixed(2)}
                </p>
                <p className="text-gray-600 text-sm">
                  + ${park.taxesAndFees.toFixed(2)} taxes & fees
                </p>
                <p className="text-gray-600 text-sm mb-3">Per Night (USD)</p>
                
                <button
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors w-full font-medium text-base flex items-center justify-center"
                  onClick={() => setSelectedPark(park)}
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
)}

        {currentView === "bookings" && (
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg max-w-[90%] sm:max-w-4xl w-full">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">My Bookings</h2>
            {bookings.length === 0 ? (
              <p className="text-gray-600 text-sm sm:text-base">No bookings found.</p>
            ) : (
              <div className="space-y-4">
                {bookings.map((booking) => (
                  <div key={booking.id} className="border rounded-lg p-4 bg-gray-50">
                    <h3 className="text-base sm:text-lg font-semibold">{booking.parkName}</h3>
                    <p className="text-sm sm:text-base">
                      <strong>Check-In:</strong>{" "}
                      {new Date(booking.checkIn).toLocaleDateString()}
                    </p>
                    <p className="text-sm sm:text-base">
                      <strong>Check-Out:</strong>{" "}
                      {new Date(booking.checkOut).toLocaleDateString()}
                    </p>
                    {booking.room && (
                      <p className="text-sm sm:text-base">
                        <strong>Room:</strong> {booking.room}
                      </p>
                    )}
                    <p className="text-sm sm:text-base">
                      <strong>Campsite:</strong> {booking.campsite}
                    </p>
                    {booking.specialRequest && (
                      <p className="text-sm sm:text-base">
                        <strong>Special Request:</strong> {booking.specialRequest}
                      </p>
                    )}
                    <p className="text-sm sm:text-base">
                      <strong>Status:</strong> {booking.status}
                    </p>
                    <p className="text-sm sm:text-base">
                      <strong>Booked On:</strong>{" "}
                      {new Date(booking.createdAt).toLocaleString()}
                    </p>
                    <button
                      className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full sm:w-auto text-base"
                      onClick={() =>
                        setSelectedBookingId(
                          selectedBookingId === booking.id ? null : booking.id
                        )
                      }
                    >
                      {selectedBookingId === booking.id
                        ? "Close Room Service"
                        : "Request Room Service"}
                    </button>
                    {selectedBookingId === booking.id && (
                      <div className="mt-4 border-t pt-4">
                        <h4 className="text-base sm:text-lg font-semibold mb-2">
                          Room Service Request
                        </h4>
                        {error && <p className="text-red-600 mb-4 text-sm sm:text-base">{error}</p>}
                        <div className="mb-4">
                          <label
                            htmlFor={`serviceType-${booking.id}`}
                            className="block text-sm sm:text-lg font-medium"
                          >
                            Service Type
                          </label>
                          <select
                            id={`serviceType-${booking.id}`}
                            className="border p-2 rounded w-full text-sm sm:text-base"
                            value={roomServiceType}
                            onChange={(e) => setRoomServiceType(e.target.value)}
                            disabled={loading}
                          >
                            <option value="">Select Service</option>
                            <option value="Extra Towels">Extra Towels</option>
                            <option value="Food Delivery">Food Delivery</option>
                            <option value="Cleaning Service">Cleaning Service</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor={`serviceRequest-${booking.id}`}
                            className="block text-sm sm:text-lg font-medium"
                          >
                            Special Request
                          </label>
                          <textarea
                            id={`serviceRequest-${booking.id}`}
                            className="border p-2 rounded w-full text-sm sm:text-base"
                            value={roomServiceRequest}
                            onChange={(e) => setRoomServiceRequest(e.target.value)}
                            disabled={loading}
                            rows={4}
                            placeholder="Any specific requests?"
                          />
                        </div>
                        <button
                          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:bg-green-400 w-full sm:w-auto text-base"
                          onClick={() => handleRoomServiceRequest(booking.id)}
                          disabled={loading}
                        >
                          {loading ? "Submitting..." : "Submit Request"}
                        </button>
                        {roomServiceConfirmation && selectedBookingId === booking.id && (
                          <p className="mt-4 text-green-600 font-semibold text-sm sm:text-base">
                            {roomServiceConfirmation}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {currentView === "roomService" && (
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg max-w-[90%] sm:max-w-4xl w-full">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Room Service Requests</h2>
            {roomServiceRequests.length === 0 ? (
              <p className="text-gray-600 text-sm sm:text-base">No room service requests found.</p>
            ) : (
              <div className="space-y-4">
                {roomServiceRequests.map((request) => (
                  <div key={request.id} className="border rounded-lg p-4 bg-gray-50">
                    <h3 className="text-base sm:text-lg font-semibold">{request.parkName}</h3>
                    <p className="text-sm sm:text-base">
                      <strong>Booking ID:</strong> {request.bookingId}
                    </p>
                    <p className="text-sm sm:text-base">
                      <strong>Service Type:</strong> {request.serviceType}
                    </p>
                    {request.specialRequest && (
                      <p className="text-sm sm:text-base">
                        <strong>Special Request:</strong> {request.specialRequest}
                      </p>
                    )}
                    <p className="text-sm sm:text-base">
                      <strong>Requested On:</strong>{" "}
                      {new Date(request.createdAt).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {selectedPark && (
          <div className="border rounded-lg p-4 sm:p-6 bg-white shadow-md relative">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">
              Book Your Stay at {selectedPark?.name || "Unknown Park"}
            </h2>
            {error && <p className="text-red-600 mb-4 text-sm sm:text-base">{error}</p>}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="checkIn" className="block text-sm sm:text-lg font-medium">
                  Check-In Date
                </label>
                <input
                  id="checkIn"
                  type="date"
                  className="border p-2 rounded w-full text-sm sm:text-base"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  disabled={loading}
                  min={new Date().toISOString().split("T")[0]}
                />
              </div>
              <div>
                <label htmlFor="checkOut" className="block text-sm sm:text-lg font-medium">
                  Check-Out Date
                </label>
                <input
                  id="checkOut"
                  type="date"
                  className="border p-2 rounded w-full text-sm sm:text-base"
                  value={checkOut} // Fixed: Changed from checkIn to checkOut
                  onChange={(e) => setCheckOut(e.target.value)}
                  disabled={loading}
                  min={
                    checkIn
                      ? new Date(new Date(checkIn).setDate(new Date(checkIn).getDate() + 1))
                          .toISOString()
                          .split("T")[0]
                      : new Date().toISOString().split("T")[0]
                  }
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2 h-5 w-5"
                  checked={wantRoom}
                  onChange={() => setWantRoom(!wantRoom)}
                  disabled={loading}
                />
                <span className="text-sm sm:text-base">Book a Cabin/Room</span>
              </label>
              {wantRoom && (
                <select
                  className="border p-2 rounded w-full mt-2 text-sm sm:text-base"
                  value={room}
                  onChange={(e) => setRoom(e.target.value)}
                  disabled={loading}
                >
                  <option value="">Select Room</option>
                  {(selectedPark?.rooms || []).map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="campsite" className="block text-sm sm:text-lg font-medium">
                Campsite
              </label>
              <select
                id="campsite"
                className="border p-2 rounded w-full text-sm sm:text-base"
                value={campsite}
                onChange={(e) => setCampsite(e.target.value)}
                disabled={loading}
              >
                <option value="">Select Campsite</option>
                {(selectedPark?.campsites || []).map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="specialRequest" className="block text-sm sm:text-lg font-medium">
                Special Requests
              </label>
              <textarea
                id="specialRequest"
                className="border p-2 rounded w-full text-sm sm:text-base"
                value={specialRequest}
                onChange={(e) => setSpecialRequest(e.target.value)}
                disabled={loading}
                rows={4}
                placeholder="Any specific requests?"
              />
            </div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-blue-400 w-full sm:w-auto text-base"
                onClick={() => handleBooking(selectedPark.id)}
                disabled={loading}
              >
                {loading ? "Processing..." : "Confirm Booking"}
              </button>
              <button
                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 w-full sm:w-auto text-base"
                onClick={() => setSelectedPark(null)}
                disabled={loading}
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {paymentProcessing && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-[90%] sm:max-w-md">
              <h3 className="text-lg sm:text-xl font-semibold mb-4">
                Processing Your Payment
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">{paymentStep}</p>
              <div className="mt-4 flex justify-center">
                <svg
                  className="animate-spin h-8 w-8 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default VisitorPage;