import "./App.css";
import NormalTextBox from "./components/styles/NormalTextBox";
import anas from "../public/imges/anas.svg";
import majd from "../public/imges/majd.svg";
import ProgressBar from "./components/ProgressBar";
import Drawer from "./components/ExamSheetDrawer";
import ImportantTextBox from "./components/styles/ImportantTextBox";
function App() {
  return (
    <div>
      <div>
        <ProgressBar value="8" max="9" />

        <div className="flex flex-row items-end">
          <NormalTextBox>
            كما قد قلت مسبقا ما يوجد هنا هو امر رهيب جدا
          </NormalTextBox>
          <img src={anas} alt="anas" className="max-w-20" />
        </div>

        <div className="flex flex-row items-end">
          <ImportantTextBox>مونتي كارلو لك عمي شو مفكر</ImportantTextBox>
          <img src={majd} alt="anas" className="max-w-20" />
        </div>

        <button className="button-19 font-swissra font-bold ">
          تابع نحو الامام
        </button>
        <Drawer />
      </div>
    </div>
  );
}

export default App;
