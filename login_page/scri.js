const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const emailValue = email.value;
    const passwordValue = password.value;
    console.log(emailValue, passwordValue)


    if (!isEmail(emailValue)) {
        alert('Not a valid email');
        return;
    }

    if (passwordValue != "Tech.temp@123") {
        alert('Not a valid password');
        return;
    }

    window.location.replace("./table.html");



}



function isEmail(email) {
    let pattern = /@jinnss.com/i;
    let result = email.match(pattern);
    if (result != null) {
        return true;
    }
    return false;
}









