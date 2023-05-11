function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}
let student1 = new Student("Ivan", "male", 20);
let student2 = new Student("Maria", "female", 19);
let student3 = new Student("Andrey", "male", 20);
let student4 = new Student("Anna", "female", 18);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMarks = function (...marks) {
  if (this.marks != undefined) {
    this.marks.push(...marks);
  }
};

Student.prototype.getAverage = function () {
  return !this.marks || !this.marks.length
    ? 0
    : this.marks.reduce((acc, item) => (acc += item / this.marks.length), 0);
};

Student.prototype.exclude = function (reason) {
  delete this.marks, this.subject;
  this.excluded = reason;
};
