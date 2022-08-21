import displayselection from "./displayselection"

export default function goToMDP(){
    const displaycontainer = document.getElementById('displaycontainer')
    displaycontainer.replaceChildren()
    const navbar = document.createElement('div')
    navbar.id = 'headernav'
    displaycontainer.appendChild(navbar)
    const sysbutt = document.createElement('button')
    sysbutt.classList.add('buttonhover', 'navbutton')
    sysbutt.id = 'sysmenu'
    sysbutt.innerText = 'SYS MENU'
    navbar.appendChild(sysbutt)
    const statusbutt = document.createElement('button')
    statusbutt.classList.add('buttonhover', 'navbutton')
    statusbutt.id = 'status'
    statusbutt.innerText = 'STATUS'
    navbar.appendChild(statusbutt)
    const MDP = document.createElement('button')
    MDP.classList.add('buttonhover', 'navbutton', 'active')
    MDP.id = 'MDP'
    MDP.innerText = 'MAINT DATA PGS'
    navbar.appendChild(MDP)
    const MCP = document.createElement('button')
    MCP.classList.add('buttonhover', 'navbutton')
    MCP.id = 'MCP'
    MCP.innerText = 'MAINT CTRL PGS'
    navbar.appendChild(MCP)
    const obmaint = document.createElement('button')
    obmaint.classList.add('buttonhover', 'navbutton')
    obmaint.id = 'obmaint'
    obmaint.innerText = 'ONBD MAINT'
    navbar.appendChild(obmaint)
    const mdpheadernav = document.createElement('div')
    mdpheadernav.id = 'mdpheadernav'
    displaycontainer.appendChild(mdpheadernav)
    const displaysel = document.createElement('button')
    displaysel.id = 'dissel'
    displaysel.innerText = 'DISPLAY SELECTION'
    displaysel.classList.add('buttonhover', 'navbutton', 'active')
    mdpheadernav.appendChild(displaysel)
    const printsel = document.createElement('button')
    printsel.id = 'printsel'
    printsel.innerText = 'PRINT SELECTION'
    printsel.classList.add('buttonhover', 'navbutton')
    mdpheadernav.appendChild(printsel)
    const datasel = document.createElement('button')
    datasel.id = 'datasel'
    datasel.innerText = 'DATALINK SELECTION'
    datasel.classList.add('buttonhover', 'navbutton')
    mdpheadernav.appendChild(datasel)
    const ersel = document.createElement('button')
    ersel.id = 'ersel'
    ersel.innerText = 'ERASE SELECTION'
    ersel.classList.add('buttonhover', 'navbutton')
    mdpheadernav.appendChild(ersel)
    const mdpcont = document.createElement('div')
    mdpcont.id = 'mdpdisplaycontainer'
    displaycontainer.appendChild(mdpcont)

displayselection()
}