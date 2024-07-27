import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import { average, SD } from "../services/logic.ts";

interface MyChartProps {
  data: { name: string; value: number }[];
  width: number;
  height: number;
}

const MyChart = ({ data, width, height }: MyChartProps) => {
  return (
    <div className="flex flex-col items-center">
      <BarChart data={data} width={width} height={height}>
        <CartesianGrid strokeDasharray="6 6" opacity={"10%"} />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar
          dataKey="value"
          fill="#1d232a"
          stroke="#00b5ff"
          opacity={"40%"}
          strokeWidth={2}
        />
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
