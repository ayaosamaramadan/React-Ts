type arrType = {
  name: string;
  // optional type
  age?: number;
  loggedIn?: boolean;
};
// destructure arrData
function SayHello(props: arrType) {
  return (
    <>
      <div>
        <h2>
          Hello {props.name}!</h2>
      </div>
    </>
  );
}

export default SayHello;
