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
function toyShop(input) {
    let trip = Number(input[0]);
    let puzzelCount = Number(input[1]);
    let talkingDolls = Number(input[2]);
    let tedyBearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trucsCount = Number(input[5]);
    let totalSum = puzzelCount * 2.60 + talkingDolls * 3 + tedyBearsCount * 4.10 + minionsCount * 8.20 + trucsCount * 2;
    let totalCount = puzzelCount + talkingDolls + tedyBearsCount + minionsCount + trucsCount;
    if (totalCount >= 50) {
        totalSum = totalSum * 0.75;
    }
    let moneyAfterRent = totalSum * 0.90;
    if (moneyAfterRent >= trip) {
        let leftOvers = moneyAfterRent - trip;
        console.log(`Yes! ${leftOvers.toFixed(2)} lv left.`);
    }
    else {
        let moneyNeeded = trip - moneyAfterRent;
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);

    }
}
toyShop(["320", "8", "2", "5", "5", "1"]);