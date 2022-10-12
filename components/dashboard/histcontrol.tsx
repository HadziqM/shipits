import { useState } from "react";
export default function HistControl(props: any) {
  const [day, setDay] = useState([
    <option>1</option>,
    <option>2</option>,
    <option>3</option>,
  ]);
  return (
    <div className="w-4/5">
      <div className="flex gap-4 items-center">
        <select
          name="oke"
          id="day"
          className="select select-bordered select-sm bg-red-600 text-xs overflow-visible text-white py-0 my-2"
        >
          <option disabled selected>
            Day to monitor
          </option>
          {day.map((e) => e)}
        </select>
        <button className="btn btn-primary btn-xs">Search</button>
        <button className="btn btn-secondary btn-xs ml-auto">Now</button>
      </div>
      <input
        type="range"
        min="0"
        max="1440"
        className="range w-full range-xs range-primary"
        step="1"
      />
      <div className="w-full flex justify-between text-xs px-2 mb-2">
        <span>00:00</span>
        <span>18:00</span>
        <span>24:00</span>
      </div>
    </div>
  );
}
