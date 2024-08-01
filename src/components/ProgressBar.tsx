import { GrPowerReset } from "react-icons/gr";
import { IoInformation, IoLanguageOutline } from "react-icons/io5";

const ProgressBar = ({
  value,
  max,
  onClick,
  setLanguage,
}: {
  value: number;
  max: number;
  onClick: () => void;
  setLanguage: Function;
}) => {
  return (
    <div className="flex flex-row justify-center my-4 mx-3 items-center gap-2">
      <button className="btn btn-circle" onClick={onClick}>
        <GrPowerReset size={23} />
      </button>
      <progress
        className="progress progress-info h-4 w-[60vw]"
        value={value}
        max={max-2}
      />
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-circle">
          <IoLanguageOutline size={23} />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li>
            <button
              className="button-1"
              onClick={() => {
                setLanguage("en");
              }}
            >
              English
            </button>
          </li>
          <li>
            <button
              className="button-1"
              onClick={() => {
                setLanguage("ar");
              }}
            >
              العربية
            </button>
          </li>
        </ul>
      </div>
      <button
        className="btn btn-circle"
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
            <li> A conversation with a close friend</li>
            <li> Taleb Nassem's book "Fooled by Randomness"</li>
          </ul>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ProgressBar;
