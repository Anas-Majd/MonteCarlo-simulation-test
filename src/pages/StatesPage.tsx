import MyChart from "../components/Stats";

interface Props {
  data: { allTrue: DataPoint[]; allFalse: DataPoint[]; random: DataPoint[] };
}
const StatesPage = ({ data }: Props) => {
  return (
    <div className="flex overflow-x-auto space-x-4">
      <div className="flex-none w-80 p-4 bg-white shadow rounded-lg">
        <h2 className="text-xl font-semibold mb-2">All True</h2>
        <MyChart data={data.allTrue} width={600} height={300} />
      </div>
      <div className="flex-none w-80 p-4 bg-white shadow rounded-lg">
        <h2 className="text-xl font-semibold mb-2">All False</h2>
        <MyChart data={data.allFalse} width={600} height={300} />
      </div>
      <div className="flex-none w-80 p-4 bg-white shadow rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Random</h2>
        <MyChart data={data.random} width={600} height={300} />
      </div>
    </div>
  );
};

export default StatesPage;
