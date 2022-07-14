import { itemAdded, itemRemoved } from "../store/state/shoppingCart";

export const titleCase = (str) => {
  let splitStr = str.toLowerCase().split(" ");
  for (let i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(" ");
};

export const calcTotalPrice = (array) => {
  let total = 0;
  array.forEach((item) => {
    if (item.count !== 1) {
      total += item.price * item.count;
    } else {
      total += item.price;
    }
  });
  return total;
};

export const counter = (item, state) => {
  let index;
  try {
    state.filter((i) => {
      if (i.id === item.id) {
        index = state.indexOf(i);
      }
    });
    return state[index].count;
  } catch (error) {
    return 0;
  }
};

export const showCount = (item, state) => {
  let index;
  state.filter((i) => {
    if (i.id === item.id) {
      index = state.indexOf(i);
      return;
    }
  });
  setTimeout(() => {
    console.log("index", index);
    try {
      const result = state[index].count;
      return result;
    } catch (error) {
      console.log("error", error);
      return 0;
    }
  }, 2000);
};

// Event Handlers
export const handleAddItem = (item, dispatch) => {
  dispatch(itemAdded(item));
};
export const handleRemoveItem = (item, dispatch) => {
  dispatch(itemRemoved(item));
};
