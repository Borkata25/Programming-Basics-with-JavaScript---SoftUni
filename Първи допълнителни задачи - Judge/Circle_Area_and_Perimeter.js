/*
Напишете програма, която чете от конзолата число r и пресмята и отпечатва лицето и периметъра на кръг / окръжност с радиус r, 
като форматирате изхода в следния вид: "<calculated area>" 
"<calculated parameter>". Форматирайте изходните данни до втория знак след десетичната запетая.

*/
function circleAreaPerimeter(input) {
    let r = parseFloat(input[0]);
    let area = r * Math.PI * r;
    area = area.toFixed(2);
    let perimeter = 2 * Math.PI * r;
    perimeter = perimeter.toFixed(2);
    console.log(area);
    console.log(perimeter);
}
circleAreaPerimeter(["3"])