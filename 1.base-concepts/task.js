"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = Math.pow(b, 2) - 4 * a * c;
  if (discriminant < 0) {
    arr.push();
  } else if (discriminant == 0) {
    arr.push(-b / (2 * a))
  } else {
    arr.push((-b + Math.sqrt(discriminant)) / (2 * a), (-b - Math.sqrt(discriminant)) / (2 * a));
  }
  return arr;
}

function calculateTotalMortgage(_percent, contribution, amount, countMonths) {
  _percent = _percent / 100 / 12;
  let creditBody = amount - contribution;
  let monthlyPayment = creditBody * (_percent + (_percent / (((1 + _percent) ** countMonths) - 1)));
  let totalPayment = (+ (monthlyPayment * countMonths).toFixed(2));
  return (totalPayment);
}