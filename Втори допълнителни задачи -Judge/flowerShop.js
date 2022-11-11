/*
Мария иска да купи подарък на сина си. Тя работи в магазин за цветя. В магазина идва поръчка за цветя. 
Напишете програма, която пресмята сумата от поръчката и дали печалбата е достатъчна за подаръка.
 Цветята имат следните цени:
 
•	Магнолии – 3.25 лева
•	Зюмбюли – 4 лева
•	Рози – 3.50 лева
•	Кактуси – 8 лева
От общата сума, Мария трябва да плати 5% данъци.
 
 
Вход
Входът се чете от конзолата и се състои от 5 реда:
•	Брой магнолии – цяло число в интервала [0 … 50]
•	Брой зюмбюли – цяло число в интервала [0 … 50]
•	Брой рози – цяло число в интервала [0 … 50]
•	Брой кактуси – цяло число в интервала [0 … 50]
•	Цена на подаръка – реално число в интервала [0.00 … 500.00]
Изход
На конзолата трябва да се отпечата един ред.
Ако парите СА стигнали: "She is left with {останали} leva." –
 сумата трябва да е закръглена към по-малко цяло число (пр. 1.90 -> 1).
Ако парите НЕ достигат: "She will have to borrow {останали} leva." – 
сумата трябва да е закръглена към по-голямо цяло число (пр. 1.10 -> 2).

*/
function flowerShop(input) {
    let magnolii = Number(input[0]);
    let zumbuli = Number(input[1]);
    let rozi = Number(input[2]);
    let kaktusi = Number(input[3]);
    let giftPrice = parseFloat(input[4]);
    let magnoliiPrice = magnolii * 3.25;
    let zumbuliPrice = zumbuli * 4;
    let roziPrice = rozi * 3.50;
    let kaktusiPrice = kaktusi * 8;
    let totalSumm = (magnoliiPrice + zumbuliPrice + roziPrice + kaktusiPrice) - (magnoliiPrice + zumbuliPrice + roziPrice + kaktusiPrice) * 0.05;
    totalSumm = totalSumm.toFixed(2);
    if (totalSumm > giftPrice) {
        let moneyLeft = (totalSumm - giftPrice);
        moneyLeft = Math.floor(moneyLeft);
        console.log(`She is left with ${moneyLeft} leva.`)
    }
    else {
        let borowMoney = giftPrice - totalSumm;
        borowMoney = Math.ceil(borowMoney)
        console.log(`She will have to borrow ${borowMoney} leva.`)
    }


}
flowerShop(["15", "7", "5", "10", "100"])