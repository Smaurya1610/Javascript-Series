// this Keyword in JavaScript

// Jab hum kisi object ke andar method (function) banate hain aur us method ke andar usi object ki properties (keys/values) ko access karna chahte hain, tab hum this keyword ka use karte hain.

// this us object ko refer karta hai jis object ne method ko call kiya hai.

const course = {
    coursename: "Js in hindi",
    price: 222,
    courseInstructor: "sameer",

    // Object method
    printprice() {
        // 'this' refers to the object that calls this method.
        // Here, 'this' === course
        console.log(this.price);
        // console.log(course.price);
    }
};

// Directly accessing the property using the object name
console.log(course.price); // Output: 222

// Directly calling the object method
course.printprice(); // Output: 222

/*
console.log(this.price);
console.log(course.price);

Lekin best practice this.price use karna hai.

Kyun?

Agar object ka naam future me badal diya jaye, to this.price fir bhi sahi kaam karega.
this code ko zyada reusable aur maintainable banata hai.
Isi wajah se object methods ke andar this ka use kiya jata hai.*/



/*
Explanation:

1. course.price
   - Accesses the 'price' property directly from the course object.
   - Output: 222

2. course.printprice()
   - The method is called using the course object.
   - Therefore, inside printprice(), 'this' refers to course.
   - this.price becomes course.price.
   - Output: 222

Key Point:
Whenever an object calls its own method using dot notation (object.method()),
'this' refers to that object.
*/