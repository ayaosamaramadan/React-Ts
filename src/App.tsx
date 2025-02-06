import "./App.css";
import SayHello from "./components/SayHello.tsx";

function App() {
  // define object data
  const objData = {
    name: "Aya",
    age: 21,
    loggedIn: true,
  };
  return (
    <>
      {/* pass obj as prop */}
      {/* <SayHello objData={objData}/> */}
      <SayHello
        name={objData.name}
        age={objData.age}
        loggedIn={objData.loggedIn}
      />
    </>
  );
}

export default App;
