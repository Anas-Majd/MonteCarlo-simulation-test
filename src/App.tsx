import "./App.css";
import NormalTextBox from "./components/styles/NormalTextBox";
import anas from "../public/imges/anas.svg";
import Calling from ''
import majd from "../public/imges/majd.svg";
import ProgressBar from "./components/ProgressBar";
import Drawer from "./components/ExamSheetDrawer";
import ImportantTextBox from "./components/styles/ImportantTextBox";
import React, { useEffect } from "react";
function App() {
  interface Dialog {
  id: string;
  text: string;
}
useEffect(() => {
    const fetchDialogs = async () => {
      try {
        const response = await fetch("../public/data/DialogText.json");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: Dialog[] = await response.json();
        setDialogs(data);
      } catch (error) {
        console.error('Error fetching dialog data:', error);
      }
    };

    fetchDialogs();
  }, []);
  const [dialogs, setDialogs] = React.useState<Dialog[]>([])
  const [topState, setTopState] = React.useState("Calling");
  const [bottomState, setBottomState] = React.useState("Calling");
  const [progress,SetProgress] = React.useState(0)
  const [Answer,setAnswer] = React.useState('')
  const [selectedLanguage,setSelectedLanguage] = React.useState('ar')
  const [selectedTextId,setSelectedTextID] = React.useState(`intro-${selectedLanguage}`) 
  const onAnswer=()=>{
    setBottomState('next')
    setSelectedTextID(`intro-${selectedLanguage}`)
    SetProgress(1)
    setTopState('talking')
  }
  return (
    <div className="flex flex-col h-full w-full justify-between gap-10">
      <ProgressBar value={`${progress*10}`} max={`50`}/>
      <div className="flex flex-row justify-between">
        {topState === "calling" && <img src={anas}/>}
        {topState === "talking" && <div className="flex flex-row w-full justify-between" >
        <img src={anas}/>
        <NormalTextBox>
        {dialogs.find(d=>d.id===selectedTextId).text}
        </NormalTextBox>  
        </div>}
        {topState === "important_talking" && <p>Top Box: Important Talking</p>}
        {topState === "finale" && <p>Top Box: Finale</p>}
      </div>
      <div className="flex flex-row justify-between">
        {bottomState === "calling" && <Calling  onAnswer={onAnswer}/>}
        {bottomState === "optionsA" && <div className="flex flex-row w-full">
          <button onClick={()=>{
            setAnswer('1111111111')
          }}>
          {selectedLanguage==='ar'&&<>إنتقي "صحيح" لكل الإجابات</>}
          {selectedLanguage==='en'&&<>pick True for all questions</>}
          </button>
          <button onClick={()=>{
            setAnswer('0000000000')
          }} >
          {selectedLanguage==='ar'&&<>إنتقي "خاطئ" لكل الإجابات</>}
          {selectedLanguage==='en'&&<>pick False for all questions</>}
          </button>
          <button onClick={()=>{
            setAnswer('1111111111')
          }} >
          {selectedLanguage==='ar'&&<>دعني أنتقي الأجوبة بيدي</>}
          {selectedLanguage==='en'&&<>I'll pick the answers</>}
          </button>
          </div>}
        {bottomState === "optionsB" && <p>Top Box: Important Talking</p>}
        {bottomState === "next" && <p>Top Box: Finale</p>}
        {bottomState === "Stats" && <p>Top Box: Finale</p>}
        {bottomState === "finale" && <p>Top Box: Finale</p>}
      </div>
    </div>
  );
}

export default App;
