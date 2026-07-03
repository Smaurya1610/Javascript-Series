// ================================================================
// OBJECT CREATION
// ================================================================

// Empty object using literal (most common way)
const tinderUser = {};

// Adding properties dynamically
tinderUser.Id = "123sbc";
tinderUser.name = "sam";
tinderUser.isloggedIn = false;

console.log(tinderUser);

// Output:
// { Id: '123sbc', name: 'sam', isloggedIn: false }


// ================================================================
// NESTED OBJECT
// ================================================================

const regularUser = {
    email: "same@1234gmail.com",
    fullname: {
        userfullname: {
            firstname: "Sameer",
            lastname: "kushwaha"
        }
    }
};

// Accessing nested object values

console.log(regularUser.fullname); 
// { userfullname: { firstname: 'Sameer', lastname: 'kushwaha' } }

console.log(regularUser.fullname.userfullname.firstname);
// Sameer

console.log(regularUser["fullname"]["userfullname"]["firstname"]);
// Sameer


// ================================================================
// OBJECTS FOR MERGING
// ================================================================

const obj1 = {
    1: "a",
    2: "b"
};

const obj2 = {
    3: "c",
    4: "d"
};

const obj4 = {
    5: "c",
    6: "d"
};

// ================================================================
// WRONG WAY (nested object issue)
// ================================================================

// const obj3 = { obj1, obj2 };
// This creates nested objects:
// { obj1: {...}, obj2: {...} }


// ================================================================
// MERGING OBJECTS
// ================================================================

// Object.assign(target, source1, source2...)

const obj3 = Object.assign(obj1, obj2, obj4);
// NOTE: modifies obj1 itself

const obj5 = Object.assign({}, obj1, obj2, obj4);
// safe way (new object created)

console.log(obj3, obj5);


// ================================================================
// SPREAD OPERATOR (BEST WAY)
// ================================================================

const obj6 = { ...obj1, ...obj2, ...obj4 };
console.log(obj6);


// ================================================================
// ARRAY OF OBJECTS
// ================================================================

const User = [
    {
        id: 1,
        email: "zycgmail.com"
    },
    {
        id: 2,
        email: "zycgmail.com"
    },
    {
        id: 3,
        email: "zycgmail.com"
    },
    {
        id: 4,
        email: "zycgmail.com"
    }
];

// Accessing array of objects
console.log(User[1].email); 
// zycgmail.com


// ================================================================
// OBJECT HELPER METHODS
// ================================================================

console.log(tinderUser);

// Get all keys (returns array)
console.log(Object.keys(tinderUser));
// [ 'Id', 'name', 'isloggedIn' ]

// Get all values
console.log(Object.values(tinderUser));
// [ '123sbc', 'sam', false ]

// Get key-value pairs
console.log(Object.entries(tinderUser));
// [ [ 'Id', '123sbc' ], [ 'name', 'sam' ], [ 'isloggedIn', false ] ]

// Check if property exists
console.log(tinderUser.hasOwnProperty("isloggedIn"));
// true