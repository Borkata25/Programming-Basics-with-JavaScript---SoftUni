/*
Първата задача от тази тема е да се напише функция, която чете оценка, получена като аргумент и отпечатва "Excellent!",
ако оценката е 5.50 или по-висока.
*/
function excellentResult(input) {
    let a = parseFloat(input[0]);
    if (a >= 5.50) {
        console.log(`Excellent!`);
    }
}
excellentResult(["4"]);