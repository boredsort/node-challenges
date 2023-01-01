import Bulb from "./Bulb";

const TrafficLight = () => {
  return (
    <>
      <div className="trafficLight">
        <Bulb assignedColor="red" on={1} />
        <br/>
        <Bulb assignedColor="orange" />
        <br/>
        <Bulb assignedColor="green" />
        <br/>
        <Bulb assignedColor="green" turn="left" />
        <br/>
      </div>
    </>
  );
};

export default TrafficLight

