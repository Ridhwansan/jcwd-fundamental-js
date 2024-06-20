//ARRAY BUILT IN METHOD =============================================================
//join -> menggabungkan value yang ada dalam array ke dalam bentuk string
let words = ["hello", "world"];
console.log(words.join(" "));

//pop -> menghilangkan isi value paling akhir dalam array
const words2 = ["hello", "world", "hello"];
words2.pop();
console.log(words2);

//push -> menambahkan value kedalam array dipaling akhir
const words3 = ["hello", "world", "hello"];
words3.push("purwadhika");
console.log(words3);

//shift -> menghilangkan value paling depan didalam array
const words4 = ["test", "world", "hello"];
words4.shift();
console.log(words4);

//unshift -> menambahkan value ke urutan paling depan
const words5 = ["test", "world", "hello"];
words5.unshift("jogja");
console.log(words5);

//concat -> menggabungkan 2 array menjadi 1 array
const array1 = ["hello"];
const array2 = ["world"];
console.log(array1.concat(array2));

//splice -> menghapus, mengganti, atau menambahkan value pada sebuah array
//rumusnya -> splice(startIndex, brpYgMauDiDelete, item, item, .......)
const bulan = ["januari", "march", "april", "mei", "juni"];
//menambahkan pada index ke 1
bulan.splice(1, 0, "februari");
console.log(bulan);

//menghapus index ke 4 (mei)
bulan.splice(4, 1);
console.log(bulan);

//mengganti index ke 3 menjadi mei
bulan.splice(2, 1, "mei");
console.log(bulan);

//slice -> mereturn new array dengan value yang sudah kita tentukan
//iindex start dan index end nya dari sebuah array tersebut
// rumus : slice(startIndex,endIndex)
const fruits = ["banana", "orange", "lemon", "apple", "manggo"];
console.log(fruits.slice(0, 3));
//diambil dari index 1 ke index 3
console.log(fruits.slice(-4, -1));
//diambil dari index -4 hingga ke -1 (dibaca dari kanan)

//indexof -> mencari index dari value yang kita cari
//kalo misalnya tidak ditemukan akan mereturn -1
const fruits2 = ["banana", "orange", "lemon", "apple", "manggo"];
console.log(fruits2.indexOf("apple"));
//hasil ini memunculkan index ke berapa yang dicari

//sort -> mengurutkan isi array berupa string atau number
const fruits3 = ["banana", "orange", "lemon", "apple", "manggo"];
fruits3.sort();
console.log(fruits3);
//mengurutkan abjad

//versi number tanpa compare function karena hanya mengurutkan angka depan
const points = [1, 3, 5, 6, 2, 7];
points.sort();
console.log(points);

//versi number menggunakan compare function
const points2 = [34, 5, 200, 16, 8, 19];
points2.sort((a, b) => a - b); //asc (disebut juga anonimous function atau function tidak bernama)
//points2.sort((a, b) => b - a); //dsc
console.log(points2);

//reverse -> membalikan urutan elemen dalam array
const fruits4 = ["banana", "orange", "lemon", "apple", "manggo"];
fruits4.reverse();
console.log(fruits4);

//FOREACH -> hanya melakukan looping saja tanpa perlu mendapatkan hasil value dari loopingan tersebut (tidak mereturn sesuatu)
//melakukan looping sebanyak arraynya (tidak mereturn sesuatu)
const fruits5 = ["banana", "orange", "lemon", "apple", "manggo"];
fruits5.forEach((value, index) => {
  console.log(value);
});

//map -> melakukan looping sama kayak forEach tapi mereturn array baru
const fruits6 = ["banana", "orange", "lemon", "apple", "manggo"];
const result = fruits6.map((fruit, idx) => {
  return fruit;
});
console.log(result);

//filter -> melakukan looping sama kayak map dan menghasilkan array baru berdasarkan
//kondisi pada return function yang dimasukan ke filter parantheses
const age = [32, 30, 21, 12, 40];
const result2 = age.filter((age, index) => {
  return age > 20;
});
console.log(result2);

//find -> mencari value yang ditemukan pertama kali di dalam array
const ages = [3, 10, 20, 19];
const result3 = ages.find((age) => age > 18);
console.log(result3);
//hasil yang muncul 20 karena angka yang muncul pertama (dari kiri kekanan) adalah 20

//findindex ->
const ages2 = [3, 10, 20, 19];
const result9 = ages2.findIndex((age) => age > 18);
console.log(result9);
//20 ada di index ke 2

//reduce -> biasa digunakan untuk melakukan operasi aritmatika pada tiap isi array
const numbers = [175, 50, 25];
const result10 = numbers.reduce((a, b) => a + b);
console.log(result10);

//includes -> mengecek value pada array ada apa tidak, kalau ada dia return true kalau gak ada dia return false (boolean)
const fruits7 = ["banana", "orange", "apples"];
console.log(fruits7.includes("banana"));
