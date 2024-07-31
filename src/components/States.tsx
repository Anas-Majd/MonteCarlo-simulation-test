import { FaAngleRight } from "react-icons/fa6";
import { Data } from "../App";
import MyChart from "./sideComponents/Chart";
import { useRef } from "react";

interface Props {
  data: Data;
}

const States = ({ data }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: containerRef.current.scrollWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className="flex overflow-x-auto space-x-4 m-5 sm:gap-6"
      ref={containerRef}
    >
      <button
        className="right-6 opacity-80 z-10 bottom-40 border-slate-400 border-2 sm:hidden absolute btn btn-circle font-swissra font-bold ml-4"
        onClick={scrollToRight}
      >
        <FaAngleRight size={23} />
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
