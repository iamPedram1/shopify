import _ from "lodash";
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
  return total.toFixed(2);
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

// Event Handlers

export const paginate = (items, pageNumber, pageSize) => {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
};
