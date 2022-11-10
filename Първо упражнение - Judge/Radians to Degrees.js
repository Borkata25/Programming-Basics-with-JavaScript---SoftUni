function radiusToDegree(input) {
    let radius = Number(input[0]);
    let degree = radius * 180 / Math.PI;
    console.log(degree);
}
radiusToDegree(["3.1416"]);