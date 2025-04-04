// components/LoadingComponent.js
import React from 'react';

const LoadingComponent = () => {
  return (
    <div className="flex justify-center items-center w-full h-full fixed top-0 left-0 bg-gray-800 bg-opacity-50 z-50">
      <div className="loader"></div>
    </div>
  );
};

export default LoadingComponent;
