import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../store/store";

function Inference() {
  const dispatch = useDispatch();

  const onAddNoteClick = () => {};
  return (
    <>
      <p>Inference</p>

      <button onClick={onAddNoteClick}>Add note</button>
    </>
  );
}

export default Inference;
