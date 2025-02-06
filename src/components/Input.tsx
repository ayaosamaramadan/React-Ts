type inputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
function Input({ value, handleChange }: inputProps) {
  return (
    <>
      <input type="text" title="text" value={value}
       onChange={handleChange} />
    </>
  );
}

export default Input;
