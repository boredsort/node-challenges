import { useEffect, useState } from "react";
import { direction, pathDirection } from "../constants/direction";

const Bulb = ({ assignedColor, on, turn }) => {
  let [color, setColor] = useState("grey");
  let [onState, setOnState] = useState(false);

  const turnOn = (state) => {
    setOnState(state);
  };

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
    console.log("on state", onState);
  }, [onState]);

  const getTurnArrow = (turn) => {
    let d;
    let transform;
    console.log('direction', direction)
    console.log('turn', turn)
    switch (turn) {
      case direction.NORTH:
        d = pathDirection.NORTH.d;
        transform = pathDirection.NORTH.transform;
        break;
      case direction.EAST:
        d = pathDirection.EAST.d;
        break;
      case direction.WEST:
        d = pathDirection.WEST.d;
        transform = pathDirection.WEST.transform;
        break;
      case direction.SOUTH:
        d = pathDirection.SOUTH.d;
        transform = pathDirection.SOUTH.transform;
        break;
      default:
        break;
    }

    let path = <path stroke={assignedColor} fill={assignedColor} d={d}/>;
    if (transform) {
      path = <path stroke={assignedColor} fill={assignedColor} d={d} transform={transform}/>;
    }
    console.log('pathDirection', pathDirection.EAST.d)
    console.log('path', path)
    console.log('d', d)
    return path;
  };

  return (
    <>
      <svg height="50" width="50">
        <circle
          cx="25"
          cy="25"
          r="20"
          stroke={assignedColor}
          strokeWidth="3"
          fill={turn ? "#348c60" : color}
        />
        {onState ? (
          <svg
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 122.88 115.96"
            xmlns="http://www.w3.org/2000/svg"
          >
            {getTurnArrow(turn)}
          </svg>
        ) : (
          <></>
        )}
      </svg>
    </>
  );
};

export default Bulb;
