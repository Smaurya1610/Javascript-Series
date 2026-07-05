// ---------------------- Function Declaration ----------------------

function sayMyName() {
    console.log("s")
    console.log("a")
    console.log("m")
    console.log("e")
    console.log("e")
    console.log("r")
}

 sayMyName      // Function reference (does not execute the function)
sayMyName()    // Function execution (calls the function)


// ---------------------- Function with Parameters ----------------------

function addTwoNumber(number1, number2) {
  // number1 and number2 are PARAMETERS
  console.log(number1 + number2);
}

// Arguments are the actual values passed to the function
addTwoNumber(4,2);          // Output: 6
addTwoNumber(4,"2");        // Output: "42" (Number + String = String concatenation)
addTwoNumber(4,"a");        // Output: "4a"
addTwoNumber(3,null);       // Output: 3 (null is converted to 0)
addTwoNumber(3,undefined);  // Output: NaN (undefined cannot be converted to a number)

//  const result = addTwoNumber(3,4);
// console.log("Result :", result); // undefined because function only prints, doesn't return


// ---------------------- Function with Return ----------------------

function addTwoNumber(number1, number2) {

    // Store the sum in a variable
    // let result = number1 + number2;

    // Return the result to the caller
    // return result;

    // This line will never execute because it is after return
    // console.log("sameer");

    // Short way of returning the sum
    return number1 + number2;
}

// Calling the function and storing the returned value
const result = addTwoNumber(3, 4);

 console.log("Result :", result); // Output: 7


// ---------------------- Default Parameters ----------------------

// If no argument is passed, username will automatically become "sam"
function loginUserMessage(username = "sam") {

    // Alternative way to check undefined
    // if (username === undefined) {
    //     console.log("Please enter a user name");
    //     return;
    // }

    // !username checks for all falsy values:
    // undefined, null, "", 0, false, NaN
    if (!username) {
        console.log("Please enter a user name");
        return;
    }

    // Template literal
    return `${username} just logged in`;
}


// ---------------------- Function Calls ----------------------

console.log(loginUserMessage("sameer"));
// Output: sameer just logged in

console.log(loginUserMessage(""));
// Output:
// Please enter a user name
// undefined
// Because "" is a falsy value

console.log(loginUserMessage());
// Output: sam just logged in
// Since no argument is passed, the default value "sam" is used.