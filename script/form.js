
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
}
//   };
const submitForm = document.querySelector('#submit-form');
// submit handler
function submitHandler(e) {
    e.preventDefault();
    const email = submitForm.querySelector('[type=email]');
    const password = submitForm.querySelector('[type=password]');
    if (!validateEmail(email.value) || email.value === '' || password.value === '') return;
    window.location.href = 'bank.html';
}


// for log in
submitForm.addEventListener('submit', submitHandler);