 

 
const ganador = document.getElementById('ganador');


let caracter = "X";
let caracterAsig = "";

let jugador1 = [];
let jugador2 = [];
let ganandoJ1 = 0;
let ganandoJ2 = 0;

const winning_conbinations = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [3, 5, 7],
  [1, 5, 9],
];

document.querySelectorAll(".grid div").forEach((e) => {
  e.addEventListener("click", () => {
    if (e.innerHTML === "") {
      e.innerHTML = caracter;
      caracterAsig = caracter;

      if (caracter === "X") {
        jugador1.push(e.id * 1);
        ganarJ1(winning_conbinations, jugador1);
      } else {
        jugador2.push(e.id * 1);
        ganarJ2(winning_conbinations, jugador2);
      }
      caracter = caracter === "X" ? "O" : "X";
      caracterAsig = caracter;
    }
  });
});

function reset() {
  document.querySelectorAll(".grid div").forEach((e) => {
    e.innerHTML = "";
    caracter = "X";
  });
}

function ganarJ1(array, j1) {
  for (let k = 0; k < array.length; k++) {
    for (let i = 0; i < array[k].length; i++) {
      //  console.log(array[k][i]);

      if (j1.includes(array[k][i])) {
        ganandoJ1++;
        if (ganandoJ1 === 3) {
           
          ganador.innerHTML = 'Lo lograste!!!';

       
        }
      } else {
        ganandoJ1 = 0;
      }
    }
  }
}

function ganarJ2(array, j2) {
    for (let k = 0; k < array.length; k++) {
      for (let i = 0; i < array[k].length; i++) {
        //  console.log(array[k][i]);
  
        if (j2.includes(array[k][i])) {
          ganandoJ2++;
          if (ganandoJ2 === 3) {
            console.log("Lo lograste !!!");
          }
        } else {
          ganandoJ2 = 0;
        }
      }
    }
  }


   