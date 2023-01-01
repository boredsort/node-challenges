import { useEffect, useState } from "react";

const Bulb = ({assignedColor, on}) => {
  let [color, setColor] = useState("grey");
  let [onState, setOnState] = useState(false);

  useEffect( () => {

    if (on > 0) {
      setOnState(true)
    }

    if (onState == true) {
        if (assignedColor) {
          setColor(assignedColor)
        }
    }
    else {
        setColor('grey')
    }

  },[onState])

  return (
    <>
      <svg height="50" width="50">
        <circle
          cx="25"
          cy="25"
          r="20"
          stroke={assignedColor}
          strokeWidth="3"
          fill={color}
        />
        Sorry, your browser does not support inline SVG.
      </svg>
    </>
  );
};

export default Bulb;
