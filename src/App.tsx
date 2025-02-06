import "./App.css";
import SayHello from "./components/SayHello.tsx";

function App() {
// array of objects
  const arrData = [
    {
      name: "Aya",
      age: 21,
      loggedIn: false,
    },
    {
      name: "Alaa",
      age: 25,
      loggedIn: true,
    },
  ];
  return (
    <>
        {/* pass arrData as prop to comp */}
      <SayHello
       arrData={arrData}
      />
    </>
  );
}

export default App;
