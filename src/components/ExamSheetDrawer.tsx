const ExamSheetDrawer = ({
  selectedLanguage,
}: {
  selectedLanguage: string;
}) => {
  return (
    <div>
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
            <p className="font-swissra font-bold text-zinc-900 ">
              الورقة الحمرا
            </p>
            <div className="bg-red-300 rounded-xl w-52 outline-8 outline-red-600  ">
              <div className="flex justify-between w-full px-14  bg-red-600  rounded-xl rounded-b-none text-black font-bold">
                <p>T</p>
                <p>F</p>
              </div>
              {Array.from({ length: 20 }).map((_, index) => (
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
                  />

                  <input
                    type="radio"
                    name={`radio-group-${index}`}
                    className="radio radio-error m-2"
                  />
                </li>
              ))}
            </div>
            <button className="button-19">Submit</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExamSheetDrawer;
