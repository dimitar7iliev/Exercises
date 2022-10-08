function basketballEquipment(input) {
    let yearPrice = Number(input[0]);
    let snickers = yearPrice - (yearPrice * 0.4);
    let sportOutfit = snickers - (snickers * 0.2);
    let ball = sportOutfit / 4;
    let accessory = ball / 5;
    let totalPriceForEquipment = yearPrice + snickers + sportOutfit + ball + accessory;
    console.log(totalPriceForEquipment);
    
}

basketballEquipment(["365"]);