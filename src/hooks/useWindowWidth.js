import { useEffect, useCallback, useState } from 'react';

export function useWindowWidth() {
    const getWindowWidth = useCallback(() => window.innerWidth, []);
    const [windowWidth, setWindowWidth] = useState(getWindowWidth());
  
    useEffect(() => {
  
      function handleResize() {
        setWindowWidth(getWindowWidth());
      };
  
      window.addEventListener('resize', resizeController, false);
  
      let resizeTimeout;
      function resizeController() {
        if (!resizeTimeout) {
          resizeTimeout = setTimeout(() => {
            resizeTimeout = null;
            handleResize();
          }, 1500);
        }
      }
  
      return () => window.removeEventListener('resize', handleResize);
    }, [getWindowWidth]);
  
    return windowWidth;
  }