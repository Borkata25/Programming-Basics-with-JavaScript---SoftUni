/*
Напишете програма, която да пресмята колко литра боя е нужна за боядисването на къщa.
 Като за стените се използва зелена боя, а за покрива – червена.
  Разхода на зелената боя е 1 литър за 3.4 м2, а на червената – 1 литър за 4.3 м2.
Стените имат следните размери:
•	Предната и задната стена са квадрати със страна „x“
o	на предната стена има правоъгълна врата с широчина 1.2м и височина 2м
•	Страничните стени са правоъгълници със страни „x“ и „y“
o	и на двете странични стени има по един квадратен прозорец със страна 1.5м
Покривът има следните размери:
•	Два правоъгълника със страни „x“ и „y“
•	Два равностранни триъгълника със страна „x“ и височина „h“
Трябва да пресметнете площта на всички страни и площта на покрива, за да
намерите колко литра от всяка боя ще са нужни.
Вход
От конзолата се четат 3 реда:
1.	x – височината на къщата – реално число в интервала [2...100]
2.	y – дължината на страничната стена – реално число в интервала [2...100]
3.	h – височината на триъгълната стена на прокрива – реално число в интервала [2...100]
Изход
Да се отпечатат на конзолата две числа всяко на нов ред:
•	Литрите зелена боя
•	Литритe червена боя
Форматирани до вторият знак след десетичната запетая.

*/

function housePainting(input) {
  let xHeightOfHouse = parseFloat(input[0]);
  let yLengthOfSideWall = parseFloat(input[1]);
  let hHeightOfTriangleWallOnRoof = parseFloat(input[2]);
  let sideWall = xHeightOfHouse * yLengthOfSideWall;
  let window = 1.5;
  let windowTotal = window * window;
  let twoSidesTotal = (2 * sideWall) - (2 * windowTotal);
  let entry = 1.2;
  let entryTotal = entry * 2;
  let backWall = xHeightOfHouse * xHeightOfHouse;
  let backAndFront = (2 * backWall) - entryTotal;
  let totalArea = twoSidesTotal + backAndFront;
  let greenPaint = totalArea / 3.4;
  let toFixedAction = greenPaint.toFixed(2);

  let twoRectaclesOnRoof = 2 * (xHeightOfHouse * yLengthOfSideWall);
  let twoTriangles = 2 * ((xHeightOfHouse * hHeightOfTriangleWallOnRoof) / 2);
  let totalArea2 = twoRectaclesOnRoof + twoTriangles;
  let redPaint = totalArea2 / 4.3;
  let toFixedAction2 = redPaint.toFixed(2);
  console.log(toFixedAction);
  console.log(toFixedAction2);

}
housePainting(["6", "10", "5.2"])