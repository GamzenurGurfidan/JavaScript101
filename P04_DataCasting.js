/*
DataCasting (veri dönüstürme) isleminde
bir veri turunun baska bir veri turune donusturme islemidir.
Bu islem genellikle dataları kullanım senaryosunu
uygun hale getirmek icin yapilir
*/

//String'den Number'a
let str = '123';
let num = Number(str);

console.log(str)
console.log('typeof str: ' + typeof str)
console.log(num)
console.log('typeof num: ' + typeof num)

console.log('-------------------------')

// Number to String
let str2 = String(num);

console.log(str2);
console.log('typeof str2: ' + typeof str2)

// String to Boolean

let str3 = 'murat';
let bool1 = Boolean(str3)
console.log(bool1);
console.log('typeof bool1: ' + typeof bool1)

// Number to Boolean
let num1 = 324;
let bool2 = Boolean(num1)
console.log(bool2);
console.log('typeof bool2: ' + typeof bool2)

// JS'te bir sayının degeri 0 veya not a number(NaN) ise boolean'a cast edilirse false döndürür
// eger 0'dan farklı bir sayı atanırsa bu sefer bize true döndürür

// Boolean to Number
let bool3 = true
let num2 = Number(bool3)

console.log(num2);