// Arrayler, icerisinde birden cok ögeyi saklayabilen yapılar

// 1- Array olusturma

let meyveler =['Armut', 'Elma', 'Portokal', 'Muz', 'Cilek', 'Mangostan']

// 2- Dizinğin herhangi bir elamanına nasıl erisecegiz

console.log(meyveler[3]);

// Array methods
// push() method: Dizinin sonuna bir veya daha fazla eleman ekler

meyveler.push('Kivi', 'Erik', 'Kayisi')
console.log(meyveler);

// pop() method: Dizinin sonundaki bi ogeyi kaldiriyor

let sonEleman = meyveler.pop();
console.log(sonEleman);
console.log(meyveler);

// shift() method: Dizinin basindaki ogeyi kaldiriyor

let ilkEleman = meyveler.shift();
console.log(ilkEleman);
console.log(meyveler);

// unshift() method: Dizinin basina bir veya daha fazla oge ekler
meyveler.unshift('Vişne', 'Seftali');
console.log(meyveler);

// splice() method: Belirli bir indexten itibaren ogeleri kaldirir veya ekler
meyveler.splice(2,0,'Avokado','Mango')
console.log(meyveler);

// ilk rakam isleme baslayacagimiz indexi ifade ederken, 
// ikinci rakam kac tane ogenin silineceginiz belirler
meyveler.splice(8,1,'Karpuz','Kavun')
console.log(meyveler);

//slice() method: Dizinin elemanlarını kopyalamaya yarar
let kopyalananOgeler = meyveler.slice(1,4)
console.log(kopyalananOgeler);

// indexOf() method: Ogenin index numarasını getirir
console.log(meyveler.indexOf('Cilek'));
