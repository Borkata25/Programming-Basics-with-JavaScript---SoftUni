/*
Снимките за дългоочаквания филм "Годзила срещу Конг" започват. 
Сценаристът Адам Уингард ви моли да напишете функция, която да изчисли,
 дали предвидените средства са достатъчни за снимането на филма. За снимките  ще бъдат нужни определен брой статисти,
  облекло за всеки един статист и декор.
Известно е, че:
•	Декорът за филма е на стойност 10% от бюджета. 
•	При повече от 150 статиста,  има отстъпка за облеклото на стойност 10%.
Вход
Функцията получава 3 аргумента:
1.	Бюджет за филма – реално число в интервала [1.00 … 1000000.00]
2.	Брой на статистите – цяло число в интервала [1 … 500]
3.	Цена за облекло на един статист – реално число в интервала [1.00 … 1000.00]
Изход
На конзолата трябва да се отпечатат два реда:
•	Ако  парите за декора и дрехите са повече от бюджета:
o	"Not enough money!"
o	"Wingard needs {парите недостигащи за филма} leva more."
•	Ако парите за декора и дрехите са по малко или равни на бюджета:
o	"Action!" 
o	"Wingard starts filming with {останалите пари} leva left."
Резултатът трябва да е форматиран до втория знак след десетичната запетая.

*/
function godzilaVsKong(input) {
    let budget = parseFloat(input[0]);
    let extrasCount = parseFloat(input[1]);
    let priceForExtraCostume = parseFloat(input[2]);
    let decor = budget * 0.1;
    if (extrasCount > 150) {
        priceForExtraCostume = priceForExtraCostume - priceForExtraCostume * 0.1;
    }
    let extraTotalCost = priceForExtraCostume * extrasCount;
    let extrasDecorSum = extraTotalCost + decor;
    if(budget>=extrasDecorSum) {
        let leftOverMoney = budget-extrasDecorSum;
        leftOverMoney=leftOverMoney.toFixed(2);
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${leftOverMoney} leva left.`);
    } else {
        let neededMoney =extrasDecorSum - budget;
        neededMoney=neededMoney.toFixed(2);
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${neededMoney} leva more.`);
    }
    
}
godzilaVsKong(["20000", "120", "55.5"]);