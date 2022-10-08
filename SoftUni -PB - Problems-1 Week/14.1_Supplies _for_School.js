function suppliesForSchool(input) {
    let packagePen = Number(input[0] * 5.80);
    let packageMarkers = Number(input[1] * 7.20);
    let washer = Number(input[2] * 1.20);
    let discount = Number(input[3] / 100);
    let price = packagePen + packageMarkers + washer;
    let total = price - (price * discount);
    console.log(total);


    
}

suppliesForSchool(["2", "3", "4", "25"]);
