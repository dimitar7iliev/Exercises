function toyShop(input) {
    let puzzlePrice = 2.60;
    let dollPrice = 3;
    let teddyBearPrice = 4.10;
    let minionPrice = 8.20;
    let truckPrice = 2;
    
    let tripPrice = Number(input[0]);
    let puzzleNumber = Number(input[1]);
    let dollsNumber = Number(input[2]);
    let teddyBearsNumber = Number(input[3]);
    let minionsNumber = Number(input[4]);
    let truckNumber = Number(input[5]);

    let toysNumber = puzzleNumber + dollsNumber + minionsNumber + truckNumber + teddyBearsNumber;
    
    let totalIncome = puzzleNumber * puzzlePrice + dollsNumber * dollPrice + teddyBearsNumber * teddyBearPrice 
    + minionsNumber * minionPrice + truckNumber * truckPrice;

    if (toysNumber >= 50) {
        totalIncome *= 0.75;
    }
    totalIncome *= 0.90;
    if (totalIncome >= tripPrice) {
        console.log(`Yes! ${(totalIncome - tripPrice).toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${(tripPrice - totalIncome).toFixed(2)} lv needed.`)
    }
}

toyShop(["40.8", "20", "25", "30", "50", "10"])
