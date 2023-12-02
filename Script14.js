const avaliableMoney = {1: 50, 10: 50, 20: 10, 50: 6, 100: 3};
const keys = Object.keys(avaliableMoney);
const amounts = Object.values(avaliableMoney);
let totalMoney = 1350;
let varAmount = 0;
let givenAmount = 0;
let myMoney = 0; 
let messageElement = document.getElementById("message");
let byeElement = document.getElementById('bye');
let answerElement = document.getElementById('answerInput');
let answer = ' ';

const resetVariables = () => {
    answer = '';
    messageElement.innerHTML = '';
    answerElement.value ='';
}

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

const capturingAnswer = () => {
    answer = answerElement.value.toUpperCase();
    resetVariables();
}

document.getElementById('retireButton').addEventListener('click', () => {
    do {
        capturingAmount();
        document.getElementById('answeringButton').addEventListener('click', capturingAnswer);
    } while (answer === "S");


    if (answer === 'N') {
        byeElement.innerHTML += "<p>Gracias por usar cajeros CTM</p>";
    }
});


//} while (answer.toUpperCase() !=='N');

