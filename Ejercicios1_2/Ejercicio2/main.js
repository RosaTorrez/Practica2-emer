
function solution(numeroInicial, numeroFinal) {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";
    let suma = 0;
    for (let i = numeroInicial; i <= numeroFinal; i++) {
      if (i % 2 === 0) {
        suma += i;
      }
    }
    console.log(suma);
  }
  
  function eventHandler(event) {
    event.preventDefault();
    let numeroInicial = parseInt(document.getElementById("numeroInicial").value);
    let numeroFinal = parseInt(document.getElementById("numeroFinal").value);
    solution(numeroInicial, numeroFinal);
  }
  solution(1, 10); 
  solution(1, 20); 