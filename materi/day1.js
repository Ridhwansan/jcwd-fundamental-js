//console log digunakan untuk memunculkan sebuah value di codingan
//cara mengeluarkan terminal di sini pake tombol ctrl + back tick (~)
//untuk bisa ngerun,tujuan folder di terminalnya harus sesuai dengan folder yang kita mau run
//cara milihnya tinggal tulis cd (folder yang mau di run) diterminal
//cara menjalankan quokka ctrl + K trus Q

console.log("hello world");
console.log("aku ganteng");

//variable adalah storage atau penampungan data, bisa diisi apapun
// variable declaration -> var,led,const
//var jarang dipake oleh developer karena var adalah global variable, karena var bisa digunakan dengan nama yang sama dan
//gada error jadi kalo codingannya banyak gaketauan

//let bisa gak langsung dimasukin variable
//const harus langsung dimasukin variable kalo gak nanti dia bakal error, dan isinya gabisa di replace kayak pake let

var person = "ridhwan";
console.log(person);

//kalau kita pake let kita bisa replace isi variable tersebut, tapi usahakan utamanya pake const, kecuali butuh pake let
let person1 = "budi 1";
person1 = "budi 2";
console.log(person1);

//VARIABLE NAMING
//must contain only letters, duguts, or symbol "$" and "_"
//the first character must not be digit
//case sensitive

//DATA  TYPES
//tipe data -> primitive dan non primitive
//primitive : string, number, boolean, null, undefined
//non primitive : object, array

//string -> "" / ''
//number -> 1 2 3 4 1000
//boolean -> true or false
// null -> value kosong yang nanti akan diisi
//undefined -> tidak ada isinya / kosong

// object ->
// array ->

//IMMUTABLE (objek yang tidak dapat diubah setelah dibuat)
//cara merubahnya adalah dengan membuat objek baru
let count1 = 4;
count2 = count1;

count2 = 10;

console.log(count1);
console.log(count2);

//MUTABLE (objek yang dapat diubah setelah dibuat tanpa perlu membuat objek baru)
let person7 = {
  name: "budi",
};

person8 = person7;
person8.hobby = "Nonton"; //tanda titik untuk menambahkan objek pada variable

console.log(person7);
console.log(person8);

//STRING BUILD IN METHOD
const nama = "SiTi";
const nama2 = "WES";
nama.toLowerCase; //membuat lowercase, bisa ditampung dulu seperti ini atau langsung dipanggil
console.log(nama.toLowerCase()); // cara yang seharusnya langsung saja, biasanya dipake untuk search bar
console.log(nama.toUpperCase());
console.log(nama.toString()); //mereturn string aslinya
console.log(nama.replace("i", "o")); //yang pertama kali dia temuin i
console.log(nama.replaceAll("i", "o"));
console.log(nama.split(" ")); //displit sama spasi
console.log(nama.concat(nama2)); //concat menggabungkan 2 objek
console.log(nama.slice(0, 2)); // dibaca dari 0 sampai 2, karena karakter T itu nomor 2, sehingga diambil sesuai batasan yaitu 2

//TEMPLATE LITERALS -> template string

const nama3 = `jack`;
const message = "welcome";
console.log(message + " " + nama3);
console.log(`${message} ${nama3}`); //kalo mau masukin pake template literals formatnya harus pake simbol dolar
console.log(`${nama3} ${message}`);
console.log(`"welcome" ${nama3}`);

//NUMBER BUILT IN METHOD
const angka = 1000;
const angka2 = "2000";
console.log(angka);
console.log(angka.toString()); //mengubah number ke string
console.log(parseInt(angka2));
console.log(Number(angka2)); //biasanya ini yang sering dipake karena bisa otomatis mendeteksi apakah ada yang salah dari stringnya

//TYPE CONVERSION
//String conversion
console.log(String(123)); //sama kayak tostring tapi lebih simple mengubah number ke string
//Numeric convesion
console.log("1" * "2"); //kalo di javascript string bisa dikali dan dikurangi kecuali tambah bagi
//Boolean conversion
console.log(Boolean(1)); //selain 0 artinya true
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(" ")); //true karena ada value yaitu spasi
console.log(Boolean("false"));

//DATE
const now = new Date();
console.log(now + 7); //menyesuaikan sesuai jam indo tp biasanya gapake +7 karena global UTC

//get method
console.log(now.getFullYear());
console.log(now.getMonth() + 1); //khusus bulan di js itu harus ditambahi 1
console.log(now.getDate());
console.log(now.getMinutes());
console.log(now.getSeconds());

//set method
now.setFullYear(2027); //mengubah tahun
console.log(now.getFullYear());

now.setTime(13);
console.log(now);

//BASIC OPERATOR -> +, -, *, /, %

console.log(2 * 4);
console.log(3 + 4);
console.log(3 % 2); //modulus itu sisa bagi
console.log(4 % 2 === 0);
console.log(4 ** 2); //pangkat

//MODIY IN PLACE
// n = n+2 -> n+=2 sama aja

let n = 5; //pakenya let karena nilainya berubah
console.log((n = n + 2));
console.log((n += 2));

let p = 2;
p += 3;
console.log(p);

//INCREMENT & DECREMENT
let counter = 2;
counter++; //increment
console.log(counter);

counter--; //decrement
console.log(counter);

//POSTFIX & PREFIX
let counter1 = 2;
// console.log(++counter1); //prefix
console.log(counter1++); //postfix
console.log(counter1); //ditambahin dibalik layar

console.log(5 == "5"); //itu true karena yang dicek isinya aja
console.log(5 === "5"); //ini dicek value dan tipe datanya, karna beda jadi false
console.log(5 != 5);
console.log(5 >= 5);
