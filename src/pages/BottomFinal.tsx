import NormalTextBox from "../components/styles/NormalTextBox";
import anas from "/public/imges/anas.svg";
import majd from "/public/imges/majd.svg";

const BottomFinale = () => {
  return (
    <div>
      <div className="flex flex-row">
        <div className="flex flex-row-reverse w-full items-end sm:mr-20">
          <img className="sm:w-40 w-24 swap-flip scale-x-[-1]" src={anas} />
          <NormalTextBox>كيفك يا صاح</NormalTextBox>
        </div>
      </div>
    </div>
  );
};

export default BottomFinale;
