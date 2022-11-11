/*
По време на обедната почивка искате да изгледате епизод от своя любим сериал. 
Вашата задача е да напишете програма, с която ще разберете дали имате достатъчно време да изгледате епизода.
 По време на почивката отделяте време за обяд и време за отдих. Времето за обяд ще бъде 1/8 от времето за почивка,
  а времето за отдих ще бъде 1/4 от времето за почивка. 
Вход
От конзолата се четат 3 реда:
1.	Име на сериал – текст
2.	Продължителност на епизод  – цяло число в диапазона [10… 90]
3.	Продължителност на почивката  – цяло число в диапазона [10… 120]
Изход
На конзолата да се изпише един ред:
•	Ако времето е достатъчно да изгледате епизода: 
"You have enough time to watch {име на сериал} and left with {останало време} minutes free time."
•	Ако времето не Ви е достатъчно:
"You don't have enough time to watch {име на сериал}, you need {нужно време} more minutes."
Времето да се закръгли до най-близкото цяло число нагоре.

*/
function lunchBreak(input) {
    let seriesName = String(input[0]);
    let episodeLength = parseFloat(input[1]);
    let breakLength = parseFloat(input[2]);
    let lunchLength = 0.125 * breakLength;
    let restLength = 0.25 * breakLength;
    let remainingTime = breakLength - lunchLength - restLength
    if (remainingTime >= episodeLength) {
        let leftOverTime = remainingTime - episodeLength;
        leftOverTime = Math.ceil(leftOverTime);
        console.log(`You have enough time to watch ${seriesName} and left with ${leftOverTime} minutes free time.`);
    }
    else {
        let neededTime = episodeLength- remainingTime;
        neededTime=Math.ceil(neededTime);
        console.log(`You don't have enough time to watch ${seriesName}, you need ${neededTime} more minutes.`);
    }

}
lunchBreak(["Game of Thrones", "60", "96"]);
