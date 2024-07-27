import NormalTextBox from "../components/styles/NormalTextBox";
import anas from "/public/imges/anas.svg";
import majd from "/public/imges/majd.svg";

const TopFinal = () => {
  return (
    <div className="flex flex-col w-full gap-10">
      <div className="flex flex-row-reverse w-full items-end content-end sm:mr-20">
        <img className="sm:w-40 w-24 scale-x-[-1]" src={anas} />{" "}
        <NormalTextBox>
          انس : كيفك يا صاح بتشيل نعمل بحث احتمالات انا بعمل اللوجيك
        </NormalTextBox>
      </div>
      <div className="flex flex-row w-full items-end sm:mr-20">
        <NormalTextBox>مجد : اهلا يا صاح بشيل، وانا بعمل الفرونت</NormalTextBox>
        <img className="sm:w-40 w-24 " src={majd} />
      </div>
    </div>
  );
};

export default TopFinal;
