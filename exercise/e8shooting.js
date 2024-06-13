// shooting game

class ShootingGame {
  constructor(p1, p2) {
    this.p1 = p1;
    this.p2 = p2;
  }

  getRandomItem() {
    let ranItem = Math.floor(Math.random() * 2);
    if (ranItem < 1) {
      return { health: 10, power: 0 };
    } else {
      return { health: 0, power: 10 };
    }
  }
  start() {
    let ronde = 1;
    console.log("Game mulai");
    while (this.p1.health > 0 || this.p2.health > 0) {
      console.log("\n");
      console.log(`Ronde : ${ronde} `);
      this.p1.showStatus();
      this.p2.showStatus();
      this.p1.useItem(this.getRandomItem());
      this.p2.useItem(this.getRandomItem());
      this.p1.hit(this.p2.power);
      this.p2.hit(this.p1.power);
      this.p1.showStatus();
      this.p2.showStatus();
      ronde++;
    }

    if (this.p1.health > this.p2.health) {
      console.log(`${this.p1.name} Menang`);
    } else {
      console.log(`${this.p2.name} Menang`);
    }
  }
}

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
    console.log(`${this.name} HP = ${this.health}`);
    console.log(`${this.name} POWER = ${this.power}`);
  }
}

const player1 = new Player("Ridhwan");
const player2 = new Player("saga");

const playShootingGame = new ShootingGame(player1, player2);
playShootingGame.start();
