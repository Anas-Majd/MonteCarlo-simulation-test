import { Data } from "../App";
import MyChart from "./styles/Chart";

interface Props {
  setProgress: (n: number) => void;
  data: Data;
  selectedLanguage: string;
}
const States = ({ setProgress, data, selectedLanguage }: Props) => {
  return (
    <div className="flex overflow-x-auto space-x-4 m-5 sm:gap-6">
      <button
        className="button-19 font-swissra font-bold"
        onClick={() => {
          setProgress(5);
        }}
      >
        {selectedLanguage === "ar" && <>تابع</>}
        {selectedLanguage === "en" && <>continue</>}
      </button>
      <div className="flex-none w-72 p-4 border-2 border-slate-500 border-dashed shadow rounded-lg">
        <h2 className="text-xl font-semibold mb-2">All True</h2>
        <MyChart data={data.allTrue} width={250} height={150} />
      </div>
      <div className="flex-none w-72 p-4 border-2 border-slate-500 border-dashed shadow rounded-lg">
        <h2 className="text-xl font-semibold mb-2">All False</h2>
        <MyChart data={data.allFalse} width={250} height={150} />
      </div>
      <div className="flex-none w-72 p-4 border-2 border-slate-500 border-dashed shadow rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Random</h2>
        <MyChart data={data.random} width={250} height={150} />
      </div>
    </div>
  );
};

export default States;
