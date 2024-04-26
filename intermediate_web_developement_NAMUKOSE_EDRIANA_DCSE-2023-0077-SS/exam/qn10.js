function fahrenheitToCelsius(fahrenheit) {
    var celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}

var fahrenheitTemperature = 77.2;
var celsiusTemperature = fahrenheitToCelsius(fahrenheitTemperature);
console.log(celsiusTemperature);