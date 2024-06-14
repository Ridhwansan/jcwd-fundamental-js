// shooting game

// class ShootingGame {
//   constructor(p1, p2) {
//     this.p1 = p1;
//     this.p2 = p2;
//   }

//   getRandomItem() {
//     let ranItem = Math.floor(Math.random() * 2);
//     if (ranItem < 1) {
//       return { health: 10, power: 0 };
//     } else {
//       return { health: 0, power: 10 };
//     }
//   }
//   start() {
//     let ronde = 1;
//     console.log("Game mulai");
//     while (this.p1.health > 0 || this.p2.health > 0) {
//       console.log("\n");
//       console.log(`Ronde : ${ronde} `);
//       this.p1.showStatus();
//       this.p2.showStatus();
//       this.p1.useItem(this.getRandomItem());
//       this.p2.useItem(this.getRandomItem());
//       this.p1.hit(this.p2.power);
//       this.p2.hit(this.p1.power);
//       this.p1.showStatus();
//       this.p2.showStatus();
//       ronde++;
//     }

//     if (this.p1.health > this.p2.health) {
//       console.log(`${this.p1.name} Menang`);
//     } else {
//       console.log(`${this.p2.name} Menang`);
//     }
//   }
// }

// class Player {
//   constructor(name, health = 100, power = 10) {
//     this.name = name;
//     this.health = health;
//     this.power = power;
//   }

//   hit(power) {
//     this.health -= power;
//   }
//   useItem(item) {
//     this.health += item.health;
//     this.power += item.power;
//   }
//   showStatus() {
//     console.log(`${this.name} HP = ${this.health}`);
//     console.log(`${this.name} POWER = ${this.power}`);
//   }
// }

// const player1 = new Player("Ridhwan");
// const player2 = new Player("saga");

// const playShootingGame = new ShootingGame(player1, player2);
// playShootingGame.start();

//DIBAHAS ==========================================================================
class Player {
  constructor(name, health = 100, power = 10) {
    this.name = name;
    this.health = health;
    this.power = power;
  }

  hit(power) {
    this.health -= power;
  }
  useItem(item) {
    this.health += item.health;
    this.power += item.power;
  }
  showStatus() {
    return `${this.name} -> Health -> ${this.health} -> Power ${this.power}`;
  }
}

class ShootingGame {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }

  getRandomItem() {
    const health = Math.random() < 0.5 ? 0 : 10;
    const power = Math.random() < 0.5 ? 0 : 10;
    return {
      health: health,
      power: power,
    };
  }

  start() {
    while (this.player1.health > 0 && this.player1.health > 0) {
      const item1 = this.getRandomItem();
      const item2 = this.getRandomItem();

      //menggunakan random item
      this.player1.useItem(item1);
      this.player2.useItem(item2);

      //menampilkan status setelah ngehit
      console.log(this.player1.showStatus());
      console.log(this.player2.showStatus());

      //tampilkan status setelah di hit
      this.player2.hit(this.player1.power);
      this.player1.hit(this.player2.power);
    }

    if (this.player1.health <= 0) {
      return `${this.player2.name} Win`;
    } else {
      return `${this.player1.name} win`;
    }
  }
}

const player1 = new Player("ridhwan1");
const player2 = new Player("ridhwan2");
const game = new ShootingGame(player1, player2);

console.log(game.start());
