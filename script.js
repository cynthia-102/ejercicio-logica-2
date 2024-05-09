let celsiusInput = prompt("Ingresa la temperatura en grados Celsius:");
// Convertir la entrada a un número
let celsius = parseFloat(celsiusInput);
// Convertir la temperatura a grados Fahrenheit y Kelvin
let fahrenheit = (celsius * 9/5) + 32;
let kelvin = celsius + 273.15;
// Imprimir resultados
console.log("Grados Fahrenheit:", fahrenheit.toFixed(2));
console.log("Grados Kelvin:", kelvin.toFixed(2));