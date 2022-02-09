// tady je místo pro náš program

function obarviNaZeleno() {
  let ctverecek = document.querySelector('.ctverecek');
  ctverecek.style.backgroundColor = "green";
}


function zobrazVysledek() {
  document.querySelector("#vysledek").innerHTML = secti(4, 5);

}



/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * @param {int} a
 * @param {int} b
 */
function secti(a, b) {
  let c = a + b;
  return c;
}

/**
 * Upozorní uživatele při spuštění.
 */
function upozorni() {
  document.querySelector('.ctverecek').textContent = 'Gratulace';
  console.log("Gratulace, právě jsi spustila tuto funkci!");
  alert("Gratulace, právě jsi spustila tuto funkci!");

}




