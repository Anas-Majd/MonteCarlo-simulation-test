import "./App.css";
import DuolingoButton from "./components/styles/Button";
import NormalTextBox from "./components/styles/NormalTextBox";
import anas from "../public/imges/anas.svg";
import majd from "../public/imges/majd.svg";
function App() {
  return (
    <div className="flex flex-col h-full w-full justify-between gap-10">
      <div className="flex flex-row items-end">
        <img src={anas} alt="anas" className="max-w-20" />
        <NormalTextBox>
          كما قد قلت مسبقا ما يوجد هنا هو امر رهيب جدا
        </NormalTextBox>
      </div>
      <div className="flex flex-row items-end">
        <img src={majd} alt="anas" className="max-w-20" />
        <NormalTextBox>مونتي كارلو لك عمي شو مفكر</NormalTextBox>
      </div>
      <div className="absolute bottom-10 right-10">
        <DuolingoButton>تابع نحو الامام</DuolingoButton>
      </div>
    </div>
  );
}

export default App;
