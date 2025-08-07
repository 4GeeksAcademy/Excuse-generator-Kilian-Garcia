import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

/*
1- Necesito una función que lleve dentro todas las variables que formarán la frase y devuelva la combinación de todas de forma aleatoria. La llamaré -> randomExcuse
2- Dentro de la misma necesitoo una función que de forma aleatoria escoja un ítem dentro del array que es cada variable. Utilizo "mathflood/random" para que 
se genere el número y que coincida con el length -> randomItem
3- Necesito nombrar otra variable cuyo valor sea la suma de todas las variables de la función para formar la frase fina (la llamaré -> frase). Utilizo el código "+ +" para sumarlas
y no debo olvidar colocar el "return" para que la función anterior devuelva el resultado y trabaje con el mismo
4- Llamo a la función en el código de "onload" para que su resultado (que será la frase aleatoria) se sustituya por el de la página de HTML
*/

function randomExcuse(){
  let who = ['Mi perro', 'Mi abuela', 'El cartero', 'Mi gato', 'Mi novia'];
  let action = ['se comió', 'orinó', 'destrozó', 'rompió', 'perdió'];
  let what = ['mi tarea', 'mi teléfono', 'mi coche', 'mi pc', 'mi PS5'];
  let when = ['antes de clase', 'mientras dormía', 'durante mi sesión de yoga', 'cuando estaba de viaje', 'en vacaciones'];

    function randomItem(Item) {
  return Item[Math.floor(Math.random() * Item.length)];
    }
       let frase =   randomItem(who) + " " + randomItem(action) + " " + randomItem(what) + " " +  randomItem(when)+ ".";
       return frase;
}

window.onload = function() {
  document.querySelector('#excuse').innerHTML = randomExcuse();
};