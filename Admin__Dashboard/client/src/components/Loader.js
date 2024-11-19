import React from 'react';

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="loader animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-500"></div>
      <p className="text-lg text-blue-500 mt-4">Please wait...</p>
    </div>
  );
};

export default Loader;
