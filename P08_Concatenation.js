let kelime = 'Java Script';
let num1 = 20;
let num2 = 25;

console.log(kelime + num1 + num2);
console.log(num1 + num2 + kelime);

console.log(kelime + (num1 + num2));

// String Strongdur ama Matematik daha Strongdur

// İşlem önceliği string'den daha baskindir
/*
    1- Üs alma
    2- Parantes ici
    3- Carpma ve Bölme (solda olan onceliklidir)
    4- Toplama ve Cıkarma (solda olan onceliklidir)
*/