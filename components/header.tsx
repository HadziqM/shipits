import { useEffect, useState } from "react";

export default function HeaderIts() {
  const [date, setDate] = useState({ date: "some date", time: "sometime" });
  useEffect(() => {
    let hmmm = setInterval(() => {
      setDate({
        date: new Date().toDateString(),
        time: new Date().toTimeString().replace("(Indochina Time)", ""),
      });
    }, 1000);
    return () => {
      clearInterval(hmmm);
    };
  }, [date]);
  return (
    <div className="flex flex-col">
      <div className="flex justify-between  items-center p-4">
        <img src="/logo.svg" className="max-h-12"></img>
        <div>
          <p className="text-xs">
            {date.date} | {date.time}
          </p>
          <h1 className="text-2xl">SHIP MONITORING</h1>
        </div>
      </div>
      <div className="bg-blue-800 flex justify-between items-center px-4 py-2 text-white">
        <div className="flex gap-4">
          <img src="/ship.svg" className="h-8 w-8 invert"></img>
          <h2>Beranda</h2>
          <h2>Setting</h2>
        </div>
        <div className="flex gap-2">
          <h2>Hi,Brother</h2>
          <img src="/user.svg" className="h-6 w-6 invert"></img>
        </div>
      </div>
    </div>
  );
}
