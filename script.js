function calculateBMI() {
    const height = parseFloat(document.getElementById("Height").value);
    const weight = parseFloat(document.getElementById("Weight").value);

    
    if (height > 0 && weight > 0) {
        // Calculate BMI
        const BMI = (weight / (height * height)).toFixed(2);

        // Determine the category based on BMI value
        let category = "";
        if (BMI < 18.5) {
            category = "Underweight";
        } else if (BMI >= 18.5 && BMI < 24.9) {
            category = "Normal Weight";
        } else if (BMI >= 25 && BMI < 29.9) {
            category = "Overweight";
        } else {
            category = "Obesity";
        }

        // Display the BMI and category
        document.getElementById("result").innerHTML = `Your BMI is ${BMI} (${category})`;
    } else {
        // Display error message if height or weight are not valid
        document.getElementById("result").textContent = 'Please enter valid height and weight values.';
    }
}
