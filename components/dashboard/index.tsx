import HeaderIts from "../header";
import FooterIts from "../footer";
import ShipMount from "./child";
import ShipDrop from "./shipdrop";
import HistControl from "./histcontrol";
import { useState, useEffect } from "react";

export default function Dash() {
  const [history, setHistory] = useState(false);
  const [shipdown, setShipdown] = useState([]);
  const user = "hertz";
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
  useEffect(() => {
    let shit = async () => {
      const data = await (await fetch(`/api/${user}`)).json();
      setShipdown(data.name.map((e: any) => e.brand));
    };
    shit();
  }, []);
  return (
    <>
      <HeaderIts></HeaderIts>
      <div className="flex flex-col items-center mt-2 mb-20">
        <ShipDrop drop={shipdown} select={select} />
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
