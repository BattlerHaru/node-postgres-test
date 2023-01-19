let orden = (order, arr) => {
  if (order === "ASC") {
    for (let i = 1; i < arr.length; i += 1) {
      if (arr[i] < arr[i - 1]) return false;
    }
    return true;
  } else if (order === "DESC") {
    for (let i = 1; i < arr.length; i += 1) {
      if (arr[i] > arr[i - 1]) return false;
    }
    return true;
  }
};

let main = () => {
  console.log(orden("ASC", [1, 2, 3, 6, 7, 19]));
  console.log(orden("DESC", [1, 2, 3, 6, 7, 19]));
  console.log("----");
  console.log(orden("ASC", [12, 2, 9, 6, 7, 19]));
  console.log(orden("DESC", [12, 2, 9, 6, 7, 19]));
  console.log("----");
  console.log(orden("ASC", [4]));
  console.log(orden("DESC", [4]));
  console.log("----");
  console.log(orden("ASC", [4, 7]));
  console.log(orden("DESC", [4, 7]));
};
main();
