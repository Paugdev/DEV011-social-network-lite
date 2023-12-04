// file login.js
import { login } from '../lib/services';
import logo from './images/logo.png';

function loginPage(navigateTo) {
  const section = document.createElement('section');
  const title = document.createElement('h2');
  const buttonReturn = document.createElement('button');
  const imgLogo = document.createElement('img');
  const form = document.createElement('div');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');
  const buttonLogin = document.createElement('button');

  imgLogo.src = logo;
  imgLogo.setAttribute('class', 'imagenlog');

  form.setAttribute('class', 'divform');
  inputEmail.placeholder = 'Write email';
  inputEmail.setAttribute('class', 'inputlog');
  inputPass.placeholder = 'pass';
  inputPass.setAttribute('class', 'inputlog');
  title.textContent = 'Login';
  title.setAttribute('class', 'loginTitle');
  buttonLogin.textContent = 'go';
  buttonLogin.setAttribute('id', 'botongo');

  buttonReturn.textContent = 'Return to home';
  buttonReturn.setAttribute('id', 'botonreturn');

  buttonReturn.addEventListener('click', () => {
    navigateTo('/home');
  });
  buttonLogin.addEventListener('click', () => {
    const result = login(inputEmail.value, inputPass.value);
    if (result) {
      navigateTo('/wall');
    } else {
      alert('Usuario no encontrado'); // eslint-disable-line no-alert
    }
  });
  form.append(title, inputEmail, inputPass, buttonLogin, buttonReturn);
  section.append(imgLogo, form);

  return section;
}

export default loginPage;
