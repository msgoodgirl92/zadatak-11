var dugme = document.getElementById("dugme");
var poluprecnik = document.getElementById("poluprecnik");
var visina = document.getElementById("visina");

dugme.addEventListener("click", () => {
    var summ = document.getElementById("rezultat");
    summ.value = Math.PI * poluprecnik.value * poluprecnik.value * visina.value;
});// JavaScript Document