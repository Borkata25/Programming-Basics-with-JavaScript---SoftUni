/*
Басейн с обем V има две тръби от които се пълни. Всяка тръба има определен дебит (литрите вода минаващи 
    през една тръба за един час).
 Работникът пуска тръбите едновременно и излиза за N часа. Напишете програма, която изкарва
  състоянието на басейна, в момента,
  когато работникът се върне. 
Вход
От конзолата се четат четири реда:
•	Първият ред съдържа числото V – Обем на басейна в литри – цяло число в интервала [1…10000].
•	Вторият ред съдържа числото P1 – дебит на първата тръба за час – цяло число в интервала [1…5000].
•	Третият ред съдържа числото P2 – дебит на втората тръба за час– цяло число в интервала [1…5000].
•	Четвъртият ред съдържа числото H – часовете които работникът отсъства – реално число в интервала [1.0…24.00]
Изход
Да се отпечата на конзолата едно от двете възможни състояния:
•	До колко се е запълнил басейна и коя тръба с колко процента е допринесла.
o	"The pool is {запълненост на басейна в проценти}% full. Pipe 1: {процент вода от първата тръба}%. 
Pipe 2: {процент вода от втората тръба}%."
Aко басейнът се е препълнил – с колко литра е прелял за даденото време.
o	"For {часовете, които тръбите са пълнили вода} hours the pool overflows with {литрите вода в повече} liters."

*/
function pipesInPool(input) {
    let v = parseFloat(input[0]);
    let p1 = parseFloat(input[1]);
    let p2 = parseFloat(input[2]);
    let H = parseFloat(input[3]);
    let firstPipeLiters = p1 * H;
    let secondPipeLiters = p2 * H;
    let fullLiters = firstPipeLiters + secondPipeLiters;
    let fullProcent = (fullLiters / v) * 100;
    fullProcent = fullProcent.toFixed(2);
    let p1Procent = (firstPipeLiters / fullLiters) * 100;
    p1Procent = p1Procent.toFixed(2);
    let p2Procent = (secondPipeLiters / fullLiters) * 100;
    p2Procent = p2Procent.toFixed(2);
    if (fullLiters < v) {
        console.log(`The pool is ${fullProcent}% full. Pipe 1: ${p1Procent}%. 
        Pipe 2: ${p2Procent}%.`)
    } else {
        let moreWater = fullLiters - v;
        moreWater = moreWater.toFixed(2);
        console.log(`For ${H} hours the pool overflows with ${moreWater} liters.`)
    }


}
pipesInPool(["1", "1", "1", "1.0"])
