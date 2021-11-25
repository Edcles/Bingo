
function getNumber() {
    let bola = Math.floor(Math.random() * 98 + 1);
    console.log(bola);

    let divBola = document.getElementById("Numero");
    divBola.textContent = bola;
    
    let numero = document.querySelectorAll(`.n${bola}`);
      for (var i = 0; i < numero.length; ++i) {
       numero[i].classList.add('tachado');
      }

}