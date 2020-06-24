import React from "react";
import { useSelector } from "react-redux";
import Item from "./Item";

const Itemfield = () => {
  const items = useSelector((store) => store.items.list);

  return (
    <div>
      {items.map((obj, i) => (
        <Item key={i.toString()} text={obj.text} id={obj.id} index={i} />
      ))}
    </div>
  );
};

export default Itemfield;
