const celsiusE1 = document.getElementById("Celsius");
const fahrenheitE1 = document.getElementById("Fahrenheit");
const kelvinE1 = document.getElementById("Kelvin");

function computeTemp() {
  const currentValue = parseFloat(event.target.value);

  if (isNaN(currentValue)) {
    // If the input is not a valid number, clear all fields
    celsiusE1.value = '';
    fahrenheitE1.value = '';
    kelvinE1.value = '';
  } else {
    switch (event.target.name) {
      case "Celsius":
        fahrenheitE1.value = (currentValue * 9/5) + 32;
        kelvinE1.value = currentValue + 273.15;
        break;

      case "Fahrenheit":
        celsiusE1.value = (currentValue - 32) * 5/9;
        kelvinE1.value = (currentValue - 32) * 5/9 + 273.15;
        break;

      case "Kelvin":
        celsiusE1.value = currentValue - 273.15;
        fahrenheitE1.value = (currentValue - 273.15) * 9/5 + 32;
        break;

      default:
        break;
    }
  }
}

// Listen for input events on all input fields
const inputFields = document.querySelectorAll('input');
inputFields.forEach(inputField => {
  inputField.addEventListener('input', computeTemp);
});
