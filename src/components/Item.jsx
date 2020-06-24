import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  delete_item,
  add_checked,
  remove_checked,
  delete_several_items,
} from "../redux/items/action";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";

const Item = (props) => {
  const check = useRef(null);
  const dispatch = useDispatch();

  const deleteItem = (index) => {
    dispatch(delete_item(index));
  };
  const isCheckbox = (id) => {
    if (check.current.checked) {
      dispatch(add_checked(id));
      return;
    }

    dispatch(remove_checked(id));
  };
  return (
    <div className="item__box">
      <p>{props.text}</p>
      <Checkbox
        onClick={() => isCheckbox(props.id)}
        inputRef={check}
        color="primary"
      />
      <IconButton onClick={() => deleteItem(props.index)} aria-label="delete">
        <DeleteIcon fontSize="large" />
      </IconButton>
    </div>
  );
};

export default Item;
