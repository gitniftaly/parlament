import { useState, useEffect } from "react";

export const useDebounce = (cb, delay) => {
  const [debounceValue, setDebounceValue] = useState(cb);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(cb);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [cb, delay]);
  return debounceValue;
};

export const dbounce = (cb, time) => {
  let bounce = null;
  return function (...args) {
    if (bounce) {
      clearTimeout(bounce);
    } else {
      bounce = setTimeout(() => {
        cb(...args);
      }, time);
    }
  };
};
