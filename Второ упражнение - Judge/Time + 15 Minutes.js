/**
 Да се напише функция, която получава час и минути от 24-часово денонощие и изчислява колко ще е часът след 15 минути. 
 Резултатът да се отпечата във формат часове:минути. Часовете винаги са между 0 и 23, а минутите винаги са между 0 и 59.
  Часовете се изписват с една или две цифри.
  Минутите се изписват винаги с по две цифри, с водеща нула, когато е необходимо. 
 */
function timePlus15(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]);
    let totalTime = hours * 60 + minutes + 15;

    let newHours = parseInt(totalTime / 60);
    let newMinutes = totalTime % 60;
    if (newHours === 24) {
        newHours = 0;
    }
    let minuteString = newMinutes.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })
    console.log(`${newHours}:${minuteString}`);
}
timePlus15(["0", "50"])