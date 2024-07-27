import "./App.css";
import NormalTextBox from "./components/styles/NormalTextBox";
import ImportantTextBox from "./components/styles/ImportantTextBox";
import talker from "../public/assets/imges/talker.svg";
import ProgressBar from "./components/ProgressBar";
import { useEffect, useMemo, useState } from "react";
import Calling from "./pages/Calling";
import { Compute, CalculateScore } from "./services/logic";
import { dialogue } from "../public/data/DialogueText";
import States from "./components/States";
import OptionsA from "./pages/OptionsA";
import OptionsB from "./pages/OptionsB";
import TopFinal from "./pages/TopFinal";
import BottomFinal from "./pages/BottomFinal";

export interface Data {
  allTrue: { name: string; value: number }[];
  allFalse: { name: string; value: number }[];
  random: { name: string; value: number }[];
}

function App() {
  const [data, setData] = useState<Data>({
    allTrue: [],
    allFalse: [],
    random: [],
  });
  const [score, setScore] = useState(0);
  const [topState, setTopState] = useState("calling");
  const [bottomState, setBottomState] = useState("calling");
  const [progress, setProgress] = useState(0);
  const [Answer, setAnswer] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("ar");
  const [selectedTextId, setSelectedTextID] = useState(`0-${selectedLanguage}`);

  useEffect(() => {
    setSelectedTextID(`${progress}-${selectedLanguage}`);
    if (progress === 0) {
      //calling
      setBottomState("calling");
      setTopState("calling");
    }
    if (progress === 1) {
      //first repsonse
      setTopState("talking");
      setBottomState("next");
    }
    if (progress === 2) {
      //continuation
      setTopState("talking");
      setBottomState("next");
    }
    if (progress === 3) {
      setTopState("talking");
      setBottomState("optionsB");
    }
    if (progress === 3.5) {
      setTopState("talking"); //set the top statae to talking
      setBottomState("next"); //set the bottom state to next
    }
    if (progress === 4) {
      setTopState("talking"); //set the top state to talking
      setBottomState("Stats"); //set the bottom state to Stats
    }
    if (progress === 5) {
      //important
      setTopState("important_talking");
      setBottomState("next");
    }
    if (progress === 6) {
      setTopState("important_talking");
      setBottomState("next");
    }
    if (progress === 7) {
      setTopState("final");
      setBottomState("final");
    }
  }, [progress, selectedLanguage]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await Compute();
      setData(result);
    };
    fetchData();
  }, []);

  const onAnswer = () => {
    setBottomState("optionsA");
    setTopState("talking");
  };
  const onDrawerClose = () => {
    setProgress(1);
  };
  const onResetClick = () => {
    setProgress(0);
    setTopState("calling");
    setBottomState("calling");
  };

  useEffect(() => {
    setScore(CalculateScore(Answer));
  }, [Answer]);
  const selectedDialog = useMemo(() => {
    return dialogue.find((data) => data.id === selectedTextId);
  }, [selectedTextId]);

  return (
    <div className="flex flex-col min-h-screen w-full content-start justify-between">
      <ProgressBar
        value={`${progress * 10}`}
        max={`70`}
        onClick={onResetClick}
        setLanguage={setSelectedLanguage}
      />
      <div className="flex flex-row justify-between">
        {topState === "calling" && <Calling Answer={onAnswer} />}

        {topState === "talking" && (
          <div className="flex flex-row-reverse w-full justify-center items-end sm:mr-20 mb-5">
            <img className="sm:w-40 w-24 scale-x-[-1]" src={talker} />
            <NormalTextBox>{selectedDialog?.text}</NormalTextBox>
          </div>
        )}

        {topState === "important_talking" && (
          <div className="flex flex-row-reverse w-full justify-center items-end sm:mr-20">
            <ImportantTextBox>{selectedDialog?.text}</ImportantTextBox>
          </div>
        )}
        {topState === "final" && <TopFinal Score={score} selectedLanguage={selectedLanguage} />}
      </div>

      <div className="flex flex-row justify-center w-full">
        {bottomState === "optionsA" && (
          <OptionsA
            setProgress={setProgress}
            selectedLanguage={selectedLanguage}
            setAnswer={setAnswer}
            onDrawerClose={onDrawerClose}
          />
        )}

        {bottomState === "optionsB" && (
          <OptionsB
            setProgress={setProgress}
            selectedLanguage={selectedLanguage}
          />
        )}

        {bottomState === "Stats" && (
          <States
            setProgress={setProgress}
            data={data}
            selectedLanguage={selectedLanguage}
          />
        )}

        {bottomState === "next" && (
          <button
            className="button-19 font-swissra font-bold mb-10"
            onClick={() => {
              setProgress(Math.floor(progress) + 1);
            }}
          >
            {selectedLanguage === "ar" && <p>تابع</p>}
            {selectedLanguage === "en" && <p>continue</p>}
          </button>
        )}

        {bottomState === "final" && (
          <BottomFinal selectedLanguage={selectedLanguage} />
        )}
      </div>
    </div>
  );
}

export default App;
