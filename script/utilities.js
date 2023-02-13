function getInputFieldValueById (inputId) {
    const inputField = document.getElementById(inputId);
    const inputValue = inputField.value;
    inputField.value = '';
    if(inputValue <= 0 || inputValue === ''){
        alert(`Don't allow empty or negative number for ${inputId === 'deposit-field' ? 'Deposit' : 'Withdraw'}`);
        return 0;
    }
    return parseFloat(inputValue);
}

function getElementValueById (elementId) {
    const elementValue = document.getElementById(elementId).innerText;
    return parseFloat(elementValue);
}

function setInputValueById (elementId,value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };