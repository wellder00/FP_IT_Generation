import React, { useState, useEffect } from 'react';

const ProgressBar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
 

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getScrollHeight = () => {
    const { scrollHeight, clientHeight } = document.documentElement;
    return scrollHeight - clientHeight;
  };

  const calculateScrollPercentage = () => {
    const position = window.pageYOffset;
    const scrollHeight = getScrollHeight();
    const percentage = (position / scrollHeight) * 100;
    return percentage.toFixed(2);
  };

  return (
    <div className="_container-progress-bar">
    <div className="progress-bar-container">
      <div className='scrollPosition'>{scrollPosition}</div>
      <div className="progress-bar" style={{ width: `${calculateScrollPercentage()}%` }}></div>
    </div>
    </div>
  );
};

export default ProgressBar;
