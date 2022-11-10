function shop(input){
    let a = parseFloat(input[0]);
    let b = parseFloat(input[1]);
    let dogFood = 2.5;
    let catFood = 4;
    let combinedDF = dogFood * a;
    let combinedCF = catFood * b;
    let allCost = combinedDF+ combinedCF;
    console.log (`${allCost} lv.`);
    
}
shop(["5","4"]);
//Напишете програма, която пресмята нужните разходи за закупуването на храна за кучета и котки.
//Храната се пазарува от зоомагазин, като една опаковка храна за кучета е на цена 2.50 лв, а опаковка храна за котки струва 4 лв.
//var string = “10”;
//ar double = parseFloat(string);
//console. log(typeof(double)); // float.