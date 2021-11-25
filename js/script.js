const width = 10;
const numberSquares = [];
let array = [];
let x = 0;
let divBolasSacadas = document.getElementById("numeroSacados");

function getNumber() {
    let bola = Math.floor(Math.random() * 100);
    if(x == 100) {
        alert('Partida terminada');
        location.reload();
    } else {
        if (!array.includes(bola)){
            let div = document.getElementById(bola);
            //console.log(div);
            array[x] = bola;
            console.log(array[x]);
            x++;
            //console.log(bola);
            
            let divBola = document.getElementById("numero");
            divBola.textContent = bola;
            
            if(div.innerHTML == bola && !array.includes(div.innerHTML)) {
                div.style.position = "relative";
                div.style.backgroundColor = "white";
                div.style.zIndex = "10px";
            }
        } else {
            console.log("repite");
            getNumber();
        }
    }
}

function createBoard(grid, squares){
    for (let i = 0; i < width*width; i++) {
        const square = document.createElement('div');
        square.setAttribute('id', i);
        var texto = document.createTextNode(i);
        square.appendChild(texto);
        grid.appendChild(square);
        squares.push(square);
    }
}

createBoard (divBolasSacadas ,numberSquares)