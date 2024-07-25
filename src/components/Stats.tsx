import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import { average, SD } from "../logic.ts";

interface MyChartProps {
  data: { name: string; value: number }[];
  width: number;
  height: number;
}

const MyChart = ({ data, width, height }: MyChartProps) => {
  return (
    <div className="flex flex-col items-center">
      <BarChart data={data} width={width} height={height}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Right Answer" />
        <YAxis dataKey="How Many times" />
        <Bar dataKey="How many times" fill="#0F0C4A" />
      </BarChart>
      <div className="mt-4">
        <div>
          <strong>Average: </strong>
          <span>{average(data)}</span>
        </div>
        <div>
          <strong>Standard Deviation: </strong>
          <span>{SD(data)}</span>
        </div>
      </div>
    </div>
  );
};

export default MyChart;
