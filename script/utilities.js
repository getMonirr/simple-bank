function getInputFieldValueById (inputId) {
    const inputField = document.getElementById(inputId);
    const inputValue = inputField.value;
    inputField.value = '';
    if(inputValue <= 0 || inputValue === ''){
        alert(`Don't allow empty or negative number for deposit`);
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