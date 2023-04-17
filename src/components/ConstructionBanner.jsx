import React from 'react';
import { FaTools } from 'react-icons/fa';

function ConstructionBanner() {
  return (
    <div className="bg-yellow-200 text-yellow-800 p-4 text-center flex items-center justify-center">
      <FaTools className="mr-2" />
      <span>Website Under Construction</span>
    </div>
  );
}

export default ConstructionBanner;
