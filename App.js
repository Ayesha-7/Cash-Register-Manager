const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const nextButton = document.querySelector("#next-button");
const checkButton = document.querySelector("#check-button");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const nextMessage = document.querySelector("#next-message");
const changeTable = document.querySelector(".change-table");
const checkMessage = document.querySelector("#check-message");
const showOnNext = document.querySelector("#show-on-next");
const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

//hiding cash input
showOnNext.style.display = "none";
checkMessage.style.display = "none";

nextButton.addEventListener("click", function validateBillAmount(){
    nextMessage.style.display = "none";
    if(billAmount.value > 0){
        //if bill amount is valid given cash and other functionalities will be visible
        //bonus challenge
        showOnNext.style.display = "block";
    }else{
        showNextMessage("🤷‍♀️ Bill amount should be greater than zero ");
    }
})

console.log(billAmount.value + "bill outside check");
console.log(cashGiven.value + " cash outside check");

checkButton.addEventListener("click", function processing(){
    checkMessage.style.display = "none";
    nextMessage.style.display = "none";
    changeTable.style.display = "none";
    console.log(billAmount.value + " bill before iffs");
    console.log(cashGiven.value + " cash before iffs");
    
    if(cashGiven.value < 0){
        console.log("cash < 0");
        console.log(billAmount.value + " bill iffs");
        console.log(cashGiven.value + " cash iffs");
        showCheckMessage("🙄 Cash given should be greater than zero");
        return;
    }else if(cashGiven.value === billAmount.value){
        console.log("cash == bill");
        console.log(billAmount.value + " bill iffs");
        console.log(cashGiven.value + " cash iffs");

        changeTable.style.display = "none";
        showCheckMessage("No need to return any change");
        return;

    }else if(cashGiven.value > billAmount.value){

        console.log("cash > bill");
        console.log(billAmount.value + " bill iffs");
        console.log(cashGiven.value + " cash iffs");

        showCheckMessage("Return following no. of Notes");
        changeTable.style.display = "block";
        var difference = cashGiven.value - billAmount.value;
        calculateNotes(difference); // Processing

        return;
    }else if (cashGiven.value < billAmount.value){
        console.log("cash < bill");
        console.log(billAmount.value + " bill iffs");
        console.log(cashGiven.value + " cash iffs");

        showCheckMessage("🙄 Cash given should be greater than bill amount");

        return;
    }
})


function showNextMessage(msg){
    nextMessage.style.display = "block";
    nextMessage.innerText = msg;
}

function showCheckMessage(msg){
    checkMessage.style.display = "block";
    checkMessage.innerText = msg;
}

function calculateNotes(amount){
    var amountToBeReturned = amount;
    for(var i = 0; i < availableNotes.length; i = i+1 ){
        var noNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
        noOfNotes[i].innerText = noNotes;
        amountToBeReturned = amountToBeReturned % availableNotes[i];
    }

}