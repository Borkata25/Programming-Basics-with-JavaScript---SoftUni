/*
Градинар продавал реколтата от градината си на зеленчуковата борса.
 Продава зеленчуци за N лева на килограм и плодове за M лева за килограм.
  Напишете програма, която да пресмята приходите от реколтата в евро ( ако приемем, че едно евро е равно на 1.94лв).
Вход
От конзолата се четат 4 числа, по едно на ред:
•	Първи ред – Цена за килограм зеленчуци – реално число[0.00… 1000.00]
•	Втори ред – Цена за килограм плодове – реално число[0.00… 1000.00]
•	Трети ред – Общо килограми на зеленчуците – цяло число[0… 1000]
•	Четвърти ред – Общо килограми на плодовете – цяло число[0… 1000]
Изход
Да се отпечата на конзолата едно число: приходите от всички плодове и зеленчуци в евро.
Резултата да се форматира до втория знак след десетичния разделител.

*/

function vegetableMarket(input) {
  let priceForKgVegies = parseFloat(input[0]);
  let priceForKgFruits = parseFloat(input[1]);
  let totalKgForVegies = parseFloat(input[2]);
  let totalKGForFruits = parseFloat(input[3]);
  let vegiesPrice = priceForKgVegies * totalKgForVegies;
  let fruitsPrice = priceForKgFruits * totalKGForFruits;
  let totalPrice = vegiesPrice + fruitsPrice;
  let priceInEuro = totalPrice / 1.94;
  let toFixedAction = priceInEuro.toFixed(2);
  console.log(toFixedAction);

}
vegetableMarket(["0.194", "19.4", "10", "10"])