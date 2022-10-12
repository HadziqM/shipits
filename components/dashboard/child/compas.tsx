export default function Compas(props: any) {
  let getDegree = () => {
    const degree = props.degree - 45;
    return {
      transform: "rotate(" + degree + "deg)",
    };
  };
  return (
    <div className="bg-black text-white flex w-res h-res justify-center items-center gap-2">
      <div className="rounded-lg h-s9 w-s9 flex flex-col justify-between bg-gray-800 p-1">
        <p className="text-xs">Speed</p>
        <h2 className="text-center text-lg font-bold">{props.speed}</h2>
        <p className="text-xs">Knot</p>
      </div>
      <div className="rounded-lg h-s9 w-s9 flex flex-col justify-between bg-gray-800 item-center">
        <p className="text-lg text-center py-1 translate-y-1">U</p>
        <div className="flex border-white border mx-2 mb-2 h-32 justify-center items-center test">
          <img
            src="/arrow.svg"
            className="w-8 h-8 translate-y-1"
            style={getDegree()}
          ></img>
        </div>
      </div>
    </div>
  );
}
