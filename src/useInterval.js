import { useRef } from "react";
import { useEffect } from "react/cjs/react.development";

function useInterval(callback, interval) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    let id = setInterval(tick, interval);
    return () => clearInterval(id);
  }, []);
}

export default useInterval;