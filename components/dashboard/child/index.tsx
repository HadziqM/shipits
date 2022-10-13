import Fuel from "./fuel";
import FuelSc from "./fuelsc";
import Radial from "./radial";
import FuelGraph from "./fuelgraph";
import NormGraph from "./normgraph";
import Compas from "./compas";
import Distance from "./distance";
import Gps from "./gps";
import Gyro from "./gyro";
import Notif from "./notif";
import Status from "./status";
import { useState } from "react";
export default function ShipMount(props: any) {
  const data = [
    ["Seconds", "RPM"],
    ["0", 50],
    ["10", 51],
    ["20", 70],
    ["30", 30],
    ["40", 90],
    ["50", 90],
    ["60", 30],
  ];
  const data2 = [
    ["Seconds", "Fuel", "STG", "STT", "SRV"],
    ["0", 50, 34, 12, 32],
    ["10", 51, 12, 34, 21],
    ["20", 70, 23, 45, 12],
    ["30", 30, 12, 3, 4],
    ["40", 90, 1, 2, 3],
    ["50", 90, 34, 21, 31],
    ["60", 30, 12, 34, 32],
  ];
  const [rpm, setRpm] = useState(["0", 0]);
  const [temp, setTemp] = useState(["0", 0]);
  const [oil, setOil] = useState(["0", 0]);
  const [vib, setVib] = useState(["0", 0]);
  const [fuel, setFuel] = useState(["0", 0, 0, 0, 0]);

  let rpmsense = () => {
    return "adios";
  };
  return (
    <div className="w-4/5 grid grid-rows-6 grid-flow-col gap-1">
      <Fuel maxfuel={props.maxvalue.maxfuel} fuel={props.value.fuel} />
      <FuelSc
        maxstg={props.maxvalue.maxstg}
        maxstt={props.maxvalue.maxstt}
        maxsrv={props.maxvalue.maxsrv}
        stg={props.value.stg}
        stt={props.value.stt}
        srv={props.value.srv}
      />
      <Radial
        id="rpm"
        name="Rpm"
        symbol="0"
        maxradial={props.maxvalue.maxrpm}
        radial={props.value.rpm}
      />
      <Radial
        id="temp"
        name="Temp"
        symbol="C"
        maxradial={props.maxvalue.maxtemp}
        radial={props.value.temp}
      />
      <Radial
        id="oil"
        name="Oil"
        symbol="L"
        maxradial={props.maxvalue.maxoil}
        radial={props.value.oil}
      />
      <Radial
        id="vib"
        name="Vib"
        symbol="Khz"
        maxradial={props.maxvalue.maxvib}
        radial={props.value.vib}
      />
      <FuelGraph history={props.history} historyData={data2} />
      <NormGraph
        id="rpmg"
        name="Rpm"
        color="#fff"
        history={props.history}
        historyData={data}
      />
      <NormGraph
        id="tempg"
        name="Temp"
        color="#f0f"
        history={props.history}
        historyData={data}
      />
      <NormGraph
        id="oilg"
        name="Oil"
        color="#ff0"
        history={props.history}
        historyData={data}
      />
      <NormGraph
        id="vibg"
        name="Vib"
        color="#00f"
        history={props.history}
        historyData={data}
      />
      <Compas degree={props.value.compas} />
      <Gyro slantX={props.value.slantx} slantY={props.value.slanty} />
      <Gps gpsn={props.value.gps_n} gpsw={props.value.gps_w} />
      <Distance distance={props.value.distance} />
      <Notif />
      <Status
        gsm={props.value.gsm}
        internet={props.value.internet}
        satelite={props.value.satelit}
        flow={props.value.flow}
        level={props.value.level}
        rpm={props.value.rpmsense}
        vib={props.value.vibsense}
        oil={props.value.oilsense}
        temp={props.value.tempsense}
        slant={props.value.slantsense}
        gps={props.value.gps}
        camera={props.value.camera}
      />
    </div>
  );
}
