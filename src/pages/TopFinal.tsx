import ImportantTextBox from "../components/styles/ImportantTextBox";
import anas from "/public/assets/imges/talker.svg";
import majd from "/public/assets/imges/majd.svg";
import { IoInformation } from "react-icons/io5";
const TopFinal = ({
  Score,
  selectedLanguage,
}: {
  Score: number;
  selectedLanguage: string;
}) => {
  return (
    <div className="flex flex-col w-full justify-center items-center ">
      <button
        className="btn"
        onClick={() =>
          (
            document.getElementById("my_modal_1") as HTMLDialogElement
          ).showModal()
        }
      >
        <IoInformation size={23} />
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg ">Inspired by</h3>
          <ul className=" list-disc px-4">
            <li> a talk with a close friend</li>
            <li>"Fooled by randomness" by Taleb Nassem</li>
          </ul>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      <div className="stats shadow">
        <div className="stat w-full">
          <div className="stat-title">
            {selectedLanguage === "en" && <p>You Scored</p>}
            {selectedLanguage === "ar" && <p>نتيجتك كانت</p>}
          </div>
          <div className="stat-value">{Score}/10</div>
        </div>
      </div>
      <br />
      <div className="flex  flex-col sm:flex-row justify-center items-center mb-10 mx-6 gap-5">
        <div className="flex flex-row items-end content-end sm:mr-20 ">
          <img className="sm:w-32 w-24" src={anas} />
          <ImportantTextBox>
            Anas Al-Merstani: Idea, Logical Implementation and Front-end
            development
          </ImportantTextBox>
        </div>
        <div className="flex flex-row items-end sm:mr-20">
          <img className="sm:w-32 w-24 " src={majd} />
          <ImportantTextBox>
            Majd Al-Khalaf: Main Frontend development, UI/UX and Design
          </ImportantTextBox>
        </div>
      </div>
    </div>
  );
};

export default TopFinal;
