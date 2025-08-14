let secretNumber;
let counter; 
let usedNumbersList = [];
const maxNumber = 10;
let maxAttempts;

function textElement(element, texto) {
    let codeHTML = document.querySelector(element);
    codeHTML.innerHTML = texto;
    return;
}

function generateSecretNumber() {
    let newNumber = Math.floor(Math.random() * maxNumber) + 1;
    if (usedNumbersList.length == maxNumber) {
        usedNumbersList = [];
    }
    if (usedNumbersList.includes(newNumber)) {
            return generateSecretNumber();
    } else {
            usedNumbersList.push(newNumber);
            return newNumber;
    }
}

function cleanInput() {
    document.getElementById("userValue").value = "";
}

function gameStart() {
    secretNumber = generateSecretNumber();
    counter = 1;
    maxAttempts = 3;
    textElement("h1", "Juego del número secreto");
    textElement("p", `Indica un numero entre 1 y ${maxNumber}. Tienes ${maxAttempts} intentos.`);
}

function userAttempt() {

    let userNumber = parseInt(document.getElementById("userValue").value);

    if (isNaN(userNumber) || userNumber < 1 || userNumber > maxNumber) {
        cleanInput();
    } else {
        if (userNumber === secretNumber) {
            textElement("p", `¡Correcto! Haz acertado en ${counter} ${counter === 1 ? "intento" : "intentos"}!`);
            document.getElementById("reiniciar").removeAttribute("disabled");
            document.getElementById("intentar").setAttribute("disabled", true);
        } else {
            maxAttempts--;
            if (maxAttempts == 0) {
            document.getElementById("intentar").setAttribute("disabled", true);
            document.getElementById("reiniciar").removeAttribute("disabled");
            textElement("p", "Alcanzaste el maximo de intentos");
            } else {
                if (userNumber < secretNumber) {
                    textElement("p", `Incorrecto. El número secreto es mayor. Quedan ${maxAttempts} ${maxAttempts === 1 ? "intento" : "intentos"}.`);
                } else {
                    textElement("p", `Incorrecto. El número secreto es menor. Quedan ${maxAttempts} ${maxAttempts === 1 ? "intento" : "intentos"}.`);
                }
                    counter++;
                    cleanInput();
            }
        return;
        }
    }
}

function restart() {
    document.getElementById("reiniciar").setAttribute("disabled", true);
    document.getElementById("intentar").removeAttribute("disabled");
    cleanInput();
    gameStart();
}

gameStart();
