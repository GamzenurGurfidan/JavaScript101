// Parametresiz Fonksiyonlar

function sayHello() {
    console.log('Herkese Merhaba!');
}

// Fonksiyon cagirma

sayHello();

// Parametreli Fonksiyon

function great(name) {
    console.log('Merhaba ' + name + '!');
}

great('Ahmet');

function toplam(a, b) {
    return a+b;
}

let sum = toplam(3,5);
console.log(sum);

console.log(toplam(12,18));

var multiply = function (x,y){
    return x*y;
}
console.log("x * y = " + multiply(8,8));

// Arrow Function (ES6 versiondan sonraki kisimda gecerlidir)
const square = (num) => {
    return num*num;
}
console.log(square(4));

// daha kisa syntax
const cube = num => num*num*num; // num**3

console.log(cube(3));
