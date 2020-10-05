import { useState, useEffect } from 'react';

const useResponsiveState = () => {
  const [responsiveState, setResponsiveState] = useState(null);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth  <= 600) {
        setResponsiveState('mobile')
      } else {
        setResponsiveState('desktop')
      }
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("mouseup", onResize);
  }, []);


  return responsiveState;
}


export default useResponsiveState;