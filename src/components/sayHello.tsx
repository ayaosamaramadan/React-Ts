type obj = {
  arrData: {
    name: string;
    age: number;
    loggedIn: boolean;
  }[];
};
// destructure arrData
function SayHello({ arrData }: obj) {
  return (
    <>
      <div>
        
        {arrData.map((arr, index) => (
          <div key={index}>
            <h1>Hello {arr.loggedIn ? arr.name : "Guest"}</h1>
            <p>{arr.age}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default SayHello;
