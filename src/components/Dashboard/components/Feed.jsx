import React, { useState } from 'react';
import { FiCheckSquare, FiClock, FiBriefcase, FiLock } from 'react-icons/fi';

const Feed = () => {
  const [activeTab, setActiveTab] = useState('all');

  const features = [
    {
      icon: FiCheckSquare,
      title: 'Automated Intake Process',
      description: 'Streamlined client onboarding with AI assistance',
    },
    {
      icon: FiClock,
      title: 'Faster Filing Times',
      description: 'Reduce case processing time with automated workflows',
    },
    {
      icon: FiBriefcase,
      title: 'All Things In One Place',
      description: 'Centralized case management and document storage',
    },
  ];

  const recentCases = [
    { title: 'Divorce Settlement', time: '2 days ago' },
    { title: 'Contract Dispute', time: '2 days ago' },
    { title: 'Application Settlement', time: '2 days ago' },
  ];

  const premiumContent = [
    {
      category: 'Discrimination',
      title: 'New York housing discrimination',
      premium: false,
    },
    {
      category: 'Employment',
      title: 'Employment contract negotiation',
      premium: true,
    },
    {
      category: 'Intellectual Property',
      title: 'Trademark registration',
      premium: true,
    },
    {
      category: 'Personal Injury',
      title: 'Workplace accident compensation',
      premium: false,
    },
    {
      category: 'Family Law',
      title: 'Divorce settlement negotiation',
      premium: true,
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">Feed</h1>
        <div className="w-[300px] flex items-center justify-center rounded-md bg-gray-800 p-1 text-gray-400">
          {['all', 'recent', 'following'].map((tab) => (
            <button
              key={tab}
              className={`flex-1 px-3 py-1.5 text-sm font-medium rounded-sm transition-all ${
                activeTab === tab ? 'bg-legally-purple text-white shadow-sm' : 'hover:bg-gray-700'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5 mb-8">
        {features.map((feature) => (
          <div key={feature.title} className="bg-card rounded-xl p-5 border border-border">
            <div className="w-10 h-10 rounded-md bg-accent/20 flex items-center justify-center mb-4">
              <feature.icon size={20} className="text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
      <h2 className="text-xl font-bold mb-4 text-white">Recent Cases</h2>
      <div className="bg-card rounded-xl overflow-hidden border border-border mb-8">
        {recentCases.map((caseItem, index) => (
          <div
            key={caseItem.title}
            className={`p-4 flex justify-between items-center ${
              index !== recentCases.length - 1 ? 'border-b border-border' : ''
            }`}
          >
            <h3 className="font-medium text-white">{caseItem.title}</h3>
            <span className="text-sm text-muted-foreground">{caseItem.time}</span>
          </div>
        ))}
      </div>
      <h2 className="text-xl font-bold mb-4 text-white">Premium Content</h2>
      <div className="grid gap-6">
        {premiumContent.map((content) => (
          <div
            key={content.title}
            className={`rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden ${
              content.premium ? 'premium-lock relative' : ''
            }`}
          >
            <div className="flex flex-col space-y-1.5 p-4 pb-2">
              <p className="text-sm text-muted-foreground">{content.category}</p>
            </div>
            <div className={`p-4 pt-0 ${content.premium ? 'premium-blur blur-sm' : ''}`}>
              <h3 className="text-xl font-bold">{content.title}</h3>
            </div>
            <div className="flex items-center p-4 pt-0 justify-between">
              {content.premium ? (
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="bg-black/70 p-4 rounded-lg flex flex-col items-center gap-2">
                    <FiLock size={24} className="text-legally-gold" />
                    <span className="text-white font-medium">Premium Content</span>
                    <button className="h-10 px-4 py-2 mt-2 bg-legally-gold text-legally-purple rounded-md hover:bg-legally-gold/90">
                      Unlock Access
                    </button>
                  </div>
                </div>
              ) : (
                <button className="h-10 px-4 py-2 text-legally-purple bg-legally-gold rounded-md hover:bg-legally-gold/90">
                  View Details
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;