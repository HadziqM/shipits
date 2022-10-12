export default function Gyro(props: any) {
  let getSlantX = () => {
    return {
      transform: "rotate(" + props.slantX + "deg)",
    };
  };
  let getSlantY = () => {
    return {
      transform: "rotate(" + props.slantY + "deg)",
    };
  };
  return (
    <div className="bg-black text-white flex w-res h-res justify-center items-center gap-2">
      <div className="rounded-lg h-s9 w-s9 flex flex-col justify-between bg-gray-800 item-center">
        <p className="text-xs text-center py-1">Slant Y</p>
        <div className="flex border-white border mx-2 mb-2 h-32 justify-center items-center test">
          <img
            src="/sideship.svg"
            className="w-16 h-8 translate-y-1"
            style={getSlantY()}
          ></img>
        </div>
      </div>
      <div className="rounded-lg h-s9 w-s9 flex flex-col justify-between bg-gray-800 item-center">
        <p className="text-xs text-center py-1">Slant X</p>
        <div className="flex border-white border mx-2 mb-2 h-32 justify-center items-center test">
          <img
            src="/frontship.svg"
            className="w-10 h-10 translate-y-1"
            style={getSlantX()}
          ></img>
        </div>
      </div>
    </div>
  );
}
