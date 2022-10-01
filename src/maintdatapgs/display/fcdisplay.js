
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
function g2newtext(a, b, c, d, e) {
    const newtext = document.createElement("div");
    newtext.id = a;
    newtext.classList.add(c, "dsfont", d, e);
    newtext.innerText = b;
    fcg2.appendChild(newtext);
    }
g2newtext('capt', 'CAPT', 'bluef')
g2newtext('colforce', 'COL FORCE', 'bluef')
g2newtext('fo', 'FO', 'bluef', 'center')
g2newtext('scespdbrklvr', 'SCE SPDBRK LVR', 'bluef', 'right')
g2newtext('rvdt', 'RVDT', 'bluef')
g2newtext('sce', 'SCE', 'bluef', 'right')
g2newtext('foctrlwhl', 'FO CTRL WHL', 'bluef', 'right')
g2newtext('capt1', '-1', 'whitef', 'center')
g2newtext('colforce1', 'SEL', 'bluef', 'center')
g2newtext('fo1', '0', 'whitef', 'center')
g2newtext('scespdbrklvr1', '-0.8', 'whitef', 'right', 'offright')
g2newtext('rvdt1', 'A', 'bluef', 'center')
g2newtext('sce1', '\u25C0', 'whitef', 'center')
g2newtext('fcctrlwhlg1', '-1.6', 'whitef', 'center')
g2newtext('capt2', '-1', 'whitef', 'center')
g2newtext('colforce2', 'FCC A', 'bluef', 'center')
g2newtext('fo2', '1', 'whitef', 'center')
g2newtext('scespdbrklvr2', '-0.8', 'whitef', 'right', 'offright')
g2newtext('rvdt2', 'B', 'bluef', 'center')
g2newtext('sce2', '\u25C0', 'whitef', 'center')
g2newtext('fcctrlwhlg2', '-1.6', 'whitef', 'center')
g2newtext('capt3', '-1', 'whitef', 'center')
g2newtext('colforce3', 'FCC B', 'bluef', 'center')
g2newtext('fo3', '0', 'whitef', 'center')
g2newtext('scespdbrklvr3', '-0.8', 'whitef', 'right', 'offright')
g2newtext('rvdt3', 'C', 'bluef', 'center')
g2newtext('sce3', '\u25C0', 'whitef', 'center')
g2newtext('fcctrlwhlg3', '-1.5', 'whitef', 'center')

const fcg3 = document.createElement('div')
fcg3.id = 'fcg3'
container.appendChild(fcg3)
function g3newtext(a, b, c, d, e) {
    const newtext = document.createElement("div");
    newtext.id = a;
    newtext.classList.add(c, "dsfont", d, e);
    newtext.innerText = b;
    fcg3.appendChild(newtext);
    }
g3newtext('gearongnd', 'GEAR ON GND', 'bluef')
g3newtext('whlspd', 'WHL SPD', 'bluef')
g3newtext('rudder', 'RUDDER', 'bluef')
g3newtext('rudderdeg', '\u25B6 -0.5', 'whitef', 'right', 'offright')
g3newtext('gearongndl1', 'L1', 'bluef', 'center')
g3newtext('gearongndl1status', 'NEAR', 'whitef')
g3newtext('whspdli', 'L/I', 'bluef', 'right')
g3newtext('whspdlispd', '<60', 'whitef')
g3newtext('whspdlo', 'L/O', 'bluef', 'right')
g3newtext('whspdlospd', '<60', 'whitef')
g3newtext('flaphandle', 'FLAP HANDLE', 'bluef')
g3newtext('flaphandledeg', '1.2', 'whitef', 'right', 'offright')
g3newtext('gearongndl2', 'L2', 'bluef', 'center')
g3newtext('gearongndl1status', 'NEAR', 'whitef')
g3newtext('whspdri', 'R/I', 'bluef', 'right')
g3newtext('whspdrispd', '<60', 'whitef')
g3newtext('whspdro', 'R/O', 'bluef', 'right')
g3newtext('whspdrospd', '<60', 'whitef')
g3newtext('rudderpedal', 'RUDDER PEDAL', 'bluef')
g3newtext('rudderpedaldeg', '\u25B6 1.2', 'whitef', 'right', 'offright')
g3newtext('gearongndr1', 'R1', 'bluef', 'center')
g3newtext('gearongndr1status', 'NEAR', 'whitef')
g3newtext('g3fill1', 'x', 'blackf')
g3newtext('g3fill2', 'x', 'blackf')
g3newtext('g3fill3', 'x', 'blackf')
g3newtext('g3fill4', 'x', 'blackf')
g3newtext('g3fill5', 'x', 'blackf')
g3newtext('g3fill6', 'x', 'blackf')
g3newtext('gearongndr2', 'R2', 'bluef', 'center')
g3newtext('gearongndr2status', 'NEAR', 'whitef')

const fcg4 = document.createElement('div')
fcg4.id = 'fcg4'
container.appendChild(fcg4)
function g4newtext(a, b, c, d, e) {
    const newtext = document.createElement("div");
    newtext.id = a;
    newtext.classList.add(c, "dsfont", d, e);
    newtext.innerText = b;
    fcg4.appendChild(newtext);
    }
g4newtext('g4fill1', 'x', 'blackf')
g4newtext('s1', '#1', 'bluef')
g4newtext('s2', '#2', 'bluef')
g4newtext('s3', '#3', 'bluef')
g4newtext('s4', '#4', 'bluef')
g4newtext('s5', '#5', 'bluef')
g4newtext('s6', '#6', 'bluef')
g4newtext('s7', '#7', 'bluef')
g4newtext('s8', '#8', 'bluef')
g4newtext('leslatOB', 'LE SLATS OB', 'bluef')
g4newtext('s1posOB', 'NEAR', 'whitef')
g4newtext('s2posOB', 'FAR', 'whitef')
g4newtext('s3posOB', 'FAR', 'whitef')
g4newtext('s4posOB', 'FAR', 'whitef')
g4newtext('s5posOB', 'FAR', 'whitef')
g4newtext('s6posOB', 'FAR', 'whitef')
g4newtext('s7posOB', 'FAR', 'whitef')
g4newtext('s8posOB', 'NEAR', 'whitef')
g4newtext('leslatret', 'LE SLATS RET', 'bluef')
g4newtext('s1posret', 'x', 'blackf')
g4newtext('s2posret', 'FAR', 'whitef')
g4newtext('s3posret', 'FAR', 'whitef')
g4newtext('s4posret', 'FAR', 'whitef')
g4newtext('s5posret', 'FAR', 'whitef')
g4newtext('s6posret', 'FAR', 'whitef')
g4newtext('s7posret', 'FAR', 'whitef')
g4newtext('s8posret', 'x', 'blackf')
g4newtext('leslatIB', 'LE SLATS IB', 'bluef')
g4newtext('s1posIB', 'NEAR', 'whitef')
g4newtext('s2posIB', 'FAR', 'whitef')
g4newtext('s3posIB', 'FAR', 'whitef')
g4newtext('s4posIB', 'FAR', 'whitef')
g4newtext('s5posIB', 'FAR', 'whitef')
g4newtext('s6posIB', 'FAR', 'whitef')
g4newtext('s7posIB', 'FAR', 'whitef')
g4newtext('s8posIB', 'NEAR', 'whitef')
g4newtext('leslatEXT', 'LE SLATS EXT', 'bluef')
g4newtext('s1posEXT', 'FAR', 'whitef')
g4newtext('s2posEXT', 'FAR', 'whitef')
g4newtext('s3posEXT', 'FAR', 'whitef')
g4newtext('s4posEXT', 'FAR', 'whitef')
g4newtext('s5posEXT', 'x', 'blackf')
g4newtext('s6posEXT', 'x', 'blackf')
g4newtext('s7posEXT', 'x', 'blackf')
g4newtext('s8posEXT', 'x', 'blackf')
g4newtext('leslatRET', 'LE SLATS RET', 'bluef')
g4newtext('s1posRET', 'NEAR', 'whitef')
g4newtext('s2posRET', 'NEAR', 'whitef')
g4newtext('s3posRET', 'NEAR', 'whitef')
g4newtext('s4posRET', 'NEAR', 'whitef')
g4newtext('s5posRET', 'x', 'blackf')
g4newtext('s6posRET', 'x', 'blackf')
g4newtext('s7posRET', 'x', 'blackf')
g4newtext('s8posRET', 'x', 'blackf')
g4newtext('flasskew', 'FLKAP SKEW SNSR', 'bluef')
g4newtext('s1posskw', '-55.9', 'whitef')
g4newtext('s2posskw', '-20.2', 'whitef')
g4newtext('s3posskw', '7.7', 'whitef')
g4newtext('s4posskw', '-17.4', 'whitef')
g4newtext('s5posskw', '-20.2', 'whitef')
g4newtext('s6posskw', '5.7', 'whitef')
g4newtext('s7posskw', '-21.7', 'whitef')
g4newtext('s8posskw', '-55.5', 'whitef')


const fcg5 = document.createElement('div')
fcg5.id = 'fcg5'
container.appendChild(fcg5)
function g5newtext(a, b, c, d, e) {
    const newtext = document.createElement("div");
    newtext.id = a;
    newtext.classList.add(c, "dsfont", d, e);
    newtext.innerText = b;
    fcg5.appendChild(newtext);
    }
g5newtext('lteflap', ' LEFT TE FLAPS', 'bluef')
g5newtext('rteflap', 'RIGHT TE FLAPS', 'bluef')
g5newtext('g5fill', 'x', 'blackf')
g5newtext('g5fill', 'x', 'blackf')
g5newtext('g5fill', 'x', 'blackf')
g5newtext('lfseu', '0.8', 'whitef', 'right')
g5newtext('fseu', 'FSEU', 'bluef', 'center')
g5newtext('rfseu', '1.1', 'whitef', 'left')
g5newtext('lelevator', '3.3 \u25BC', 'whitef', 'right', 'offright')
g5newtext('elevator', 'ELEVATOR', 'bluef')
g5newtext('relevator', '\u25BC 3.3', 'whitef')
g5newtext('lfcc', '0.0', 'whitef', 'right')
g5newtext('fcc', 'FCC', 'bluef', 'center')
g5newtext('rfcc', '0.0', 'whitef', 'left')
g5newtext('lailerons', '1.1 \u25BC', 'whitef', 'right', 'offright')
g5newtext('ailerons', 'AILERONS', 'bluef')
g5newtext('railerons', '\u25BC 1.5', 'whitef')
g5newtext('lsmyd', '0.0', 'whitef', 'right')
g5newtext('smyd', 'SMYD', 'bluef', 'center')
g5newtext('rsmyd', '0.0', 'whitef')
g5newtext('fill', 'x', 'blackf')
g5newtext('stabilizer', 'STABILIZER', 'bluef', 'offright', 'right')
g5newtext('stabtrim', '\u25BC -3.4', 'whitef')

const fcg6 = document.createElement('div')
fcg6.id = 'fcg6'
container.appendChild(fcg6)
function g6newtext(a, b, c, d, e) {
    const newtext = document.createElement("div");
    newtext.id = a;
    newtext.classList.add(c, "dsfont", d, e);
    newtext.innerText = b;
    fcg6.appendChild(newtext);
    }
g6newtext('fill', 'x')
g6newtext('flightsp2', '#2', 'bluef')
g6newtext('flightsp3', '#3', 'bluef')
g6newtext('flightsp4', '#4', 'bluef')
g6newtext('flightsp5', '#5', 'bluef')
g6newtext('flightsp8', '#8', 'bluef')
g6newtext('flightsp9', '#9', 'bluef')
g6newtext('flightsp10', '#10', 'bluef')
g6newtext('flightsp11', '#11', 'bluef')
g6newtext('flightsp', 'FLT SPLRS', 'bluef')
g6newtext('flightspdeg2', '0.0', 'whitef')
g6newtext('flightspdeg3', '0.0', 'whitef')
g6newtext('flightspdeg4', '0.0', 'whitef')
g6newtext('flightspdeg5', '0.0', 'whitef')
g6newtext('flightspdeg8', '0.0', 'whitef')
g6newtext('flightspdeg9', '0.0', 'whitef')
g6newtext('flightspdeg10', '0.0', 'whitef')
g6newtext('flightspdeg11', '0.0', 'whitef')

const fcg7 = document.createElement('div')
fcg7.id = 'fcg7'
container.appendChild(fcg7)
function g7newtext(a, b, c, d, e) {
    const newtext = document.createElement("div");
    newtext.id = a;
    newtext.classList.add(c, "dsfont", d, e);
    newtext.innerText = b;
    fcg7.appendChild(newtext);
    }
g7newtext('groundspoilers', 'GROUND SPOILERS', 'bluef')
g7newtext('fill', 'x')
g7newtext('fill', 'x')
g7newtext('fill', 'x')
g7newtext('pressure', 'PRESSURE', 'bluef', 'offleft')
g7newtext('pressurestat', 'RET', 'whitef')
g7newtext('armsovlscmd', 'ARM SOV LS CMD', 'bluef')
g7newtext('armsovlscmdstat', 'RET', 'whitef')
g7newtext('ctrlsovlscmd', 'CTRL SOV LS CMD', 'bluef', 'offleft')
g7newtext('ctrlsovlscmdstat', 'RET', 'whitef')
g7newtext('relaycmd', 'RELAY CMD', 'bluef')
g7newtext('relaycmdstat', 'RET', 'whitef')

const fcg8 = document.createElement('div')
fcg8.id = 'fcg8'
container.appendChild(fcg8)
function g8newtext(a, b, c, d, e) {
    const newtext = document.createElement("div");
    newtext.id = a;
    newtext.classList.add(c, "dsfont", d, e);
    newtext.innerText = b;
    fcg8.appendChild(newtext);
    }
g8newtext('cabinpress', 'CABIN PRESS', 'bluef')
g8newtext('cabinpressstat', 'HI', 'whitef')



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
