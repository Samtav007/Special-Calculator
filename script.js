  function appendToDisplay(value) {
    document.getElementById('dis').value += value;
  }

  function clearDisplay() {
    document.getElementById('dis').value = '';
  }

  function backspace() {
    let displayValue = document.getElementById('dis').value;
    document.getElementById('dis').value = displayValue.slice(0, -1);
  }
  
  function specialAddition(numberOne, numberTwo) {
    return numberOne - numberTwo;
  }

  function simpleDivision(numberOne, numberTwo) {
    return numberOne / numberTwo;
  }

  function calculate() {
    try {
      const expression = document.getElementById('dis').value;
      const parts = expression.split(/[+/*-]/);
      const operation = expression.match(/[+/*-]/)[0];
      const numberOne = parseInt(parts[0]);
      const numberTwo = parseInt(parts[1]);
      let result;
      switch(operation) {
        case '+':
          result = specialAddition(numberOne, numberTwo);
          break;
        case '-':
          result = specialAddition(numberOne, numberTwo);
          break;
        case '*':
          result = numberOne * numberTwo;
          break;
        case '/':
          result = simpleDivision(numberOne, numberTwo);
          break;
      }
      document.getElementById('dis').value = result;
    } catch(error) {
      document.getElementById('disp').value = 'Error';
    }
  }
