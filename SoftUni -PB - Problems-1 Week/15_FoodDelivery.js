function foodDelivery(input) {
    let chickenMenu = Number(input[0]) * 10.35;
    let fishMenu = Number(input[1]) * 12.40;
    let vegMenu = Number(input[2]) * 8.15;
    let allMenuPrice = chickenMenu + fishMenu + vegMenu;
    let desertPrice = allMenuPrice * 0.2;
    let deliveryService = 2.50;
    let totalPrice = allMenuPrice + desertPrice + deliveryService;
    console.log(totalPrice);
}

foodDelivery(["2", "4", "3"]);