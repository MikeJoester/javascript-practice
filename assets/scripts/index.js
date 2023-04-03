const alert = document.querySelector('#alert');

function handleFormSubmit() {
    const fname = document.register.fname;
    const lname = document.register.lname;
    const email = document.register.email;
    const pass = document.register.pass;
    const cfpass = document.register.cfpass;
    const check = document.register.check;
    if (isChecked(check)) {
        if (confirmPass(pass, cfpass)) {
            if(validatePass(pass, 8, 65)) {
                if(allLetter(fname, lname)) {
                    if(validateEmail(email)) {
                        alert.textContent = "Register Success! Welcome user " + fname.value + " " + lname.value + " to the website!";
                    }
                }
            }
        }
    }
    return false;
}

function isChecked(checkbox) {
    if (checkbox.checked == false) {
        alert.textContent = "You have to agree to our Terms and conditions before register to the website!";
        return false;
    }
    return true;
}

function confirmPass(pass, cfpass) {
    if (pass.value === cfpass.value) {
        return true;
    } else {
        alert.textContent = "Confirm password does not match!";
        return false;
    }
}

function validatePass(pass, min, max) {
    const passLen = pass.value.length;
    if (passLen == 0)  {
        alert.textContent = "User password should not be empty!";
        return false;
    }

    if (passLen > max || passLen < min ) {
        alert.textContent = "Invalid length! User's password must be between " + min + " and " + max + " characters!";
        return false;
    }
    return true;
}

function allLetter(fname, lname) {
    const letters = /^[A-Za-z]+$/;
    if (fname.value.length == 0 || lname.value.length == 0) {
        alert.textContent = "User's first name / last name must not be empty!";
        return false;
    }

    if ((fname.value + lname.value).match(letters)) {
        return true;
    } else {
        alert.textContent = "User's name must have alphabetic characters only!";
        return false;
    }
}

function validateEmail(email) {
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.match(mailFormat)) {
        return true;
    } else {
        alert.textContent = ("You have entered an invalid email address!");
        return false;
    }
}