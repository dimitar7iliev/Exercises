function areaOfFigures(input) {
    let figure = input[0];
    let area = 0; 
    
    if (figure === "square") {
        let side = Number(input[1]);
        area = side * side;
    } else if (figure === "rectangle") {
        let side = Number(input[1]);
        let side2 = Number(input[2]);
        area = side * side2;
    } else if (figure === "circle") {
        let radius = Number(input[1]);
        area = Math.PI * (radius * radius);
    } else if (figure === "triangle") {
        let side = Number(input[1]);
        let height = Number(input[2]);
        area = 0.5 * (side * height);
    }
    console.log(area);
}

areaOfFigures(["rectangle", "7","2.5"]);