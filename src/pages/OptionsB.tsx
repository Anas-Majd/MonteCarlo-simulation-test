interface Props {
  setProgress: (n: number) => void;
  selectedLanguage: string;
}

const OptionsB = ({ setProgress, selectedLanguage }: Props) => {
  return (
    <div className="flex sm:flex-row flex-col justify-around gap-5 w-full h-full px-10">
      <button
        className="button-19 font-swissra font-bold"
        onClick={() => {
          setProgress(3.5);
        }}
      >
        {selectedLanguage === "ar" && <p>ماهي محاكاة المونتي كارلو</p>}
        {selectedLanguage === "en" && <p>What is a Monte Carlo Simlulation</p>}
      </button>
      <button
        className="button-19 font-swissra font-bold"
        onClick={() => {
          setProgress(4);
        }}
      >
        {selectedLanguage === "ar" && <>أرني نتائج المحاكاة</>}
        {selectedLanguage === "en" && <>show me the simulation results</>}
      </button>
    </div>
  );
};

export default OptionsB;
