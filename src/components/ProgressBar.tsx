const ProgressBar = ({ value, max ,onClick}: { value: string; max: string, onClick:Function }) => {
  return (
    <div className="flex flex-row m-5 items-center gap-3">
      <button className="btn btn-circle" onClick={()=>{onClick}}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <progress
        className="progress progress-info h-4"
        value={value}
        max={max}
      ></progress>
    </div>
  );
};

export default ProgressBar;
