type btnProps = {
    handleclick: (event:React.MouseEvent<HTMLButtonElement>) => void;
    };

function Button({handleclick}:btnProps) {
  return <button onClick={handleclick}>click</button>;
}

export default Button;