let loginBtn = document.getElementById('loginBtn');
let loginInput = document.getElementById('loginInput');
let passwordInput = document.getElementById('passwordInput');

let fnInputValidation = () => {
  if (!loginInput && !passwordInput) return false;
}

let fnBtnValidationLogin = () => {

  if (!fnInputValidation()) {
    loginBtn.disabled = false;
  }

}