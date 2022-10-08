function fishTank(input) {
    let length = Number(input[0]) * (75 * 47); // 299625
    let volume = length / 1000; // 299.625
    let capacity = 0.17;
    let fullFishTank = volume * (1 - capacity);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);

    console.log(fullFishTank);
}

fishTank(["85", "75", "47", "17"]);