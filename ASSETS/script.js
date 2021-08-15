 // Email validation function
 function isEmailValid(email) {
    const emailRegexp = new RegExp(
      /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i
    )

    return emailRegexp.test(email)
  }

  // Function to validate the form and display an error message
  function validateMyForm(event) {
    // We fetch the email and error inputs by their ids
    const emailInput = document.querySelector('#email');
    const errorInput = document.querySelector('#error');

    // We validate the email using the "isEmailValid" function
    if (!isEmailValid(emailInput.value)) {
      // If there is an error, we update the text and set the color to red
      error.textContent = "please provide a valid email address"
      error.style.color = "red"
    } else {
      // If the email is valid we display nothing or we remove the error message
      error.textContent = ""

    }
  }