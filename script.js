document.getElementById("calculate").addEventListener("click", function() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100; // Convert to meters

    if (isNaN(weight) || isNaN(height) || height === 0) {
        document.getElementById("result").textContent = "Please enter valid values.";
        return;
    }

    const bmi = weight / (height * height);
    let status = "";

    if (bmi < 18.5) {
        status = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        status = "Normal";
    } else {
        status = "Overweight";
    }

    document.getElementById("result").textContent = `Your BMI: ${bmi.toFixed(2)} - ${status}`;
    
});
