class Product {
  constructor(nama, berat, price, stock) {
    this.nama = nama;
    this.berat = berat;
    this.price = price;
    this.stock = stock;
  }
}

class Buku extends Product {
  constructor(nama, berat, price, stock, penulis, penerbit) {
    super(nama, berat, price, stock);
    this.penulis = penulis;
    this.penerbit = penerbit;
    this.kategori = "buku";
  }
}

class Pakaian extends Product {
  constructor(nama, berat, price, stock, ukuran, bahan, warna) {
    super(nama, berat, price, stock);
    this.ukuran = ukuran;
    this.bahan = bahan;
    this.warna = warna;
    this.kategori = "pakaian";
  }
}

class OnlineShop {
  #product;
  #cart;
  constructor() {
    this.#product = [];
    this.#cart = [];
  }

  formatCurrency(price) {
    const result = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(price);
    return result;
  }

  tambahProduct(produk) {
    if (!produk) {
      return "produk harus diisi";
    }
    const existingProduct = this.#product.find((item) => {
      return item.nama === produk.nama;
    });

    if (existingProduct) {
      return "produk sudah ada di kataloog";
    }
    this.#product.push(produk);
    return "tambah produk sukses";
  }

  tambahKeKeranjang(produk, jumlah) {
    //ngecek ada gak di produk yang namanya sama kayak yang dicari (item)
    const availableProduct = this.#product.find((item) => {
      return item.nama === produk.nama;
    });
    if (!availableProduct) {
      return "produk tidak tersedia di toko ini";
    }

    let cartItem = this.#cart.find((item) => {
      return item.Product.nama.toLowerCase() === produk.nama.toLowerCase();
    });

    if (cartItem) {
      //kalau produk sudah ada dikart, tinggal ditambahin jumlahnya aja
      if (availableProduct.stock >= jumlah) {
        cartItem.jumlah += jumlah;
        availableProduct.stock -= jumlah;
        return "produk berhasil ditambahkan ke keranjang";
      } else {
        return {
          message: "stok tidak mencukupi",
          remainingStok: availableProduct.stock,
        };
      }
    } else {
      if (availableProduct.stock >= jumlah) {
        this.#cart.push({ product: availableProduct, jumlah });
        availableProduct.stock -= jumlah;
        return "produk berhasil ditambahkan ke keranjang";
      } else {
        return {
          message: "stok tidak mencukupi",
          remainingStok: availableProduct.stock,
        };
      }
    }
  }

  transaksi(uangUser, jarak) {
    //dibaca kalau jarak gak ada
    if (!jarak) {
      return "jarak harus diisi";
    }

    if (!uangUser) {
      return "uang user harus diisi";
    }

    let totalBelanja = 0;

    this.#cart.forEach((item) => {
      totalBelanja += item.product.price * item.jumlah;
    });

    const ongkir = jarak * 2000;
    const totalHarga = totalBelanja + ongkir;

    if (uangUser < totalHarga) {
      return "uang tidak cukup";
    }
    this.#cart = [];

    return {
      message: "Transaksi berhasil",
      totalBelanja: this.formatCurrency(totalBelanja),
      ongkir: this.formatCurrency(ongkir),
      totalHarga: this.formatCurrency(totalHarga),
      kembalian: this.formatCurrency(uangUser - totalHarga),
    };
  }

  showCatalog() {
    return {
      katalog: this.#product,
      totalKatalog: this.length,
    };
  }

  showCart() {
    return {
      keranjang: this.#cart,
    };
  }
}

const produk1 = new Buku("cara jago ngoding", 1, 100000, 5, "bowo", "aceng");
const produk2 = new Pakaian(
  "uniqlo",
  1,
  99000,
  10,
  "XL,L,M",
  "kevlar",
  "merah,hijau,biru"
);

const onlineShop = new OnlineShop(); //gak masukin parameter karena parameter constructornya kosong

console.log(onlineShop.tambahProduct(produk1));
console.log(onlineShop.tambahProduct(produk2));
console.log(onlineShop.showCatalog());
console.log(onlineShop.tambahKeKeranjang(produk1, 2));
console.log(onlineShop.showCart());
onlineShop.transaksi(100, 3);
