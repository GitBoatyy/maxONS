
export default function smydDisplay(){
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
    const container = document.createElement('div')
    container.id = 'smyddisplaycontainer' //change this container name for specific page layouts
    displaycontainer.appendChild(container)

    //a = id. b = innerText. c = font color classlist (bluef / whitef)
function newtext(a, b, c, d, e, f) {
    const newtext = document.createElement("div");
    newtext.id = a;
    newtext.classList.add(c, "dsfont", d, e, f);
    newtext.innerText = b;
    container.appendChild(newtext);
    }
    //this function is just to fill empty spots in grid
    //saves time over css grid placement
function filler() {
    const filler = document.createElement('div');
    filler.innerText = 'x'
    container.appendChild(filler);
    }
//page specific code goes below here

newtext('smydtitle', 'STALL MANAGEMENT YAW DAMPER', 'bluef', 'underline', 'center' )
const smydgrid = document.createElement('div')
smydgrid.id = 'smydgrid'
container.appendChild(smydgrid)
const smyd1 = document.createElement('div')
smyd1.id = 'smyd1'
smydgrid.appendChild(smyd1)
function s1text(a, b, c, d, e, f) {
    const newtext = document.createElement("div");
    newtext.id = a;
    newtext.classList.add(c, "dsfont", d, e, f);
    newtext.innerText = b;
    smyd1.appendChild(newtext);
}
s1text('analogdiscreteip', 'ANALOG DISCRETE INPUT', 'bluef', 'borderbottom')
s1text('smyd1stat', 'SMYD 1 STATUS', 'bluef', 'borderbottom', 'borderleft')
s1text('smyd2stat', 'SMYD 2 STATUS', 'bluef', 'borderbottom', 'borderleft')
s1text('smydl', 'AIR/GROUND', 'bluef')
s1text('smydmid', 'GND', 'whitef', 'borderleft')
s1text('smydr', 'GND', 'whitef', 'borderleft')
s1text('smydl', 'NLG SQUAT', 'bluef')
s1text('smydmid', 'GND', 'whitef', 'borderleft')
s1text('smydr', 'GND', 'whitef', 'borderleft')
s1text('smydl', 'FLAP UP DISCRETE', 'bluef')
s1text('smydmid', 'UP', 'whitef', 'borderleft')
s1text('smydr', 'UP', 'whitef', 'borderleft')
s1text('smydl', 'FLT CONT B SW ON', 'bluef')
s1text('smydmid', 'ON', 'whitef', 'borderleft')
s1text('smydr', 'ON', 'whitef', 'borderleft')
s1text('smydl', 'YD ENGAGE REQUEST', 'bluef')
s1text('smydmid', 'FALSE', 'whitef', 'borderleft')
s1text('smydr', 'FALSE', 'whitef', 'borderleft')
s1text('smydl', 'PROGRAM PIN 0', 'bluef')
s1text('smydmid', 'GND', 'whitef', 'borderleft')
s1text('smydr', 'GND', 'whitef', 'borderleft')
s1text('smydl', 'PROGRAM PIN 1', 'bluef')
s1text('smydmid', 'OPEN', 'whitef', 'borderleft')
s1text('smydr', 'GND', 'whitef', 'borderleft')
s1text('smydl', 'PROGRAM PIN 2', 'bluef')
s1text('smydmid', 'OPEN', 'whitef', 'borderleft')
s1text('smydr', 'OPEN', 'whitef', 'borderleft')
s1text('smydl', 'PROGRAM PIN 3', 'bluef')
s1text('smydmid', 'OPEN', 'whitef', 'borderleft')
s1text('smydr', 'OPEN', 'whitef', 'borderleft')
s1text('smydl', 'PROGRAM PIN 4', 'bluef')
s1text('smydmid', 'OPEN', 'whitef', 'borderleft')
s1text('smydr', 'OPEN', 'whitef', 'borderleft')
s1text('smydl', 'PROGRAM PIN 5', 'bluef')
s1text('smydmid', 'GND', 'whitef', 'borderleft')
s1text('smydr', 'GND', 'whitef', 'borderleft')
s1text('smydl', 'PROGRAM PIN 6', 'bluef')
s1text('smydmid', 'OPEN', 'whitef', 'borderleft')
s1text('smydr', 'OPEN', 'whitef', 'borderleft')
s1text('smydl', 'PROGRAM PIN 7 (SPDBRK AUTOSTOW)', 'bluef')
s1text('smydmid', 'OPEN', 'whitef', 'borderleft')
s1text('smydr', 'OPEN', 'whitef', 'borderleft')
s1text('smydl', 'PROGRAM PIN 8', 'bluef')
s1text('smydmid', 'GND', 'whitef', 'borderleft')
s1text('smydr', 'GND', 'whitef', 'borderleft')
s1text('smydl', 'PROGRAM PIN 9', 'bluef')
s1text('smydmid', 'OPEN ', 'whitef', 'borderleft')
s1text('smydr', 'OPEN', 'whitef', 'borderleft')
s1text('smydl', 'PROGRAM PIN 10', 'bluef')
s1text('smydmid', 'OPEN', 'whitef', 'borderleft')
s1text('smydr', 'OPEN', 'whitef', 'borderleft')
s1text('smydl', 'PROGRAM PIN PARITY', 'bluef')
s1text('smydmid', 'GND', 'whitef', 'borderleft')
s1text('smydr', 'GND', 'whitef', 'borderleft')
s1text('smydl', 'ASYMMETRY', 'bluef')
s1text('smydmid', 'OPEN', 'whitef', 'borderleft')
s1text('smydr', 'OPEN', 'whitef', 'borderleft')
s1text('smydl', 'ASYMMETRY ENABLE', 'bluef')
s1text('smydmid', 'GND', 'whitef', 'borderleft')
s1text('smydr', 'GND', 'whitef', 'borderleft')
s1text('smydl', 'TOGA', 'bluef')
s1text('smydmid', 'OPEN', 'whitef', 'borderleft')
s1text('smydr', 'OPEN', 'whitef', 'borderleft')
s1text('smydl', 'MLG DOWN', 'bluef')
s1text('smydmid', 'GND', 'whitef', 'borderleft')
s1text('smydr', 'GND', 'whitef', 'borderleft')
s1text('smydl', 'AUTOSLAT POWER', 'bluef')
s1text('smydmid', 'PRESENT', 'whitef', 'borderleft')
s1text('smydr', 'PRESENT', 'whitef', 'borderleft')
s1text('smydl', 'STICK SHAKER POWER', 'bluef')
s1text('smydmid', 'MISSING', 'amberf', 'borderleft')
s1text('smydr', 'MISSING', 'amberf', 'borderleft')
s1text('smydl', 'YD POWER IN', 'bluef')
s1text('smydmid', 'PRESENT', 'whitef', 'borderleft')
s1text('smydr', 'PRESENT', 'whitef', 'borderleft')
s1text('smydl', 'SPDBRK RETRACT POS', 'bluef')
s1text('smydmid', 'FALSE', 'whitef', 'borderleft')
s1text('smydr', 'FALSE', 'whitef', 'borderleft')
s1text('smydl', 'SPDBRK EXT POS', 'bluef')
s1text('smydmid', 'FALSE', 'whitef', 'borderleft')
s1text('smydr', 'FALSE', 'whitef', 'borderleft')

const smyd2 = document.createElement('div')
smyd2.id = 'smyd2'
smydgrid.appendChild(smyd2)
function s2text(a, b, c, d, e, f) {
    const newtext = document.createElement("div");
    newtext.id = a;
    newtext.classList.add(c, "dsfont", d, e, f);
    newtext.innerText = b;
    smyd2.appendChild(newtext);
}
s2text('analogip', 'ANALOG INPUT', 'bluef', 'borderbottom')
s2text('smyd1val', 'SMYD 1 VALUE', 'bluef', 'borderbottom', 'borderleft')
s2text('smuyd2val', 'SMYD 2 VALUE', 'bluef', 'borderbottom', 'borderleft')
s2text('smydl', 'AOA SNSR', 'bluef')
s2text('smydmid', '-2.1', 'whitef', 'borderleft', 'right', 'offright')
s2text('smydr', '-10.9', 'whitef', 'borderleft', 'right', 'offright')
s2text('smydl', 'FLAP SNSR', 'bluef')
s2text('smydmid', '0.0', 'whitef', 'borderleft', 'right', 'offright')
s2text('smydr', '0.0', 'whitef', 'borderleft', 'right', 'offright')
s2text('smydl', 'YD LVDT', 'bluef')
s2text('smydmid', '0.0', 'whitef', 'borderleft', 'right', 'offright')
s2text('smydr', '0.0', 'whitef', 'borderleft', 'right', 'offright')
s2text('smydl', 'WHEEL SNSR', 'bluef')
s2text('smydmid', '- -', 'bluef', 'borderleft', 'center')
s2text('smydr', '-1.2', 'whitef', 'borderleft', 'right', 'offright')

const smyd3 = document.createElement('div')
smyd3.id = 'smyd3'
smydgrid.appendChild(smyd3)
function s3text(a, b, c, d, e, f) {
    const newtext = document.createElement("div");
    newtext.id = a;
    newtext.classList.add(c, "dsfont", d, e, f);
    newtext.innerText = b;
    smyd3.appendChild(newtext);
}
s3text('arincip', 'ARINC 429 INPUT BUS', 'bluef', 'borderbottom')
s3text('smyd1status', 'SMYD 1 STATUS', 'bluef', 'borderbottom', 'borderleft')
s3text('smyd2status', 'SMYD 2 STATUS', 'bluef', 'borderbottom', 'borderleft')
s3text('smydl', 'ON SIDE IR', 'bluef')
s3text('smydmid', 'INACTIVE', 'amberf', 'borderleft')
s3text('smydr', 'INACTIVE', 'amberf', 'borderleft')
s3text('smydl', 'OFF SIDE IR', 'bluef')
s3text('smydmid', 'INACTIVE', 'amberf', 'borderleft')
s3text('smydr', 'INACTIVE', 'amberf', 'borderleft')
s3text('smydl', 'ON SIDE ADR', 'bluef')
s3text('smydmid', 'ACTIVE', 'whitef', 'borderleft')
s3text('smydr', 'ACTIVE', 'whitef', 'borderleft')
s3text('smydl', 'MDS-GP 1', 'bluef')
s3text('smydmid', 'ACTIVE', 'whitef', 'borderleft')
s3text('smydr', 'ACTIVE', 'whitef', 'borderleft')
s3text('smydl', 'FMC', 'bluef')
s3text('smydmid', 'ACTIVE', 'whitef', 'borderleft')
s3text('smydr', 'ACTIVE', 'whitef', 'borderleft')
s3text('smydl', 'DFCS MCP', 'bluef')
s3text('smydmid', 'ACTIVE', 'whitef', 'borderleft')
s3text('smydr', 'ACTIVE', 'whitef', 'borderleft')
s3text('smydl', 'CROSS CHAN', 'bluef')
s3text('smydmid', 'ACTIVE', 'whitef', 'borderleft')
s3text('smydr', 'ACTIVE', 'whitef', 'borderleft')


//copy all code above here to start of function
//for all main data pgs display function copy all below


//function to display UTC time and tick
function displayT() {
    let x = new Date()
    let hour = x.getUTCHours()
    let min = x.getUTCMinutes()
    let sec = x.getUTCSeconds()
    if(hour <10 ){hour='0'+hour;}
    if(min <10 ) {min='0' + min; }
    if(sec<10){sec='0' + sec;}
    document.getElementById('displayTIMED').innerHTML = hour + ':' + min + ':' + sec;
    setTimeout(displayT, 1000);
     }

let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = today.toLocaleString('en-US', {month: 'short'})
let yyyy = String(today.getFullYear());
let yy = yyyy.substring(2)
today = dd + ' ' + mm + ' ' + yy;

function foot(){
    const foot = document.createElement("div");
   foot.id = 'displaycontfooter'
    displaycontainer.appendChild(foot);
}
function fillerf() {
    const foot = document.getElementById('displaycontfooter')
    const filler = document.createElement('div');
    filler.innerText = 'x'
    filler.classList.add('invis')
    foot.appendChild(filler);
    }
function newtextf(a, b, c) {
    const foot = document.getElementById('displaycontfooter')
    const newtext = document.createElement("div");
    newtext.id = a;
    newtext.classList.add(c, "dsfont");
    newtext.innerText = b;
    foot.appendChild(newtext);
    }

function displaybuttonf(a, b) {
    const foot = document.getElementById('displaycontfooter')
    const displaybutton = document.createElement('button');
    displaybutton.classList.add('navbutton', 'buttonhover');
    displaybutton.innerText = a;
    displaybutton.id = b;
    foot.appendChild(displaybutton);
    }
function displaybuttonpage(a, b) {
    const foot = document.getElementById('displaycontfooter')
    const displaybutton = document.createElement('button');
    displaybutton.classList.add('pagebutton', 'buttonhover');
    displaybutton.innerText = a;
    displaybutton.id = b;
    foot.appendChild(displaybutton);
    }
foot()
fillerf()
fillerf()
newtextf('acdisplayDATE', 'DATE', 'bluef')
newtextf('acdisplayDATED', today, 'whitef' )
newtextf('displayTIME', 'UTC', 'bluef')
newtextf('displayTIMED', '', 'whitef')
displaybuttonf('PREV MENU', 'prevmenu')
fillerf()
fillerf()
fillerf()
displaybuttonf('PREV PAGE', 'prevpage1')
displaybuttonf('NEXT PAGE', 'prevpage2')
displayT()
}

