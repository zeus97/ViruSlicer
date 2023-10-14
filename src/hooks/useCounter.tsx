import { useEffect, useState } from 'react';

function useCounter(limit: number, step: number, delay: number) {
  const [count, setCount] = useState(0);
  let timer: number | undefined;

  const startCounter = () => {
    if (count < limit) {
      timer = setTimeout(() => {
        setCount((prevCount) => Math.min(prevCount + step, limit));
        startCounter(); // Configura un nuevo setTimeout al final de la llamada
      }, delay);
    }
  };

  useEffect(() => {
    startCounter();

    return () => {
      if (timer !== undefined) {
        clearTimeout(timer); // Asegúrate de limpiar el temporizador al desmontar el componente
      }
    };
  }, [count, limit, step, delay]);

  return [count, startCounter] as const;
}

export default useCounter;