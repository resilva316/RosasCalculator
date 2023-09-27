function Display(value){
    const screen = document.getElementById('screen');
    screen.value += value;
}

function clearScreen() {
    const screen = document.getElementById('screen');
    screen.value = '';
}

function calculate() {
    const screen = document.getElementById('screen');
    try {
        screen.value = eval(screen.value);
    } catch (error) {
        screen.value = 'Error';
    }
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
      if (button.textContent === 'C') {
        clearScreen();
      } else if (button.textContent === '=') {
        calculate();
      } else {
        Display(button.textContent);
      }
    });
  });