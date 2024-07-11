// kullanicinin girdigi gun sayisini haftanin hangi gunune denk geldigini yazdirin

let dayNumber = 8;
let gunAdi;

switch (dayNumber) {
    case 1:
        console.log('Pazatesi');
        break;
    case 2:
        console.log('Sali');
        break;
    case 3:
        console.log('Carsamba');
        break;
    case 4:
        console.log('Persembe');
        break;
    case 5:
        console.log('Cuma');
        break;
    case 6:
        console.log('Cumartesi');
        break;
    case 7:
        console.log('Pazar');
        break;            
    default:
        console.log('Yanlis giris, bir haftada 7 gun vardir');
        break;
}