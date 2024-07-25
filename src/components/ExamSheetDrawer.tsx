import { Dialog } from "@headlessui/react";
import { useState, useEffect } from "react";

const ExamSheetDrawer = ({
  selectedLanguage,
  isOpen,
  setAnswer,
  setIsOpen,
  onClose,
}: {
  selectedLanguage: string;
  isOpen: boolean;
  setAnswer: Function;
  setIsOpen: Function;
  onClose: Function;
}) => {
  const [selectedAns, setSelectedAns] = useState("0000000000");
  const [isAllSelected, setIsAllSelected] = useState(false);
  const handleRadioChange = (groupIndex: number, optionIndex: number) => {
    let updatedAnswer = selectedAns.split("");
    updatedAnswer[groupIndex] = optionIndex === 0 ? "0" : "1";
    setSelectedAns(updatedAnswer.join(""));
  };
  useEffect(() => {
    const allSelected = selectedAns.split("").every((ans) => ans !== "0");
    setIsAllSelected(allSelected);
  }, [selectedAns]);

  return (
    <Dialog
      open={isOpen}
      onClose={() => {
        setIsOpen(false);
        onClose()
      }}
      className="fixed inset-0 overflow-hidden"
    >
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label
            htmlFor="my-drawer"
            className="button-19 font-swissra font-bold drawer-button"
          >
            {selectedLanguage === "ar" && <>دعني أنتقي الأجوبة بيدي</>}
            {selectedLanguage === "en" && <>I'll pick the answers</>}
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
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
              className="button-19"
              onClick={() => {
                setAnswer(selectedAns);
                setIsOpen(false);
              }}
              disabled={!isAllSelected}
            >
              Submit
            </button>
          </ul>
        </div>
      </div>
    </Dialog>
  );
};

export default ExamSheetDrawer;
