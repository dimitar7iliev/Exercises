function movie(input) {
    let budged = Number(input[0]);
    let statist = Number(input[1]);
    let pricePerCostume = Number(input[2]);
    let dekor = budged * 0.10;
    let clothesAll = statist * pricePerCostume;

    if (statist > 150) {
        clothesAll *= 0.90;
    }
    let expenses = dekor + clothesAll;
    if (expenses > budged) {
        console.log('Not enough money!');
        console.log(`Wingard needs ${(expenses - budged).toFixed(2)} leva more.`);
    } else {
        console.log('Action!');
        console.log(`Wingard starts filming with ${(budged - expenses).toFixed(2)} leva left.`);
    }
}

movie(["15437.62", "186", "57.99"]);