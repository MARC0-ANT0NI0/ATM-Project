const avaliableMoney = {1: 50, 10: 50, 20: 10, 50: 6, 100: 3};
const keys = Object.keys(avaliableMoney);
const amounts = Object.values(avaliableMoney);
let totalMoney = 1350;
let varAmount = 0;
let givenAmount = 0;
let messageElement = document.getElementById("message");

const calculo = () => {
    for (let i = 4; i > -1; i--) {
        if (myMoney >= keys[i]) {
            varAmount = Math.floor(myMoney / keys[i]);
            if (amounts[i] >= varAmount) {
                givenAmount = varAmount;
                amounts[i] = amounts[i] - varAmount;
                varAmount = varAmount * keys[i];
                myMoney = myMoney - varAmount;
                totalMoney = totalMoney - varAmount;
                messageElement.innerHTML += "<p>Se entrega " + givenAmount + " billetes de $" + keys[i] + "</p>";
            } else {
                if(amounts[i] > 0) {
                    varAmount = amounts[i];
                    givenAmount = varAmount;
                    amounts[i] = amounts[i] - varAmount;
                    varAmount = varAmount * keys[i];
                    myMoney = myMoney - varAmount;
                    totalMoney = totalMoney - varAmount;
                    messageElement.innerHTML += "<p>Se entrega " + givenAmount + " billetes de $" + keys[i] + "</p>";
                }
            }
        }
    }
}

let userInput = " ";
let myMoney = ""; 
let answer = " ";

do {
    userInput = prompt("Por favor ingrese la cantidad a retirar:");
    myMoney = parseInt(userInput);
    if (totalMoney >= myMoney)  {
        calculo();
    } else {
        messageElement.innerHTML ="<p>El cajero no tiene suficiente dinero para entregar esta cantidad</p>"
    }
    answer = prompt("¿Desea realizar otra operación? S/N:")
} while (answer.toUpperCase() !=='N');

