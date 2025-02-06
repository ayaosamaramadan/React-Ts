import "./App.css";
import Button from "./components/Button";
import SayHello from "./components/SayHello";

function App() {
  return (
    <>
    <SayHello name="Aya"/>
    <Button handleclick={()=>console.log("hello")}/>
    </>
  );
}

export default App;
