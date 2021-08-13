const billAmount = document.querySelector("#bill-amount");
const paidAmount = document.querySelector("#paid-amount");
const checkBtn = document.querySelector("#check-button");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const nextBtn = document.querySelector("#next-button");
const firstDiv = document.querySelector(".first")
const secondDiv = document.querySelector(".second");
const thirdDiv = document.querySelector(".third");

const arrayofnotes = [2000, 500, 100, 20, 10, 5, 1];

hideElement(secondDiv);
hideElement(thirdDiv);

nextBtn.addEventListener("click", function nextClickEventHandler() {
  if (billAmount.value > 0) {
    document.querySelector("#error-message-first").style.display="none";
    secondDiv.style.display = "block";
    hideElement(nextBtn);
  } else if (isNaN(billAmount.value)) {
    document.querySelector("#error-message-first").innerHTML="Enter a number not string";
  } else {
    document.querySelector("#error-message-first").innerHTML="Please enter valid amount";
  }
});

checkBtn.addEventListener("click", function check() {
    document.querySelector("#error-message-second").style.display="block";
    
  if (paidAmount.value > 0 && billAmount.value > 0) {
    thirdDiv.style.display = "block";
    if (Number(paidAmount.value) >= Number(billAmount.value)) {
        document.querySelector("#error-message-second").style.display="none";
      const amountToReturn =
        Number(paidAmount.value) - Number(billAmount.value);
      calculateChange(amountToReturn);
    } else {
        document.querySelector("#error-message-second").innerHTML="Amount cannot be less than bill amount, Please enter valid amount.";
    }
  } else if (isNaN(paidAmount.value)||isNaN(billAmount.value)) {
    document.querySelector("#error-message-second").innerHTML="Enter a number not string";
  } else {
    document.querySelector("#error-message-second").innerHTML="Please enter valid amount";
  }
});

function calculateChange(amountToReturn) {
  for (let i = 0; i < arrayofnotes.length; i++) {
    const numberOfNotes = Math.trunc(amountToReturn / arrayofnotes[i]);
    amountToReturn %= arrayofnotes[i];

    noOfNotes[i].innerText = numberOfNotes;
  }
}

function hideElement(element) {
  element.style.display = "none";
}
