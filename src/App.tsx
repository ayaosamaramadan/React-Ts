import "./App.css";
import Button from "./components/Button";
import SayHello from "./components/SayHello";
import Input from "./components/Input";
import Container from "./components/Container";

function App() {
  return (
    <>
    <Container styles={{color:"red"}} />
      <SayHello name="Aya" />
      <Button handleclick={(e, id) => console.log(e.target, id)} />
      <Input value="" handleChange={(e) => console.log(e.target.value)} />
    </>
  );
}

export default App;
