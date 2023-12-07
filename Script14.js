const avaliableMoney = {1: 50, 10: 50, 20: 10, 50: 6, 100: 3};
const keys = Object.keys(avaliableMoney);
const amounts = Object.values(avaliableMoney);
let totalMoney = 1350;
let varAmount = 0;
let givenAmount = 0;
let myMoney = 0; 
let messageElement = document.getElementById("message");
let byeElement = document.getElementById('bye');
let amountElement = document.getElementById('amountInput');
let answerElement = document.getElementById('answerInput');
let answer = 'S';
let number = 0;

const calculo = () => {
                givenAmount = varAmount;
                amounts[number] = amounts[number] - varAmount;
                varAmount = varAmount * keys[number];
                myMoney = myMoney - varAmount;
                console.log(myMoney);
                totalMoney = totalMoney - varAmount;
                messageElement.innerHTML += "<p>Se entrega " + givenAmount + " billetes de $" + keys[number] + "</p>";
            }

const capturingAmount = () => {
    myMoney = parseInt(document.getElementById('amountInput').value); //Se captura el valor del ID "amounInput" y se guarda en "myMoney"
    if (totalMoney >= myMoney)  {
        for (let i = 4; i > -1; i--) { 
            number = i; //En las lineas dentro de esta función estoy usando [i] para hacer el cambio de números tanto de keys como de values pero llega un punto en que se llama a la función "calculo" y esta no tiene definida la variable [i] que es de ambito local, sólo para el bucle "for", por eso hice la variable number que es de alcance global, esta variable toma el valor actual de [i] y puede ser usada en cualquier función del programa, entonces "calculo" sí la puede usar.
            if (myMoney >= keys[i]) { 
                varAmount = Math.floor(myMoney / keys[i]); //Se divide "myMoney" entre la key actual y con "Math.floor" se obtiene el cociente entero de esa división y se guarda en "varAmount".
                if (amounts[i] >= varAmount) { 
                    calculo();
                } else {
                    if(amounts[i] > 0) {
                        varAmount = amounts[i];
                        calculo();
                    }
                }
            }
        }
    } else {
        messageElement.innerHTML ="<p>El cajero no tiene suficiente dinero para entregar esta cantidad</p>"
    }
}

const capturingAnswer = () => {
    answer = answerElement.value.toUpperCase();
    if(answer === 'S')  {
        resetVariables();
    }  
}

const resetVariables = () => {
    messageElement.innerHTML = '';
    answerElement.value ='';
    amountElement.value ='';
}

const finalCondition = () => {
    if (answer === 'N') {
        byeElement.innerHTML += "<p>Gracias por usar cajeros CTM</p>";
    }
}

document.getElementById('retireButton').addEventListener('click', capturingAmount);
document.getElementById('answeringButton').addEventListener('click', capturingAnswer);
document.getElementById('answeringButton').addEventListener('click', finalCondition);
