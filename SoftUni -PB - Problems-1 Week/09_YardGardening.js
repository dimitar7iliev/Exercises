function yardGardening(input) {
    let fullYard = Number(input[0]) * 7.61;
    let discount = fullYard * 0.18;
    let totalPrice = fullYard - discount;
    console.log(totalPrice);
}
// ZADACHATA E PROBLEMNA 
yardGardening(["550"]);