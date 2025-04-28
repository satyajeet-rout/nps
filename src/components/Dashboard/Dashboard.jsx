import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Feed from './components/Feed';
import Stats from './components/Stats';
import Deadlines from './components/Deadlines';
import Updates from './components/Updates';
import Badge from './components/Badge';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#4A236C] flex">
      <Sidebar />
      <div className="ml-64 flex-1">
        <Header />
        <main className="pt-24 px-6 pb-12 flex">
          <div className="flex-1 pr-6">
            <Feed />
          </div>
          <div className="w-80 space-y-6">
            <Stats />
            <Deadlines />
            <Updates />
          </div>
        </main>
      </div>
      <Badge />
    </div>
  );
};

export default Dashboard;