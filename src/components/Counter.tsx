import { useReducer } from "react";

type countstate = {
  count: number;
};

type countaction = {
  type: string;
  payload?: number;
};

// Initial state
const init: countstate = { count: 0 };

// Reducer function
const reducer = (state: countstate, action: countaction): countstate => {
      switch (action.type) {
     case "inc":
      return { count: state.count + (action.payload || 1) };
    case "dec":
      return { count: state.count - 1 };
     default:
      return state;
  }
};

function Counter() {
  const [state, dispatch] = useReducer(reducer, init);

  return (
    <div>
      <h2>Count:{state.count}</h2>
      <button
        onClick={() => dispatch({ type: "inc", payload: 1 })}
        className="bg-amber-700 ml-5"
      >
   Inc
      </button>
      <button
        onClick={() => dispatch({ type: "dec" })}
        className="bg-amber-700 ml-5"
      >Dec
      </button>
    </div>
  );
}

export default Counter;
