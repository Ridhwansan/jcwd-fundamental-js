/*
    buat parent class Product
    constructor = nama, berat, price,stok

    buat child class dari produk yaitu Buku dan Pakaian 
    constructor = super, data unik dari buku dan pakaian 

    buat class OnlineShop
    constructor = products dan cart (private)
    method : 
        - tambahProduk(produk): memasukkan produk ke arr products, kalau sudah ada dalam arr products
            return produk sudah ada dalam toko

        - tambahKeKeranjang(produk, jumlah) : memasukkan produk yang di pilih user ke arr cart. Harus validasi
            sudah ada apa belum dalam cart dan juga validasi ada tidak produknya di catalog, kalau yang di masukkan 
            melebihi stok return stok tidak mencukupi dan tampilkan juga stoknya

        - transaksi(uangUser, jarak) : menampilkan total pembayaran, beserta ongkir. example: 1km * 2000.
            tampilkan juga kembaliannya dan kosongkan cart jika berhasil melakukan transaksi. Harus ada validasi
            untuk uangUser tidak boleh kurang dari total pembayaran.

        - showCatalog : menampilkan isi catalog dari toko

        - showCart : menampilkan isi cart user
*/

class Product {
  constructor(nama, berat, price, stock) {
    this.nama = nama;
    this.berat = berat;
    this.price = price;
    this.stock = stock;
  }
}

class Buku extends Product {
  constructor(nama, berat, price, stock, penulis) {
    super(nama, berat, price, stock);
    this.penulis = penulis;
  }
}

class Pakaian extends Product {
  constructor(nama, berat, price, stock, merek) {
    super(nama, berat, price, stock);
    this.merek = merek;
  }
}

class OnlineShop {
  #products;
  #cart;
  constructor() {
    this.#products = [];
    this.#cart = [];
    this.total = 0;
  }

  tambahProduk(produk, jumlah) {
    let existProduct = this.#products.find((p) => p.nama === produk.nama);
    if (existProduct) {
      existProduct.stock += jumlah;
    } else {
      produk.stock += jumlah;
      this.#products.push(produk);
    }
  }

  tambahKeKeranjang(produk, jumlah) {
    if (produk.stock >= jumlah) {
      this.#cart.push({ produk: produk, jumlah: jumlah });
      produk.stock -= jumlah;
      this.total += jumlah * produk.price;
    } else {
      return "produk kosong";
    }
  }

  kurangiProduk(namaproduk, jumlah) {
    let index = this.#cart.findIndex((item) => item.produk.nama === namaproduk);
    if (index > -1) {
      let cartItem = this.#cart[index];
      if (cartItem.jumlah >= jumlah) {
        cartItem.jumlah -= jumlah;
        cartItem.produk.stock += jumlah;
        this.total -= cartItem.produk.price * jumlah;
      }
      if (cartItem.jumlah === 0) {
        this.#cart.splice(index, 1);
      } else {
        return "jumlah produk di keranjang tidak cukup untuk dihapus";
      }
    } else {
      return "produk tidak ditemukan di keranjang";
    }
  }

  transaksi(uangUser, jarak) {
    const ongkir = jarak * 2000;
    const totalBayar = this.total + ongkir;

    if (uangUser >= totalBayar) {
      const kembalian = uangUser - totalBayar;
      this.#cart = [];
      this.totalBayar = 0;
      if (kembalian === 0) {
        return `Transaksi berhasil`;
      }
      if (kembalian > 0) {
        return `transaksi berhasil, kembalian anda ${kembalian}`;
      }
    } else {
      return `uang tidak cukup`;
    }
  }
  showCatalog() {
    return this.#products;
  }

  showTotal(jarak) {
    const ongkir = jarak * 2000;
    const totalBayar = this.total + ongkir;
    return `total belanjaan : ${totalBayar} `;
  }
  showCart() {
    return this.#cart;
  }
}

const olShop = new OnlineShop();
const bukuHarrypoter = new Buku("harrypota", 1000, 60000, 1, "tenhag");
const sweater = new Pakaian("half zipper", 100, 50000, 1, "uniqlo");

olShop.tambahProduk(bukuHarrypoter, 10);
olShop.tambahProduk(sweater, 5);

olShop.tambahKeKeranjang(sweater, 2);
olShop.tambahKeKeranjang(sweater, 4);
olShop.tambahKeKeranjang(bukuHarrypoter, 3);

console.log(olShop.showCatalog());
console.log(olShop.showCart());

console.log(olShop.showTotal(3));
console.log(olShop.transaksi(486000, 3));
