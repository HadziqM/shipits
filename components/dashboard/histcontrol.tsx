import { useState } from "react";
export default function HistControl(props: any) {
  const [range, setRange] = useState("0");
  const [day, setDay] = useState("0");
  let send = () => {
    let date = new Date();
    date.setDate(date.getDate() - Number(day));
    date.setHours(0, 0, 0, 0);
    let time = Math.floor(date.getTime() / 1000) + Number(range) * 60;
    let data = { get: time, till: time + 60 };
    props.get(data);
  };
  let val = () => {
    const num =
      Math.floor(Number(range) / 60) >= 10
        ? Math.floor(Number(range) / 60)
        : "0" + Math.floor(Number(range) / 60);
    const mm =
      Number(range) % 60 >= 10
        ? Number(range) % 60
        : "0" + (Number(range) % 60);
    return num + ":" + mm;
  };
  return (
    <div className="w-4/5">
      <div className="flex gap-4 items-center">
        <select
          name="oke"
          id="day"
          className="select select-bordered select-sm bg-red-600 text-xs overflow-visible text-white py-0 my-2"
          onChange={(e) => setDay(e.target.value)}
        >
          <option value={0}>Today</option>
          <option value={1}>yesterday</option>
          <option value={2}>2 days ago</option>
          <option value={3}>3 days ago</option>
          <option value={4}>4 days ago</option>
        </select>
        <button className="btn btn-primary btn-xs" onClick={() => send()}>
          Search
        </button>
        <p className="flex text-xs mr-4">
          Last Updated:{" "}
          {props.time === 0 ? "Never" : String(new Date(props.time * 1000))}
        </p>
        <button
          className="btn btn-secondary btn-xs ml-auto"
          onClick={() => props.now()}
        >
          Now
        </button>
      </div>
      <input
        type="range"
        min="0"
        max="1440"
        value={range}
        className="range w-full range-xs range-primary"
        step="1"
        onChange={(e) => setRange(e.target.value)}
      />
      <div className="w-full flex justify-between text-xs px-2 mb-2">
        <span>00:00</span>
        <span className="text-blue-800 font-bold">{val()}</span>
        <span>24:00</span>
      </div>
    </div>
  );
}
