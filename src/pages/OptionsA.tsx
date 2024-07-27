import ExamSheetDrawer from "../components/ExamSheetDrawer";

interface Props {
  setProgress: (n: number) => void;
  selectedLanguage: string;
  setAnswer: (s: string) => void;
  onDrawerClose: () => void;
}

const OptionsA = ({
  setProgress,
  selectedLanguage,
  setAnswer,
  onDrawerClose,
}: Props) => {
  return (
    <div className="flex sm:flex-row flex-col justify-around items-center gap-5  h-full px-10">
      <button
        onClick={() => {
          setAnswer("1111111111");
          setProgress(1);
        }}
        className="button-19 font-swissra font-bold"
      >
        {selectedLanguage === "ar" && <p>إنتقي "صحيح" لكل الإجابات</p>}
        {selectedLanguage === "en" && <p>pick True for all questions</p>}
      </button>
      <button
        onClick={() => {
          setAnswer("0000000000");
          setProgress(1);
        }}
        className="button-19 font-swissra font-bold"
      >
        {selectedLanguage === "ar" && <>إنتقي "خاطئ" لكل الإجابات</>}
        {selectedLanguage === "en" && <>pick False for all questions</>}
      </button>
      <div>
        <ExamSheetDrawer
          selectedLanguage={selectedLanguage}
          setAnswer={setAnswer}
          onSubmit={onDrawerClose}
        />
      </div>
    </div>
  );
};

export default OptionsA;
