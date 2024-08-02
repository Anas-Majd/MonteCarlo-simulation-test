import "./App.css";
import ProgressBar from "./components/ProgressBar";
import { useEffect, useMemo, useState } from "react";
import { CalculateScore, Compute } from "./services/logic";
import { slides } from "../public/data/DialogueText";
import Slide from "./components/Slide";
import States from "./components/States";
import eruda from "eruda";

export interface Data {
  allTrue: { name: string; value: number }[];
  allFalse: { name: string; value: number }[];
  random: { name: string; value: number }[];
}

function App() {
  const [data, setData] = useState<Data>({
    allTrue: [],
    allFalse: [],
    random: [],
  });
  const [pickedAnswer, setPickedAnswer] = useState(``);
  const [score, setScore] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState("ar");

  useEffect(() => {
    const fetchData = async () => {
      const result = await Compute();
      setData(result);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (window.location.pathname.includes("/eruda")) {
      import("eruda").then((eruda) => eruda.default.init());
    }
  }, []);

  const onNextSlide = () => {
    setCurrentSlide((prev) => prev + 1);
  };
  const onAddClick = (add: string) => {
    setPickedAnswer(`-${add}`);
    setCurrentSlide((prev) => prev + 1);
  };
  const onAnswer = () => {
    setCurrentSlide(1);
  };
  const onRemove = () => {
    setPickedAnswer(``);
    setCurrentSlide((prev) => prev + 1);
  };
  const onResetClick = () => {
    setPickedAnswer(``);
    setCurrentSlide(0);
  };

  const selectedSlide = useMemo(
    () =>
      slides.find(
        (slide) => slide.name === `${currentSlide}${pickedAnswer}`
      ) as Slide,
    [currentSlide]
  );

  return (
    <div
      data-theme="dark"
      className="flex flex-col min-h-screen w-full content-start justify-between"
    >
      <ProgressBar
        value={currentSlide}
        max={slides.length - 1}
        onClick={onResetClick}
        setLanguage={setSelectedLanguage}
      />

      <Slide
        selectedSlide={selectedSlide}
        selectedLanguage={selectedLanguage}
        data={data}
        onNextSlide={onNextSlide}
        setCurrentSlide={setCurrentSlide}
        setScore={setScore}
        score={score}
        onAnswer={onAnswer}
      />

      <div className="flex flex-row justify-center w-full">
        {selectedSlide.buttons &&
        typeof selectedSlide.buttons === "function" ? (
          <>
            <selectedSlide.buttons
              setProgress={setCurrentSlide}
              selectedLanguage={selectedLanguage}
              setAnswer={(answer: string) => {
                setScore(CalculateScore(answer));
                setCurrentSlide(1);
              }}
            />
          </>
        ) : (
          selectedSlide.buttons?.map((button, index) => {
            if (currentSlide === 2)
              return (
                <button
                  key={index}
                  className={button.class}
                  onClick={() => onAddClick(button.add)}
                >
                  {button.text[selectedLanguage as "ar" | "en"]}
                </button>
              );
            else if (currentSlide === 4)
              return (
                <button key={index} className={button.class} onClick={onRemove}>
                  {button.text[selectedLanguage as "ar" | "en"]}
                </button>
              );
            else {
              return (
                <button
                  key={index}
                  className={button.class}
                  onClick={onNextSlide}
                >
                  {button.text[selectedLanguage as "ar" | "en"]}
                </button>
              );
            }
          })
        )}

        {selectedSlide.states && <States data={data} />}
      </div>
    </div>
  );
}

export default App;
