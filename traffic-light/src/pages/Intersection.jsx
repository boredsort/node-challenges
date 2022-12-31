import TrafficLight from "../component/TrafficLight";
import Timer from "../component/Timer";

const Intersection = () => {
  return (
    <div className="intersection">
      <div className="upperSection flex">
        <div className="flex left">
          <TrafficLight />
          <Timer/>
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
