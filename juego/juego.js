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
  constructor (nombre, vida, ataque, defensa) {
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
    console.log(`${this.nombre} ataca a ${oponente.nombre} por ${daño} de daño!`);
  }

  defensa() {
    this.vida += 3;
    console.log(`${this.nombre} se defiende asímismo!`);
  }

  recibe_daño(daño) {
    this.vida -= daño;
    console.log(`${this.nombre} recive ${daño} de daño!`);
  }
}
let goku = new Personaje('Goku', 100, 20);
let vegeta = new Personaje('Vegeta', 100, 15);
goku.ataque();
vegeta.defensa();

function pelea(goku, vegeta) {
  let turno = Math.random() < 0.5 ? 'ataca' : 'defiende';

  while (true) {
    if (turno === 'ataca') {
      let [atacante, defensor] = [goku, vegeta].sort(() => Math.random() - 0.5);
      atacante.ataque(defensor);
      turno = 'defiende';
    } if (defensor.vida <= 0) {
      console.log(`${defensor.nombre} fue derrotado!`);
      break;
    } else {
      let [defensor, atacante] = [goku, vegeta].sort(() => Math.random() - 0.5);
      defensor.defensa(atacante);
      turno = 'ataca';
    }
  }
}

goku.saludar();
vegeta.saludar();
console.log('Que comience la pelea!');
pelea(goku, vegeta);

