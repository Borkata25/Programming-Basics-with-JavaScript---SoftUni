/*
Напишете програма, която чете от конзолата страна и височина на триъгълник и пресмята неговото лице. Използвайте формулата за лице на триъгълник:
 area = a * h / 2.
 Форматирате изхода до втория знак след десетичната запетая.
 */

function triangleArea(input) {
   let side = parseFloat(input[0]);
   let height = parseFloat(input[1]);
   let area = side * height / 2;
   let toStringAction = area.toFixed(2);
   console.log(toStringAction);
}
triangleArea(["20.5", "30.85"]);