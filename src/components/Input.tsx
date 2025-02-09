type inputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
function Input({value,handleChange} : inputProps) {
    // anoter way to write the function
    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    // }
  return (
    <>
      <input type="text" title="text" value={value}
       onChange={handleChange} />
    </>
  );
}

export default Input;
