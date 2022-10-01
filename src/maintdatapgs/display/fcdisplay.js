
export default function fcDisplay(){
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
    container.id = 'fcdisplaycontainer' //change this container name for specific page layouts
    displaycontainer.appendChild(container)

    //a = id. b = innerText. c = font color classlist (bluef / whitef)
function newtext(a, b, c) {
    const newtext = document.createElement("div");
    newtext.id = a;
    newtext.classList.add(c, "dsfont");
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
newtext('fctitle', 'FLIGHT CONTROL', 'bluef')
const fcg1 = document.createElement('div')
fcg1.id = 'fcg1'
container.appendChild(fcg1)
function g1newtext(a, b, c) {
    const newtext = document.createElement("div");
    newtext.id = a;
    newtext.classList.add(c, "dsfont");
    newtext.innerText = b;
    fcg1.appendChild(newtext);
    }
g1newtext('cptctrlwhl', 'CAPT CTRL WHL', 'bluef')
g1newtext('cptctrlwhlarr', '\u25C0', 'whitef')
g1newtext('cptctrlwhldeg', '-1.1', 'whitef')
g1newtext('columnpos', 'COLUMN POSN', 'bluef')
g1newtext('columnposarr', '\u25BC', 'whitef')
g1newtext('columnposdeg', '0.3', 'whitef')
g1newtext('scefoctrlwhl', 'SCE FO CTRL WHL', 'bluef')
g1newtext('scefoctrlwhlarr', '\u25C0', 'whitef')
g1newtext('scefoctrowhldeg', '-1.6', 'whitef')
g1newtext('scespdbrklvrpos', 'SCE SPDBRK LVR POSN', 'bluef')
g1newtext('scespdbrklvrposarr', 'x', 'blackf')
g1newtext('scespdbrklvrposdeg', '0.0', 'whitef')

const fcg2 = document.createElement('div')
fcg2.id = 'fcg2'
container.appendChild(fcg2)
const fcg3 = document.createElement('div')
fcg3.id = 'fcg3'
container.appendChild(fcg3)
const fcg4 = document.createElement('div')
fcg4.id = 'fcg4'
container.appendChild(fcg4)
const fcg5 = document.createElement('div')
fcg5.id = 'fcg5'
container.appendChild(fcg5)
const fcg6 = document.createElement('div')
fcg6.id = 'fcg6'
container.appendChild(fcg6)
const fcg7 = document.createElement('div')
fcg7.id = 'fcg7'
container.appendChild(fcg7)
const fcg8 = document.createElement('div')
fcg8.id = 'fcg8'
container.appendChild(fcg8)





//for all main data pgs display function copy all below

let currentTime = new Date();
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
fillerf()
fillerf()
newtextf('acdisplayDATE', 'DATE', 'bluef')
newtextf('acdisplayDATED', today, 'whitef' )
displaybuttonf('PREV MENU', 'prevmenu')
displaybuttonf('PRINT')
displaybuttonf('SEND')
displaybuttonf('RECORD')
displaybuttonpage('PREV PAGE')
displaybuttonpage('NEXT PAGE')
}
