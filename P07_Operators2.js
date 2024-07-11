// Increment

let a = 10;
a++;
console.log(a); // 11

a+=5;
console.log(a); // 16

a*=2;
console.log(a); // 32

++a;
console.log(a); // 33

console.log(a++); // 33 (once a degerini yazdirdi ve 1 arttirdi.(Post-Increment))
console.log(a); // 34 (bir onceki satirda a degeri bir arttirildi)

console.log(++a); // 35 (once a degerini arttirdi sonra yazdirdi.(Pre-Increment))
console.log(a); // 35 bir onceki satirda a degerini arttirmisti

console.log('-------------')
// Decrement 

let b = 20;

console.log(b); // 20

console.log(b--); // 20

console.log(b) // 19

console.log(--b); // 18

console.log(b); // 18

console.log(b-=2); // 16

console.log(b/=4); // 4

// && AND Operatoru sagindaki ve solundaki kosullardan an az biri false ise false olur
// || OR Operatoru sagindaki ve solundaki ifadelerden en az biri dogru ise true verir

// Soru: Emeklilik Hesabı:
//       - Kadınlar 60 yasinda
//       - Erkekler 65 yasinda emekli olabilir
// yasini ve cinsiyetini sisteme girdigimizde kisiye
// emeklilik yasina gelmisse "Emekli olabilirsiniz"
// emeklilik yasına gelmemisse "Emekli olabilmek icin ... yil daha calismalisiniz"
// yazdiran js kodunu yazınız

let cinsiyet = 'E';
let age = 60;
if(cinsiyet.contains("E") && age >= 65){
    console.log("Emekli olabilirsiniz");
} else if (cinsiyet.contains("E") && age < 65) {
    console.log("Emekli olabilmek icin " + (65 - age) + " yil daha calismalisiniz");
} else if (cinsiyet.contains("K") && age >= 60) {
    console.log("Emekli olabilirsiniz");
}else if (cinsiyet.contains("K") && age < 60) {
    console.log("Emekli olabilmek icin " + (60 - age) + " yil daha calismalisiniz");
} else {
    console.log("Gecersiz giris");
}    