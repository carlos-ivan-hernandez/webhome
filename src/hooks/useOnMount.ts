import {useRef} from 'react';

export const useOnMount = (callback: () => void) => {
  const mounted = useRef(false);

  if (!mounted.current) {
    mounted.current = true;
    callback();
  }
};
