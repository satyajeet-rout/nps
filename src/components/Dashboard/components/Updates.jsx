import React from 'react';
import { FiCheck } from 'react-icons/fi';

const Updates = () => {
  const updates = [
    'Automated intake process improves efficiency',
    'AI research assistant now available',
    'Cost transparency benefits clients',
    'New document templates added to the library',
  ];

  return (
    <div className="bg-card rounded-xl p-5 border border-border">
      <h3 className="text-xl font-semibold mb-4 text-white">Recent Updates</h3>
      <ul className="space-y-3">
        {updates.map((update) => (
          <li key={update} className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
              <FiCheck size={12} className="text-accent" />
            </div>
            <p className="text-muted-foreground">{update}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Updates;