
export const getTotalPrice = (arr) =>
  arr.reduce((init, obj) => obj.price + init, 0);

export const getSum = (newObj) => {
  let allItems, totalPrice;
  if (typeof newObj === "object") {
    allItems = [].concat.apply(
      [],
      Object.values(newObj).map((obj) => obj.orders)
    );
    totalPrice = getTotalPrice(allItems);
  } else {
    totalPrice = getTotalPrice(newObj);
  }

  return {
    allItems,
    totalPrice,
  };
};
