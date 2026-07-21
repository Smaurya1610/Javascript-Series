// Select the form element
const form = document.querySelector("form");

// These lines are commented because they run before user enters any value,
// so they return empty values.
// const height = parseInt(document.querySelector('#height').value);
// const weight = parseInt(document.querySelector('#weight').value);

// Run this function when the form is submitted
form.addEventListener("submit", function (e) {

    // Prevent page refresh after form submission
    e.preventDefault();

    // Get height and weight from input fields
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);

    // Select the result div
    const results = document.querySelector("#results");

    // Validate height
    if (height === "" || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height`;
    }

    // Validate weight
    else if (weight === "" || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight`;
    }

    // If both inputs are valid
    else {

        // Calculate BMI
        // Formula: BMI = Weight(kg) / Height²(m²)
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        // Check BMI category

        // Underweight
        if (bmi <= 18.6) {
            results.innerHTML = `Your BMI is <span>${bmi}</span> (Underweight)`;
        }

        // Normal Weight
        else if (bmi >= 18.6 && bmi < 24.9) {
            results.innerHTML = `Your BMI is <span>${bmi}</span> (Normal Weight)`;
        }

        // Overweight
        else if (bmi >= 24.9) {
            results.innerHTML = `Your BMI is <span>${bmi}</span> (Overweight)`;
        }
    }
});