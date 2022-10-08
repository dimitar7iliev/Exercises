function vacationBookList(input) {
    let pages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let daysPerReading = Number(input[2]);
    let totalHours = pages / pagesPerHour;
    let hoursPerDay = totalHours / daysPerReading;
    console.log(hoursPerDay);

}

vacationBookList(["212", "20", "2"]);