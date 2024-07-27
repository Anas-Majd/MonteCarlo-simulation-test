import { GrPowerReset } from "react-icons/gr";
import { IoLanguageOutline } from "react-icons/io5";

const ProgressBar = ({
  value,
  max,
  onClick,
}: {
  value: string;
  max: string;
  onClick: () => void;
}) => {
  return (
    <div className="flex flex-row m-5 items-center gap-3">
      <button className="btn btn-circle" onClick={onClick}>
        <GrPowerReset size={23} />
      </button>

      <progress
        className="progress progress-info h-4"
        value={value}
        max={max}
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
            <a href="/en">English</a>
          </li>
          <li>
            <a href="/ar">عربي</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProgressBar;
