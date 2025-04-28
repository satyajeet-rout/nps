const Sidebar = () => {
  const navItems = [
    { href: '/', label: 'Home', icon: 'lucide-house', isActive: true },
    { href: '/clients', label: 'Clients', icon: 'lucide-users' },
    { href: '/cases', label: 'Cases', icon: 'lucide-file-text', premium: true },
    { href: '/documents', label: 'Documents', icon: 'lucide-folder-closed' },
    { href: '/messages', label: 'Messages', icon: 'lucide-message-square' },
    { href: '/analytics', label: 'Analytics', icon: 'lucide-chart-pie' },
  ];

  const bottomNavItems = [
    { href: '/notifications', label: 'Notifications', icon: 'lucide-bell' },
    { href: '/settings', label: 'Settings', icon: 'lucide-settings' },
    { href: '#', label: 'Logout', icon: 'lucide-log-out' },
  ];

  return (
    <div className="h-screen w-64 bg-purple-900 text-white flex flex-col fixed left-0 top-0">
      <div className="p-4">
        <a href="/" className="flex items-center gap-2">
          <svg className="w-8 h-8 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
            <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
            <path d="M7 21h10"></path>
            <path d="M12 3v18"></path>
            <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path>
          </svg>
          <span className="text-2xl font-bold">Legally AI</span>
        </a>
      </div>
      <nav className="mt-6 px-2 flex-1 flex flex-col">
        <div className="space-y-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 p-3 rounded-md transition-colors ${
                item.isActive
                  ? 'bg-purple-700 text-white'
                  : 'text-white/80 hover:bg-purple-700/50 hover:text-white'
              } relative overflow-hidden`}
            >
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {item.icon === 'lucide-house' && (
                  <>
                    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                    <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  </>
                )}
                {item.icon === 'lucide-users' && (
                  <>
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </>
                )}
                {item.icon === 'lucide-file-text' && (
                  <>
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                    <path d="M10 9H8"></path>
                    <path d="M16 13H8"></path>
                    <path d="M16 17H8"></path>
                  </>
                )}
                {item.icon === 'lucide-folder-closed' && (
                  <>
                    <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                    <path d="M2 10h20"></path>
                  </>
                )}
                {item.icon === 'lucide-message-square' && (
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                )}
                {item.icon === 'lucide-chart-pie' && (
                  <>
                    <path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"></path>
                    <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                  </>
                )}
              </svg>
              <span>{item.label}</span>
              {item.premium && (
                <span className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-yellow-400 text-purple-900 text-xs px-2 py-0.5 rounded-full font-medium">
                  Premium
                </span>
              )}
            </a>
          ))}
        </div>
        <div className="mt-auto mb-4 space-y-1">
          {bottomNavItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 p-3 rounded-md text-white/80 hover:bg-purple-700/50 hover:text-white cursor-pointer transition-colors"
            >
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {item.icon === 'lucide-bell' && (
                  <>
                    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                  </>
                )}
                {item.icon === 'lucide-settings' && (
                  <>
                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l-.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </>
                )}
                {item.icon === 'lucide-log-out' && (
                  <>
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                    <polyline points="16 17 21 12 16 7"></polyline>
                    <line x1="21" x2="9" y1="12" y2="12"></line>
                  </>
                )}
              </svg>
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
};

const Header = () => (
  <div className="h-16 px-6 bg-purple-900 flex items-center justify-between fixed top-0 right-0 left-64 z-10">
    <div className="relative w-full max-w-md">
      <svg className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.3-4.3"></path>
      </svg>
      <input
        type="text"
        className="h-10 w-full rounded-md bg-purple-950/50 border border-purple-900 text-white placeholder:text-white/60 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        placeholder="Search clients, cases, documents..."
      />
    </div>
    <div className="flex items-center gap-4">
      <button className="h-10 w-10 flex items-center justify-center rounded-md text-white hover:bg-purple-700">
        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4"></circle>
          <path d="M12 2v2"></path>
          <path d="M12 20v2"></path>
          <path d="m4.93 4.93 1.41 1.41"></path>
          <path d="m17.66 17.66 1.41 1.41"></path>
          <path d="M2 12h2"></path>
          <path d="M20 12h2"></path>
          <path d="m6.34 17.66-1.41 1.41"></path>
          <path d="m19.07 4.93-1.41 1.41"></path>
        </svg>
      </button>
      <button className="h-10 w-10 flex items-center justify-center rounded-md text-white hover:bg-purple-700">
        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
          <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
        </svg>
      </button>
      <button className="h-10 w-10 flex items-center justify-center rounded-md text-white hover:bg-purple-700">
        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </button>
      <button className="h-10 px-4 flex items-center gap-2 rounded-md text-white hover:bg-purple-700">
        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
        <span>My Profile</span>
      </button>
    </div>
  </div>
);

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-gray-800 rounded-xl p-5 border border-gray-700">
    <div className="w-10 h-10 rounded-md bg-yellow-400/20 flex items-center justify-center mb-4">
      <svg className="w-5 h-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {icon === 'square-check-big' && (
          <>
            <path d="M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5"></path>
            <path d="m9 11 3 3L22 4"></path>
          </>
        )}
        {icon === 'clock' && (
          <>
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </>
        )}
        {icon === 'briefcase' && (
          <>
            <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            <rect width="20" height="14" x="2" y="6" rx="2"></rect>
          </>
        )}
      </svg>
    </div>
    <h3 className="text-lg font-semibold text-white">{title}</h3>
    <p className="mt-2 text-sm text-gray-400">{description}</p>
  </div>
);

const RecentCase = ({ title, time }) => (
  <div className="border-b border-gray-700 last:border-b-0 p-4 flex justify-between items-center">
    <h3 className="font-medium text-white">{title}</h3>
    <span className="text-sm text-gray-400">{time}</span>
  </div>
);

const PremiumContentCard = ({ category, title, isPremium }) => (
  <div className={`rounded-lg border bg-gray-800 text-white shadow-sm overflow-hidden ${isPremium ? 'premium-lock relative' : ''}`}>
    <div className="flex flex-col space-y-1.5 p-4 pb-2">
      <p className="text-sm text-gray-400">{category}</p>
    </div>
    <div className={`p-4 pt-0 ${isPremium ? 'blur-sm' : ''}`}>
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
    <div className="flex items-center p-4 pt-0 justify-between">
      {isPremium ? (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="bg-black/70 p-4 rounded-lg flex  items-center gap-2">
            <svg className="w-6 h-6 text-yellow-400 mt-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            <span className="text-white font-medium mt-2">Premium Content</span>
            <button className="h-10 px-4 py-2 mt-2 bg-yellow-400 text-purple-900 rounded-md hover:bg-yellow-400/90">Unlock Access</button>
          </div>
        </div>
      ) : (
        <button className="h-10 px-4 py-2 text-purple-900 bg-yellow-400 rounded-md hover:bg-yellow-400/90">View Details</button>
      )}
    </div>
  </div>
);

const StatCard = ({ title, value, icon, subtext, subtextColor }) => (
  <div className="rounded-lg bg-gray-800 border border-gray-700 shadow-sm overflow-hidden">
    <div className="p-6 flex flex-row items-center justify-between pb-2">
      <h3 className="text-sm font-medium text-gray-400">{title}</h3>
      <div className="text-yellow-400">
        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {icon === 'users' && (
            <>
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </>
          )}
          {icon === 'square-check-big' && (
            <>
              <path d="M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5"></path>
              <path d="m9 11 3 3L22 4"></path>
            </>
          )}
          {icon === 'file-text' && (
            <>
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
              <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
              <path d="M10 9H8"></path>
              <path d="M16 13H8"></path>
              <path d="M16 17H8"></path>
            </>
          )}
          {icon === 'trending-up' && (
            <>
              <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
              <polyline points="16 7 22 7 22 13"></polyline>
            </>
          )}
          {icon === 'lock' && (
            <>
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </>
          )}
        </svg>
      </div>
    </div>
    <div className="p-6 pt-0">
      <div className="text-2xl font-bold text-white">{value}</div>
      {subtext && (
        <p className={`text-xs ${subtextColor} flex items-center mt-1`}>
          {subtext}
          <span className="text-gray-400 ml-1">from last month</span>
        </p>
      )}
    </div>
  </div>
);

const DeadlineCard = ({ title, date, client }) => (
  <div className="mb-4">
    <div className="flex justify-between items-center">
      <h4 className="font-medium text-white">{title}</h4>
      <span className="text-sm text-yellow-400">{date}</span>
    </div>
    <p className="text-xs text-gray-400 mt-1">Client: {client}</p>
  </div>
);

const UpdateItem = ({ text }) => (
  <li className="flex items-start gap-3">
    <div className="w-5 h-5 rounded-full bg-yellow-400/20 flex items-center justify-center mt-0.5">
      <svg className="w-3 h-3 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6 9 17l-5-5"></path>
      </svg>
    </div>
    <p className="text-gray-400">{text}</p>
  </li>
);

const Dashboard2 = () => (
  <div className="min-h-screen bg-gray-900 text-white flex">
    <Sidebar />
    <div className="ml-64 flex-1">
      <Header />
      <main className="pt-24 px-6 pb-12 flex">
        <div className="flex-1 pr-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Feed</h1>
            <div className="w-[300px] flex h-10 items-center justify-center rounded-md p-1 bg-gray-800 text-gray-400">
              <button className="px-3 py-1.5 text-sm font-medium rounded-sm bg-purple-900 text-white">All</button>
              <button className="px-3 py-1.5 text-sm font-medium rounded-sm hover:bg-purple-900/50">Recent</button>
              <button className="px-3 py-1.5 text-sm font-medium rounded-sm hover:bg-purple-900/50">Following</button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-5 mb-8">
            <FeatureCard
              icon="square-check-big"
              title="Automated Intake Process"
              description="Streamlined client onboarding with AI assistance"
            />
            <FeatureCard
              icon="clock"
              title="Faster Filing Times"
              description="Reduce case processing time with automated workflows"
            />
            <FeatureCard
              icon="briefcase"
              title="All Things In One Place"
              description="Centralized case management and document storage"
            />
          </div>
          <h2 className="text-xl font-bold mb-4">Recent Cases</h2>
          <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 mb-8">
            <RecentCase title="Divorce Settlement" time="2 days ago" />
            <RecentCase title="Contract Dispute" time="2 days ago" />
            <RecentCase title="Application Settlement" time="2 days ago" />
          </div>
          <h2 className="text-xl font-bold mb-4">Premium Content</h2>
          <div className="grid gap-6">
            <PremiumContentCard category="Discrimination" title="New York housing discrimination" isPremium={false} />
            <PremiumContentCard category="Employment" title="Employment contract negotiation" isPremium={true} />
            <PremiumContentCard category="Intellectual Property" title="Trademark registration" isPremium={true} />
            <PremiumContentCard category="Personal Injury" title="Workplace accident compensation" isPremium={false} />
            <PremiumContentCard category="Family Law" title="Divorce settlement negotiation" isPremium={true} />
          </div>
        </div>
        <div className="w-80 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <StatCard title="Active Clients" value="5,438" icon="users" />
            <StatCard title="Cases Solved" value="1,027" icon="square-check-big" subtext="↑ 12%" subtextColor="text-green-500" />
          </div>
          <StatCard title="Active Cases" value="47" icon="file-text" subtext="↑ 4%" subtextColor="text-green-500" />
          <StatCard title="Revenue" value="$24,500" icon="trending-up" subtext="↑ 7%" subtextColor="text-green-500" />
          <div className="rounded-lg bg-gray-800 border border-gray-700 shadow-sm overflow-hidden">
            <div className="p-6 pb-2 flex flex-row items-center justify-between">
              <h3 className="text-sm font-medium text-gray-400">Premium Content</h3>
              <svg className="w-4 h-4 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
            <div className="p-6 pt-0">
              <div className="text-2xl font-bold text-white">19</div>
              <div className="mt-2 h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-yellow-400 rounded-full" style={{ width: '65%' }}></div>
              </div>
              <p className="text-xs text-gray-400 mt-1">65% viewed this month</p>
            </div>
          </div>
          <div className="bg-gray-800 rounded-xl p-5 border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-white">Upcoming Deadlines</h3>
              <svg className="w-4 h-4 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 2v4"></path>
                <path d="M16 2v4"></path>
                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                <path d="M3 10h18"></path>
              </svg>
            </div>
            <DeadlineCard title="Immigration Application" date="May 21" client="John Doe" />
            <DeadlineCard title="Business Incorporation" date="May 24" client="Acme Corp" />
            <DeadlineCard title="Patent Filing" date="May 30" client="Tech Innovations" />
            <button className="w-full mt-3 text-sm text-yellow-400 flex items-center justify-center gap-2">
              <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 2v4"></path>
                <path d="M16 2v4"></path>
                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                <path d="M3 10h18"></path>
              </svg>
              <span>View your calendar</span>
            </button>
          </div>
          <div className="bg-gray-800 rounded-xl p-5 border border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-white">Recent Updates</h3>
            <ul className="space-y-3">
              <UpdateItem text="Automated intake process improves efficiency" />
              <UpdateItem text="AI research assistant now available" />
              <UpdateItem text="Cost transparency benefits clients" />
              <UpdateItem text="New document templates added to the library" />
            </ul>
          </div>
        </div>
      </main>
    </div>
  </div>
);

export default Dashboard2;