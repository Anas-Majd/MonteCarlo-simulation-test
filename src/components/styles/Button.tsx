interface Props {
  children: React.ReactNode;
}

const DuolingoButton = ({ children }: Props) => {
  return (
    <button className=" button-19 font-swissra font-bold">{children}</button>
  );
};

export default DuolingoButton;
