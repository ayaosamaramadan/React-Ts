type btnProps = {
    handleclick: (event:React.MouseEvent<HTMLButtonElement> , id:number) => void;
    };

function Button({handleclick}:btnProps) {
  return <button onClick={(event)=>handleclick(event , 3)}>click</button>;
}

export default Button;