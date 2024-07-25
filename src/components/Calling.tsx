import anas from "/public/imges/anas.svg";
import { TextGenerateEffect } from "./styles/TextGenerateEffect";
import { IoCall } from "react-icons/io5";

const Calling = ({ Answer }: { Answer: () => void }) => {
  return (
    <div className="flex flex-col gap-10 w-full items-center">
      <div className="text-2xl">
        <TextGenerateEffect words="Anas Calling...." />
      </div>
      <img className="w-60" src={anas} />
      <button className="pulse" onClick={Answer}>
        <IoCall />
      </button>
    </div>
  );
};

export default Calling;
