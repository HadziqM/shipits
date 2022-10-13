import { Chart } from "react-google-charts";
import { useState, useEffect } from "react";

export default function FuelGraph(props: any) {
  const dummy = [["Second", "Fuel", "STG", "STT", "SRV"]];
  const dummy2 = [
    ["0", 0, 0, 0, 0],
    ["0", 0, 0, 0, 0],
    ["0", 0, 0, 0, 0],
    ["0", 0, 0, 0, 0],
    ["0", 0, 0, 0, 0],
    ["0", 0, 0, 0, 0],
    ["0", 0, 0, 0, 0],
    ["0", 0, 0, 0, 0],
    ["0", 0, 0, 0, 0],
    ["0", 0, 0, 0, 0],
  ];
  const [data, setData] = useState(dummy2 as any);

  useEffect(() => {
    let test = [props.data1, ...data];
    test.pop();
    setData(test);
  }, [props.data1]);
  // const [truth, setTruth] = useState(props.history);
  // const [history, setHistory] = useState(props.historyData);
  // useEffect(() => {
  //   if (props.history === false) {
  //     let check = setInterval(() => {
  //       props.now == props.next ? update(props.next) : setData(data);
  //       truth === true && setTruth(false);
  //     }, 5000);
  //     return () => {
  //       clearInterval(check);
  //     };
  //   } else {
  //     truth === false && setTruth(true);
  //   }
  // }, [data]);
  // useEffect(() => {
  //   truth === true
  //     ? setHistory(props.historyData)
  //     : setData([
  //         ["Second", "Fuel", "STG", "STT", "SRV"],
  //         ["0", 0, 0, 0, 0],
  //       ]);
  // }, [truth]);

  // let output = props.history === false ? data : history;
  // let update = (some: any) => {
  //   let updated: any = data;
  //   updated.push(some);
  //   updated.length >= 10 && updated.pop();
  //   setData(updated);
  // };
  const anjir = {
    title: "Fuel",
    legend: { textStyle: { color: "#fff" } },
    titleTextStyle: { color: "#fff" },
    vAxis: { minValue: 0, textStyle: { color: "#fff" } },
    hAxis: {
      textStyle: { color: "#fff" },
    },
    chartArea: { width: "75%", height: "70%" },
    backgroundColor: "rgb(31,41,55)",
    colors: ["#aaf", "0aa", "a0a", "aa0"],
  };

  return (
    <div className="text-white flex w-res2 h-res2 justify-center items-center bg-gray-800 flex-col pt-4 row-span-2 col-span-4">
      <h2>Frame Rate</h2>
      <Chart
        chartType="AreaChart"
        width="100%"
        height="100%"
        data={[...dummy, ...data]}
        options={anjir}
      />
    </div>
  );
}
