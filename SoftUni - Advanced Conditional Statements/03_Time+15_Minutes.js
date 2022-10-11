function time15Minutes(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]);
    let minutesPlus15 = minutes + 15;
    if (minutesPlus15 >= 60) {
        hours = hours + 1;
        minutesPlus15 = minutesPlus15 - 60;
    }
    console.log(`${hours}:0${minutesPlus15}`);
}

time15Minutes(["1", "46"]);