// //CONDITIONAL DAN LOOPING

// // IF STATEMENT ==================================
// const age = 10;
// if (age >= 17) {
//   //wajib boolean sehingga harus menghasilkan nilai true atau false
//   console.log("anda bisa buat ktp");
// }

// //ELSE STATEMENT ================================
// if (age >= 17) {
//   console.log("anda bisa buat ktp");
// } else {
//   console.log("Anda bisa buat KTP");
// }

// //ELSE IF STATEMENT =============================
// const grade = "a";
// if (grade == "A" || grade == "a") {
//   console.log("Nilai bagus");
// } else if (grade == "B" || grade == "b") {
//   console.log("Nilai Lumayan");
// } else if (grade == "C" || grade == "c") {
//   console.log("Anda remed");
// } else {
//   console.log("Nilai tidak diketahui");
// }

// //SWITCH CASE ========================
// //digunakan hanya untuk perbandingan satu nilai saja (jarang digunakan di real life)

// const day = "selasa";

// switch (day) {
//   case "senin":
//     console.log("Sekarang hari senin");
//     break;
//   case "selasa":
//     console.log("Sekarang hari selasa");
//     break;
//   default:
//     console.log("Gatau hari apa");
//     break;
// }

// // LOGICAL OPERATOR ===================
// // ada 3
// // && -> dan
// // || -> atau
// // !-> not

// const car = "mercy";

// if (car === "mercy" || car === "bmw") {
//   console.log("Mobil jerman");
// } else if (car === "daihatsu" || car === "toyota") {
//   console.log("mobil jepang");
// } else {
//   console.log("gatau mobil apa");
// }

// const umur = 17;
// const punyaSim = true;

// if (umur >= 18 && punyaSim === true) {
//   console.log("boleh bawa kendaraan");
// } else {
//   console.log("tidak boleh bawa kendaraan");
// }

// //NOT -> Membalikan nilai boolean

// const isSunny = true;
// const isRaining = !isSunny;

// console.log(isSunny);
// console.log(isRaining);

// //TERNARY OPERATOR =====================
// //shortcut untuk if else condition
// //condition ? true : false

// const str = "javascript";
// if (str === "javascript") {
//   console.log("javascript");
// } else {
//   console.log("not javascript");
// }
// //contoh nyata terminary operator
// //          Condition               true            False
// console.log(str === "javascript" ? "javascript" : "not javascript");

// console.log(
//   str === "javascript"
//     ? "javascript"
//     : str === "typescript"
//     ? "typescript"
//     : "not found"
// );

// //LOOP -> Perulangan =====================================
// //instruksi yang dilakukan berulang kali hingga kondisinya tidak terpenuhi
// // type : FOR, WHILE, DO WHILE

// //FOR Loop -> Mempunyai 3 statement
// // statement 1 : menginisialisasi variable dari looping itu sendiri
// // statement 2 : mendefine kondisi dari looping tersebut
// // statement 3 : kode yang di eksekusi di akhir setiap iterasi

// //syntax
// //for(statement1;statement2;statement3){
// //
// // }

// for (let i = 0; i < 3; i++) {
//   console.log("hello world");
// }

// //another expample with if
// for (let i = 0; i < 3; i++) {
//   if (i % 2 == 0) {
//     console.log("hello world");
//   }
// }

// //WHILE loop ===================================

// let i = 0;
// while (i < 10) {
//   console.log("aku ganteng");
//   i++;
//

//DO WHILE loop =================================

// let countt = 1;
// do {
//   console.log("ini angka ke " + countt);
//   countt++;
// } while (countt <= 5);

// //BREAK
// //berguna untuk menghentikan loop
// let sum = 0;

// while (true) {
//   if (sum >= 5) {
//     return;
//   }
//   sum += 1;
// }

//CONTINUE ========================================
//untuk melakukan skip pada looping tertentu
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    //kondisi if i ===3 di skip
    continue;
  }
  console.log("hello");
}

//cara push ke github
//git add .
//git  commit -m "your message"
//git push origin namaBranch
