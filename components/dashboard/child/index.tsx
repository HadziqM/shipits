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
export default function ShipMount(props: any) {
  let hist = props.history;
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
  return (
    <div className="w-4/5 grid grid-rows-6 grid-flow-col gap-1">
      <Fuel maxfuel={props.maxvalue.maxfuel} />
      <FuelSc
        maxstg={props.maxvalue.maxstg}
        maxstt={props.maxvalue.maxstt}
        maxsrv={props.maxvalue.maxsrv}
      />
      <Radial
        id="rpm"
        name="Rpm"
        symbol="0"
        maxradial={props.maxvalue.maxrpm}
        radial="50"
      />
      <Radial
        id="temp"
        name="Temp"
        symbol="C"
        maxradial={props.maxvalue.maxtemp}
        radial="20"
      />
      <Radial
        id="oil"
        name="Oil"
        symbol="L"
        maxradial={props.maxvalue.maxoil}
      />
      <Radial
        id="vib"
        name="Vib"
        symbol="Khz"
        maxradial={props.maxvalue.maxvib}
      />
      <FuelGraph history={true} historyData={data2} />
      <NormGraph
        id="rpmg"
        name="Rpm"
        color="#fff"
        history={true}
        historyData={data}
      />
      <NormGraph
        id="tempg"
        name="Temp"
        color="#f0f"
        history={true}
        historyData={data}
      />
      <NormGraph
        id="oilg"
        name="Oil"
        color="#ff0"
        history={true}
        historyData={data}
      />
      <NormGraph
        id="vibg"
        name="Vib"
        color="#00f"
        history={true}
        historyData={data}
      />
      <Compas />
      <Gyro />
      <Gps />
      <Distance />
      <Notif />
      <Status />
    </div>
  );
}
