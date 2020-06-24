export const ADD_ITEM = "ADD_ITEM";

export const add_item = (text, id) => {
  return {
    type: "ADD_ITEM",
    item: { text, id, check: false },
  };
};

export const CHANGE_TEXT = "CHANGE_TEXT";

export const change_text = (timeId) => {
  return {
    type: "CHANGE_TEXT",

    timeId,
  };
};

export const DELETE_ITEM = "DELETE_ITEM";

export const delete_item = (index) => {
  return {
    type: "DELETE_ITEM",
    index,
  };
};

export const ADD_CHECKED = "ADD_CHECKED";

export const add_checked = (id) => {
  return {
    type: "ADD_CHECKED",
    id,
  };
};

export const DELETE_SEVERAL_ITEMS = "DELETE_SEVERAL_ITEMS";

export const delete_several_items = () => {
  return {
    type: "DELETE_SEVERAL_ITEMS",
  };
};

export const REMOVE_CHECKED = "REMOVE_CHECKED";

export const remove_checked = (id) => {
  return {
    type: "REMOVE_CHECKED",
    id,
  };
};
