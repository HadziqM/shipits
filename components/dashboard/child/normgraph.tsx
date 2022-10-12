import { Chart } from "react-google-charts";
import { useState, useEffect } from "react";

export default function NormGraph(props: any) {
  const [data, setData] = useState([
    ["Second", props.name],
    ["0", 0],
  ]);
  const [truth, setTruth] = useState(props.history);
  const [history, setHistory] = useState(props.historyData);
  useEffect(() => {
    if (props.history === false) {
      let check = setInterval(() => {
        props.now == props.next ? update(props.next) : setData(data);
        truth === true && setTruth(false);
      }, 5000);
      return () => {
        clearInterval(check);
      };
    } else {
      truth === false && setTruth(true);
    }
  }, [data]);
  useEffect(() => {
    truth === true
      ? setHistory(props.historyData)
      : setData([
          ["Second", props.name],
          ["0", 0],
        ]);
  }, [truth]);

  let output = props.history === false ? data : history;
  let update = (some: any) => {
    let updated: any = data;
    updated.push(some);
    updated.length >= 10 && updated.pop();
    setData(updated);
  };
  const anjir = {
    title: props.name,
    titleTextStyle: { color: "#fff" },
    vAxis: { minValue: 0, textStyle: { color: "#fff" } },
    hAxis: {
      textStyle: { color: "#fff" },
    },
    chartArea: { width: "80%", height: "70%" },
    backgroundColor: "rgb(31,41,55)",
    colors: [props.color],
  };

  return (
    <div className="text-white flex w-res h-res justify-center items-center bg-gray-800 flex-col pt-4">
      <h2>Frame Rate</h2>
      <Chart
        chartType="AreaChart"
        width="100%"
        height="100%"
        data={output}
        options={anjir}
      />
    </div>
  );
}
