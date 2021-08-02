const billAmount = document.querySelector("#bill-amount")
const paidAmount = document.querySelector("#paid-amount")
const checkBtn = document.querySelector("#check-button")
const errorMsg = document.querySelector("#error-message")
const noOfNotes = document.querySelectorAll(".no-of-notes")
const nextBtn = document.querySelector("#next-button")

const arrayofnotes = [2000,500,100,20,10,5,1]






checkBtn.addEventListener("click",function check(){
    
    hideElement(errorMsg);
    if(billAmount.value.length!==0 && paidAmount.value.length!==0 && (paidAmount.value>0 && billAmount.value)>0){
        if(Number(paidAmount.value) >= Number(billAmount.value)){
            const amountToReturn = Number(paidAmount.value) - Number(billAmount.value)
            calculateChange(amountToReturn)
        }else{
            showErrorMsg("Amount cannot be less than bill amount, Please enter valid amount.");
        }
    }
    else if(isNaN(billAmount.value)){
        showErrorMsg("Enter a number not string")
    }else{
        showErrorMsg("Please enter valid amount");
    }
})

function showErrorMsg(msg){
    errorMsg.style.display="block"
    errorMsg.style.color="red"
    errorMsg.innerText = msg; 
}

function calculateChange(amountToReturn){
    for(let i=0;i<arrayofnotes.length;i++){
        const numberOfNotes = Math.trunc(amountToReturn/arrayofnotes[i]);
        amountToReturn %= arrayofnotes[i]

        noOfNotes[i].innerText = numberOfNotes
    }
}

function hideElement(element){
    element.style.display="none"
}



