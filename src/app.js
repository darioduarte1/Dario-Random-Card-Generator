/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let arrayNaipes = ["♦️", "♥️", "♠️", "♣️"];
  let arrayNumeros = [
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
    "K",
    "A"
  ];

  let selecionNaipe =
    arrayNaipes[Math.floor(Math.random() * arrayNaipes.length)];
  let selecionNumeros =
    arrayNumeros[Math.floor(Math.random() * arrayNumeros.length)];

  let naipe1 = document.querySelector(".naipe1");
  naipe1.innerHTML = selecionNaipe;

  let naipe2 = document.querySelector(".naipe2");
  naipe2.innerHTML = selecionNaipe;

  if (selecionNaipe == "♦️" || selecionNaipe == "♥️") {
    naipe1.classList.add("text-danger");
    naipe2.classList.add("text-danger");
  }

  let numeros = document.querySelector("#numero");
  numeros.innerHTML = selecionNumeros;
};
