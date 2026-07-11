// switch statement ka use ek value ko multiple cases se compare karne ke liye hota hai.
//
// Syntax:
// switch (expression) {
//     case value:
//         // Code
//         break;
//
//     default:
//         // Agar koi bhi case match na ho
//         break;
// }
//
// Important:
// - switch jis case se match hota hai, usi case se execution start hota hai.
// - Agar 'break' na ho, to uske baad ke saare cases bhi execute ho jate hain.
//   Isse "fall-through" kehte hain.
// - default tab execute hota hai jab koi bhi case match nahi karta.

const month = 3;

switch (month) {

    // Agar month = 1 ho
    case 1:
        console.log("January");
        break; // Switch se bahar nikal jao

    // Agar month = 2 ho
    case 2:
        console.log("Feb");
        break;

    // Agar month = 3 ho
    case 3:
        console.log("March");
        break;

    // Agar month = 4 ho
    case 4:
        console.log("April");
        break;

    // Agar koi bhi case match na kare
    default:
        console.log("Default case match");
        break;
}