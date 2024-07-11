// Nested If Else Statements
/*
Soru:
Kullanicinin girdigi sayinin nagtif/pozitif ve cift/tek sayi oldugunu yazdirin
    örn: "Girilen sayi pozitif cift sayidir"
*/

let sayi = -5;

if(sayi > 0){
    if (sayi % 2 === 0){
        console.log("Girilen sayi pozitif cift sayidir");
    } else {
        console.log("Girilen sayi pozitif tek sayidir");
    }
}else if (sayi < 0){
    if (sayi % 2 === 0){
        console.log("Girilen sayi negatif cift sayidir");
    } else {
        console.log("Girilen sayi negatif tek sayidir");
    }
} else {
    console.log("Girilen sayi sifirdir");
}