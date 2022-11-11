/*
Котката Том обича по цял ден да спи, за негово съжаление стопанинът му си играе с него винаги когато
  има свободно време. За да се наспи добре, нормата за игра на Том е 30 000  минути в година.
   Времето за игра на Том зависи от почивните дни на стопанина му:
•	Когато е на работа, стопанинът му си играе с него по 63 минути на ден.
•	Когато почива, стопанинът му си играе с него  по 127 минути на ден.
Напишете програма, която въвежда броя почивни дни и отпечатва дали 
Том може да се наспи добре и колко е разликата от нормата за текущата година, като приемем че годината има 365 дни.
Пример: 20 почивни дни -> работните дни са 345 (365 – 20 = 345). Реалното време за игра е 24 275 минути (345 * 63 + 20 *127). 
 Разликата от нормата е 5 725 минути (30 000 – 24 275 = 5 725) или 95 часа и 25 минути.
Вход
Входът се чете от конзолата и се състои от едно число – броят почивни дни – цяло число в интервала [0...365]
Изход
На конзолата трябва да се отпечатат два реда.
•	Ако времето за игра на Том е над нормата за текущата година:
o	 На първия ред отпечатайте: “Tom will run away”
o	 На втория ред отпечатайте разликата от нормата във формат:
“{H} hours and {M} minutes more for play”
•	Ако времето за игра на Том е под нормата за текущата година:
o	На първия ред отпечатайте: “Tom sleeps well”
o	 На втория ред отпечатайте разликата от нормата във формат:
“{H} hours and {M} minutes less for play”

*/
/*function sleepyTom(input) {
    let daysForRest = Number(input[0]);
    let restingDays = daysForRest * 127;
    let workingDays = (365 - daysForRest) * 63;
    let minYearlyPlayInMinutes = 30000;
    let yearlyPlayTime = restingDays + workingDays;
    let deffrenceFromNorm = minYearlyPlayInMinutes - yearlyPlayTime;
    if (minYearlyPlayInMinutes > yearlyPlayTime) {
        deffrenceFromNorm = deffrenceFromNorm / 60;
        deffrenceFromNorm= Math.floor(deffrenceFromNorm)
        console.log(`Tom will run away`);
        console.log(`${deffrenceFromNorm} hours and {M} minutes more for play`)
    }

*/
function sleepyCat(input) {
    let weekendDays = Number(input[0]);
    let workDays = 365 - weekendDays;
    let minutesPlayedWeekends = weekendDays * 127;
    let minutesPlayedWorkDays = workDays * 63;
    let totalMinutesPlayed = minutesPlayedWeekends + minutesPlayedWorkDays;
    if (totalMinutesPlayed > 30000) {
        console.log("Tom will run away");
        let hours = parseInt((totalMinutesPlayed - 30000) / 60);
        let minutes = (totalMinutesPlayed - 30000) % 60;
        console.log(`${hours} hours and ${minutes} minutes more for play`)
    }
    else {
        console.log("Tom sleeps well")
        let hours = parseInt((30000 - totalMinutesPlayed) / 60);
        let minutes = (30000 - totalMinutesPlayed) % 60;
        console.log(`${hours} hours and ${minutes} minutes less for play`)
    }


}
sleepyCat(["113"])


