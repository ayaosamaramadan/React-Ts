import "./App.css";

import Status from "./components/status.tsx";

function App() {
  return (
    <>
    {/* only accept the spesific strings*/}
      <Status status="success"/>
    </>
  );
}

export default App;
