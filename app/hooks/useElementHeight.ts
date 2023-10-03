import { useState, useLayoutEffect } from 'react';

const useElementHeight = (elementRef: any) => {
  const [elementHeight, setElementHeight] = useState(0);

  useLayoutEffect(() => {
    const updateElementHeight = () => {
      if (elementRef.current) {
        setElementHeight(elementRef.current.clientHeight);
      }
    };

    // Initial height calculation
    updateElementHeight();

    // Attach event listener for window resize
    window.addEventListener('resize', updateElementHeight);

    // Cleanup: remove event listener on unmount
    return () => {
      window.removeEventListener('resize', updateElementHeight);
    };
  }, [elementRef]);

  return elementHeight;
};

export default useElementHeight;
