//function to create display container black background with maintenance button to engage ONS




export default function makedisplay(){
    const appcontainer = document.getElementById('app')
    appcontainer.replaceChildren()
    const display = document.createElement('div')
    display.id = 'displaycontainer'
    const maintheader = document.createElement('div')   
    maintheader.id = 'maintheader'
    const maintbutton = document.createElement('button')
    maintbutton.classList.add('buttonhover')
    maintbutton.id = 'maintbutton'
    maintbutton.innerText = 'MAINT'
    appcontainer.appendChild(display)
    display.appendChild(maintheader)
    maintheader.appendChild(maintbutton)
}