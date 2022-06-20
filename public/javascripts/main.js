let loginBtn = document.getElementById('loginBtn');
let loginInput = document.getElementById('loginInput');
let passwordInput = document.getElementById('passwordInput');
let errorDiv = document.getElementById('error') || null;
let errorBtn = document.getElementById('errorBtn') || null;

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
  else {
    loginBtn.disabled = true;
    loginBtn.style.opacity = '0.7';
  }

}

document.addEventListener('keyup', () => {
  fnBtnValidationLogin();
})

let verifyError = () => {

  if (errorDiv && errorBtn) { return true; }

  return false;
}

let errorAnimation = () => {

  if (verifyError()) {
    errorDiv.style.marginTop = '2em';
    errorDiv.style.transition = 'margin-top 2s';

    setTimeout(() => {
      errorDiv.style.marginTop = '-10em';
      errorDiv.style.trasition = '2s';
    }, 4000)

    errorBtn.addEventListener('click', () => {
      errorDiv.style.marginTop = '-10em';
      errorDiv.style.trasition = '2s';
    })
  }

}

errorAnimation();

