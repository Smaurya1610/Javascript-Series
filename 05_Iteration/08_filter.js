// -------------------- forEach vs filter --------------------

const coding = ["rb", "python", "js", "cpp", "java"];

forEach() //always returns undefined.
// It is used for iterating over an array, not for creating a new one.

const value = coding.forEach((item) => {
    // console.log(item);
    return item;
});

console.log(value); // undefined


// -------------------- filter() Example --------------------

const muNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Implicit return
// Returns all numbers greater than 4

const newNums = muNums.filter((num) => num > 4);


// Explicit return
// When using {}, you must write return.

const newNums = muNums.filter((num) => {
    return num > 4;
});


// -------------------- Doing the same with forEach --------------------

// Create an empty array
// const newNums = [];

// Iterate over every element
muNums.forEach((num) => {
    // Push only numbers greater than 4
    if (num > 4) {
        newNums.push(num);
    }
});

console.log(newNums);


// -------------------- Array of Objects --------------------

const books = [
  {
    title: "The Alchemist",
    genre: "Fiction",
    publish: 1988,
    edition: "1st",
  },
  {
    title: "Clean Code",
    genre: "Programming",
    publish: 2008,
    edition: "2nd",
  },
  {
    title: "Harry Potter",
    genre: "Fantasy",
    publish: 1997,
    edition: "3rd",
  },
  {
    title: "The Pragmatic Programmer",
    genre: "Programming",
    publish: 1999,
    edition: "2nd",
  },
  {
    title: "The Hobbit",
    genre: "Fantasy",
    publish: 1937,
    edition: "4th",
  },
];


// -------------------- Filter by One Condition --------------------

// Return only Fantasy books

const userBook = books.filter((bk) => bk.genre === "Fantasy");


// -------------------- Filter by Multiple Conditions --------------------

// Return books that:
// 1. Were published in or after 1990
// 2. Belong to the Programming genre

const userBook = books.filter((bk) => {
  return bk.publish >= 1990 && bk.genre === "Programming";
});

// Print the filtered array
console.log(userBook);