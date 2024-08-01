import React from "react";
import anas from "/public/assets/imges/anas.svg";
import NormalTextBox from "./sideComponents/NormalTextBox";
import ImportantTextBox from "./sideComponents/ImportantTextBox";
import TopFinal from "../pages/FinalSlide";
import Calling from "../pages/Calling";
import { Data } from "../App";

interface SlideButton {
  text: {
    ar: string;
    en: string;
  };
  class: string;
  add : string;
}

interface Slide {
  id: number | string;
  text: {
    ar: string;
    en: string;
  };
  type?: string;
  states?: Object;
  buttons?: SlideButton[] | ((props: any) => JSX.Element);
}

interface SlideProps {
  selectedSlide: Slide;
  selectedLanguage: string;
  data: Data;
  onNextSlide: () => void;
  score: number;
  setCurrentSlide: React.Dispatch<React.SetStateAction<number>>;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  onAnswer: () => void;
}

const Slide = ({
  selectedSlide,
  selectedLanguage,
  onAnswer,
  score,
}: SlideProps) => {
  return (
    <div>
      {selectedSlide.type === "final" && (
        <TopFinal Score={score} selectedLanguage={selectedLanguage} />
      )}
      <div className="flex flex-row justify-between">
        {selectedSlide.id === 0 && (
          <Calling selectedLanguage={selectedLanguage} Answer={onAnswer} />
        )}

        {selectedSlide.type === "normal" && (
          <div className="flex flex-row-reverse w-full justify-center items-end sm:mr-20 mb-5">
            <img className="sm:w-40 w-24 scale-x-[-1]" src={anas} />
            <NormalTextBox>
              {selectedSlide.text[selectedLanguage as "ar" | "en"]}
            </NormalTextBox>
          </div>
        )}

        {selectedSlide.type === "important" && (
          <div className="flex flex-row-reverse w-full justify-center  items-end sm:mr-20 mb-5">
            <img className="sm:w-40 w-24 scale-x-[-1]" src={anas} />
            <ImportantTextBox>
              {selectedSlide.text[selectedLanguage as "ar" | "en"]}
            </ImportantTextBox>
          </div>
        )}
      </div>
    </div>
  );
};

export default Slide;
