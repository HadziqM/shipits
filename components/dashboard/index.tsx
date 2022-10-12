import HeaderIts from "../header";
import FooterIts from "../footer";
import ShipMount from "./child";
import ShipDrop from "./shipdrop";
import HistControl from "./histcontrol";
import { useState, useEffect } from "react";

export default function Dash() {
  const [history, setHistory] = useState(false);
  let select = (e: any) => {
    console.log(e);
  };
  let hist = (data: any) => {
    setHistory(true);
    console.log(data);
  };
  useEffect(() => {
    console.log(history);
  }, [history]);
  return (
    <>
      <HeaderIts></HeaderIts>
      <div className="flex flex-col items-center mt-2 mb-20">
        <ShipDrop drop={["KM Jawa", "KM Madura"]} select={select} />
        <HistControl
          drop={[1, 2, 3]}
          get={hist}
          now={() => setHistory(false)}
        />
        <ShipMount history={history} />
      </div>
      <FooterIts></FooterIts>
    </>
  );
}
