const inputs = document.querySelectorAll("input, select, textarea");

inputs.forEach(input => {
  input.addEventListener("invalid", () => {
    input.classList.add("error");
  }, false);
  input.addEventListener("change", () => {
    if (input.checkValidity()) {
      input.classList.remove("error");
    }
    else {
      input.classList.add("error");
    }
  });
});

let password = document.getElementById("password")
let confirmPassword = document.getElementById("confirmPassword");
    
const validatePassword = function() {
  confirmPassword.setCustomValidity(password.value != confirmPassword.value ? "Passwords Don't Match" : '');
}

password.onchange = validatePassword;
confirmPassword.onkeyup = validatePassword;