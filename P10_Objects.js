let ogrenci1 = {
    ad: "Ahmet",
    soyad: "Bulut",
    numara: 712,
    sinif: "9A" 
}

let ogrenci2 = {
    ad: "Esma",
    soyad: "Yigit",
    numara: 886,
    sinif: "9A" 
}

console.log(ogrenci1.ad);
console.log(ogrenci1.soyad);
console.log(ogrenci1.numara);
console.log(ogrenci1.sinif);

console.log('---------------');

// nesnelerin tamamına toplu olarak erismek
console.log(Object.values(ogrenci2)); // Objenin value degerlerine ulasiyoruz

console.log(Object.keys(ogrenci2)); // Objenin keylerine ulasiyoruz

console.log(Object.entries(ogrenci1)); // Objenin key:value ikilisine ulasiyoruz

delete ogrenci1.sinif; // herhangi bir degeri siliyoruz
console.log(Object.values(ogrenci1));

console.log(ogrenci1.hasOwnProperty("sinif")); // obje icinde bir özellik var mı kontrol edilir

