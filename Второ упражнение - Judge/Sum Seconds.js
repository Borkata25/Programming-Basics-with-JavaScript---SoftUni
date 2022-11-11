/** 
 Трима спортни състезатели финишират за някакъв брой секунди (между 1 и 50). 
 Да се напише функция, която получава три аргумента - секунди и пресмята сумарното им време във формат "минути:секунди". 
 Секундите да се изведат с водеща нула (2  "02", 7  "07", 35  "35"). 
 */
function sumSeconds(input) {
    let timesFirst = parseFloat(input[0]);
    let timeSecond = parseFloat(input[1]);
    let timeThird = parseFloat(input[2]);
    let totalTime = timesFirst + timeSecond + timeThird;
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;
    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    }
    else {
        console.log(`${minutes}:${seconds}`);
    }
}
sumSeconds(["2", "4", "15"]);