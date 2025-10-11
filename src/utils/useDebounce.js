import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

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

export const getDeviceId = () => {
  let deviceId = localStorage.getItem("app-device-id");
  if (!deviceId) {
    deviceId = uuidv4();
    localStorage.setItem("app-device-id", deviceId);
  }
  return deviceId;
};
