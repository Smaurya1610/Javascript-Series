// User ke account ka balance
const balance = 1000;

// Balance ke hisaab se condition check karna
if (balance < 500) {
    console.log("Balance less than 500");
}
else if (balance < 700) {
    console.log("Balance less than 700");
}
else if (balance < 900) {
    console.log("Balance less than 900");
}
else {
    // Agar upar ki koi bhi condition true nahi hui
    console.log("Balance is less than 1200");
}


// Login aur payment se related variables
const userloggedIn = true;
const debitcard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;


// AND (&&) Operator
// Dono conditions true honi chahiye
if (userloggedIn && debitcard) {
    console.log("Allow to buy course");
}


// OR (||) Operator
// Kisi ek condition ka true hona kaafi hai
if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("Logged In");
}