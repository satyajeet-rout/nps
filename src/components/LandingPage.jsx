// import { Link } from "react-router-dom";

// function LandingPage() {
//   const featuredParks = [
//     {
//       id: 1,
//       name: "Yellowstone National Park",
//       description: "America's first national park, home to geysers, hot springs, and diverse wildlife.",
//       image: "https://media.istockphoto.com/id/1254906773/photo/grand-prismatic-spring-yellowstone-national-park.jpg?b=1&s=612x612&w=0&k=20&c=Q6csMFyyRrRUtOPI7Rw4VTV_piy15gtw7AjtnfGoHOs=&auto=format&fit=crop&w=500&q=60",
//       location: "Wyoming, Montana, Idaho",
//       established: "March 1, 1872"
//     },
//     {
//       id: 2,
//       name: "Grand Canyon National Park",
//       description: "A steep-sided canyon carved by the Colorado River, known for its overwhelming size and colorful landscape.",
//       image: "/images/grand-canyon.jpg",
//       location: "Arizona",
//       established: "February 26, 1919"
//     },
//     {
//       id: 3,
//       name: "Yosemite National Park",
//       description: "Known for its waterfalls, giant sequoias, and impressive valley views.",
//       image: "/images/yosemite.jpg",
//       location: "California",
//       established: "October 1, 1890"
//     }
//   ];

//   return (
//     <div className="bg-gray-100">
//       {/* Hero Section */}
//       <div className="bg-blue-900 text-white py-12 sm:py-16 md:py-20">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6">
//           <div className="text-center">
//             <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Explore America's Natural Wonders</h1>
//             <p className="text-lg sm:text-xl md:text-2xl mb-8">Discover the beauty and history of our National Parks</p>
//             <div className="flex justify-center space-x-4">
//               <Link to="/visitor-login" className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
//                 Visitor Access
//               </Link>
//               <Link to="/admin-login" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
//                 Admin Access
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Information Section */}
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
//         <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">About the National Parks Management System</h2>
//         <div className="bg-white rounded-lg shadow-md p-6 mb-12">
//           <p className="text-gray-700 mb-4">
//             The National Parks Management System provides tools for visitors to explore park information, 
//             plan trips, and make reservations. Park administrators can manage facilities, monitor visitor 
//             statistics, and update park information.
//           </p>
//           <p className="text-gray-700">
//             Whether you're a nature enthusiast planning your next adventure or a park administrator, 
//             our system helps connect people with America's natural treasures.
//           </p>
//         </div>

//         {/* Featured Parks */}
//         <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Featured National Parks</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {featuredParks.map(park => (
//             <div key={park.id} className="bg-white rounded-lg shadow-md overflow-hidden">
//               <div className="h-48 bg-gray-300 relative">
//                 {/* Replace with real images in production */}
//                 <div className="absolute inset-0 flex items-center justify-center text-gray-500 bg-gray-200">
//                   {park.name} Image
//                 </div>
//               </div>
//               <div className="p-6">
//                 <h3 className="text-xl font-bold mb-2">{park.name}</h3>
//                 <p className="text-gray-600 mb-4">{park.description}</p>
//                 <div className="text-sm text-gray-500">
//                   <p>Location: {park.location}</p>
//                   <p>Established: {park.established}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Stats Section */}
//       <div className="bg-blue-800 text-white py-12">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6">
//           <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">National Parks by the Numbers</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
//             <div className="p-4">
//               <div className="text-4xl font-bold mb-2">63</div>
//               <div className="text-lg">National Parks</div>
//             </div>
//             <div className="p-4">
//               <div className="text-4xl font-bold mb-2">423</div>
//               <div className="text-lg">National Park Sites</div>
//             </div>
//             <div className="p-4">
//               <div className="text-4xl font-bold mb-2">85M</div>
//               <div className="text-lg">Acres Protected</div>
//             </div>
//             <div className="p-4">
//               <div className="text-4xl font-bold mb-2">300M+</div>
//               <div className="text-lg">Annual Visitors</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white py-8">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6">
//           <div className="text-center">
//             <p className="mb-2">© 2025 National Parks Management System</p>
//             <p className="text-sm text-gray-400">This is a demonstration system for educational purposes.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default LandingPage;


import { Link } from "react-router-dom";

function LandingPage() {
  const featuredParks = [
    {
      id: 1,
      name: "Yellowstone National Park",
      description: "America's first national park, home to geysers, hot springs, and diverse wildlife.",
      image: "https://media.istockphoto.com/id/1254906773/photo/grand-prismatic-spring-yellowstone-national-park.jpg?b=1&s=612x612&w=0&k=20&c=Q6csMFyyRrRUtOPI7Rw4VTV_piy15gtw7AjtnfGoHOs=&auto=format&fit=crop&w=500&q=60",
      location: "Wyoming, Montana, Idaho",
      established: "March 1, 1872"
    },
    {
      id: 2,
      name: "Grand Canyon National Park",
      description: "A steep-sided canyon carved by the Colorado River, known for its overwhelming size and colorful landscape.",
      image: "https://images.pexels.com/photos/20879885/pexels-photo-20879885/free-photo-of-grand-canyon-national-park.jpeg",
      location: "Arizona",
      established: "February 26, 1919"
    },
    {
      id: 3,
      name: "Yosemite National Park",
      description: "Known for its waterfalls, giant sequoias, and impressive valley views.",
      image: "https://c4.wallpaperflare.com/wallpaper/382/231/775/yosemite-valley-el-capitan-united-states-california-wallpaper-preview.jpg",
      location: "California",
      established: "October 1, 1890"
    }
  ];

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Explore America's Natural Wonders</h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8">Discover the beauty and history of our National Parks</p>
            <div className="flex justify-center space-x-4">
              <Link to="/visitor-login" className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
                Visitor Access
              </Link>
              <Link to="/admin-login" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Admin Access
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Information Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">About the National Parks Management System</h2>
        <div className="bg-white rounded-lg shadow-md p-6 mb-12">
          <p className="text-gray-700 mb-4">
            The National Parks Management System provides tools for visitors to explore park information, 
            plan trips, and make reservations. Park administrators can manage facilities, monitor visitor 
            statistics, and update park information.
          </p>
          <p className="text-gray-700">
            Whether you're a nature enthusiast planning your next adventure or a park administrator, 
            our system helps connect people with America's natural treasures.
          </p>
        </div>

        {/* Featured Parks */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Featured National Parks</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredParks.map(park => (
            <div key={park.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-300 relative overflow-hidden">
                <img 
                  src={park.image} 
                  alt={park.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{park.name}</h3>
                <p className="text-gray-600 mb-4">{park.description}</p>
                <div className="text-sm text-gray-500">
                  <p>Location: {park.location}</p>
                  <p>Established: {park.established}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-blue-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">National Parks by the Numbers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="text-4xl font-bold mb-2">63</div>
              <div className="text-lg">National Parks</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold mb-2">423</div>
              <div className="text-lg">National Park Sites</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold mb-2">85M</div>
              <div className="text-lg">Acres Protected</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold mb-2">300M+</div>
              <div className="text-lg">Annual Visitors</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <p className="mb-2">© 2025 National Parks Management System</p>
            <p className="text-sm text-gray-400">This is a demonstration system for educational purposes.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;