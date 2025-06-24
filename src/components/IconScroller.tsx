import React from 'react';

const icons = [
  { name: 'Recycle', component: <span className="text-6xl">♻️</span> },
  { name: 'Box', component: <span className="text-6xl">📦</span> },
  { name: 'Juice Box', component: <span className="text-6xl">🧃</span> },
  { name: 'Bottle', component: <span className="text-6xl">🧴</span> },
  { name: 'Bubble Tea', component: <span className="text-6xl">🧋</span> },
  { name: 'Shopping Bag', component: <span className="text-6xl">🛍️</span> },
  { name: 'Pill', component: <span className="text-6xl">💊</span> },
];

const IconScroller: React.FC = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="flex animate-scrollLeft">
        {[...icons, ...icons, ...icons, ...icons, ...icons, ...icons, ...icons,...icons].map((icon, index) => (
          <div key={index} className="flex-shrink-0 mx-8 flex items-center justify-center h-24">
            {icon.component}
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconScroller; 