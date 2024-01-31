import React, { useReducer } from "react";
import { Button } from "react-bootstrap";

const countReducer = (state: any, action: any) => {
  //actn.type=incrmnt ...

  if (action.type === "increment") {
    return { count: state.count + action.payload };   //state.countil we will get prevs count value
  } else if (action.type === "decrement") {
    return { count: state.count - action.payload };
  } else if (action.type === "mul") {
    return { count: state.count * 5 };
  } else if (action.type === "div") {
    return { count: state.count / 2 };
  }
  return { ...state }; //to return prevvs state
};

export const Counter = () => {
  const initialValue = { count: 1 };

  const [state, dispatch] = useReducer(countReducer, initialValue);
  return (
    <div>
      <h1>{state.count}</h1>
      <Button
        variant="primary"
        onClick={() => {
          dispatch({ type: "increment", payload:state.count });  //if outpt is 5, next oprtn done using 5.
        }}
      >
        +
      </Button>
      <Button
        variant="success"
        onClick={() => {
          dispatch({ type: "decrement" , payload:state.count });
        }}
      >
        -
      </Button>
      <Button
        variant="danger"
        onClick={() => {
          dispatch({ type: "div" });
        }}
      >
        /
      </Button>
      <Button
        variant="warning"
        onClick={() => {
          dispatch({ type: "mul" });
        }}
      >
        *
      </Button>
    </div>
  );
};
