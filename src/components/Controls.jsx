import React from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();

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
    </div>
  );
};

export default Controls;
