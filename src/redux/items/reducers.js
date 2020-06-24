import initialState from "../store/initialState";
import * as actions from "./action";

export const itemsReducer = (store = initialState.items, action) => {
  const copyCheckedList = store.checkedList.concat();
  const copyList = store.list.concat();

  switch (action.type) {
    case actions.DELETE_SEVERAL_ITEMS:
      for (const target of copyCheckedList) {
        copyList.forEach((ele, i) => {
          if (ele.id === target) {
            copyList.splice(i, 1);
          }
        });
      }

      return { ...store, checkedList: [], list: copyList };
    case actions.REMOVE_CHECKED:
      const i = copyCheckedList.indexOf(action.id);
      copyCheckedList.splice(i, 1);

      return { ...store, checkedList: copyCheckedList };
    case actions.ADD_CHECKED:
      return { ...store, checkedList: store.checkedList.concat(action.id) };
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
