import HeaderIts from "../header";
import FooterIts from "../footer";
import ShipMount from "./child";
import ShipDrop from "./shipdrop";
import HistControl from "./histcontrol";

export default function Dash() {
  return (
    <>
      <HeaderIts></HeaderIts>
      <div className="flex flex-col items-center mt-2 mb-20">
        <ShipDrop />
        <HistControl />
        <ShipMount></ShipMount>
      </div>
      <FooterIts></FooterIts>
    </>
  );
}
