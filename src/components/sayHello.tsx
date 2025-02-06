type SayHelloProps = {
    name: string;
    };
function SayHello(props: SayHelloProps) {
  return (
    <div>
      <h1>hello {props.name}</h1>
    </div>
    );

}

export default SayHello;