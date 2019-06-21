/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";
// ACÁ EMPIEZA
let Pinta = ["Pica", "Trebol", "Corazones", "Diamante"];

window.onload = function() {
  let Numero = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  // Pica, Trebol, Corazón, Diamante
  document.querySelector(".Reemplaza").innerHTML =
    Numero[RandomCards(0, Numero.length)];
  console.log(Numero[RandomCards(0, Numero.length - 1)]);
  Probando();
  console.log(Pinta[RandomCards(0, Pinta.length - 1)]);
};

function RandomCards(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
function Probando() {
  document.querySelector(".Numero").className =
    "Numero " + Pinta[RandomCards(0, Pinta.length)];
}
