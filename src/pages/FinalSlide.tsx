import ImportantTextBox from "../components/sideComponents/ImportantTextBox";
import anas from "/public/assets/imges/talker.svg";
import majd from "/public/assets/imges/majd.svg";
import { finalButtons } from "../../public/data/DialogueText";

const TopFinal = ({
  Score,
  selectedLanguage,
}: {
  Score: number;
  selectedLanguage: string;
}) => {
  return (
    <div className="flex flex-col gap-6 mb-5">
      <div className="flex font-cairo font-bold flex-col w-full justify-center items-center gap-10">
        <div className="stats shadow">
          <div className="flex flex-col stat w-full  justify-center items-center ">
            <div className="stat-title">
              {selectedLanguage === "en" && <p>You Scored</p>}
              {selectedLanguage === "ar" && <p>نتيجتك كانت</p>}
            </div>
            <div className="stat-value">{Score}/10</div>
          </div>
        </div>

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

      <div>
        <div className="flex justify-center mx-10">
          <div className="grid sm:grid-cols-4 grid-cols-2 w-full sm:w-[80vw] mb-10 gap-5 sm:gap-10">
            {finalButtons.map((item) => (
              <a
                href={item.href}
                className={`gap-2 ${item.class}`}
                target="_blank"
              >
                <item.icon size={23} />
                {item.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopFinal;
