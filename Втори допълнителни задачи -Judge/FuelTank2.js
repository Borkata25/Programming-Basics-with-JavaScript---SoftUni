/*
Напишете програма, която да изчислява, колко ще струва на един шофьор да напълни резервоара на автомобила си,
 като знаете – какъв тип гориво зарежда, каква е цената за литър гориво и дали разполага с карта за отстъпки. Цените на горивата са както следва: 
•	Бензин – 2.22 лева за един литър, 
•	Дизел – 2.33 лева за един литър
•	Газ – 0.93 лева за литър
Ако водача има карта за отстъпки, 
 той се възползва от следните намаления за литър гориво: 18 ст. за литър бензин, 12 ст. за литър дизел и 8 ст. за литър газ. 
Ако шофьора е заредил между 20 и 25 литра включително, той получава 8 процента отстъпка от крайната цена, при повече от 25 литра гориво,
 той получава 10 процента отстъпка от крайната цена.
Вход
Входът се чете от конзолата и се състои от 3 реда:
•	Типа на горивото – текст с възможности: "Gas", "Gasoline" или "Diesel"
•	Количество гориво – реално число в интервала [1.00 … 50.00]
•	Притежание на клубна карта – текст с възможности: "Yes" или "No"
Изход
На конзолата трябва да се отпечата един ред.
•	"{крайната цена на горивото} lv."
Цената на горивото да бъде форматираната до втората цифра след десетичния знак.*/

function fuelTank2(input) {
    let fuelType = input[0];
    let amountOfFuel = Number(input[1]);
    let clubCard = input[2] === "Yes";
    let fuelCost;
    if (fuelType === "Gas") {
        fuelCost = amountOfFuel * 0.93;
        if (clubCard) {
            fuelCost = fuelCost - 0.08 * amountOfFuel;
        }
    } else if (fuelType === "Gasoline") {
        fuelCost = amountOfFuel * 2.22;
        if (clubCard) {
            fuelCost = fuelCost - 0.18 * amountOfFuel;
        }
    } else if (fuelType === "Diesel") {
        fuelCost = amountOfFuel * 2.33;
        if (clubCard) {
            fuelCost = fuelCost - 0.12 * amountOfFuel;
        }
    }
    if (amountOfFuel >= 20 && amountOfFuel <= 25) {
        fuelCost = fuelCost - 0.08 * fuelCost;
    } else if (amountOfFuel > 25) {
        fuelCost = fuelCost * 0.9;
    }
    console.log(`${fuelCost.toFixed(2)} lv.`)
}
fuelTank2(["Diesel", "19", "No"])




















/*function fuelTank2(input) {
    let fuelType = String(input[0]);
    let amountOfFuel = Number(input[1]);
    let clubCard = String(input[2]);
    let Gasoline = 2.22;
    let Diesel = 2.33;
    let Gas = 0.93;
    Gasoline = Gasoline * amountOfFuel;
    Diesel = Diesel * amountOfFuel;
    Gas = Gas * amountOfFuel;
    if (clubCard === "Yes") {
        Gasoline = Gasoline - 0.18;
        Diesel = Diesel - 0.12;
        Gas = Gas - 0.08;
    }
    if (fuelType === "Gasoline") {
        if (amountOfFuel >= 20 && amountOfFuel <= 25) {
            Gasoline = amountOfFuel - Gasoline * 0.08;
            console.log(`${Gasoline.toFixed(2)}lv.`)
        }
        else if (amountOfFuel > 25) {
            Gasoline = amountOfFuel - Gasoline * 0.1;
            console.log(`${Gasoline.toFixed(2)}lv.`)
        }
    } else if (fuelType === "Diesel") {
        if (amountOfFuel >= 20 && amountOfFuel <= 25) {
            Diesel = amountOfFuel - Diesel * 0.08;
            console.log(`${Diesel.toFixed(2)}lv.`)
        }
        else if (amountOfFuel > 25) {
            Diesel = amountOfFuel - Diesel * 0.1;
            console.log(`${Diesel.toFixed(2)}lv.`)
        }
    } else if (fuelType === "Gas") {
        if (amountOfFuel >= 20 && amountOfFuel <= 25) {
            Gas = Gas - Gas * 0.08;
            console.log(`${Gas.toFixed(2)}lv.`)
        }
        else if (amountOfFuel > 25) {
            Gas = amountOfFuel - Gas * 0.1;
            console.log(`${Gas.toFixed(2)}lv.`)
        }
    }
}
fuelTank2(["Gas", "30", "No"])
/*/