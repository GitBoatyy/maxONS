
export default function onboardMaint(){
    function displaybutton(a, b) {
        const displaybutton = document.createElement("button");
        displaybutton.id = b;
        displaybutton.classList.add("navbutton", "buttonhover", "ONBDmaintbutton");
        displaybutton.innerText = a;
        ONBDmaintcontainer.appendChild(displaybutton);
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
    MCP.classList.add('buttonhover', 'navbutton')
    MCP.id = 'MCP'
    MCP.innerText = 'MAINT CTRL PGS'
    navbar.appendChild(MCP)
    const obmaint = document.createElement('button')
    obmaint.classList.add('buttonhover', 'navbutton', 'active')
    obmaint.id = 'obmaint'
    obmaint.innerText = 'ONBD MAINT'
    navbar.appendChild(obmaint)
    const ONBDmaintcontainer = document.createElement("div");
    ONBDmaintcontainer.id = "ONBDmaintcont";
    displaycontainer.appendChild(ONBDmaintcontainer);
    displaybutton('LINE MAINT' , 'lmtc')
    displaybutton('EXTENDED MAINT', 'extmtc')
    displaybutton('OTHER FUNCTIONS')
    const carriercont = document.createElement('div')
    carriercont.id = 'ONBDcarrier'
    displaycontainer.appendChild(carriercont)
    const welcome = document.createElement('div')
    welcome.id = 'ONBDwelcome'
    welcome.classList.add('whitef')
    welcome.innerText = 'Welcome to ONBD MAINT'
    carriercont.appendChild(welcome)
}