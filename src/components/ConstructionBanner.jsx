import React, { useState } from 'react';
import { FaTools, FaTimes } from 'react-icons/fa';

function ConstructionBanner() {
  const [isBannerClosed, setIsBannerClosed] = useState(false);

  const handleBannerClose = () => {
    setIsBannerClosed(true);
  };

  if (isBannerClosed) {
    return null;
  }

  return (
    <div className="bg-yellow-200 text-yellow-800 p-2 md:p-3 text-center flex items-center justify-center relative">
      <FaTools className="mr-1 md:mr-2" size="1em" />
      <span className="text-xs">Website Under Construction</span>
      <button
        onClick={handleBannerClose}
        className="ml-2 text-gray-600 hover:text-gray-800 focus:outline-none absolute top-0 right-0 p-2"
      >
        <FaTimes size="0.75em" />
      </button>
    </div>
  );
}

export default ConstructionBanner;
