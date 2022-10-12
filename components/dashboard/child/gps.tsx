export default function Gps(props: any) {
  let gmaps = () => {
    return (
      "https://www.google.com/maps/@?api=1&map_action=map&center=" +
      props.gpsn +
      "%2C" +
      props.gpsw +
      "&zoom=12&basemap=terrain"
    );
  };
  return (
    <div className="bg-black text-white flex w-res h-res justify-center items-center gap-2">
      <div className="rounded-lg h-f9 w-f9 flex flex-col justify-between bg-gray-800 p-1">
        <p className="text-xs">Gps</p>
        <h2 className="text-center text-lg font-bold">{props.gpsn} N</h2>
        <h2 className="text-center text-lg font-bold">{props.gpsw} W</h2>
        <a className="text-xs cursor-pointer text-red-600" href={gmaps()}>
          Gmaps
        </a>
      </div>
    </div>
  );
}
