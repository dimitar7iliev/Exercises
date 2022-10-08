function speedInfo(input) {
    let speedInfo = Number(input[0]);
    if (speedInfo <= 10) {
        console.log("slow");
    } else if (speedInfo > 10 && speedInfo <= 50) {
        console.log("average");
    } else if (speedInfo > 50 && speedInfo <= 150) {
        console.log("fast");
    } else if (speedInfo > 150 && speedInfo <= 1000) {
        console.log("ultra fast");
    } else {
        console.log("extremely fast");
    }
}

speedInfo(["1500"]);

// •	При скорост до 10 (включително) отпечатайте "slow"
// •	При скорост над 10 и до 50 (включително) отпечатайте "average" 
// •	При скорост над 50 и до 150 (включително) отпечатайте "fast"
// •	При скорост над 150 и до 1000 (включително) отпечатайте "ultra fast" 
// •	При по-висока скорост отпечатайте "extremely fast"
