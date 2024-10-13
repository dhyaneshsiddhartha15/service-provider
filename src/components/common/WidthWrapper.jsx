import React from 'react';

export default function WidthWrapper({ children }) {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
      {children}
    </div>
  );
}
