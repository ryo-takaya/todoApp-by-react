import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_item, change_text } from "../redux/items/action";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import shortid from "shortid";

const Input = () => {
  const inputText = useRef(null);
  const text = useSelector((store) => store.items.text);
  const timeId = useSelector((store) => store.items.timeId);

  const dispatch = useDispatch();
  const changeText = (e) => {
    const target = e.target.value;
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
          // value={text}
          inputRef={inputText}
          onChange={(e) => {
            changeText(e);
          }}
          // defaultValue={text === "" ? "" : text}
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
      </div>
    </>
  );
};

export default Input;
