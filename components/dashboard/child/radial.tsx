export default function Radial(props: any) {
  let style = () => {
    const stroke = Math.round((props.radial / props.maxradial) * 100);
    const color = stroke > 30 ? "yellow" : "red";
    return {
      "--value": stroke,
      "--size": "6.5vw",
      color: color,
    };
  };
  let percent = String(Math.round((props.radial / props.maxradial) * 100));
  return (
    <div className="bg-black text-white flex w-res h-res justify-center gap-2 items-center m-0">
      <div className="rounded-lg h-s9 w-s9 flex flex-col justify-between bg-gray-800 p-1">
        <p className="text-xs">{props.name}</p>
        <h2 className="text-center text-lg font-bold">{props.radial}</h2>
        <p className="text-xs">{props.symbol}</p>
      </div>
      <div className="rounded-lg h-s9 w-s9 flex flex-col justify-between bg-gray-800 item-center">
        <p className="text-xs text-center py-1">Max {props.maxradial}</p>
        <div
          className="radial-progress center"
          style={style() as React.CSSProperties}
        >
          {percent} %
        </div>
      </div>
    </div>
  );
}
