import React, { useState, useEffect } from 'react';

const ViewportIndicator = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.altKey && e.key === 'v') {
        setIsVisible(prev => !prev);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white text-xs px-3 py-1.5 rounded-full z-50 pointer-events-none">
      <div className="font-mono">
        <div className="flex items-center space-x-2">
          <div className="block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden">
            <span className="font-bold">xs</span> {viewportWidth}px
          </div>
          <div className="hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">
            <span className="font-bold">sm</span> {viewportWidth}px
          </div>
          <div className="hidden sm:hidden md:block lg:hidden xl:hidden 2xl:hidden">
            <span className="font-bold">md</span> {viewportWidth}px
          </div>
          <div className="hidden sm:hidden md:hidden lg:block xl:hidden 2xl:hidden">
            <span className="font-bold">lg</span> {viewportWidth}px
          </div>
          <div className="hidden sm:hidden md:hidden lg:hidden xl:block 2xl:hidden">
            <span className="font-bold">xl</span> {viewportWidth}px
          </div>
          <div className="hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:block">
            <span className="font-bold">2xl</span> {viewportWidth}px
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewportIndicator;
