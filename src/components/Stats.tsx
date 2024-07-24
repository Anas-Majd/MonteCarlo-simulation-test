import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
interface DataPoint {
  name: number | string;
  value: number;
}

interface MyChartProps {
  data: DataPoint[];
  width: number;
  height: number;
}

const MyChart: React.FC<MyChartProps> = ({ data, width, height }) => {
  return (
    <BarChart data={data} width={width} height={height}>
      <CartesianGrid strokeDasharray="3 3"/>
      <XAxis dataKey="Right Answer" />
      <YAxis dataKey="How Many times" />
      <Bar dataKey="How many times" fill="#0F0C4A"/>
    </BarChart>
  );
};

export default MyChart;
