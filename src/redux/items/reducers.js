import initialState from "../store/initialState";
import * as actions from "./action";

export const itemsReducer = (store = initialState.items, action) => {
  const copyList = store.list.concat();

  switch (action.type) {
    case actions.DELETE_SEVERAL_ITEMS:
      const newArray = copyList.filter((obj) => !obj.check);
      console.log(newArray);
      return { ...store, list: newArray };
    case actions.REMOVE_CHECKED:
      copyList.forEach((obj) => {
        if (obj.id === action.id) obj.check = false;
      });
      console.log(copyList);
      return { ...store, list: copyList };
    case actions.ADD_CHECKED:
      copyList.forEach((obj) => {
        if (obj.id === action.id) obj.check = true;
      });
      console.log(copyList);
      return { ...store, list: copyList };
    case actions.DELETE_ITEM:
      copyList.splice(Number(action.index), 1);
      return { ...store, list: copyList };
    case actions.CHANGE_TEXT:
      return { ...store, timeId: action.timeId };
    case actions.ADD_ITEM:
      return { ...store, text: "", list: [...store.list, action.item] };
    default:
      return store;
  }
};
