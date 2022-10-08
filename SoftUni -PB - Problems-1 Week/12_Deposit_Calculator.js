function depositCalculator(input) {
    let depositAmount = Number(input[0]);
    let depositMonths = Number(input[1]);
    let yearProcent = Number(input[2]) / 100;
    let finalAmount = depositAmount + depositMonths * ((depositAmount * yearProcent) / 12);
    console.log(finalAmount);
}

depositCalculator(["200", "3", "5.7"]);