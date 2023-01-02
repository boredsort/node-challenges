import { useEffect, useState } from "react";

const Bulb = ({ assignedColor, on, turn }) => {
  let [color, setColor] = useState("grey");
  let [onState, setOnState] = useState(false);

  const turnOn = (state) => {
    setOnState(state)
  }
 
  useEffect(() => {
    if (on > 0) {
      setOnState(true);
    }

    if (onState === true) {
      if (assignedColor) {
        setColor(assignedColor);
      }
    } else {
      setColor("grey");
    }
  }, [onState]);

  return (
    <>
      <svg height="50" width="50">
        <circle
          cx="25"
          cy="25"
          r="20"
          stroke={assignedColor}
          strokeWidth="3"
          fill={turn? '#348c60':color}
        />
        {turn && turn === "left" ? (
          <svg
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 122.88 115.96"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke={assignedColor}
              fill={assignedColor}
              d="M 92.169 82.262 L 92.169 63.462 C 92.169 54.196 90.843 47.397 86.394 42.532 C 81.83 37.564 74.878 35.42 63.936 35.867 L 54.221 35.867 L 54.221 27.469 C 54.164 26.356 53.773 25.563 53.049 25.101 C 51.232 23.935 49.437 25.319 48.13 26.437 C 44.362 29.67 31.944 38.852 29.838 40.608 C 28.378 41.718 28.378 43.85 29.838 44.959 C 31.902 46.637 43.883 55.427 47.759 58.81 C 49.132 59.995 51.079 61.735 53.049 60.473 C 53.773 60.01 54.164 59.217 54.221 58.099 L 54.221 48.638 L 63.936 48.638 L 64.22 48.638 C 70.929 48.34 74.688 49.091 76.426 50.998 C 78.315 53.064 78.885 57.269 78.885 63.486 L 78.885 82.262 L 92.169 82.262 Z"
            />
          </svg>
        ) : (
          <></>
        )}
      </svg>
    </>
  );
};

export default Bulb;
