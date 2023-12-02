const avaliableMoney = {1: 50, 10: 50, 20: 10, 50: 6, 100: 3};
const keys = Object.keys(avaliableMoney);
const amounts = Object.values(avaliableMoney);
let totalMoney = 1350;
let varAmount = 0;
let givenAmount = 0;
let myMoney = 0; 
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
                console.log(myMoney);
                totalMoney = totalMoney - varAmount;
                messageElement.innerHTML += "<p>Se entrega " + givenAmount + " billetes de $" + keys[i] + "</p>";
            } else {
                if(amounts[i] > 0) {
                    varAmount = amounts[i];
                    givenAmount = varAmount;
                    amounts[i] = amounts[i] - varAmount;
                    varAmount = varAmount * keys[i];
                    myMoney = myMoney - varAmount;
                    console.log(myMoney);
                    totalMoney = totalMoney - varAmount;
                    messageElement.innerHTML += "<p>Se entrega " + givenAmount + " billetes de $" + keys[i] + "</p>";
                }
            }
        }
    }
}

const capturingAmount = () => {
    myMoney = parseInt(document.getElementById('amountInput').value);
    if (totalMoney >= myMoney)  {
        calculo();
    } else {
        messageElement.innerHTML ="<p>El cajero no tiene suficiente dinero para entregar esta cantidad</p>"
    }
}

document.getElementById('retireButton').addEventListener('click', capturingAmount);

//} while (answer.toUpperCase() !=='N');

