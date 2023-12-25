// 1
// function getSum(n) {
//     let sum_odd = 1;
//     let sum_even = 2;
//     for (let i = 2; i <= n; i++) {
//         sum_odd *= (2 * i - 1);
//         sum_even *= (2 * i);
//     }
//     return sum_odd + sum_even;
// }


// 2
// function getHighestNumberOfDigits(arr) {
//     let maxDigits = 0;
//     let result = 0;

//     for (let i = 0; i < arr.length; i++) {
//         const currentDigits = Math.floor(Math.log10(Math.abs(arr[i]))) + 1;
//         if (currentDigits > maxDigits) {
//             maxDigits = currentDigits;
//             result = arr[i];
//         }
//     }

//     return result;
// }
// console.log(maxDigits);

// 3
// function getStringArr(arr) {
//     let stringElements = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === 'string') {
//             stringElements.push(arr[i]);
//         }
//     }

//     return stringElements;
// }

// 4
// function getPunctuationNumber(str) {
//     const punctuationSigns = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~', "'"];
//     let count = 0;

//     for (let i = 0; i < str.length; i++) {
//         if (punctuationSigns.includes(str[i])) {
//             count++;
//         }
//     }

//     return count;
// }

// let str = "Hello! How are you? I'm doing great. What's new?";
// let result = getPunctuationNumber(str);
// console.log(result); // Output: 6

// 5
// function switchLetters(str) {
//     let switchedString = '';

//     for (let i = 0; i < str.length; i++) {
//         const char = str[i];
//         if (char === char.toUpperCase()) {
//             switchedString += char.toLowerCase();
//         } else {
//             switchedString += char.toUpperCase();
//         }
//     }

//     return switchedString;
// }

// let str = "Abdulaziz Programmer";
// let result = switchLetters(str);
// console.log(result); // Output: "aBDULAZIZ pROGRAMMER"

// 6
// function changeObjToArr(obj) {
//     let result = [];

//     for (let key in obj) {
//         result.push(key + obj[key]);
//     }

//     return result;
// }

// let obj = {a: 1, b: 2, c: 3};
// let result = changeObjToArr(obj);
// console.log(result); // Output: ["a1", "b2", "c3"]

// 7
// function separateStudents(students) {
//     let groupedStudents = {
//         grant: [],
//         contract: []
//     };

//     for (let i = 0; i < students.length; i++) {
//         if (students[i].isGrant) {
//             groupedStudents.grant.push(students[i].name);
//         } else {
//             groupedStudents.contract.push(students[i].name);
//         }
//     }

//     return groupedStudents;
// }

// let students = [
//     {name: "Jurabek", isGrant: false},
//     {name: "Elbek", isGrant: true},
//     {name: "Shamshod", isGrant: false},
//     {name: "Kamola", isGrant: false},
//     {name: "Gulnoza", isGrant: true},
//     {name: "Savlatbek", isGrant: false},
// ];

// let result = separateStudents(students);
// console.log(result);

// 8
// function getTotalPages(books) {
//     return books.reduce((totalPages, book) => {
//       if (book.isReadFinished) {
//         return totalPages + book.pages;
//       }
//       return totalPages;
//     }, 0);
//   }
  
//   const books = [
//     { name: "The Great Gatsby", pages: 180, isReadFinished: true },
//     { name: "To Kill a Mockingbird", pages: 336, isReadFinished: false },
//     { name: "Atom habits", pages: 328, isReadFinished: true },
//     { name: "Pride and Prejudice", pages: 432, isReadFinished: false },
//     { name: "The Catcher in the Rye", pages: 224, isReadFinished: true },
//     { name: "The Hobbit", pages: 310, isReadFinished: false },
//     { name: "The Lord of the Rings", pages: 1178, isReadFinished: true },
//     { name: "Harry Potter", pages: 320, isReadFinished: true },
//     { name: "Fahrenheit 451", pages: 249, isReadFinished: false },
//     { name: "To the Lighthouse", pages: 209, isReadFinished: true }
//   ];
  
//   console.log(getTotalPages(books)); // Output: 2439
  
// 9
// Object.prototype.keys = function() {
//     return Object.keys(this);
//   };
  
//   let obj = {a: 1, b: 2, c: 3};
//   console.log(obj.keys()); // Output: ["a", "b", "c"]
  
// 10
// function Student(firstName, lastName, university, course, totalYears, isGrant) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.university = university;
//     this.course = course;
//     this.totalYears = totalYears;
//     this.isGrant = isGrant;
//   }
  
//   Student.prototype.getInfo = function() {
//     let grantStatus = this.isGrant ? 'grant asosida ' : 'grant olmagan ';
//     let yearsToGraduate = this.totalYears - this.course;
  
//     return `${this.firstName} ${this.lastName} ${this.university} universitetida ${this.course}-kursda ${grantStatus}o'qiydi. ${yearsToGraduate} yildan keyin universitetdan qutuladi.`;
//   };
  
//   let student = new Student("Abdulaziz", "Programmer", "TATU", 3, 4, true);
//   console.log(student.getInfo()); // Output: "Abdulaziz Programmer TATU universitetida 3-kursda grant asosida o'qiydi. 1 yildan keyin universitetdan qutuladi."
  