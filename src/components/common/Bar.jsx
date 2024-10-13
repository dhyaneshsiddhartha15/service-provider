import React from 'react';

const SectionHeader = ({ icon, title }) => {
  return (
    <div className="flex justify-between items-center bg-gray-200 rounded-lg p-4">
      <div className="flex items-center space-x-2">
        {icon}
        <h2 className="font-bold text-lg">{title}</h2>
      </div>

    </div>
  );
};

export default SectionHeader;
