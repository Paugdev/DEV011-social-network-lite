//activar funcion register con onclick en boton
import {register} from '../lib/services';

function registerPage(navigateTo) {
    const nameTitle = document.createElement('h1')
    const name = document.createElement ('input')
    const mailTitle = document.createElement('h1')
    const mail = document.createElement('input')
    const section = document.createElement ('section')
    const password = document.createElement('input')
    const passwordTitle = document.createElement('h1')
    const buttonregister = document.createElement('h1')
    const buttonGoRegister = document.createElement('button')

    buttonregister.setAttribute('id','registroboton')
    buttonGoRegister.innerText ='Register'
    mail.setAttribute('id', 'correo')
    mailTitle.textContent = 'Email';

    buttonGoRegister.addEventListener('click',()=>{
        navigateTo('/loginPage')
    })

    
    password.setAttribute('class', 'pass')
    passwordTitle.textContent = 'Password';
    nameTitle.textContent = 'name';
    section.append(name, nameTitle, mail, password, passwordTitle, mailTitle, buttonGoRegister)
    
    return section;
    
}


export default registerPage;




