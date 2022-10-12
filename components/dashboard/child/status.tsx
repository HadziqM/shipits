export default function Status(props: any) {
  let styles = (arg: boolean) => {
    let some = arg === true ? { background: "green" } : { background: "red" };
    return some;
  };
  return (
    <div className="flex w-res h-res2 bg-black row-span-2 flex-col text-white p-1 gap-1">
      <div className="w-full bg-gray-800 rounded-lg flex items-center text-left px-2">
        <h2>Status</h2>
      </div>
      <div className="flex-col flex bg-gray-800 rounded-lg w-full h-full status">
        <p className="w-full px-6 m-1 font-bold">Connection</p>
        <div className="flex items-center justify-between w-full pl-10 pr-16">
          <p>Signal GSM</p>
          <div
            className="border rounded-full h-2 w-2"
            style={styles(props.gsm)}
          ></div>
        </div>
        <div className="flex items-center justify-between w-full pl-10 pr-16">
          <p>Signal Satelit</p>
          <div
            className="border rounded-full h-2 w-2"
            style={styles(props.satelite)}
          ></div>
        </div>
        <div className="flex items-center justify-between w-full pl-10 pr-16">
          <p>Internet</p>
          <div
            className="border rounded-full h-2 w-2"
            style={styles(props.internet)}
          ></div>
        </div>
        <p className="w-full px-6 m-1 font-bold">Fuel</p>
        <div className="flex items-center justify-between w-full pl-10 pr-16">
          <p>Flow Rate Sensor</p>
          <div
            className="border rounded-full h-2 w-2"
            style={styles(props.flow)}
          ></div>
        </div>
        <div className="flex items-center justify-between w-full pl-10 pr-16">
          <p>Level Sensor</p>
          <div
            className="border rounded-full h-2 w-2"
            style={styles(props.level)}
          ></div>
        </div>
        <p className="w-full px-6 m-1 font-bold">Engine</p>
        <div className="flex items-center justify-between w-full pl-10 pr-16">
          <p>RPM Sensor</p>
          <div
            className="border rounded-full h-2 w-2"
            style={styles(props.rpm)}
          ></div>
        </div>
        <div className="flex items-center justify-between w-full pl-10 pr-16">
          <p>Oil Pressure Sensor</p>
          <div
            className="border rounded-full h-2 w-2"
            style={styles(props.oil)}
          ></div>
        </div>
        <div className="flex items-center justify-between w-full pl-10 pr-16">
          <p>Vibration Sensor</p>
          <div
            className="border rounded-full h-2 w-2"
            style={styles(props.vibration)}
          ></div>
        </div>
        <div className="flex items-center justify-between w-full pl-10 pr-16">
          <p>Temprature Sensor</p>
          <div
            className="border rounded-full h-2 w-2"
            style={styles(props.temp)}
          ></div>
        </div>
        <p className="w-full px-6 m-1 font-bold">Navigate</p>
        <div className="flex items-center justify-between w-full pl-10 pr-16">
          <p>GPS Sensor</p>
          <div
            className="border rounded-full h-2 w-2"
            style={styles(props.gps)}
          ></div>
        </div>
        <div className="flex items-center justify-between w-full pl-10 pr-16">
          <p>Slant Sensor</p>
          <div
            className="border rounded-full h-2 w-2"
            style={styles(props.slant)}
          ></div>
        </div>
        <div className="flex items-center justify-between w-full pl-10 pr-16">
          <p>Camera</p>
          <div
            className="border rounded-full h-2 w-2"
            style={styles(props.camera)}
          ></div>
        </div>
      </div>
    </div>
  );
}
