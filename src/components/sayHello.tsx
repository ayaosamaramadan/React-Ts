// pass obj as prop to SayHello component
// type obj = {
//     objData :{
//         name: string,
//         age: number,
//         loggedIn: boolean,
//     }
// }

type obj = {
  name: string;
  age: number;
  loggedIn: boolean;
};
// destructure objData from obj
// function SayHello( {objData}: obj) {
function SayHello({ name, age, loggedIn }: obj) {
  return (
    <>
      <div>
        <h1>Hello {loggedIn ? name : "Guest"}</h1>
        <h2>age: {age}</h2>
      </div>
    </>
  );
}

export default SayHello;
