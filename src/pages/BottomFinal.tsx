import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa6";
import { HiOutlineDownload } from "react-icons/hi";

const BottomFinal = ({ selectedLanguage }: { selectedLanguage: string }) => {
  return (
    <div>
      <div className="grid sm:grid-cols-4 grid-cols-2 w-full mb-10 gap-5 sm:gap-10">
        <a
          href="https://github.com/Anas-Majd/MonteCarlo-simulation-test"
          className="button-19 flex justify-center"
          target="_blank"
        >
          <FaGithub className="h-8" size={40} />
        </a>
        <a
          href="./assets/Evaluating_Guessing_Strategies_in_True_False_Tests_with_Unknown.pdf"
          className="button-19 font-swissra font-bold flex items-center gap-2"
          target="_blank"
        >
          <HiOutlineDownload size={20} />
          {selectedLanguage === "ar" && <p>البحث</p>}
          {selectedLanguage === "en" && <p>research</p>}
        </a>
        <a
          href="https://www.linkedin.com/in/majd-al-khalaf"
          className="button-19 font-swissra font-bold flex justify-center items-center gap-2"
          target="_blank"
        >
          <CiLinkedin size={25} />
          Majd
        </a>
        <a
          href="https://www.linkedin.com/in/anas-merstani-261ba81ab/"
          className="button-19 font-swissra font-bold flex justify-center items-center gap-2"
          target="_blank"
        >
          <CiLinkedin size={25} />
          Anas
        </a>
      </div>
    </div>
  );
};

export default BottomFinal;
