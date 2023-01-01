import TrafficLight from "../component/TrafficLight";
import Timer from "../component/Timer";
import { useState } from "react";

const Intersection = () => {

  const [complete, setComplete] = useState(false)

  const completeCallback = (value) => {
    setComplete(value)
  }

  return (
    <div className="intersection">
      <div className="upperSection flex">
        <div className="flex left">
          <TrafficLight />
          <Timer start={true} initialTime={30} complete={completeCallback}/>
          {complete && complete === true? 
          (
            <div>Complete</div>
          ):
          <></>
          }
        </div>
        <div className="flex right">
          <TrafficLight />
        </div>
      </div>
      <div className="lowerSection flex">
        <div className="flex left">
          <TrafficLight />
        </div>
        <div className="flex right">
          <TrafficLight />
        </div>
      </div>

    </div>
  );
};

export default Intersection;
