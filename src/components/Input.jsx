import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_item, delete_several_items } from "../redux/items/action";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import shortid from "shortid";

const Input = () => {
  const inputText = useRef(null);

  const dispatch = useDispatch();

  const deleteCheckedItem = () => {
    dispatch(delete_several_items());
  };
  const addItem = (e) => {
    const target = inputText.current.value;
    if (target === "") return;
    inputText.current.value = "";
    dispatch(add_item(target, shortid.generate()));
  };

  return (
    <>
      <div className="inputContainer">
        <TextField
          inputRef={inputText}
          id="filled-basic"
          label="TextFilled"
          variant="filled"
        />
        <Button
          style={{ height: 45 }}
          onClick={(e) => addItem(e)}
          variant="contained"
          color="primary"
        >
          ADD
        </Button>
        <Button
          style={{ height: 45 }}
          onClick={(e) => deleteCheckedItem(e)}
          variant="contained"
          color="primary"
        >
          DELETE CHECKED ITEM
        </Button>
      </div>
    </>
  );
};

export default Input;
