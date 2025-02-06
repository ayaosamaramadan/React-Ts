type btnProps = {
    handleclick: () => void;
    };
    
function Button({handleclick}:btnProps) {
  return <button onClick={handleclick}>click</button>;
}

export default Button;