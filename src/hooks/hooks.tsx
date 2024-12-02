import { useEffect, useState } from "react";

export const useResizeWindow = () => {
    const isBrowser = typeof window !== 'undefined';
    const [myInnerWidth, setMyInnerWidth] = useState<number>(
      isBrowser ? window.innerWidth : 1000,
    );
   
    const handleWindowSizeChange = () => {
      setMyInnerWidth(window.innerWidth);
    };
  
    useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      
      return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
      };
    }, []);
  
    const isMobile = myInnerWidth <= 768;
  
    return { isMobile, myInnerWidth };
  };