import anas from "/public/assets/imges/anas.svg";
import { TextGenerateEffect } from "../components/sideComponents/TextGenerateEffect";
import { IoCall } from "react-icons/io5";

const Calling = ({
  Answer,
  selectedLanguage,
}: {
  Answer: () => void;
  selectedLanguage: string;
}) => {
  return (
    <div className="flex flex-col gap-10 w-full items-center">
      <div className="text-2xl font-cairo">
        <TextGenerateEffect
          words={selectedLanguage === "ar" ? "...جار الاتصال" : "Dialing...."}
        />
      </div>
      <img className="w-48 rounded-b-full" src={anas} />
      <button className="pulse" onClick={Answer}>
        <IoCall size={30} />
      </button>
    </div>
  );
};

export default Calling;
