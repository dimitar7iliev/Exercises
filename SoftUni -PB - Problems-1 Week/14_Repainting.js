function repainting(input) {
    let nylon = Number(input[0]) + 2;
    let paint = Number(input[1]);
    let thinner = Number(input[2]) * 5.00;
    let workHours = Number(input[3]);
    let bags = 0.40;
    let nylonPrice = nylon * 1.5;
    let totalQtyPaint = paint + (paint * 0.10);
    let paintPrice = totalQtyPaint * 14.5;
    let allExpenses = nylonPrice + paintPrice + thinner + bags;
    let workersPay = (allExpenses * 0.3) * workHours;
    let total = allExpenses + workersPay;
    console.log(total);
}

repainting(["10", "11", "4", "8"]);