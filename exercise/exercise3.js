//1 Write a code to display the multiplication table of a given integer.
const number = 7;
let message = "";

for (let i = 1; i <= 10; i++) {
  message += `(${number} x ${i} = ${number * i})`;
}
console.log(message);

//2 palindrome
const word = "makam";
let lengthWord = word.length; //fungsi untuk memecah kalimat menjadi per karakter
let palindrome = true;

for (i = 0; i < lengthWord; i++) {
  if (word[i] !== word[lengthWord - 1 - i]) {
    palindrome = false;
  }
}

if (palindrome == false) {
  console.log(`kata ${word} bukan palindrome`);
} else {
  console.log(`kata ${word} adalah palindrome`);
}

//3 write a code to conver cm to km
const cm = 100000;
let km = null;
let total = cm / 100000;
console.log(`konversi dari ${cm} cm adalah ${total} km`);

//4 write a code to format number into curency
let angka = 10000;
let uang = new Intl.NumberFormat("id-ID", {
  // id = bahasa ID = kode negara, akan menggunakan format penulisan negara tersebut
  style: "currency", //memanggil sintaks currency
  currency: "IDR", // menentukan currency apa yang digunakan
}).format(angka);
console.log(uang);

//5
let kata = "Hello world";
let hapusKata = "ell";

kata = kata.toLowerCase();
hapusKata = hapusKata.toLowerCase();

const kataYangDihapus = kata.indexOf(hapusKata);

if (kataYangDihapus !== -1) {
  kata =
    kata.slice(0, kataYangDihapus) + //potongan pertama dari indeks ke 0, hingga ke kataYangDihapus
    kata.slice(kataYangDihapus + hapusKata.length);
}

console.log(kata);

//6
let masukanKalimat = "LalalaLALALA ";
let ubahKata = masukanKalimat.split(" "); //kalo udah ketemu spasi baru di split

for (let i = 0; i < ubahKata.length; i++) {
  //.length mulai dari 1, sedangkan index mulai dari 0
  let hurufPertama = ubahKata[i].charAt(0).toUpperCase();
  ubahKata[i] = hurufPertama + ubahKata[i].slice(1);
}
let hasilKalimat = ubahKata.join(" ");
console.log(hasilKalimat);

//7 Write a code to reverse a string

let tulisan = "halo guys";
let dibalik = "";

for (let i = tulisan.length - 1; i >= 0; i--) {
  //tulisan.length dikurangi satu karena .length mulai dari 1 dan mau dijadikan 0
  dibalik += tulisan[i];
}
console.log(dibalik);

//8
let tulis = "hEllO WoRLd";
let tukar = "";

for (let i = 0; i < tulis.length; i++) {
  let ambil = tulis[i]; // mengambil karakter pada indeks ke i pada variable tulis
  if (ambil === ambil.toUpperCase()) {
    tukar += ambil.toLowerCase();
  } else {
    tukar += ambil.toUpperCase();
  }
}

console.log(tukar);

//9
const num1 = 42;
const num2 = 27;
if (num1 > num2) {
  console.log(` (${num1}) lebih besar daripada (${num2})`);
} else {
  console.log(`(${num2}) lebih besar daripada (${num1})`);
}

//10
let nom1 = 42;
let nom2 = 27;
let nom3 = 18;

if (nom1 > nom2) {
  let temp = nom1;
  nom1 = nom2;
  nom2 = temp;
} //menukar nilai nom1 = 27, nom2 =42
if (nom2 > nom3) {
  let temp = nom2;
  nom2 = nom3;
  nom3 = temp;
} //menukar nilai nom2 = 18 dan nom3 = 42
if (nom1 > nom2) {
  let temp = nom1;
  nom1 = nom2;
  nom2 = temp;
} //menukar nom1 = 18 dan nom2 = 27

console.log(`urutannya adalah ${nom1}, ${nom2}, ${nom3}`);
//no 10 cara lain
const smallest = Math.min(nom1, nom2, nom3);
const largest = Math.max(nom1, nom2, nom3);
const middle = nom1 + nom2 + nom3 - smallest - largest; //dia bakal menghapus atau mengurangi nom 1 dan nom 3

console.log(`${smallest}, ${middle}, ${largest}`);

//11

const nilai = "halo";

if (typeof nilai === "string") {
  console.log("1");
} else if (typeof nilai === "number") {
  console.log("2");
} else {
  console.log("3");
}

//12
const werd = "halo gaaaaas";
let change = werd.replace(/a/gi, "*");
console.log(change);
//a -> huruf yang mau diubah, g -> global merubah semua 'a' yang ditemukan, i-> case sensitive a atau A akan diganti *,
//"*" -> huruf yang mau diganti
