import "./App.css";
import DuolingoButton from "./components/styles/Button";
import NormalTextBox from "./components/styles/NormalTextBox";
import anas from "../public/imges/anas.svg";
import majd from "../public/imges/majd.svg";
import ProgressBar from "./components/styles/ProgressBar";
function App() {
  return (
    <div className="flex flex-col h-full w-full justify-between gap-10">
      <ProgressBar value="8" max="9" />
      <div className="flex flex-row items-end">
        <NormalTextBox>
          كما قد قلت مسبقا ما يوجد هنا هو امر رهيب جدا
        </NormalTextBox>
        <img src={anas} alt="anas" className="max-w-20" />
      </div>
      <div className="flex flex-row items-end">
        <NormalTextBox>مونتي كارلو لك عمي شو مفكر</NormalTextBox>
        <img src={majd} alt="anas" className="max-w-20" />
      </div>
      <div className="absolute flex justify-center w-full bottom-10 ">
        <DuolingoButton>تابع نحو الامام</DuolingoButton>
      </div>
    </div>
  );
}

export default App;
