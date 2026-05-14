import { useState, useEffect, useRef } from "react";

export const useTimer = (initialTime: number, onFinish: () => void) => {
  const [time, setTime] = useState(initialTime);
  const onFinishRef = useRef(onFinish);

  useEffect(() => {
    onFinishRef.current = onFinish;
  }, [onFinish]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (time === 0) {
      onFinishRef.current?.();
    }
  }, [time]);

  return time;
};