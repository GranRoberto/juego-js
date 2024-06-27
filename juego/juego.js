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
  constructor (nombre, vida, ataque) {
    this.nombre = nombre;
    this.vida = vida;
    this.ataque = ataque;
  }
  saludar(){
    console.log(`Hola soy ${this.nombre}`);
  }
  atacar() {
    let daño = Math.floor(Math.random() * this.ataque  + 1);
    console.log(`${this.nombre} inflinge ${daño} de daño!`);
  }
  defender() {
    this.vida += 3;
    console.log(`${this.nombre} se defiende!`);
  }

  recibe_daño(daño) {
    this.vida -= daño;
    console.log(`${this.nombre} recive ${daño} de daño!`);
  }
}

let goku = new Personaje('Goku', 100, 15);
let vegeta = new Personaje('Vegeta', 100, 15);

function pelea(goku, vegeta) {
  let turno = Math.random();

  while(true){
    if (turno >= 0.5) {
      let [primero, segundo] = [goku, vegeta].sort(() => Math.random() - 0.5);
      primero.atacar(segundo);
      if (turno >= 0.75) {
        primero.defender();
      } else if (primero.vida <= 0) {
        console.log(`${this.nombre} fue derrotado!`);
        break;
      } else if (turno <= 0.5) {
        let [segundo, primero] = [goku, vegeta].sort(() => Math.random() - 0.5);
        segundo.atacar(primero);
        if (turno <= 0.25) {
          segundo.defender();
        }
      } else if (segundo.vida <= 0) {
        console.log(`${this.nombre} fue derrotado!`);
        break;
      }
    }
  }
}



goku.saludar();
vegeta.saludar();
console.log('Que comience la pelea!');
pelea(goku, vegeta);


class Personaje {
  constructor(nombre, vida, ataque) {
    this.nombre = nombre;
    this.vida = vida;
    this.ataque = ataque;
  }

  atacar(defensor) {
    let ataque = Math.floor(Math.random() * this.ataque) + 1;
    console.log(`${this.nombre} ataca y hace: ${ataque} puntos de daño`)
    return defensor.vida -= ataque;
  }

  defender() {
    this.vida += 3;
  }
  }

  let goku = new Personaje('Goku', 20, 5);
  let freezer = new Personaje('Freezer', 20, 6);

  while(goku.vida > 0 && freezer.vida > 0) {
  let orden = Math.floor(Math.random() * 2) + 1;
  if(orden == 1) {
    turno(goku, freezer);
  } else {
    turno(freezer, goku);
  }
  }

  function turno(personaje1, personaje2){
  let accion = Math.floor(Math.random() * 2) + 1;
  if(accion == 1) {
    personaje2.vida = personaje1.atacar(personaje2);
    console.log(`${personaje1.nombre} ataca a ${personaje2.nombre}, su vida actual es: ${personaje2.vida}`);
    if(personaje2.vida <= 0) {
      console.log(`${personaje1.nombre} ha ganado`);
    }
  } else {
    personaje1.defender();
    console.log(`${personaje1.nombre} se defiende: ${personaje1.vida}`);
  }
  }