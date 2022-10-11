export default function FuelSc(props: any) {
  let someBar = (fuel: number, maxfuel: number) => {
    const percent = (fuel / maxfuel) * 100;
    return {
      height: percent + "%",
    };
  };
  return (
    <div className="bg-black text-white flex w-res h-res justify-center items-center gap-2">
      <div className="rounded-lg h-s9 w-s8 flex flex-col justify-end bg-gray-800 item-center relative">
        <p className="text-xs text-center py-1 absolute w-full top-0">STG</p>
        <p className="text-xs text-center py-1 absolute top-4 w-full">
          {props.maxstg} L
        </p>
        <div
          className="bg-blue-400 w-full rounded-lg"
          style={someBar(props.stg, props.maxstg)}
        ></div>
      </div>
      <div className="rounded-lg h-s9 w-s8 flex flex-col justify-end relative bg-gray-800 item-center">
        <p className="text-xs text-center py-1 absolute top-0 w-full">STT</p>
        <p className="text-xs text-center py-1 absolute top-4 w-full">
          {props.maxstt} L
        </p>
        <div
          className="bg-blue-400 w-full rounded-lg"
          style={someBar(props.stt, props.maxstt)}
        ></div>
      </div>
      <div className="rounded-lg h-s9 w-s8 flex flex-col justify-end relative bg-gray-800 item-center">
        <p className="text-xs text-center py-1 absolute top-0 w-full">SRV</p>
        <p className="text-xs text-center py-1 absolute top-4 w-full">
          {props.maxsrv} L
        </p>
        <div
          className="bg-blue-400 w-full rounded-lg"
          style={someBar(props.srv, props.maxsrv)}
        ></div>
      </div>
    </div>
  );
}
