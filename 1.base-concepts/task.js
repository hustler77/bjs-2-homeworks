"use strict"
function solveEquation(a, b, c) {
  const arr = [];
  const discriminant = Math.pow(b, 2) - 4 * a * c;
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
  if (isNaN(_percent) || _percent < 0) {
    return false;
  } else if (isNaN(contribution) || contribution < 0) {
    return false;
  } else if (isNaN(amount) || amount < 0) {
    return false;
  } else if (isNaN(countMonths) || countMonths < 0) {
    return false;
  }
  let monthlyRate = _percent / 100 / 12;
  let creditBody = amount - contribution;
  let monthlyPayment = creditBody * (monthlyRate + (monthlyRate / (((1 + monthlyRate) ** countMonths) - 1)));
  let totalPayment = (+ (monthlyPayment * countMonths).toFixed(2));
  return (totalPayment);
}