import { TextGenerateEffect } from "./TextGenerateEffect";

const detectScript = (text: string) => {
  const arabicPattern = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]/;
  return arabicPattern.test(text) ? "arabic" : "latin";
};

const ImportantTextBox = ({ children }: { children?: string }) => {
  const text = children?.toString() || "";
  const script = detectScript(text);
  const isArabic = script === "arabic";

  return (
    <div className="chat chat-end sm:max-w-80 w-120 ">
      <div className="chat-bubble bg-transparent  border-gray-600 border-4 border-opacity-45 border-dashed">
        <div
          dir={isArabic ? "rtl" : "ltr"}
          className={
            isArabic
              ? "font-swissra font-normal tracking-wide leading-loose"
              : "font-medium font-sans tracking-wide leading-loose"
          }
        >
          <TextGenerateEffect words={children} />
        </div>
      </div>
    </div>
  );
};

export default ImportantTextBox;
