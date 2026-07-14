// Array of programming languages
const coding = ["rb", "python", "js", "cpp", "java"];

// forEach using a normal (anonymous) function
coding.forEach(function (item) {
  console.log(item);
});

// Callback function usually doesn't have a name
// (Here an anonymous function is used)

// forEach using an arrow function
coding.forEach((item) => {
  console.log(item);
});

// Named function
function printMe(item) {
  console.log(item);
}

// Correct: Pass the function reference
// forEach will call printMe(item) internally for each element
coding.forEach(printMe);

// Wrong: printMe() executes immediately and returns undefined,
// so forEach receives undefined instead of a function.
// coding.forEach(printMe());

// ------------------------------------------------------------------------------------------
// forEach provides three parameters:
// item  -> current element
// index -> index of current element
// arr   -> original array
coding.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

// Array of objects
const mycoding = [
  {
    language: "javascript",
    languagefilename: "js",
  },
  {
    language: "python",
    languagefilename: "py",
  },
  {
    language: "ruby",
    languagefilename: "rb",
  },
];

// Loop through each object in the array
mycoding.forEach((item) => {
  // Print the value of the 'language' property
  console.log(item.language);

  // Print the file extension (uncomment if needed)
  console.log(item.languagefilename);
});