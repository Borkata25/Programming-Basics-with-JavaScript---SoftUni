function concatenate(input){
    let firstName = input[0];
    let lastName = input[1];
    let age = input[2];
    let town = input[3];
    let all = `You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`;
    console.log(all);
}
concatenate(["Plamen","Borisov",15,"balchik"]);
//"You are <firstName> <lastName>, a <age>-years old person from <town>."
