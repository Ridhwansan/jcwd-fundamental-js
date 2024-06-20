//contoh synchronus dijalankan setelah task sebelumnya selesai
// console.log("task1");
// console.log("task2");
// console.log("task3");

// //Asynchronus
// console.log("task 1");
// setTimeout(() => console.log("task 2"), 3000);
// console.log("task 3");
// //task 2 dijalankan belakangan karena tidak menunggu hingga task 2 selesai

// //Promise

// //resolve dan reject adalah sebuah parameter
// //kalo resolve masuknya ke then
// //kalau reject ke catch
// //namanya mau beda apa aja bisa karena parameter, tapi real casenya namanyay resolve dan reject
// const tryPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const success = false;
//     if (success) {
//       resolve("success");
//     } else {
//       reject("error");
//     }
//   }, 2000);
// });

// tryPromise
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("finally done");
//   });

// const fetchData = () => {
//   fetch("https://jsonplaceholder.typicode.com/users") // /users itu end pointnya
//     .then((response) => {
//       return response.json(); //kalau mau ambil hasilnya harus res.json, baru di .then, ini harus direturn dan hasilnya res.json, lalu bakal masuk ke parameter users
//     })
//     .then((users) => {
//       //users karena end point nya users, kita mau ambil data users
//       console.log(users);
//     })
//     .catch((err) => {
//       //kalo API nya error maka akan masuk ke error ini
//       console.log(err);
//     })
//     .finally(() => {
//       console.log("finally done");
//     });
// };

// fetchData();

//Async await
//anggapannya untuk fetch data ke API
// const fetchData = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("berhasil");
//     }, 2000);
//   });
// };

// async function getDataa() {} // cara 1

//cara 2
// const getData = async () => {
//   const result = await fetchData();
//   console.log(result);
//   return result;
// };

// getData();

// const fetchData = () => {
//   fetch("https://jsonplaceholder.typicode.com/users") // /users itu end pointnya
//     .then((response) => {
//       return response.json(); //kalau mau ambil hasilnya harus res.json, baru di .then, ini harus direturn dan hasilnya res.json, lalu bakal masuk ke parameter users
//     })
//     .then((users) => {
//       //users karena end point nya users, kita mau ambil data users
//       console.log(users);
//     })
//     .catch((err) => {
//       //kalo API nya error maka akan masuk ke error ini
//       console.log(err);
//     })
//     .finally(() => {
//       console.log("finally done");
//     });
// };

// const fetchData = async () => {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     // if(!users){
//     //   throw new Error("users")
//     // }
//     const users = await response.json();
//     console.log(users);
//     return users;
//   } catch (error) {
//     console.log(error);
//   }
// };
// fetchData();

//try -> yang berhasil
// catch -> yang gagal

// =========================

const user = {
  name: "budi",
  age: 39,
};
//output biasa
console.log(user);

//output JSON, unutuk mentranslate objek biasa ke JSON
const userJSON = JSON.stringify(user);
console.log(userJSON);

// cara mengubah JSON menjadi objek biasa
const parseJSON = JSON.parse(userJSON);
console.log(parseJSON);

// MODULE
const myFunction = () => {
  return "ini adalah function";
};

const data = "ini adalah data";

module.exports = { myFunction, data }; //cara agar bisa digunakan di file lain
