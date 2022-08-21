

export default function goToMCP(){

    function displaybutton(a, b){
        const displaybutton = document.createElement('button')
        displaybutton.id = b
        displaybutton.classList.add('navbutton', 'buttonhover', 'mcpbutton')
        displaybutton.innerText = a
        mcpdisplaycontainer.appendChild(displaybutton)
    }
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
    MDP.classList.add('buttonhover', 'navbutton')
    MDP.id = 'MDP'
    MDP.innerText = 'MAINT DATA PGS'
    navbar.appendChild(MDP)
    const MCP = document.createElement('button')
    MCP.classList.add('buttonhover', 'navbutton', 'active')
    MCP.id = 'MCP'
    MCP.innerText = 'MAINT CTRL PGS'
    navbar.appendChild(MCP)
    const obmaint = document.createElement('button')
    obmaint.classList.add('buttonhover', 'navbutton')
    obmaint.id = 'obmaint'
    obmaint.innerText = 'ONBD MAINT'
    navbar.appendChild(obmaint)
    const mcpdisplaycontainer = document.createElement('div')
    mcpdisplaycontainer.id = 'mcddiscont'
    displaycontainer.appendChild(mcpdisplaycontainer)
    displaybutton('AIRPLANCE CONFIG DATA (ACD)', 'acd')
    displaybutton('MISC SYSTEM CTRLS (MSC)', 'msc')
    displaybutton('LATCHED MESSAGE ERASE', 'msgerase')
    displaybutton('MAINT LIGHT', 'maintlight')
}