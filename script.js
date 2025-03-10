const passwordDisplay = document.getElementById("password-display");
const copyBtn = document.getElementById("copy-btn");
const lengthInput = document.getElementById("length");
const uppercaseCheck = document.getElementById("uppercase");
const lowercaseCheck = document.getElementById("lowercase");
const numberCheck = document.getElementById("numbers");
const symbolCheck = document.getElementById("symbols");
const generateBtn = document.getElementById("generate-btn");
const strengthIndicator = document.getElementById("strength-indicator");

const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+{}|[]<>?,.";

function generatePassword() {
    let length = parseInt(lengthInput.value);
    let charSet = "";
    let password = "";

    if (uppercaseCheck.checked) charSet += uppercaseChars;
    if (lowercaseCheck.checked) charSet += lowercaseChars;
    if (numberCheck.checked) charSet += numberChars;
    if (symbolCheck.checked) charSet += symbolChars;

    if (charSet.length === 0) {
        passwordDisplay.value = "Select at least one option";
        return;
    }

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * charSet.length);
        password += charSet[randomIndex];
    }

    passwordDisplay.value = password;
    updateStrengthIndicator(password);
}
