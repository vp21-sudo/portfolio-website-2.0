import { useEffect, useState } from "react";

const useDebounce = (value: number, delay: number = 300) => {
  const [debouncedValue, setDecouncedValue] = useState<number>(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDecouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
};

export default useDebounce;
