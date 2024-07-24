import "./App.css";
import DuolingoButton from "./components/styles/Button";
import NormalTextBox from "./components/styles/NormalTextBox";
import anas from "../public/imges/anas.svg";
import Calling from ''
import TextBox from ''
import ImportantTextBox from ''
import majd from "../public/imges/majd.svg";
import React from "react";
function App() {
  const [topState, setTopState] = React.useState("Calling");
  const [bottomState, setBottomState] = React.useState("Calling");
  const [progress,SetProgress] = React.useState(0)
  const [selectedLanguage,setSelectedLanguage] = React.useState('ar')
  const [selectedTextId,setSelectedTextID] = React.useState(`intro-${selectedLanguage}`) 
  const onAnswer=()=>{
    setBottomState('next')
    SetProgress(1)
    setTopState('talking')
  }
  return (
    <div className="flex flex-col h-full w-full justify-between gap-10">
      <div className="flex flex-row justify-between">
        {topState === "calling" && <img src={anas}/>}
        {topState === "talking" && <p>Top Box: Talking</p>}
        {topState === "important_talking" && <p>Top Box: Important Talking</p>}
        {topState === "finale" && <p>Top Box: Finale</p>}
      </div>
      <div className="flex flex-row justify-between">
        {bottomState === "calling" && <Calling  onAnswer={onAnswer}/>}
        {bottomState === "optionsA" && <p>Top Box: Talking</p>}
        {bottomState === "next" && <p>Top Box: Finale</p>}
        {bottomState === "optionsB" && <p>Top Box: Important Talking</p>}
        {bottomState === "Stats" && <p>Top Box: Finale</p>}
        {bottomState === "finale" && <p>Top Box: Finale</p>}
      </div>
    </div>
  );
}

export default App;
