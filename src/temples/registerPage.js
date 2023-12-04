//activar funcion register con onclick en boton
import {register} from '../lib/services';
import logo from './images/logo.png'


function registerPage(navigateTo) {
    const name = document.createElement ('input')
    const mail = document.createElement('input')
    const section = document.createElement ('section')
    const password = document.createElement('input')
    const buttonGoRegister = document.createElement('button')
    const imgLogo = document.createElement('img')
    const form = document.createElement('div')
    const buttonReturn = document.createElement('button');

    imgLogo.src = logo
    imgLogo.setAttribute('id','logo')
    section.setAttribute('id', 'sectionHome')
    form.setAttribute('class', 'divform')

    buttonReturn.innerText = 'Return to Home'
    buttonReturn.setAttribute('id', 'botonreturn')
    buttonGoRegister.setAttribute('id','registroboton')
    buttonGoRegister.innerText ='Register'
    mail.setAttribute('id', 'inputsRegister')
    name.placeholder = 'name';
    name.setAttribute('id', 'inputsRegister')
    mail.placeholder = 'mail'
    password.placeholder ='Password'
    password.setAttribute('id', 'inputsRegister')

    buttonReturn.addEventListener('click', ()=>{
        navigateTo('/home')
      })
    buttonGoRegister.addEventListener('click',()=>{
        register(mail.value, password.value)
        navigateTo('/loginPage')

    })

    
    password.setAttribute('class', 'pass')
    section.append(imgLogo, form)
    form.append(name, mail, password, buttonGoRegister, buttonReturn)
    
    return section;
    
}


export default registerPage;




