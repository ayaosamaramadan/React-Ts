type childProp = {
    children:string;
}
function Heading(props:childProp) {
  return (
  <>
    {props.children}
  </>
  );
}

export default Heading;
