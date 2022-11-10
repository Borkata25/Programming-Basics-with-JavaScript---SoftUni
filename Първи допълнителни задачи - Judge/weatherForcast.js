/*
Напишете програма, която познава дали е топло или студено навън.
 От конзолата се чете един ред – текст, който подсказва какво е времето.
  При въвеждане на "sunny" трябва да се отпечата "It's warm outside!".
  Във всички останали случаи трябва да се отпечата "It's cold outside!". 
*/

function weatherForcast(input) {
    let weather = input[0];
    if (weather === "sunny") {
        console.log(`It's warm outside!`);
    }
    else {
        console.log(`It's cold outside!`);
    }
}
weatherForcast(["cloudy"]);