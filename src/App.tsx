import "./App.css";
import NormalTextBox from "./components/styles/NormalTextBox";
import ImportantTextBox from "./components/styles/ImportantTextBox";
import anas from "../public/imges/anas.svg";
import ProgressBar from "./components/ProgressBar";
import { useEffect, useState } from "react";
import MyChart from "./components/Stats";
import ExamSheetDrawer from "./components/ExamSheetDrawer";
import Calling from "./components/Calling";
import Dialog from "@headlessui/react";
import { Compute } from "./logic";
interface DialogOption {
  id: string;
  text: string;
}
interface DataPoint{
  name: string;
  value: number;
}
function App() {
  //fetch dialogs
  useEffect(() => {
    const fetchDialogs = async () => {
      try {
        const response = await fetch("../public/data/DialogText.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: DialogOption[] = await response.json();
        setDialogs(data);
      } catch (error) {
        console.error("Error fetching dialog data:", error);
      }
    };
    fetchDialogs();
  }, []);


//define hooks for state managements
  const [data, setData] = useState<{ allTrue: DataPoint[], allFalse: DataPoint[], random: DataPoint[] } >({allTrue:,allFalse:,random:});
  const [dialogs, setDialogs] = useState<DialogOption[]>([]);
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
    if (progress===0){
      //calling
      setBottomState('calling')
      setTopState('calling')
    }   
    if (progress===1){
      //first repsonse
      setTopState('talking')
      setBottomState('next')
    }
    if (progress===2){
     //continuation 
     setTopState('talking')
     setBottomState('next')
    }
    if (progress===3){
    setTopState('talking')
    setBottomState('optionsB')
    }
    if (progress===3.5){
      setTopState('talking') //set the top statae to talking
      setBottomState('next') //set the bottom state to next
    }
    if (progress===4){
      setTopState('talking') //set the top state to talking
      setBottomState('Stats') //set the bottom state to Stats        
    }
    if (progress===5){
      //important
     setTopState('important_talking')
     setBottomState('next')   
    }
    if (progress===6){
     setTopState('important_talking')
     setBottomState('next') 
    }
    if(progress===7){
      setTopState('final')
      setBottomState('final')
    }
    }, [progress]);

//run the monteCarlo sim in the background at mount
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
  const onResetClick = () =>{
    setProgress(0)
    setTopState('calling')
    setBottomState('calling')
  }
  return (
    <div className="flex flex-col min-h-screen w-full content-start justify-around">
      <ProgressBar value={`${progress * 10}`} max={`50`} onClick={onResetClick}/>
      <ExamSheetDrawer
        selectedLanguage={selectedLanguage}
        isOpen={isDrawerOpen}
        setAnswer={setAnswer}
        setIsOpen={setIsDrawerOpen}
        onClose={onDrawerClose}
      />
      <div className="flex flex-row justify-between">
        {topState === "calling" && <Calling Answer={onAnswer} />}
        {topState === "talking" && (
          <div className="flex flex-row w-full items-center ">
            <img className="w-40" src={anas} />
            <NormalTextBox>
              {dialogs.find((data) => data.id === selectedTextId).text}
            </NormalTextBox>
          </div>
        )}
        {topState === "important_talking" &&(
          <div className="flex flex-row w-full items-center ">
            <img className="w-40" src={anas} />
            <ImportantTextBox>
              {dialogs.find((data) => data.id === selectedTextId).text}
            </ImportantTextBox>
          </div>) }
        {topState === "finale" && <p>Top Box: Finale</p>}
      </div>

      <div className="flex flex-row justify-between w-full">
        {bottomState === "optionsA" && (
          <div className="flex sm:flex-row flex-col justify-around gap-5 w-full h-full px-10">
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
            <button
              className="button-19 font-swissra font-bold"
              onClick={() => {
                setIsDrawerOpen(true);
              }}
            >
              {selectedLanguage === "ar" && <>دعني أنتقي الإجابات</>}
              {selectedLanguage === "en" && <>I will pick the answers</>}
            </button>
          </div>
        )}
        {bottomState === "optionsB" && (
          <div className="flex sm:flex-row flex-col justify-around gap-5 w-full h-full px-10">
            <button className="button-19 font-swissra font-bold" onClick={()=>{
              setProgress(3.5)
            }}>
              {selectedLanguage === "ar" && <>ماهي محاكاة المونتي كارلو</>}
              {selectedLanguage === "en" && <>What is a Monte Carlo Simlulation</>}
              </button>
            <button className="button-19 font-swissra font-bold" onClick={()=>{
              setProgress(4) 
            }}>
               {selectedLanguage === "ar" && <>أرني نتائج المحاكاة</>}
               {selectedLanguage === "en" && <>show me the simulation results</>}
            </button>
          </div>
        )}
        {bottomState === "next" && <button className="button-19 font-swissra font-bold" onClick={()=>{
          setProgress(progress+1)
        }}>
        </button>}
        {bottomState === "Stats" &&<div className="flex overflow-x-auto space-x-4">
          <div className="flex-none w-80 p-4 bg-white shadow rounded-lg">
          <h2 className="text-xl font-semibold mb-2">All True</h2>
          <MyChart data={data.allTrue} width={600} height={300} />
        </div>
        <div className="flex-none w-80 p-4 bg-white shadow rounded-lg">
          <h2 className="text-xl font-semibold mb-2">All False</h2>
          <MyChart data={data.allFalse} width={600} height={300} />
        </div>
        <div className="flex-none w-80 p-4 bg-white shadow rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Random</h2>
          <MyChart data={data.random} width={600} height={300} />
        </div>
        </div>}
        {bottomState === "finale" && <p>Top Box: Finale</p>}
      </div>
    </div>
  );
}

export default App;
