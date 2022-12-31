import Bulb from "./Bulb";

const TrafficLight = () => {
  return (
    <>
      <div className="trafficLight">
        <Bulb assignedColor="green" on={1} />
        <br/>
        <Bulb assignedColor="orange" />
        <br/>
        <Bulb assignedColor="red" />
        <br/>
      </div>
    </>
  );
};

export default TrafficLight

