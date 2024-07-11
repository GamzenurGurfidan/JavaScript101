// 11. Kosullu Ifadeler
// 11.1 Bagimsiz kosullu ifadeler (If statements)
// 11.2 If Else Statements

let sayi = 34;

if(sayi > 10){console.log("Sayi 10'dan buyuktur")};

// Bagimsiz if durumlarında sadece kosul dogrulaninca sonuc doner

// Soru: Kullanicinin yasini sisteme girdigimizde 
// 18 yasindan buyuk ise 'Ehliyet basvrunuz kabul edildi'
// 18 yasindan kucuk ise 'Ehliye basvurunuz reddedildi. ... yil sonra tekrar basvurunuz'

let age = 18;

if (age >= 18){
    console.log('Ehliyet basvurunuz kabul edildi');
} else {
    console.log('Ehliye basvurunuz reddedildi. ' + (18 - age) + ' yil sonra tekrar basvurunuz');
}

if(age % 2 == 0){
    console.log('yas bir cift sayidir');
}



