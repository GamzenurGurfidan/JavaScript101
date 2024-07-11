for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

console.log('----------------');
let sayac = 0;
while (sayac < 10) {
    if(sayac % 2 === 0) {
        console.log(sayac);
    }
    sayac++;
}

console.log('----------------');
// soru: verilen sayinin faktoriyelini hesaplama

const sayi1 = 7;
let faktoriyel = 1; 
for (let i = 1; i <= sayi1 ; i++) {
    process.stdout.write(i + '*' + faktoriyel);
    faktoriyel *= i
    console.log('=' + faktoriyel); 
}

console.log(`${sayi1} 'in faktoriyeli: ${faktoriyel}`);
