// ===============================
// Object Destructuring
// ===============================

const course = {
  coursename: "Js in Hindi",
  price: 222,
  courseInstructor: "Sameer",
};

// Normal way to access properties
console.log(course.price);

// Object Destructuring
// courseInstructor ko rename karke "instructor" variable me store kiya hai
const { courseInstructor: instructor, price, coursename } = course;

// console.log(courseInstructor);
// Error: courseInstructor naam ka variable exist nahi karta,
// kyunki destructuring ke time humne uska naam "instructor" rakh diya hai.

console.log(instructor); // Sameer
console.log(price); // 222
console.log(coursename); // Js in Hindi


// ===============================
// API Response
// ===============================

// API se data aksar JSON format me milta hai.

// {
//   "name": "Sameer",
//   "coursename": "JS in Hindi",
//   "price": "Free"
// }

// Kabhi-kabhi API ek object return karti hai,
// aur kabhi multiple records hone par array of objects return karti hai.

[
  {
    "id": 1,
    "name": "Sameer"
  },
  {
    "id": 2,
    "name": "Rahul"
  },
  {
    "id": 3,
    "name": "Aman"
  }
]