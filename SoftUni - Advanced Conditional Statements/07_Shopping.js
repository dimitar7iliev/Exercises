function shopping(input) {
    let budged = Number(input[0]);
    let numVideoCard = Number(input[1]);
    let numProcessor = Number(input[2]);
    let numRamMemory = Number(input[3]);

    let videoCardCost = numVideoCard * 250;
    let processorCost = videoCardCost * 0.35;
    let ramCost = videoCardCost * 0.10;

    let total = videoCardCost + processorCost * numProcessor + ramCost * numRamMemory;
    
    if (numVideoCard > numProcessor) {
        total = total * 0.85;
    }

    if (budged >= total) {
        console.log(`You have ${(budged - total).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(total - budged).toFixed(2)} leva more!`);
    }


}

// shopping(["900", "2", "1", "3"]);
shopping(["920.45",
"3",
"1",
"1"]);

