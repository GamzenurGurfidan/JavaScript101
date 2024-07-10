// Javascriptte 3 farklı variable tanımlanır

/*
let ve var ile olusturulan variable'lara atanan değerler degiştirilebilir özelliktedir
const ile olusturulan variable'lara atanan deger degistirilemez
*/

let firstName = "Murat" //String
var lastName = "Yiğit" // String
let age = 44 //numbers
const idNumber = 23456 // DEğiştirilemez data tipi

console.log("Adı: " + firstName)
console.log('Soyadı: ' + lastName)
console.log('Yası: ' + age)
console.log('TCKN: ' + idNumber)

console.log('---------------------')

firstName = "Tarık"
age = 18
const schoolName = 'Uludag'
// kendisinden önce tanımlamadan yazdırılmaz yukardan asagıya dogru calısır

console.log("Adı: " + firstName)
console.log('Soyadı: ' + lastName)
console.log('Yası: ' + age)
console.log('TCKN: ' + idNumber)
console.log('Okulu: ' + schoolName)

