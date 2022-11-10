/**
 3.	Конзолен конвертор: от градуси °C към градуси °F
Напишете програма, която чете градуси по скалата на Целзий (°C) и ги преобразува до градуси по скалата на Фаренхайт (°F).
 Потърсете в Интернет подходяща формула, с която да извършите изчисленията. Форматирате изхода до втория знак след десетичната запетая. 
fahrenheit = celsius * 1.8 + 32
 */

function celsiusToFahrenheit(input) {
    let celsius = parseFloat(input[0]);
    let fahrenheit = celsius * 1.8 + 32;
    let toStringAction = fahrenheit.toFixed(2);
    console.log(toStringAction);
}
celsiusToFahrenheit(["25"])