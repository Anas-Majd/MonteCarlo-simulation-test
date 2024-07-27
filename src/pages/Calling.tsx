import talker from "/public/assets/imges/talker.svg";
import { TextGenerateEffect } from "../components/styles/TextGenerateEffect";
import { IoCall } from "react-icons/io5";

const Calling = ({ Answer }: { Answer: () => void }) => {
  return (
    <div className="flex flex-col gap-10 w-full items-center">
      <div className="text-2xl">
        <TextGenerateEffect words="Dialing...." />
      </div>
      <img className="w-48 rounded-b-full" src={talker} />
      <button className="pulse" onClick={Answer}>
        <IoCall size={30} />
      </button>
    </div>
  );
};

export default Calling;
