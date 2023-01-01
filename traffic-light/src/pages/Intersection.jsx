import TrafficLight from "../component/TrafficLight";
import {north as North} from "../component/street/north"
import {south as South} from "../component/street/south"
import {east as East} from "../component/street/east"
import {west as West} from "../component/street/west"
import Timer from "../component/Timer";
import { useState } from "react";

const Intersection = () => {
  const [complete, setComplete] = useState(false);

  const completeCallback = (value) => {
    setComplete(value);
  };

  return (
    <div className="intersection">
      <div className="upperSection flex">
        <div className="flex flex-right left">
          <Timer start={true} initialTime={30} complete={completeCallback} />
          <TrafficLight />
        </div>
        <South/>
        <North/>
        <div className="flex right">
          <TrafficLight />
        </div>
      </div>
      <East/>
      <West/>
      <div className="lowerSection flex">
        <div className="flex flex-right  left">
          <TrafficLight />
        </div>
        <South/>
        <North/>
        <div className="flex right">
          <TrafficLight />
        </div>
      </div>
    </div>
  );
};

export default Intersection;
