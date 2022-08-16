//main button to generate first MDS/ONS screen. Defaults to status 

export default function goToStatus(){
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
    statusbutt.classList.add('buttonhover', 'navbutton', 'active')
    statusbutt.id = 'status'
    statusbutt.innerText = 'STATUS'
    navbar.appendChild(statusbutt)
    const MDP = document.createElement('button')
    MDP.classList.add('buttonhover', 'navbutton')
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
    const statuscont = document.createElement('div')
    statuscont.id = "statuscont"
    statuscont.classList.add('bluef')
    displaycontainer.appendChild(statuscont)
    const statusmsg = document.createElement('div')
    statusmsg.classList.add('bluef')
    statusmsg.id = 'statusmsg'
    statusmsg.innerText = 'STATUS MESSAGES'
    statuscont.appendChild(statusmsg)
    const statusex = document.createElement('div')
    statusex.classList.add('whitef')
    statusex.id = 'statusexamples'
    statuscont.appendChild(statusex)
    const example = document.createElement('div')
    example.classList.add('whitef')
    example.innerText = 'ENG LPTACC VALVE L'
    statusex.appendChild(example)
    const example2 = document.createElement('div')
    example2.innerText = 'APU DOOR'
    statusex.appendChild(example2)
    const example3 = document.createElement('div')
    example3.innerText = 'PSEU COMM'
    statusex.appendChild(example3)
    const example4 = document.createElement('div')
    example4.innerText = 'DISPLAYS CONFIG DATA'
    statusex.appendChild(example4)
    const example5 = document.createElement('div')
    example5.innerText = 'DPC1'
    statusex.appendChild(example5)

}