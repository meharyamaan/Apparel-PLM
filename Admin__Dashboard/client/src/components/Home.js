import React, { useState, useEffect } from "react";
import { IoReorderFour } from "react-icons/io5";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Chart from "./Chart";

const Home = () => {
  const data = [
    {
      Icon: IoReorderFour,
      value: "04",
      name: "Orders",
    },
    {
      Icon: IoReorderFour,
      value: "10",
      name: "Process",
    },
    {
      Icon: IoReorderFour,
      name: "Progress",
    },
  ];
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const targetPercentage = 75; // Set the target percentage here

    const interval = setInterval(() => {
      setPercentage((prevPercentage) => {
        const nextPercentage = prevPercentage + 1;
        return nextPercentage <= targetPercentage
          ? nextPercentage
          : targetPercentage;
      });
    }, 1);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex flex-col h-full">
      <h1 className="mt-6 pl-6 text-2xl font-bold text-gray-600">Home</h1>

      <div className="grid grid-cols-3 mt-5">
        {data.map((product, index) => {
          return (
            <div
              key={index}
              className="shadow-lg p-4 m-4 border border-black hover:bg-gray-100 hover:border-gray-500 rounded"
            >
              <div className="flex justify-end">
                <product.Icon className="text-3xl" />
              </div>
              <div className="flex justify-between mt-[-10px]">
                <div className="w-[90px] h-[90px]">
                  <CircularProgressbar
                    className=""
                    value={percentage}
                    text={`${percentage}%`}
                    styles={{
                      root: { width: "100%" },
                      path: { stroke: `#182237` },
                      text: { fill: "#182237" },
                      trail: { stroke: "#1E2D3B" },
                    }}
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h1 className="">{product.value}</h1>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col justify-center">
                  <h1 className="text-xl pt-2">{product.name}</h1>
                </div>
                <div className="flex flex-col justify-center">
                  <h1 className="text-sm pt-2 text-gray-400">Last 24 Hours</h1>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <h1 className="mt-6 pl-6 text-2xl font-bold">Graph Predictions</h1>
      <div className="grid grid-cols-3 mt-4">
        <div className="col-span-2 shadow-lg mb-10 mx-4">
          <Chart />
        </div>
        <div>
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default Home;
