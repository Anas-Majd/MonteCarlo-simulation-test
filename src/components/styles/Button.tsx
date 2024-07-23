interface Props {
  children: React.ReactNode; // Proper type for children
}

const DuolingoButton = ({ children }: Props) => {
  return (
    <button className="button-19 font-swissra font-bold">{children}</button>
  );
};

export default DuolingoButton;
