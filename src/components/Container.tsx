
type contProps = {
  styles:React.CSSProperties;
};
function Container(props:contProps) {
  return <div 
  style={props.styles}
  // styles={{color:"red"}}
  >container
  </div>;
}

export default Container;