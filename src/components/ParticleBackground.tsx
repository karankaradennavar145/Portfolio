import React from 'react';

const ParticleBackground: React.FC = () => {
  return (
    <div 
      className="fixed inset-0 -z-10"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        opacity: 0.1
      }}
    />
  );
};

export default ParticleBackground;
