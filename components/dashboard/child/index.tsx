import Fuel from "./fuel";
import FuelSc from "./fuelsc";
import Rpm from "./rpm";
export default function ShipMount() {
  return (
    <div className="w-4/5 grid grid-rows-6 grid-flow-col gap-1">
      <Fuel />
      <FuelSc />
      <Rpm />
    </div>
  );
}
