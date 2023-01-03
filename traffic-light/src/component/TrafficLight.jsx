import { useState, useEffect } from "react";
import Bulb from "./Bulb";

const TrafficLight = ({ status, turnDirection }) => {
  let [stop, setStop] = useState(1);
  let [ready, setReady] = useState(0);
  let [go, setGo] = useState(0);
  let [goturn, setGoTurn] = useState(0);

  useEffect(() => {
    if (status){
      cycleStatus(status);
    }
   

  },[]);

  const cycleStatus = (status) => {
    console.log(status)
    console.log('stop', stop)
    console.log('ready', ready)
    switch (status) {
      case status.STOP:
        setStop(1);
        setReady(0);
        setGo(0);
        setGoTurn(0);
        break;
      case status.READY:
        setStop(0);
        setReady(1);
        setGo(0);
        setGoTurn(0);
        break;
      case status.GO:
        setStop(0);
        setReady(0);
        setGo(1);
        setGoTurn(0);
        break;
      default:
        setStop(0);
        setReady(0);
        setGo(0);
        setGoTurn(0);

    }
  }

  return (
    <>
      <div className="trafficLight">
        <Bulb assignedColor="red" on={0} />
        <br />
        <Bulb assignedColor="orange" on={0} />
        <br />
        <Bulb assignedColor="green"  on={0}/>
        <br />
        <Bulb assignedColor="green" turn={turnDirection} on={1}/>
        <br />
      </div>
    </>
  );
};

export default TrafficLight;
