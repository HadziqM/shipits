export default function ShipDrop(props: any) {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex flex-col justify-center item-center my-2 w-4/5">
        <select
          className="select select-bordered select-sm bg-red-600 text-xs overflow-visible text-white py-0 my-2"
          onChange={(e) => props.select(e.target.value)}
        >
          {props.drop.map((e: any) => (
            <option id={e[0]} value={e[1]}>
              {e[0]}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
