// ==========================================
// FOR LOOP
// ==========================================
//
// Syntax:
// for (initialization; condition; increment/decrement) {
//     // Code
// }
//
// initialization -> Sirf ek baar chalta hai.
// condition      -> Har iteration se pehle check hoti hai.
// increment      -> Har iteration ke baad chalta hai.

for (let i = 0; i <= 10; i++) {

    // Current value store karna
    let element = i;

    // Agar value 5 hai
    if (element == 5) {
        console.log("5 is the best number");
    }

    // Current value print karna
    console.log(element);
}



// ==========================================
// NESTED FOR LOOP
// ==========================================
//
// Ek loop ke andar doosra loop.

for (let i = 1; i <= 10; i++) {

    // Outer loop
    console.log(`Outer Loop: ${i}`);

    for (let j = 1; j <= 10; j++) {

        // Inner loop
        console.log(`Inner Loop: ${j}`);

        // Multiplication Table
        // console.log(`${i} * ${j} = ${i * j}`);
    }
}



// ==========================================
// LOOP THROUGH ARRAY
// ==========================================

let myArray = ["Batman", "Superman", "Spiderman", "PP"];

// Array ki length tak loop chalega.
for (let index = 0; index < myArray.length; index++) {

    // Current element ko access karna
    const element = myArray[index];

    console.log(element);
}



// ==========================================
// break Keyword
// ==========================================
//
// break loop ko turant stop kar deta hai.

for (let index = 1; index <= 20; index++) {

    if (index == 5) {
        console.log("Detected 5");

        // Loop yahi khatam ho jayega.
        break;
    }

    console.log(`Value of i is ${index}`);
}



// ==========================================
// continue Keyword
// ==========================================
//
// continue current iteration ko skip karta hai.
// Loop band nahi hota, next iteration chalti hai.

for (let index = 1; index <= 20; index++) {

    if (index == 5) {
        console.log("Detected 5");

        // Sirf is iteration ko skip karo.
        continue;
    }

    console.log(`Value of i is ${index}`);
}