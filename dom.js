// import { resolve } from "dns";
// import { rejects } from "assert";

// // const companies = [
// //   { name: "Company One", category: "Finance", start: 1981, end: 2003 },
// //   { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
// //   { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
// //   { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
// //   { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
// //   { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
// //   { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
// //   { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
// //   { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
// // ];

// // const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// // for (i = 0; i < companies.length; i++) {
// //   // console.log(companies[i]);
// // }

// // // forEach
// // companies.forEach(function(item) {
// //   // console.log(item);
// // });

// // // DIFFERENT WAYS TO FILTER ITEM FROM AN ARRAY

// // // let canDrink = [];
// // // for (let i = 0; i < ages.length; i++) {
// // //   if (ages[i] === 21) {
// // //     canDrink.push(ages[i]);
// // //   }
// // // }

// // // const canDrink = ages.filter(function(item) {
// // //   if (item >= 21) {
// // //     return true;
// // //   }
// // // });

// // // const canDrink = ages.filter(item => item >= 21);

// // // console.log(canDrink);

// // // Filter retail company

// // // const retailCompany = companies.filter(item,item2 => item.category === "Retail");
// // // console.log(retailCompany);

// // // const eightiesCompanies = companies.filter(item => item.end - item.start >= 10);
// // // console.log(eightiesCompanies);

// // // MAP function

// // // Create an array of company names from the list
// // // const companyNames = companies.map(item => item.name);

// // // console.log(companyNames);

// // // const agesSquare = ages.map(item => item * 2).map(item => item * 2);
// // // console.log(agesSquare);

// // // Sort
// // // const sortedCompanies = companies.sort((item, item2) => {
// // //   if (item.start > item2.start) {
// // //     return 1;
// // //   } else {
// // //     return -1;
// // //   }
// // // });
// // // console.log(sortedCompanies);

// // // Sort ages
// // // const sortedAges = ages.sort((a, b) => b - a);
// // // console.log(sortedAges);

// // // Reduce function
// // // const ageSum = ages.reduce((total, age) => total + age, 0);

// // // console.log(ageSum);

// // // get total years of all companies
// // const totalYears = companies.reduce(
// //   (total, company) => total + (company.end - company.start),
// //   0
// // );

// // console.log(totalYears);

// const posts = [
//   {
//     title: "Post One",
//     body: "This is post one"
//   },
//   {
//     title: "Post Two",
//     body: "This is post two"
//   }
// ];

// function getPosts() {
//   setTimeout(() => {
//     let output = "";
//     posts.forEach(item => (output += `<p>${item.title}</p>`));
//     document.body.innerHTML = output;
//   }, 1000);
// }

// function createPost(post) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       posts.push(post);
//       const error = false;

//       if (!error) {
//         resolve();
//       } else {
//         reject("Error: Something went wrong");
//       }
//     }, 2000);
//   });
// }

// var items = document.getElementsByClassName("list-group-item");
// items[1].textContent = "Hello";
// items.style.fontWeight = "bold";

// var odd = document.querySelectorAll("li:nth-child(odd");
// console.log(odd);
// for (i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = "blue";
// }

// function Book(title, author, year) {
//   this.title = title;
//   this.author = author;
//   this.year = year;
// }

//getSummary
// Book.prototype.getSummary = function() {
//   return `${this.title} was written by ${this.author}
//   in ${this.year}`;
// };

// // Magazine constructor
// function Magazine(title, author, year, month) {
//   Book.call(this, title, author, year);
//   this.month = month;
// }

// // Inherit Prototype
// Magazine.prototype = Object.create(Book.prototype);

// const mag1 = new Magazine("Mag1", "John Doe", "2018", "Jan");
// console.log(mag1);

//Object of Protos
// const bookProtos = {
//   getSummary: function() {
//     return `${this.title} was written by ${this.author}
//    in ${this.year}`;
//   },
//   getAge: function() {
//     const year = new Date().getFullYear() - this.year;
//     return `${this.title} is ${years} years old`;
//   }
// };

// // Create object
// const book1 = Object.create(bookProtos);
// book1.title = "Book One";
// book1.author = "John Doe";
// book1.year = "2013";

// console.log(book1);

// class Book {
//   constructor(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
//   }
// }

// Book Class: Represents a Book
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}
// UI Class: Handle UI Tasks
class UI {
  static displayBooks() {
    const books = Store.getBooks();
    books.forEach(book => UI.addBookToList(book));
  }
  static addBookToList(book) {
    const list = document.querySelector("#book-list");
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>`;

    list.appendChild(row);
  }

  static deleteBook(ele) {
    if (ele.classList.contains("delete")) {
      ele.parentElement.parentElement.remove();
    }
  }

  static showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const form = document.querySelector("#book-form");
    container.insertBefore(div, form);

    // Vanish in 3 seconds
    setTimeout(() => document.querySelector(".alert").remove(), 3000);
  }

  static clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }
}
// Store Class: Handle Storage
class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }
    return books;
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
  }

  static removeBook(isbn) {
    const books = Store.getBooks();
    books.forEach((book, index) => {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });

    localStorage.setItem("books", JSON.stringify(books));
  }
}

// Event: Display Books
document.addEventListener("DOMContentLoaded", UI.displayBooks);

// Event: Add a Book
document.querySelector("#book-form").addEventListener("submit", e => {
  e.preventDefault();

  // Get form values
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;

  // Validate input
  if (title === "" || author === "" || isbn === "") {
    UI.showAlert("Please fill in all field", "danger");
  } else {
    // Instatiate book
    const book = new Book(title, author, isbn);
    console.log(book);

    // Add Book to UI
    UI.addBookToList(book);

    // Add book to store
    Store.addBook(book);

    // Show success message
    UI.showAlert("Book Added", "success");

    // Clear fields after
    UI.clearFields();
  }
});

// Event: Remove a Book
document.querySelector("#book-list").addEventListener("click", e => {
  //Remove book from UI
  UI.deleteBook(e.target);

  // Remove book from store
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

  // Show success message
  UI.showAlert("Book Removed", "success");
});
