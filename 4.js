let number = +prompt("Введите число");
        
let triangle = "";
        
for (let i = 1; i <= number; i++) {
    for (let j = 1; j <= i; j++) {
        triangle += "*";
    }
    triangle += "\n";
}

alert(triangle);
