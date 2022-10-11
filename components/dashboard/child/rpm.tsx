export default function Rpm(props: any) {
  let style = () => {
    const stroke = Math.round((props.rpm / props.maxrpm) * 100);
    return {
      "--value": stroke,
      "--size": "6.5vw",
    };
  };
  let percent = String(Math.round((props.rpm / props.maxrpm) * 100));
  return (
    <div className="bg-black text-white flex w-res h-res justify-center gap-2 items-center m-0">
      <div className="rounded-lg h-s9 w-s9 flex flex-col justify-between bg-gray-800 p-1">
        <p className="text-xs">Rpm</p>
        <h2 className="text-center text-lg font-bold">{props.rpm}</h2>
        <p className="text-xs">0</p>
      </div>
      <div className="rounded-lg h-s9 w-s9 flex flex-col justify-between bg-gray-800 item-center">
        <p className="text-xs text-center py-1">Max {props.maxrpm}</p>
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
