/*
 Да се напише функция, която получава парола (текст) и проверява дали дадената паролата съвпада с фразата "s3cr3t!P@ssw0rd". 
 При съвпадение да се изведе "Welcome". При несъвпадение да се изведе "Wrong password!". 
 */
function passwordGuess(input) {
    let pass = input[0];
    if (pass != "s3cr3t!P@ssw0rd") {
        console.log("Wrong password!");
    }
    else {
        console.log("Welcome");
    }
}
passwordGuess(["s3cr3t!P@ssw0rd"])