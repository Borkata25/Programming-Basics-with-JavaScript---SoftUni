/*
Напишете програма, която при въведени градуси (реално число) принтира какво е времето, като имате предвид следната таблица:
Градуси	Време
26.00 - 35.00	Hot
20.1 - 25.9	Warm
15.00 - 20.00	Mild
12.00 - 14.9	Cool
5.00 - 11.9	Cold
Ако се въведат градуси, различни от посочените в таблицата, да се отпечата "unknown".

*/

function weatherForcast(input) {
    let forcast = parseFloat(input[0])
    if (forcast >= 26 && forcast <= 35) {
        console.log("Hot");
    }
    else if (forcast >= 20.1 && forcast <= 25.9) {
        console.log("Warm");
    }
    else if (forcast >= 15 && forcast <= 20) {
        console.log("Mild");
    }
    else if (forcast >= 12 && forcast <= 14.9) {
        console.log("Cool");
    }
    else if (forcast >= 5 && forcast <= 11.9) {
        console.log("Cold");
    }
    else {
        console.log("unknown");
    }
}
weatherForcast([""])