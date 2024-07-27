import "./App.css";
import NormalTextBox from "./components/styles/NormalTextBox";
import ImportantTextBox from "./components/styles/ImportantTextBox";
import anas from "../public/imges/anas.svg";
import ProgressBar from "./components/ProgressBar";
import { useEffect, useMemo, useState } from "react";
import MyChart from "./components/Stats";
import ExamSheetDrawer from "./components/ExamSheetDrawer";
import majd from "../public/imges/majd.svg";
import Calling from "./pages/Calling";
import { Compute } from "./services/logic";
import { dialogue } from "../public/data/DialogueText";

interface Data {
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
  const [topState, setTopState] = useState("calling");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [bottomState, setBottomState] = useState("calling");
  const [progress, setProgress] = useState(0);
  const [Answer, setAnswer] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("ar");
  const [selectedTextId, setSelectedTextID] = useState(`0-${selectedLanguage}`);

  //set the states according to the progress the user is at
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
  }, [progress]);

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

  const selectedDialog = useMemo(() => {
    return dialogue.find((data) => data.id === selectedTextId);
  }, [selectedTextId]);

  useEffect(() => {
    if (selectedDialog) {
      console.log(selectedDialog.text);
    }
    console.log(selectedTextId);
  }, [selectedDialog, selectedTextId]);

  return (
    <div className="flex flex-col min-h-screen w-full content-start justify-around">
      <ProgressBar
        value={`${progress * 10}`}
        max={`50`}
        onClick={onResetClick}
      />
      <div className="flex flex-row justify-between">
        {topState === "calling" && <Calling Answer={onAnswer} />}

        {topState === "talking" && (
          <div className="flex flex-row-reverse w-full items-end sm:mr-20">
            <img className="sm:w-40 w-24" src={anas} />
            <NormalTextBox>{selectedDialog?.text}</NormalTextBox>
          </div>
        )}

        {topState === "important_talking" && (
          <div className="flex flex-row w-full items-end ">
            <img className="sm:w-40 w-24" src={majd} />
            <ImportantTextBox>{selectedDialog?.text}</ImportantTextBox>
          </div>
        )}
        {topState === "finale" && <p>Top Box: Finale</p>}
      </div>

      <div className="flex flex-row justify-center w-full">
        {bottomState === "optionsA" && (
          <div className="flex sm:flex-row flex-col justify-around items-center gap-5  h-full px-10">
            <button
              onClick={() => {
                setAnswer("1111111111");
                setProgress(1);
              }}
              className="button-19 font-swissra font-bold"
            >
              {selectedLanguage === "ar" && <p>إنتقي "صحيح" لكل الإجابات</p>}
              {selectedLanguage === "en" && <p>pick True for all questions</p>}
            </button>
            <button
              onClick={() => {
                setAnswer("0000000000");
                setProgress(1);
              }}
              className="button-19 font-swissra font-bold"
            >
              {selectedLanguage === "ar" && <>إنتقي "خاطئ" لكل الإجابات</>}
              {selectedLanguage === "en" && <>pick False for all questions</>}
            </button>
            <div>
              <ExamSheetDrawer
                selectedLanguage={selectedLanguage}
                setAnswer={setAnswer}
                onSubmit={onDrawerClose}
              />
            </div>
          </div>
        )}
        {bottomState === "optionsB" && (
          <div className="flex sm:flex-row flex-col justify-around gap-5 w-full h-full px-10">
            <button
              className="button-19 font-swissra font-bold"
              onClick={() => {
                setProgress(3.5);
              }}
            >
              {selectedLanguage === "ar" && <p>ماهي محاكاة المونتي كارلو</p>}
              {selectedLanguage === "en" && (
                <p>What is a Monte Carlo Simlulation</p>
              )}
            </button>
            <button
              className="button-19 font-swissra font-bold"
              onClick={() => {
                setProgress(4);
              }}
            >
              {selectedLanguage === "ar" && <>أرني نتائج المحاكاة</>}
              {selectedLanguage === "en" && <>show me the simulation results</>}
            </button>
          </div>
        )}
        {bottomState === "next" && (
          <button
            className="button-19 font-swissra font-bold"
            onClick={() => {
              setProgress(progress + 1);
            }}
          >
            تابع
          </button>
        )}
        {bottomState === "Stats" && (
          <div className="flex overflow-x-auto space-x-4 m-5 sm:gap-6">
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
        )}
        {bottomState === "finale" && <p>Top Box: Finale</p>}
      </div>
    </div>
  );
}

export default App;
