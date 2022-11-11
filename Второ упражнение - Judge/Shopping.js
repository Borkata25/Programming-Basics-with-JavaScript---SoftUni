/**
 Петър иска да купи N видеокарти, M процесора и P на брой рам памет.
  Ако броя на видеокартите е по-голям от този на процесорите получава 15% отстъпка от крайната сметка. Важат следните цени:
•	Видеокарта – 250 лв./бр.
•	Процесор – 35% от цената на закупените видеокарти/бр.
•	Рам памет – 10% от цената на закупените видеокарти/бр.
Да се изчисли нужната сума за закупуване на материалите и да се пресметне дали бюджета ще му стигне.
Вход
Входът се състои от четири реда:
1.	Бюджетът на Петър - реално число в интервала [0.0…100000.0]
2.	Броят видеокарти - цяло число в интервала [0…100]
3.	Броят процесори - цяло число в интервала [0…100]
4.	Броят рам памет - цяло число в интервала [0…100]
Изход
На конзолата се отпечатва 1 ред, който трябва да изглежда по следния начин:
•	Ако бюджета е достатъчен:
"You have {остатъчен бюджет} leva left!"
•	Ако сумата надхвърля бюджета:
"Not enough money! You need {нужна сума} leva more!"
Резултатът да се форматира до втория знак след десетичната запетая.
 */

function shopping(input) {
    let budget = parseFloat(input[0]);
    let videoCardsCount = parseFloat(input[1]);
    let procesorsCount = parseFloat(input[2]);
    let ramMemoryCount = parseFloat(input[3]);
    let videoCardsPrice = videoCardsCount * 250;
    let procesorsPrice = videoCardsPrice * 0.35 * procesorsCount;
    let ramMemoryPrice = videoCardsPrice * 0.1 * ramMemoryCount;
    let combinedPrice = videoCardsPrice + procesorsPrice + ramMemoryPrice;
    if (videoCardsCount > procesorsCount) {
        let discount = combinedPrice * 0.15;
        combinedPrice = combinedPrice - discount;
    }
    if (budget > combinedPrice) {
        let moneyLeft = budget - combinedPrice;
        moneyLeft = moneyLeft.toFixed(2);
        console.log(`You have ${moneyLeft} leva left!`)
    }
    else {
        let neededMoney = combinedPrice - budget;
        neededMoney = neededMoney.toFixed(2);
        console.log(`Not enough money! You need ${neededMoney} leva more!`)
    }
}
shopping(["920.45",
"3",
"1",
"1"])
