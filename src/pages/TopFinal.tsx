import ImportantTextBox from "../components/styles/ImportantTextBox";
import anas from "/public/assets/imges/talker.svg";
import majd from "/public/assets/imges/majd.svg";
const TopFinal = ({
  Score,
  selectedLanguage,
}: {
  Score: number;
  selectedLanguage: string;
}) => {
  return (
    <div className="flex flex-col w-full justify-center items-center ">
      <div className="stats shadow justify-center items-center">
        <div className="stat w-full justify-center items-center">
          <div className="stat-title w-full justify-center items-center">
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
