function solution(number) {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = ""; // Limpiar el contenido previo
  
    for (let i = 1; i <= number; i++) {
      let output = "";
      if (i % 3 === 0) {
        output = "Fizz";
      }
      if (i % 5 === 0) {
        output = "Buzz";
      }
      const div = document.createElement("div");
      div.textContent = output ? `${output} ${i}` : i;
      resultDiv.appendChild(div);
    }
  }
  
  function eventHandler(event) {
    event.preventDefault();
    let number = document.getElementById("number").value;
    solution(number);
  }
  
  // Prueba con un número específico
  solution(15); // Llama a la función solution con el número 15