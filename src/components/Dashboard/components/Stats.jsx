import React from 'react';
import { FiUsers, FiCheckSquare, FiFileText, FiTrendingUp, FiLock } from 'react-icons/fi';

const Stats = () => {
  const stats = [
    {
      title: 'Active Clients',
      value: '5,438',
      icon: FiUsers,
    },
    {
      title: 'Cases Solved',
      value: '1,027',
      icon: FiCheckSquare,
      change: '↑ 12% from last month',
      changeColor: 'text-green-500',
    },
    {
      title: 'Active Cases',
      value: '47',
      icon: FiFileText,
      change: '↑ 4% from last month',
      changeColor: 'text-green-500',
    },
    {
      title: 'Revenue',
      value: '$24,500',
      icon: FiTrendingUp,
      change: '↑ 7% from last month',
      changeColor: 'text-green-500',
    },
    {
      title: 'Premium Content',
      value: '19',
      icon: FiLock,
      progress: 65,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="rounded-lg bg-card border border-border overflow-hidden shadow-sm"
        >
          <div className="p-6 flex flex-row items-center justify-between pb-2">
            <h3 className="text-sm font-medium text-muted-foreground">{stat.title}</h3>
            <div className="text-accent">
              <stat.icon size={16} />
            </div>
          </div>
          <div className="p-6 pt-0">
            <div className="text-2xl font-bold text-white">{stat.value}</div>
            {stat.change && (
              <p className={`text-xs ${stat.changeColor} flex items-center mt-1`}>
                {stat.change.split('↑')[0]}↑<span className="text-muted-foreground ml-1">{stat.change.split('↑')[1]}</span>
              </p>
            )}
            {stat.progress && (
              <>
                <div className="mt-2 h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-accent rounded-full" style={{ width: `${stat.progress}%` }}></div>
                </div>
                <p className="text-xs text-muted-foreground mt-1">{stat.progress}% viewed this month</p>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;