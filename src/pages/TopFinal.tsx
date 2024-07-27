import ImportantTextBox from "../components/styles/ImportantTextBox";
import anas from "/public/assets/imges/anas.svg";
import majd from "/public/assets/imges/majd.svg";

const TopFinal = () => {
  return (
    <div className="flex flex-col items-end sm:flex-row sm:justify-center sm:items-stretch w-full mx-2 gap-y-5 ">
      <div className="flex flex-row w-full items-end content-end sm:mr-20">
        <img className="sm:w-32 w-24" src={anas} />
        <ImportantTextBox>Anas : Idea and Logical analysis</ImportantTextBox>
      </div>
      <div className="flex flex-row w-full items-end sm:mr-20">
        <img className="sm:w-32 w-24 " src={majd} />
        <ImportantTextBox>Majd : Frontend development and UI</ImportantTextBox>
      </div>
    </div>
  );
};

export default TopFinal;
