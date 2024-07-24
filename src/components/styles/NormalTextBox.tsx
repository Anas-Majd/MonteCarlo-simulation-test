interface Props {
  children: React.ReactNode;
}

const detectScript = (text: string) => {
  const arabicPattern = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]/;
  return arabicPattern.test(text) ? "arabic" : "latin";
};

const NormalTextBox = ({ children }: Props) => {
  const text = children?.toString() || "";
  const script = detectScript(text);
  const isArabic = script === "arabic";

  return (
    <div className="chat chat-start sm:max-w-80 max-w-100 ">
      <div className="chat-bubble">
        <p
          dir={isArabic ? "rtl" : "ltr"}
          className={
            isArabic
              ? "font-swissra font-normal tracking-wide leading-loose"
              : "font-medium font-sans tracking-wide leading-loose"
          }
        >
          {children}
        </p>
      </div>
    </div>
  );
};

export default NormalTextBox;
