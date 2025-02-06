type statProps = {
    status: "loading" | "success" | "error";
    // status:string;
    };

function Status(props: statProps) {
    let message;
    if (props.status === "loading") {
        message = "Loading...";
    } else if (props.status === "success") {
        message = "Data fetched successfully!";
    }
    else if (props.status === "error") {
        message = "Error fetching data!";
    }
 
  return (
    <>
    <h2>Status : {message}</h2>
    </>
  );
}

export default Status;
