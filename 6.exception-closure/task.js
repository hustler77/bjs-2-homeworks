//task 1

function parseCount(count) {
  let value = Number.parseFloat(count);
  if (Number.isNaN(value)) {
    throw new Error("Невалидное значение");
  }
  return value;
}

function validateCount(count) {
  try {
    return parseCount(count);
  } catch (error) {
    return error;
  }
}

//task 2

class Triangle {
  constructor(firstSide, secondSide, thirdSide) {
    if (
      firstSide + secondSide < thirdSide ||
      firstSide + thirdSide < secondSide ||
      secondSide + thirdSide < firstSide
    ) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
    this.firstSide = firstSide;
    this.secondSide = secondSide;
    this.thirdSide = thirdSide;
  }
  get perimeter() {
    return this.firstSide + this.secondSide + this.thirdSide;
  }
  get area() {
    const p = (this.firstSide + this.secondSide + this.thirdSide) / 2;
    return +Math.sqrt(
      p * ((p - this.firstSide) * (p - this.secondSide) * (p - this.thirdSide))
    ).toFixed(3);
  }
}

function getTriangle(firstSide, secondSide, thirdSide) {
  try {
    return new Triangle(firstSide, secondSide, thirdSide);
  } catch (error) {
    return {
      get perimeter() {
        return "Ошибка! Треугольник не существует";
      },
      get area() {
        return "Ошибка! Треугольник не существует";
      },
    };
  }
}
