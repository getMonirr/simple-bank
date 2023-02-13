const depositBtn = document.querySelector('#deposit-btn');
const withdrawBtn = document.querySelector('#withdraw-btn');



// handler function 

// deposit handler function
function depositHandler() {

    const depositAmount = getInputFieldValueById('deposit-field');
    const previousDeposit = getElementValueById('deposit-amount');
    const currentBalance = getElementValueById('current-balance');

    // deposit
    setInputValueById('deposit-amount', (depositAmount + previousDeposit));
    // current balance
    setInputValueById('current-balance', (depositAmount + currentBalance))

}

// withdraw handler function
function withdrawHandler() {
    const withdrawAmount = getInputFieldValueById('withdraw-field');
    const previousWithdraw = getElementValueById('withdraw-amount');
    const currentBalance = getElementValueById('current-balance');

    if (withdrawAmount > currentBalance) {
        alert(`insufficient Balance`);
        return;
    }
    // withdraw
    setInputValueById('withdraw-amount', (withdrawAmount + previousWithdraw));
    // current balance
    setInputValueById('current-balance', (currentBalance - withdrawAmount));
}


// for deposit
depositBtn.addEventListener('click', depositHandler);
// for Withdraw
withdrawBtn.addEventListener('click', withdrawHandler);
