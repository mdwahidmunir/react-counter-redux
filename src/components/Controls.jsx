import React, { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();

  const handleAdd = () => {
    const action = {
      type: "INCREMENT",
    };
    dispatch(action);
  };

  const handleSub = () => {
    const action = {
      type: "DECREMENT",
    };
    dispatch(action);
  };

  const handleAddByX = () => {
    const action = {
      type: "INCREMENT_BY_X",
      payload: inputRef.current.value,
    };
    dispatch(action);
    inputRef.current.value = "";
  };

  const handleSubByX = () => {
    const action = {
      type: "DECREMENT_BY_X",
      payload: inputRef.current.value,
    };
    dispatch(action);
    inputRef.current.value = "";
  };

  return (
    <div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary btn-lg px-4 gap-3"
          onClick={handleAdd}
        >
          +
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary btn-lg px-4"
          onClick={handleSub}
        >
          -
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center controls-row">
        <input
          type="text"
          placeholder="Enter number"
          className="number-input"
          ref={inputRef}
        />
        <button
          type="button"
          className="btn btn-primary btn-lg px-4 gap-3"
          onClick={handleAddByX}
        >
          +
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary btn-lg px-4"
          onClick={handleSubByX}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Controls;
