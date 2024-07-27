import { useState, useEffect } from "react";

const ExamSheetDrawer = ({
  selectedLanguage,
  setAnswer,
  onClose,
  isOpen,
  onSubmit,
}: {
  selectedLanguage: string;
  setAnswer: (ans: string) => void;
  onClose: () => void;
  isOpen: boolean;
  onSubmit: Function;
}) => {
  const [selectedAns, setSelectedAns] = useState("xxxxxxxxxx");
  const [isAllSelected, setIsAllSelected] = useState(false);
  const handleRadioChange = (groupIndex: number, optionIndex: number) => {
    let updatedAnswer = selectedAns.split("");
    updatedAnswer[groupIndex] = optionIndex === 0 ? "0" : "1";
    setSelectedAns(updatedAnswer.join(""));
  };
  useEffect(() => {
    const allSelected = selectedAns.split("").every((ans) => ans !== "x");
    setIsAllSelected(allSelected);
  }, [selectedAns]);

  return (
    <div
      className={`fixed inset-0 z-50 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <div
        className="absolute inset-0"
        onClick={onClose}
      ></div>
      <div className="absolute right-0 w-80 h-full bg-white shadow-lg p-4">
        <ul className="flex flex-col items-center justify-center bg-white text-base-content min-h-full w-72 p-20 gap-10 ">
          <div className="bg-red-300 rounded-xl w-52 outline-8 outline-red-600  ">
            <div className="flex justify-between w-full px-14  bg-red-600  rounded-xl rounded-b-none text-black font-bold">
              <p>✓</p>
              <p>✗</p>
            </div>
            {Array.from({ length: 10 }).map((_, index) => (
              <li
                key={index}
                className={`flex justify-between w-full px-10 ${
                  index % 2 == 0 && "bg-gray-100"
                }`}
              >
                <input
                  type="radio"
                  name={`radio-group-${index}`}
                  className="radio radio-error m-2"
                  onChange={() => handleRadioChange(index, 0)}
                />

                <input
                  type="radio"
                  name={`radio-group-${index}`}
                  className="radio radio-error m-2"
                  onChange={() => handleRadioChange(index, 1)}
                />
              </li>
            ))}
          </div>
          <button
            className={`button-19 ${!isAllSelected && "btn-disabled opacity-50"}`}
            onClick={() => {
              setAnswer(selectedAns);
              onSubmit();
            }}
            disabled={!isAllSelected}
          >
            Submit
          </button>
        </ul>
      </div>
    </div>
  );
};

export default ExamSheetDrawer;
