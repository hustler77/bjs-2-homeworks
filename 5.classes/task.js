class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }
  fix() {
    return (this.state *= 1.5);
  }

  set state(newState) {
    if (newState < 0) {
      return (this.state = 0);
    } else if (newState > 100) {
      return (this.state = 100);
    }
    this._state = newState;
  }
  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}
class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "book";
    this.author = author;
  }
}
class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}
class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}
class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

//task 2
class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }
  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }
  findBookBy(type, value) {
    let findBook = this.books.find((element) => element[type] === value);
    return findBook ? findBook : null;
  }
  giveBookByName(bookName) {
    let findBook = this.books.findIndex((element) => element.name === bookName);
    return findBook != -1 ? this.books.splice(findBook, 1)[0] : null;
  }
}

// task 3
class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }

  addMark(mark, subject) {
    if (mark < 2 || mark > 5) {
      return;
    }
    if (!this.marks.hasOwnProperty(subject)) {
      this.marks[subject] = [];
    }
    this.marks[subject].push(mark);
  }

  getAverageBySubject(subject) {
    if (!this.marks.hasOwnProperty(subject)) {
      return 0;
    }
    return this.marks[subject].reduce(
      (acc, item) => (acc += item / this.marks[subject].length),
      0
    );
  }

  getAverage() {
    let subjects = Object.keys(this.marks);
    if (subjects.length === 0) {
      return 0;
    }
    let sumOfMarks = 0;
    for (let i = 0; i < subjects.length; i++) {
      sumOfMarks += this.getAverageBySubject(subjects[i]);
    }
    return sumOfMarks / subjects.length;
  }
}
