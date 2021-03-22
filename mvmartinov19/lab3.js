function calc(a, b) {
  return a * b;
}

let calcFunc = function (a, b) {
    return a * b;
}

let calcArrowFunc = (a, b) => a * b;

let calcArrowFuncWithBody = (a, b) => {
    a++;
    return a * b;
};

console.log(calcFunc.toString());
console.log(calcFunc(5, 6));
console.log(calcArrowFunc(5, 6));




