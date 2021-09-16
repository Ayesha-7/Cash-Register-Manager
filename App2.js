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

nextButton.addEventListener("click", function validateBillAmount() {
    nextMessage.style.display = "none";
    if (billAmount.value > 0) {
        //if bill amount is valid given cash and other functionalities will be visible
        //bonus challenge
        showOnNext.style.display = "block";
    } else {
        showNextMessage("Bill amount should be greater than zero");
    }
})


checkButton.addEventListener("click", function processing() {
    checkMessage.style.display = "none";
    nextMessage.style.display = "none";
    setNotesZero();

    if (cashGiven.value <= 0) {
        setNotesZero();
        showCheckMessage("Cash given cannot be negative or zero");
    } else if (cashGiven.value === billAmount.value) {
        setNotesZero();
        showCheckMessage("Cash given is equal to bill amount. No need to return any cahnge");
    } else if (cashGiven.value < billAmount.value) {
        setNotesZero();
        showCheckMessage("Cash given should be greater than bill amount");
    } else {
        showCheckMessage("Return following no. of notes");
        var dif = cashGiven.value - billAmount.value;
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