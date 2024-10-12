// Check if the card number is valid (placeholder for a real service check)
function isCardNumberValid(number) {
    // For simplicity, we only accept one number
    return number === '1234123412341234';
}

// Display error message in the .errorMsg element
function displayError(msg) {
    document.querySelector('.errorMsg').innerHTML = msg;
}

// Validate that the expiration date is in the future
function isExpiryDateValid(month, year) {
    const currentDate = new Date();
    const expiryDate = new Date(year, month - 1);

    return expiryDate > currentDate; 
}


function submitHandler(event) {
    event.preventDefault(); 

    let errorMsg = '';

    const cardNumber = document.querySelector('#cardNumber').value;
    const cardMonth = parseInt(document.querySelector('#cardMonth').value);
    const cardYear = parseInt(document.querySelector('#cardYear').value);


    displayError('');
    if (isNaN(cardNumber)) {
        errorMsg += 'Card number is not a valid number<br>';
    } else if (!isCardNumberValid(cardNumber)) {
        errorMsg += 'Card number is not a valid card number<br>';
    }

    if (!isExpiryDateValid(cardMonth, cardYear)) {
        errorMsg += 'Expiry date is not valid or is in the past<br>';
    }

    if (errorMsg !== '') {
        displayError(errorMsg);
        return false;
    }

    return true;
}

document.querySelector('#credit-card').addEventListener('submit', submitHandler);