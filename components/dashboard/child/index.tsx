import Fuel from "./fuel";
import FuelSc from "./fuelsc";
import Radial from "./radial";
import FuelGraph from "./fuelgraph";
import NormGraph from "./normgraph";
export default function ShipMount() {
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
      <Fuel />
      <FuelSc />
      <Radial id="rpm" name="Rpm" symbol="0" maxradial="100" radial="50" />
      <Radial id="temp" name="Temp" symbol="C" maxradial="100" radial="20" />
      <Radial id="oil" name="Oil" symbol="L" />
      <Radial id="vib" name="Vib" symbol="Khz" />
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
    </div>
  );
}
