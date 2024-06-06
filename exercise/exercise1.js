//1
const panjang = 5;
const lebar = 3;
let luas = panjang * lebar;
console.log(luas);

//2

let keliling = 2 * panjang + 2 * lebar;
console.log(keliling);

//3
const radius = 5;
const phi = 3.14;

let diameter = 2 * radius;
console.log(diameter);

let circumference = 2 * phi * radius;
console.log(circumference);

let area = phi * radius * radius;
console.log(area);

//4
const c = 180;
const a = 80;
const b = 65;
let angle = c - (a + b);
console.log(angle);

//5
const date1 = new Date();
const date2 = new Date();

date1.setDate(20);

date2.setDate(22);

date1.getDate();
date2.getDate();
selisih = date2.getDate() - date1.getDate();
console.log(Math.abs(selisih));

//6
// 400 hari
const days1 = 400;

let year = Math.floor(days1 / 365);
let month = Math.floor((days1 % 365) / 30);
let leftdays1 = Math.floor(days1 % 365) % 30;

console.log(`year : ${year}, Month : ${month}, Days : ${leftdays1}`);

//366 days
const days2 = 366;
let year2 = Math.floor(days2 / 365);
let month2 = Math.floor((days2 % 365) / 30);
let leftdays2 = Math.floor((days2 % 365) % 30);

console.log(`year : ${year2}, Month : ${month2}, Days : ${leftdays2}`);

//5 cara lain
const datebaru1 = new Date("2023-11-20");
const datebaru2 = new Date("2023-11-22");
const bedaTanggal = Math.abs(datebaru1 - datebaru2);
console.log(bedaTanggal);
const bedaHari = Math.round(bedaTanggal / (1000 * 60 * 60 * 24));
console.log(`perbedaan harinya adalah : ${bedaHari}`);
//karena hasil pengurangan date hasilnya otomatis milidetik sehingga dibaginya pun harus milidetik
//sehingga 1000ms * 60s *60m *24jam
//math round berfungsi agar pengurangan yang hasilnya negatif tetap jadi positif
