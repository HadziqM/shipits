export default function Distance(props: any) {
  return (
    <div className="bg-black text-white flex w-res h-res justify-center items-center gap-2">
      <div className="rounded-lg h-f9 w-f9 flex flex-col justify-between bg-gray-800 p-1">
        <p className="text-xs">Distance</p>
        <h2 className="text-center text-lg font-bold">{props.distance}</h2>
        <p className="text-xs">Mil</p>
      </div>
    </div>
  );
}
