import { useState } from "react";
export default function ShipDrop(props: any) {
  const [list, setList] = useState([
    <option>KM Sumatra</option>,
    <option>KM Madura</option>,
    <option>KM Kalimantan</option>,
  ]);
  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex flex-col justify-center item-center my-2 w-4/5">
        <select className="select select-bordered select-sm bg-red-600 text-xs overflow-visible text-white py-0 my-2">
          <option disabled selected>
            Select Your Ship to Monitor
          </option>
          {list.map((e) => e)}
        </select>
      </div>
    </div>
  );
}
