import logo from './images/logo.png'

function login(navigateTo) {
    const section = document.createElement('section');

    const imgLogo = document.createElement('img')
    const buttonGoLogin = document.createElement('button');
    const buttonGoRegister = document.createElement('button');

    section.setAttribute('id', 'sectionHome')
    buttonGoLogin.setAttribute( 'id', 'botonlogin')

    imgLogo.src = logo  

    buttonGoLogin.textContent = 'Acceder a Cuenta';
  
    buttonGoRegister.textContent = 'Ir a Registro';

    buttonGoLogin.addEventListener('click', ()=>{
        navigateTo('/login')
    })
  
    section.append(imgLogo, buttonGoLogin, buttonGoRegister);
  
    return section;
  }
  
  export default login;