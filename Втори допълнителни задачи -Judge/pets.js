/*
Марина обича да пътува. Тя има 3 домашни любимеца (куче, котка и костенурка).
 Когато заминава на пътешествие трябва да съобрази колко храна да им остави, за да не останат гладни.
  Напишете програма, която пресмята колко килограма храна ще изядат всички за времето,
   в което Марина отсъства и дали оставената храна от нея ще им е достатъчна. 
   Всяко животно изяжда определено количество храна на ден.
Вход
От конзолата се четат пет реда:
•	Първи ред – брой дни – цяло число в интервал [1…5000]
•	Втори ред – оставена храна в килограми – цяло число в интервал [0…100000]
•	Трети ред – храна на ден за кучето в килограми – реално число в интервал [0.00…100.00]
•	Четвърти ред – храна на ден за котката в килограми– реално число в интервал [0.00…100.00]
•	Пети ред – храна на ден за костенурката в грамове – реално число в интервал [0.00…10000.00]
Изход
На конзолата трябва да се отпечата на един ред:
•	Ако оставената храна Е достатъчна:
o	"{килограма остатък} kilos of food left."
	Резултатът трябва да е закръглен към по-ниското цяло число
•	Ако оставената храна НЕ Е достатъчна:
o	“{килограма недостигат} more kilos of food are needed.”
	Резултатът трябва да е закръглен към по-високото цяло число
*/

function pets(input) {
    let daysCount = parseFloat(input[0]);
    let leftFoodKg = parseFloat(input[1]);
    let foodInKgForDoggiForDay = parseFloat(input[2]);
    let foodInKgForCatForDay = parseFloat(input[3]);
    let foodInKgForTurtleForDay = parseFloat(input[4]);
    let neededFoodForDog = daysCount * foodInKgForDoggiForDay;
    let neededFoodForCat = daysCount * foodInKgForCatForDay;
    let neededFoodForTurtle = daysCount * foodInKgForTurtleForDay / 1000;
    let totalFood = neededFoodForCat + neededFoodForDog + neededFoodForTurtle;
    if (totalFood < leftFoodKg) {
        let leftovers = leftFoodKg - totalFood;
        let floor = Math.floor(leftovers);
        console.log(`${floor} kilos of food left.`);
    }
    else {
        let neededFood = totalFood - leftFoodKg;
        let ceil = Math.ceil(neededFood);
        console.log(`${ceil} more kilos of food are needed.`);
    }

}
pets(["2", "10", "1", "1", "1200"])