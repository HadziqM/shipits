import HeaderIts from "../header";
import FooterIts from "../footer";
import ShipMount from "./child";

export default function Dash() {
  return (
    <>
      <HeaderIts></HeaderIts>
      <div className="flex flex-col items-center mt-2 mb-20">
        <ShipMount></ShipMount>
      </div>
      <FooterIts></FooterIts>
    </>
  );
}
