let loginBtn = document.getElementById('loginBtn');
let loginInput = document.getElementById('loginInput');
let passwordInput = document.getElementById('passwordInput');
let errorDiv = document.getElementById('error');

let fnInputValidation = () => {
  if (!loginInput.value || !passwordInput.value) {
    return false
  } else {
    return true;
  }
}

let fnBtnValidationLogin = () => {

  if (fnInputValidation()) {
    loginBtn.disabled = false;
    loginBtn.style.opacity = '1';
  }
  else{
    loginBtn.disabled = true;
    loginBtn.style.opacity = '0.7';
  }

}

document.addEventListener('keyup', () => {
  fnBtnValidationLogin();
})

document.addEventListener('load', () => {
  errorDiv.style.top = '1em';
})