import "./App.css";
import Button from "./components/Button";
import SayHello from "./components/SayHello";
import Input from "./components/Input";
import Container from "./components/Container";
import Products from "./components/Products";
import Login from "./components/Login";
import Counter from "./components/Counter";


function App() {
  const data = [
    {  id: 1,
        name: 'Product 1',
    },
    {
        id: 2,
        name: 'Product 2',
        price: 200,
    },
    {
        id: 3,
        name: 'Product 3',
        price: 300,
    },
];
  return (
    <>
    <Counter/>
    <Login />
    <Container styles={{color:"red"}} />
      <SayHello name="Aya" />
      <Button handleclick={(e, id) => console.log(e.target, id)} />
      <Input value="" handleChange={(e) => console.log(e.target.value)} />
      <Products data={data} />

    </>
  );
}

export default App;
