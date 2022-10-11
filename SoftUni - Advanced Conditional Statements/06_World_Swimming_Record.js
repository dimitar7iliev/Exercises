function record(input) {
    let recordInSec = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timeInSec = Number(input[2]);

    let totalTimeRequired = distanceInMeters * timeInSec;
    let delay = Math.floor(distanceInMeters / 15) * 12.5;

    let total = totalTimeRequired + delay;
    if (recordInSec > total) {
        console.log(`Yes, he succeeded! The new world record is ${(total).toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(total - recordInSec).toFixed(2)} seconds slower.`);
    }
}

record(["55555.67", "3017", "5.03"]);

