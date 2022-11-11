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

toyShop(["320",
"8",
"2",
"5",
"5",
"1"])
