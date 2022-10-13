import HeaderIts from "../header";
import FooterIts from "../footer";
import ShipMount from "./child";
import ShipDrop from "./shipdrop";
import HistControl from "./histcontrol";
import { useState, useEffect } from "react";

export default function Dash() {
  const dummy = {
    id: 1,
    shipid: 1,
    gps_n: 0,
    gps_w: 0,
    distance: 0,
    fuel: 0,
    stg: 0,
    stt: 0,
    srv: 0,
    oil: 0,
    temp: 0,
    rpm: 0,
    vib: 0,
    slantx: 0,
    slanty: 0,
    speed: 0,
    gsm: false,
    internet: false,
    satelit: false,
    flow: false,
    level: false,
    rpmsense: false,
    vibsense: false,
    oilsense: false,
    tempsense: false,
    slantsense: false,
    gps: false,
    camera: false,
    updated: 1665645840,
  };
  const [history, setHistory] = useState(true);
  const [shipdown, setShipdown] = useState([]);
  const [somedata, setSomedata] = useState({} as any);
  const [maxvalue, setMaxvalue] = useState({} as any);
  const [value, setValue] = useState(dummy as any);
  const [selected, setSelected] = useState(1);
  const user = "hertz";
  let select = (e: string) => {
    setMaxvalue(somedata[e]);
    setSelected(Number(e));
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
  useEffect(() => {
    let hmmm = setInterval(async () => {
      console.log(selected);
      const data = await (await fetch(`/api/ship/${selected}`)).json();
      data.ship == null ? setValue(dummy) : setValue(data.ship);
    }, 1500);
    return () => {
      clearInterval(hmmm);
    };
  }, [value]);
  return (
    <>
      <HeaderIts></HeaderIts>
      <div className="flex flex-col items-center mt-2 mb-20">
        <ShipDrop drop={shipdown} select={select} />
        <HistControl
          drop={[1, 2, 3]}
          get={hist}
          now={() => setHistory(false)}
          time={value.updated}
        />
        <ShipMount history={history} maxvalue={maxvalue} value={value} />
      </div>
      <FooterIts></FooterIts>
    </>
  );
}
