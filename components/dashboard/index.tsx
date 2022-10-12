import HeaderIts from "../header";
import FooterIts from "../footer";
import ShipMount from "./child";
import ShipDrop from "./shipdrop";
import HistControl from "./histcontrol";
import { useState, useEffect } from "react";

export default function Dash() {
  const [history, setHistory] = useState(false);
  const [shipdown, setShipdown] = useState([]);
  const [somedata, setSomedata] = useState({} as any);
  const [maxvalue, setMaxvalue] = useState({} as any);
  const user = "hertz";
  let select = (e: string) => {
    setMaxvalue(somedata[e]);
  };
  let hist = (data: object) => {
    setHistory(true);
    console.log(data);
  };
  useEffect(() => {
    console.log(history);
  }, [history]);
  useEffect(() => {
    let shit = async () => {
      const data = await (await fetch(`/api/${user}`)).json();
      setShipdown(data.name.map((e: any) => [e.brand, e.id]));
      let rv: any = {};
      for (let i = 0; i < data.name.length; ++i)
        rv[data.name[i].id] = data.name[i];
      setSomedata(rv);
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
        <ShipMount history={history} maxvalue={maxvalue} />
      </div>
      <FooterIts></FooterIts>
    </>
  );
}
