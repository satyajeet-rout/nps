import React from 'react';

function FeatureTile({ icon, title, description, delay, tileClass }) {
  return (
    <div className={`feature-tile ${tileClass} p-4 rounded-lg opacity-0 animate-slide-in-left`} style={{ animationDelay: delay }}>
      <div className="text-4xl mb-2 transition-transform duration-500">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm opacity-80">{description}</p>
    </div>
  );
}

export default FeatureTile;