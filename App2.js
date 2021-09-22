const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const nextButton = document.querySelector("#next-button");
const checkButton = document.querySelector("#check-button");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const nextMessage = document.querySelector("#next-message");
const wrapTable = document.querySelector(".wrap-table");
const checkMessage = document.querySelector("#check-message");
const wrapCashGiven = document.querySelector(".wrap-cash-given");
const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

//hiding cash input
wrapCashGiven.style.display = "none";
checkMessage.style.display = "none";
wrapTable.style.display = "none";

nextButton.addEventListener("click", function validateBillAmount() {
    nextMessage.style.display = "none";
    checkMessage.style.display = "none";
    if (billAmount.value > 0) {
        //if bill amount is valid given cash and other functionalities will be visible
        //bonus challenge
        wrapCashGiven.style.display = "block";
        nextButton.style.display = "none";
    } else {
        showNextMessage("Bill amount should be greater than zero");
    }
})


checkButton.addEventListener("click", function processing() {
    checkMessage.style.display = "none";
    nextMessage.style.display = "none";
    wrapTable.style.display = "none";
    //setNotesZero();
    var cashval = Number(cashGiven.value);
    var billval = Number(billAmount.value);

    if (billval <= 0 && cashval <= 0) {
        showNextMessage("Bill amount should be greater than zero");
        showCheckMessage("Cash given cannot be negative or zero");
    } else if (billval <= 0) {
        showNextMessage("Bill amount should be greater than zero");
    } else if (cashval <= 0) {
        showCheckMessage("Cash given cannot be negative or zero");
    } else if (cashval === billval) {
        showCheckMessage("Cash given is equal to bill amount. No need to return any cahnge");
    } else if (cashval < billval) {
        showCheckMessage("Cash given should be greater than bill amount");
    } else {
        wrapTable.style.display = "block";
        showCheckMessage("Return Change");
        var dif = cashval - billval;
        calculateChange(dif);
    }
})

function showNextMessage(msg) {
    nextMessage.style.display = "block";
    nextMessage.innerText = msg;
}

function showCheckMessage(msg) {
    checkMessage.style.display = "block";
    checkMessage.innerText = msg;
}

function calculateChange(amount) {
    if (amount > 0) {
        var amountToBeReturned = amount;
        for (var i = 0; i < availableNotes.length; i = i + 1) {
            var noNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
            noOfNotes[i].innerText = noNotes;
            amountToBeReturned = amountToBeReturned % availableNotes[i];
        }
    }
}

function setNotesZero() {
    for (var i = 0; i < availableNotes.length; i = i + 1) {
        noOfNotes[i].innerText = 0;
    }
}