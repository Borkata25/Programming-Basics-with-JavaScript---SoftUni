function vacationBookList(input) {
    let numberPages = Number(input[0]);
    let pagesForHour = Number(input[1]);
    let daysToRead = Number(input[2]);
    let totalHours = numberPages / pagesForHour;
    let hoursPerDay = totalHours / daysToRead;
    console.log(hoursPerDay);

}
vacationBookList(["212","20","2"]);