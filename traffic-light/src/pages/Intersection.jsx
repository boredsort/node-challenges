import TrafficLight from "../component/TrafficLight";
import { north as North } from "../component/street/north";
import { south as South } from "../component/street/south";
import { east as East } from "../component/street/east";
import { west as West } from "../component/street/west";
import Timer from "../component/Timer";
import { useState } from "react";
import { status } from "../constants/status";
import { direction } from "../constants/direction";

const Intersection = () => {
  const [complete, setComplete] = useState(false);
  const [colorCounter, setColorCounter] = useState(30);

  const completeCallback = (value) => {
    if (value === true) {
    }
    setComplete(value);
  };

  return (
    <div className="intersection">
      <div className="upperSection flex">
        <div className="flex flex-right left">
          <Timer start={true} initialTime={30} complete={completeCallback} />
          <TrafficLight status={status.READY} turnDirection={direction.NORTH} />
        </div>
        <South />
        <North />
        <div className="flex right">
          <TrafficLight status={status.STOP} turnDirection={direction.EAST} />
          <Timer start={true} initialTime={30} complete={completeCallback} />
        </div>
      </div>
      <East />
      <West />
      <div className="lowerSection flex">
        <div className="flex flex-right  left">
          <Timer start={true} initialTime={30} complete={completeCallback} />
          <TrafficLight status={status.GO} turnDirection={direction.SOUTH} />
        </div>
        <South />
        <North />
        <div className="flex right">
          <TrafficLight status={status.GOTURN} turnDirection={direction.NORTH} />
          <Timer start={true} initialTime={30} complete={completeCallback} />
        </div>
      </div>
    </div>
  );
};

export default Intersection;
