class Personaje {
  constructor (nombre, vida, ataque) {
    this.nombre = nombre;
    this.vida = vida;
    this.ataque = ataque;
  }
  saludar(){
    console.log(`Hola soy ${this.nombre}`);
  }
  ataque() {
    let daño = Math.floor(Math.random() * this.ataque  + 1);
    console.log(`${this.nombre} inflinge ${daño} de daño!`);
  }
  defensa() {
    this.vida += 3;
    console.log(`${this.nombre} se defiende!`);
  }

  recibe_daño(daño) {
    this.vida -= daño;
    console.log(`${this.nombre} recive ${daño} de daño!`);
  }
}

let goku = new Personaje('Goku', 100, 20);
let vegeta = new Personaje('Vegeta', 100, 15);

function pelea(goku, vegeta) {
  let turno = Math.random() > 0.5;

  while(true){
    if (turno >= 0.5) {
      let [primero, segundo] = [goku, vegeta].sort(() => Math.random());
      primero.ataque(segundo);
    } else if (turno <= 0.5) {
      let [segundo, primero] = [goku, vegeta].sort(() => Math.random());
      segundo.ataque(primero);
    } else if (segundo.vida <= 0) {
      console.log(`${segundo.nombre} fue derrotado!`);
    }
  }
}


goku.saludar();
vegeta.saludar();
console.log('Que comience la pelea!');
pelea(goku, vegeta);