import React from 'react';
import { FiCalendar } from 'react-icons/fi';

const Deadlines = () => {
  const deadlines = [
    { title: 'Immigration Application', date: 'May 21', client: 'John Doe' },
    { title: 'Business Incorporation', date: 'May 24', client: 'Acme Corp' },
    { title: 'Patent Filing', date: 'May 30', client: 'Tech Innovations' },
  ];

  return (
    <div className="bg-card rounded-xl p-5 border border-border">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-white">Upcoming Deadlines</h3>
        <FiCalendar size={16} className="text-accent" />
      </div>
      {deadlines.map((deadline) => (
        <div key={deadline.title} className="mb-2">
          <div className="flex justify-between items-center">
            <h4 className="font-medium text-white">{deadline.title}</h4>
            <span className="text-sm text-accent">{deadline.date}</span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">Client: {deadline.client}</p>
        </div>
      ))}
      <button className="w-full mt-3 text-sm text-accent flex items-center justify-center gap-2">
        <FiCalendar size={14} />
        <span>View your calendar</span>
      </button>
    </div>
  );
};

export default Deadlines;