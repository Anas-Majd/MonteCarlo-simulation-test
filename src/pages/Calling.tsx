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
      <button
        className="button-outline bg-green-700 text-neutral-100 hover:bg-green-600 gap-5 font-cairo font-bold"
        onClick={Answer}
      >
        <IoCall size={25} />
        {selectedLanguage === "ar"
          ? "انقر للإجابة على صديقك"
          : "Click to Answer your friend"}
      </button>
    </div>
  );
};

export default Calling;
