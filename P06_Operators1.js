// Atama Operatoru
// = yazılınca bu operator esitlik olayına bakmaz. Sadece x icin 158 degerini atmak icin kullanilir

let x = 185;

// Mantiksal Operator
let a = 5;
let b = '5';

console.log('anın data tipi ' + typeof a)
console.log('bnın data tipi ' + typeof b)

// Esitlik Operatoru
console.log(a==b); // == sadece deger kontrolu yapar. Data tipine bakmaz
// Mutlak Esitlik Operatoru
console.log(a===b); // === deger ve data tipi kontrolu yapar

let c = 12;
let d = 28;
let e = 12;
let f = '12';

console.log(c<d); // true
console.log(e>=c); // true
console.log(e>d); // false

// Esit Degil Operatoru
console.log(c!=d); // true

console.log(c!=e); // false

console.log(c!==e); // false

console.log(c!=f); // false (data tipine bakmadan eşit mi diye bakar)

console.log(c!==f); // true (data tipine bakarak eşit mi diye bakar)

