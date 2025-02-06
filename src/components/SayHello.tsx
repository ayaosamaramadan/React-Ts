type SayHelloProps = {
    name: string;
    age: number;
    loggin: boolean;
    };

    // props is an object
// function SayHello(props: SayHelloProps) { 
    //props is an object that contains all the properties that are passed to the component
function SayHello({name,age,loggin}: SayHelloProps) {
  return (
    // pass the props to the component
    // <div>
    //     <h1>Hello {props.loggin?props.name:"Guest"}</h1>
    //     <h2>age: {props.age}</h2>
    // </div>
    <div>
    <h1>Hello {loggin?name:"Guest"}</h1>
    <h2>age: {age}</h2>
</div>
    );

}

export default SayHello;