import anas from "/public/assets/imges/anas.svg";
import { TextGenerateEffect } from "../components/styles/TextGenerateEffect";
import { IoCall } from "react-icons/io5";

const Calling = ({ Answer }: { Answer: () => void }) => {
  return (
    <div className="flex flex-col gap-10 w-full items-center">
      <div className="text-2xl">
        <TextGenerateEffect words="Anas Calling...." />
      </div>
      <img className="w-60 rounded-b-full" src={anas} />
      <button className="pulse" onClick={Answer}>
        <IoCall size={30} />
      </button>
    </div>
  );
};

export default Calling;
