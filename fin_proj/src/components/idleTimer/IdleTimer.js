import React, { useState, useEffect } from 'react';

function Timer() {
  const [isUserActive, setIsUserActive] = useState(true);

  useEffect(() => {
    let timeout;

    const resetTimer = () => {
      clearTimeout(timeout);
      setIsUserActive(true);
      timeout = setTimeout(() => {
        setIsUserActive(false);
      }, 60000);
    };

    const handleUserActivity = () => {
      resetTimer();
    };

    resetTimer();

    document.body.addEventListener('mousemove', handleUserActivity);
    document.body.addEventListener('keydown', handleUserActivity);

    return () => {
      document.body.removeEventListener('mousemove', handleUserActivity);
      document.body.removeEventListener('keydown', handleUserActivity);
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    let interval;

    const warnUser = () => {
      const confirmTimeout = setTimeout(() => {
        window.close();
      }, 30000);

      if (window.confirm('Are you still here?')) {
        clearTimeout(confirmTimeout);
      } else {
        window.close();
      }
    };

    if (!isUserActive) {
      interval = setInterval(() => {
        warnUser();
      }, 60000);
    }

    if (isUserActive) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isUserActive]);

  return (
    <div>
    
    </div>
  );
}

export default Timer;
