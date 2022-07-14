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
