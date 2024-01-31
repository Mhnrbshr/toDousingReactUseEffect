import React from "react";
import { Button } from "react-bootstrap";
import { useState, useReducer } from "react";

const countReducer = (state: any, action: any) => {
  if (action.payload.id) {
    return {
      [action.payload.id]: action.payload.color,
    };
  }

  return { ...state };
};

const Colorbox = () => {
  const [boxid, setId] = useState<number>(0);
  const [boxColor, setBoxColor] = useState("");

  const initialValue = { 0: "white" };

  const [state, dispatch] = useReducer(countReducer, initialValue);

  return (
    <>
      <div style={{ display: "flex" }}>
        <div
          id="1"
          style={{
            border: "2px solid red",
            width: "200px",
            backgroundColor: state[1],
            height: " 200px",
          }}
        ></div>
        <div
          id="2"
          style={{
            border: "2px solid red",
            width: "200px",
            backgroundColor: state[2],
            height: " 200px",
          }}
        ></div>
        <div
          id="3"
          style={{
            border: "2px solid red",
            backgroundColor: state[3],
            width: "200px",
            height: " 200px",
          }}
        ></div>
      </div>
      <div style={{ display: "flex" }}>
        <div
          id="4"
          style={{
            border: "2px solid red",
            backgroundColor: state[4],
            width: "200px",
            height: " 200px",
          }}
        ></div>
        <div
          id="5"
          style={{
            border: "2px solid red",
            backgroundColor: state[5],
            width: "200px",
            height: " 200px",
          }}
        ></div>
        <div
          id="6"
          style={{
            border: "2px solid red",
            backgroundColor: state[6],
            width: "200px",
            height: " 200px",
          }}
        ></div>
      </div>
      <input
        type="number"
        onChange={(e) => {
          setId(parseInt(e.target.value));
        }}
      />
      <input
        type="text"
        onChange={(e) => {
          setBoxColor(e.target.value);
        }}
      />
      <Button
        onClick={() => {
          dispatch({ payload: { id: boxid, color: boxColor } });
        }}
      >
        Click
      </Button>
    </>
  );
};

export default Colorbox;
