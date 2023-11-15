function register() {
    const nameTitle = document.createElement('h1')
    const name = document.createElement ('input')
    const section = document.createElement ('section')
 
    nameTitle.textContent = 'name';
    section.append(name, nameTitle)
    
    return section;
    
}


export default register;




