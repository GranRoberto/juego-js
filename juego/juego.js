/*
  Proyectos de la sección
  1) Utiliza programación orientada a objetos para crear un juego de peleas
  donde existan dos personajes y se peleen entre ellos hasta que uno de los dos
  se quede sin vida (por turnos).

  un personaje tiene nombre, vida y ataque, defensa

  Cada turno se debe imprimir el daño que se le hace al personaje y la vida que le queda
  a cada uno. Al final se debe imprimir el ganador.

  Los personajes deben tener un metodo que les permita atacar a otro personaje
  y un metodo que les permita defenderse.

  Deben ejecutar uno de los dos metodos de forma aleatoria.
  Y quien ataca o defiende primero debe ser aleatorio.

  La defensa lo que hace es sumar +3 de vida al personaje que se defiende

  el ataque debe ser debe tener un porcentaje aleatorio de quitar el 100% del ataque
  del personaje que ataca

  2) Crea un programa que te permita jugar piedra, papel o tijera contra la computadora
  en programación orientada a objetos, guardar un historial de victorias y derrotas

  Fecha de entrega: 20/06/2024
*/

class Personaje {
  constructor (nombre, vida, ataque, defensa, velocidad) {
    this.nombre = nombre;
    this.vida = vida;
    this.ataque = ataque;
    this.defensa = defensa;
  }
  saludar(){
    console.log(`Hola soy ${this.nombre}`);
  }

  ataque(oponente) {
    let daño = Math.floor(Math.random() * this.ataque) * (Math.random() < 0.5);
    oponente.recibe_daño(daño);
    console.log(`${this.name} ataca ${opponent.name} por ${damage} de daño!`);
  }

  defend() {
    this.health += 3;
    console.log(`${this.name} defends themselves!`);
  }

  receiveDamage(damage) {
    this.health -= damage;
    console.log(`${this.name} takes ${damage} damage!`);
  }
}

let goku = new Personaje ('Goku', 100, 5, 3);
let vegeta = new Personaje ('Vegeta', 100, 5, 3);

goku.saludar();
vegeta.saludar();

function pelear () {

}

pelear(goku, vegeta)


class Character {
  constructor(name, health, attack, defense) {
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.defense = defense;
  }

  attack(opponent) {
    const damage = Math.floor(Math.random() * this.attack) * (Math.random() < 0.5);
    opponent.receiveDamage(damage);
    console.log(`${this.name} attacks ${opponent.name} for ${damage} damage!`);
  }

  defend() {
    this.health += 3;
    console.log(`${this.name} defends themselves!`);
  }

  receiveDamage(damage) {
    this.health -= damage;
    console.log(`${this.name} takes ${damage} damage!`);
  }
}

function startFight(character1, character2) {
  let turn = Math.random() < 0.5 ? 'attack' : 'defend';

  while (true) {
    if (turn === 'attack') {
      const [attacker, defender] = [character1, character2].sort(() => Math.random() - 0.5);
      attacker.attack(defender);

      if (defender.health <= 0) {
        console.log(`${defender.name} has been defeated!`);
        break;
      }

      turn = 'defend';
    } else {
      const [defender, attacker] = [character1, character2].sort(() => Math.random() - 0.5);
      defender.defend();
      turn = 'attack';
    }
  }
}

const character1 = new Character('Player 1', 100, 20, 10);
const character2 = new Character('Player 2', 100, 15, 15);

console.log('**Fight Begins!**');
startFight(character1, character2);