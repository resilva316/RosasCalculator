function clearScreen() {
    document.getElementById("screen").value = '';
}

function display(value) {
    document.getElementById("screen").value += value;
}

function calculate() {
    try {
        document.getElementById("screen").value = eval(document.getElementById("screen").value);
    } catch (error) {
        document.getElementById("screen").value = 'Error';
    }
}