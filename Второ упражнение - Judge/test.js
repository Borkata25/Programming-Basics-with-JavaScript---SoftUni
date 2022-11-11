/*
Трима спортни състезатели финишират за някакъв брой секунди (между 1 и 50). 
Да се напише функция, която получава три аргумента - секунди и пресмята сумарното им време във формат "минути:секунди". 
Секундите да се изведат с водеща нула (2  "02", 7  "07", 35  "35"). 
*/
/*function sumSec(input) {
    let firstFinished = Number(input[0]);
    let secondFinished = Number(input[1]);
    let thirdFinished = Number(input[2]);
    let totalTime = firstFinished + secondFinished + thirdFinished;
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;
    if (seconds<10) {
        console.log(`${minutes}:0${seconds}`);
    }
    else { 
        console.log(`${minutes}:${seconds}`);
    }

}
sumSec(["22", "7", 
"34"])*/

/*
Дадено е цяло число – начален брой точки. Върху него се начисляват бонус точки по правилата,
 описани по-долу. Да се напише функция, която пресмята бонус точките, които получава числото и общия брой точки (числото + бонуса).
    Ако числото е до 100 включително, бонус точките са 5.
    Ако числото е по-голямо от 100, бонус точките са 20% от числото.
    Ако числото е по-голямо от 1000, бонус точките са 10% от числото.

    Допълнителни бонус точки (начисляват се отделно от предходните):
    За четно число  + 1 т.
    За число, което завършва на 5  + 2 т.

*//*
function bonusPoints(input) {
    let score = parseFloat(input[0]);
    let bonus = 0.0;
    if (score <= 100) {
        bonus = 5;
    } else if (score > 100 && score < 1000) {
        bonus = score * 0.2;
    } else if (score >= 1000) {
        bonus = score * 0.1;
    }
    if (score % 2 == 0) {
        bonus += 1;
    } else if (score % 10 == 5) {
        bonus += 2;
    }
    score = bonus + score;
    console.log(bonus);
    console.log(score);
}
bonusPoints(["20"]);*/

/*
Петя има магазин за детски играчки. Тя получава голяма поръчка, която трябва да изпълни. С парите,
 които ще спечели иска да отиде на екскурзия. 
Цени на играчките:
•	Пъзел - 2.60 лв.
•	Говореща кукла - 3 лв.
•	Плюшено мече - 4.10 лв.
•	Миньон - 8.20 лв.
•	Камионче - 2 лв.
Ако поръчаните играчки са 50 или повече магазинът прави отстъпка 25% от общата цена.
 От спечелените пари Петя трябва да даде 10% за наема на магазина. Да се пресметне дали парите ще ѝ стигнат да отиде на екскурзия.
Вход
От конзолата се четат 6 реда:
1.	Цена на екскурзията - реално число в интервала [1.00 … 10000.00]
2.	Брой пъзели - цяло число в интервала [0… 1000]
3.	Брой говорещи кукли - цяло число в интервала [0 … 1000]
4.	Брой плюшени мечета - цяло число в интервала [0 … 1000]
5.	Брой миньони - цяло число в интервала [0 … 1000]
6.	Брой камиончета - цяло число в интервала [0 … 1000]
Изход
На конзолата се отпечатва:
•	Ако парите са достатъчни се отпечатва:
o	"Yes! {оставащите пари} lv left."
•	Ако парите НЕ са достатъчни се отпечатва:
o	"Not enough money! {недостигащите пари} lv needed."

Резултатът трябва да се форматира до втория знак след десетичната запетая.

*/
/*function toyShop(input) {
    let tripMoney = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let talkingDollsCount = Number(input[2]);
    let teddyBearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trucksCount = Number(input[5]);
    let sumMoney = puzzleCount * 2.60 + talkingDollsCount * 3 + teddyBearsCount * 4.10 + minionsCount * 8.20 + trucksCount * 2;
    let totalCount = puzzleCount + talkingDollsCount + teddyBearsCount + minionsCount + trucksCount;
    if (totalCount >= 50) {
        sumMoney = sumMoney * 0.75;

    }
    let moneyAfterRent = sumMoney * 0.90;
    if (moneyAfterRent >= tripMoney) {
        let leftOverMoney = moneyAfterRent - tripMoney;
        console.log(`Yes! ${leftOverMoney.toFixed(2)} lv left.`);
    }
    else {
        let neededMoney = tripMoney - moneyAfterRent;
        console.log(`Not enough money! ${neededMoney.toFixed(2)} lv needed.`);
    }
}
    toyShop(["320",
        "8",
        "2",
        "5",
        "5",
        "1"]);
*/

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
    let statistCount = parseFloat(input[1]);
    let moneyForStatist = parseFloat(input[2]);
    let decor = budget * 0.10;


    if (statistCount > 150) {
        moneyForStatist = moneyForStatist - moneyForStatist * 0.1;
    }
    let money = statistCount * moneyForStatist;
    let combinedMoney = decor + money;
    if (combinedMoney > budget) {
        let moneyNeeded = combinedMoney - budget;
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`);
    }
    else if (combinedMoney <= budget) {
        let leftOverMoney = budget - combinedMoney;
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${leftOverMoney.toFixed(2)} leva left.`);
    }
}
godzilaVsKong(["20000",
"120",
"55.5"])
	


