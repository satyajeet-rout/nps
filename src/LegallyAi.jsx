import React from 'react';
import Footer from './components/Footer';

const LegallyAI = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="p-4 bg-gray-800  ">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold text-yellow-400">Legally AI</h1>
        </div>
      </nav>

      {/* Main content */}
      <div className="flex">
        {/* First Section - For Law Firms */}
        <div className="w-full bg-purple-900 p-8 relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute -top-10 right-20 w-32 h-32 bg-purple-300 rounded-full"></div>
            <div className="absolute bottom-40 left-10 w-16 h-16 bg-purple-300 rounded-full"></div>
            <div className="absolute bottom-60 right-40 w-20 h-20 bg-purple-300 rounded-full"></div>
          </div>
          
          <h2 className="text-4xl text-white font-bold mb-16 text-center mt-8">For Law Firms</h2>
          
          <div className="flex flex-col space-y-4 max-w-md mx-auto mb-5">
            {/* Client Intake */}
            <div className="bg-purple-900 p-6 rounded-lg border-2 border-cyan-300 shadow-lg shadow-cyan-300/20">
              <div className="flex items-center">
                <div className="rounded-full bg-transparent p-2 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl text-white font-semibold mb-1">Client Intake</h3>
                  <p className="text-white text-sm">Streamline and automate your client onboarding process</p>
                </div>
              </div>
            </div>
            
            {/* eDiscovery */}
            <div className="bg-purple-900 p-6 rounded-lg border-2 border-cyan-300 shadow-lg shadow-cyan-300/20">
              <div className="flex items-center">
                <div className="rounded-full bg-transparent p-2 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl text-white font-semibold mb-1">eDiscovery</h3>
                  <p className="text-white text-sm">AI-powered document analysis and evidence extraction</p>
                </div>
              </div>
            </div>
            
            {/* Automated Case Handling */}
            <div className="bg-purple-900 p-6 rounded-lg border-2 border-cyan-300 shadow-lg shadow-cyan-300/20">
              <div className="flex items-center">
                <div className="rounded-full bg-transparent p-2 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl text-white font-semibold mb-1">Automated Case Handling</h3>
                  <p className="text-white text-sm">Smart workflows and case management systems</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mb-8">
            <button className="bg-yellow-400 shadow shadow-yellow-700 hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-md transition duration-300">
              Join as Law Firm
            </button>
          </div>
          
          {/* <div className="flex justify-end">
            <button className="bg-purple-700 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-full flex items-center transition duration-300">
              Enter Platform
              <span className="ml-2 bg-yellow-400 rounded-full p-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </div> */}
        </div>
        
        {/* Second Section - For Clients */}
        <div className="w-full bg-gray-100 p-8">
          <h2 className="text-4xl text-gray-800 font-bold mb-16 text-center mt-8">For Clients</h2>
          
          <div className="flex flex-col space-y-4 max-w-md mx-auto mb-5">
            {/* Cost Transparency */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center">
                <div className="rounded-full bg-gray-100 p-3 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl text-gray-800 font-semibold mb-1">Cost Transparency</h3>
                  <p className="text-gray-600 text-sm">Clear pricing and no hidden fees for legal services</p>
                </div>
              </div>
            </div>
            
            {/* Faster Processing */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center">
                <div className="rounded-full bg-gray-100 p-3 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl text-gray-800 font-semibold mb-1">Faster Processing</h3>
                  <p className="text-gray-600 text-sm">Reduced wait times with AI-powered legal assistance</p>
                </div>
              </div>
            </div>
            
            {/* Community Service */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center">
                <div className="rounded-full bg-gray-100 p-3 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl text-gray-800 font-semibold mb-1">Community Service</h3>
                  <p className="text-gray-600 text-sm">Access to pro bono services and community legal aid</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center space-x-4">
            <button className="bg-gray-200 shadow shadow-gray-400  hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-md transition duration-300">
              Sign Up as Individual
            </button>
            <button className="bg-gray-200 shadow shadow-gray-400 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-md transition duration-300">
              Sign Up as Corporate
            </button>
          </div>
        </div>

        
      </div>
      <Footer />
    </div>
  );
};

export default LegallyAI;