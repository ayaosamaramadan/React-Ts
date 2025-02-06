import "./App.css";
import Button from "./components/Button";
import SayHello from "./components/SayHello";

function App() {
  return (
    <>
    <SayHello name="Aya"/>
    <Button handleclick={(e)=>console.log(e.target)}/>
    </>
  );
}

export default App;
