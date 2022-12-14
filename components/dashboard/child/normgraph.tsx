import { Chart } from "react-google-charts";
import { useState, useEffect } from "react";

export default function NormGraph(props: any) {
  const dummy = [["Second", props.name]];
  const dummy2 = [
    ["0", 0],
    ["0", 0],
    ["0", 0],
    ["0", 0],
    ["0", 0],
    ["0", 0],
    ["0", 0],
    ["0", 0],
    ["0", 0],
    ["0", 0],
  ];
  const [data, setData] = useState(dummy2 as any);
  // const [truth, setTruth] = useState(props.history);
  // const [history, setHistory] = useState(props.historyData);
  useEffect(() => {
    let test = [props.data, ...data];
    test.pop();
    setData(test);
  }, [props.data]);

  const [histdata, setHistdata] = useState(dummy2 as any);
  useEffect(() => {
    setHistdata([...props.histdata]);
  }, [props.history]);

  // let idkits = () => {
  //   let test = [props.data, ...data];
  //   test.pop();
  //   setData(test);
  //   console.log([...dummy, ...test]);
  //   return [...dummy, ...test];
  // };
  // useEffect(() => {
  //   setInterval(() => {
  //     let test = [...dummy, props.data, ...data];
  //     test.pop();
  //     setData(test);
  //   }, 1500);
  // }, [data]);
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
  //         ["Second", props.name],
  //         ["0", 0],
  //       ]);
  // }, [truth]);

  // let output = props.history === false ? data : history;
  // let update = (some: any) => {
  //   let updated: any = data;
  //   updated.push(some);
  //   updated.length >= 10 && updated.pop();
  //   setData(updated);
  // };
  let anjir = () => {
    return {
      title: props.name,
      titleTextStyle: { color: "#fff" },
      vAxis: { minValue: 0, textStyle: { color: "#fff" } },
      hAxis: {
        textStyle: { color: "#fff" },
      },
      chartArea: { width: "80%", height: "70%" },
      backgroundColor:
        props.history === false ? "rgb(31,41,55)" : "rgb(55,55,55)",
      colors: [props.color],
    };
  };

  return (
    <div className="text-white flex w-res h-res justify-center items-center bg-gray-800 flex-col pt-4">
      <h2>Frame Rate</h2>
      <Chart
        chartType="AreaChart"
        width="100%"
        height="100%"
        data={
          props.history === false
            ? [...dummy, ...data]
            : [...dummy, ...histdata]
        }
        options={anjir()}
      />
    </div>
  );
}
