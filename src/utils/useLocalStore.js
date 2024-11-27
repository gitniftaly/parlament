import { getItem, setItem } from "@/utils/localStore";
import { useEffect, useState } from "react";

export function usePersistedState(key, initialValue) {
  const [value, setValue] = useState(() => {
    const item = getItem(key);
    return item || initialValue;
  });

  useEffect(() => {
    setItem(key, value);
  }, [key, value]);

  return [value, setValue];
}
