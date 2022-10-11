export default function Fuel(props: any) {
  let fuel = props.fuel / 1000;
  let maxfuel = props.maxfuel / 1000;
  let fuelbar = () => {
    const percent = (fuel / maxfuel) * 100;
    return {
      height: percent + "%",
    };
  };
  return (
    <div className="bg-black text-white flex w-res h-res justify-center items-center gap-2">
      <div className="rounded-lg h-s9 w-s9 flex flex-col justify-between bg-gray-800 p-1">
        <p className="text-xs">Fuel</p>
        <h2 className="text-center text-lg font-bold">{fuel}</h2>
        <p className="text-xs">Liter</p>
      </div>
      <div className="rounded-lg h-s9 w-s9 flex flex-col justify-end bg-gray-800 item-center relative">
        <p className="text-xs text-center py-1 absolute top-0 w-full">
          Max {maxfuel} KL
        </p>
        <div className="bg-blue-400 w-full rounded-lg" style={fuelbar()}></div>
      </div>
    </div>
  );
}
