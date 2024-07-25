import "./App.css";
import NormalTextBox from "./components/styles/NormalTextBox";
import anas from "../public/imges/anas.svg";
import ProgressBar from "./components/ProgressBar";
import { useEffect, useState } from "react";
import ExamSheetDrawer from "./components/ExamSheetDrawer";
import Calling from "./components/Calling";

interface Dialog {
  id: string;
  text: string;
}

function App() {
  useEffect(() => {
    const fetchDialogs = async () => {
      try {
        const response = await fetch("../public/data/DialogText.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: Dialog[] = await response.json();
        setDialogs(data);
      } catch (error) {
        console.error("Error fetching dialog data:", error);
      }
    };

    fetchDialogs();
  }, []);
  const [dialogs, setDialogs] = useState<Dialog[]>([]);
  const [topState, setTopState] = useState("calling");
  const [bottomState, setBottomState] = useState("calling");
  const [progress, SetProgress] = useState(0);
  const [Answer, setAnswer] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("ar");
  const [selectedTextId, setSelectedTextID] = useState(
    `intro-${selectedLanguage}`
  );
  const onAnswer = () => {
    setBottomState("optionsA");
    setTopState("talking");
    setSelectedTextID(`intro-${selectedLanguage}`);
    SetProgress(1);
  };

  return (
    <div className="flex flex-col min-h-screen w-full content-start justify-around">
      <ProgressBar value={`${progress}`} max={`5`} />

      <div className="flex flex-row justify-between">
        {topState === "calling" && <Calling Answer={onAnswer} />}

        {topState === "talking" && (
          <div className="flex flex-row w-full ">
            <NormalTextBox>
              {dialogs.find((data) => data.id === selectedTextId).text}
            </NormalTextBox>
            <img className="w-40" src={anas} />
          </div>
        )}
        {topState === "important_talking" && <p>Top Box: Important Talking</p>}
        {topState === "finale" && <p>Top Box: Finale</p>}
      </div>

      <div className="flex flex-row justify-between w-full">
        {bottomState === "optionsA" && (
          <div className="flex sm:flex-row flex-col justify-around gap-5 w-full h-full px-10">
            <button
              onClick={() => {
                setAnswer("1111111111");
              }}
              className="button-19 font-swissra font-bold"
            >
              {selectedLanguage === "ar" && <p>إنتقي "صحيح" لكل الإجابات</p>}
              {selectedLanguage === "en" && <p>pick True for all questions</p>}
            </button>
            <button
              onClick={() => {
                setAnswer("0000000000");
              }}
              className="button-19 font-swissra font-bold"
            >
              {selectedLanguage === "ar" && <>إنتقي "خاطئ" لكل الإجابات</>}
              {selectedLanguage === "en" && <>pick False for all questions</>}
            </button>
            <button
              onClick={() => {
                setAnswer("1111111111");
              }}
            >
              <ExamSheetDrawer selectedLanguage={selectedLanguage} />
            </button>
          </div>
        )}

        {/* {bottomState === "optionsB" && <p>Top Box: Important Talking</p>}
        {bottomState === "next" && <p>Top Box: Finale</p>}
        {bottomState === "Stats" && <p>Top Box: Finale</p>}
        {bottomState === "finale" && <p>Top Box: Finale</p>} */}
      </div>
    </div>
  );
}

export default App;
