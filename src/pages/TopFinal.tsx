import ImportantTextBox from "../components/styles/ImportantTextBox";
import anas from "/public/assets/imges/talker.svg";
import majd from "/public/assets/imges/majd.svg";
import { CalculateScore } from "../services/logic";
const TopFinal = ({Answer}:{Answer:string}) => {
  return (
    <div className="flex flex-col w-full justify-center items-center ">
      <label>You Scored {CalculateScore(Answer)}</label> <br/>
    <div className="flex w-full justify-center items-center mx-10">
        <div className="flex flex-row items-end content-end sm:mr-20">
          <img className="sm:w-32 w-24" src={anas} />
          <ImportantTextBox>Anas : Idea, Logical Implementation and Front-end development</ImportantTextBox>
        </div>
        <div className="flex flex-row items-end sm:mr-20">
          <img className="sm:w-32 w-24 " src={majd} />
          <ImportantTextBox>
            Majd : Main Frontend development, UI/UX and Design
          </ImportantTextBox>
        </div>
    </div>
    </div>
  );
};

export default TopFinal;
