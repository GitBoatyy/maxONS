export default function mdsdpcdigiinputB(){
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
    container.id = 'mdsdisplayscontainer' //change this container name for specific page layouts
    displaycontainer.appendChild(container)
    

    //a = id. b = innerText. c = font color classlist (bluef / whitef)
function newtext(a, b, c, d, e, f) {
    const newtext = document.createElement("div");
    newtext.id = a;
    newtext.classList.add(c, d, e, f);
    newtext.innerText = b;
    container2.appendChild(newtext);
    }
    //this function is just to fill empty spots in grid
    //saves time over css grid placement
function filler() {
    const filler = document.createElement('div');
    filler.innerText = 'x'
    container.appendChild(filler);
    }
//page specific code goes below here

//header and page data block
const header = document.createElement('div')
header.id = 'mdsheader'
container.appendChild(header)
function newtextheader(a, b, c, d, e, f) {
    const newtext = document.createElement("div");
    newtext.id = a;
    newtext.classList.add(c, "dsfont", d, e, f);
    newtext.innerText = b;
    header.appendChild(newtext);
}
newtextheader('mdsmaintpage', 'MDS MAINT PAGE - DPC DIGITAL INPUTS', 'right', 'underline', 'bluef')
newtextheader('pg3o19', 'PG 5 OF 19', 'bluef', 'right')
//header and page data block

//page info 
const container2 = document.createElement('div')
container2.id = 'mdsdisplaycontainersub'
container.appendChild(container2)

function containerMaker(a, b){
    const cont = document.createElement('div')
    cont.id = a
    b.appendChild(cont)
}
function subCMaker(a, b){
    const element = document.getElementById(a)
    const cont = document.createElement('div')
    cont.id = b
    element.appendChild(cont)
}

function newtext(tar, a, b, c, d, e, f, g, h, i ) {
    const element = document.getElementById(tar)
    const newtext = document.createElement("div");
    newtext.id = a;
    newtext.classList.add( c, d, e, f, g, h, i);
    newtext.innerText = b;
    element.appendChild(newtext);
    }
function displaybutton(tar, a, b, c, d, e) {
    const element = document.getElementById(tar)
    const displaybutton = document.createElement('button');
    displaybutton.classList.add(c, d, e);
    displaybutton.innerText = a;
    displaybutton.id = b;
    element.appendChild(displaybutton);
    }

containerMaker('mdsdpcdigi', container2)
newtext('mdsdpcdigi', 'mdsdpcdigihead', 'INSERT B', 'center', 'bluef')
subCMaker('mdsdpcdigi', 'mdsdpcdigi1')
newtext('mdsdpcdigi1', 'mdsdpcdigi11', 'DPC-1', 'bluef', 'center')
newtext('mdsdpcdigi1', '', 'A', 'bluef', 'center', 'smallf')
newtext('mdsdpcdigi1', '', 'B', 'bluef', 'center', 'smallf', 'borderleft')
newtext('mdsdpcdigi1', '', 'x', 'center', 'smallf', 'borderleft')
newtext('mdsdpcdigi1', '', 'PIN', 'bluef', 'center', 'smallf', 'borderbottom')
newtext('mdsdpcdigi1', '', 'PIN', 'bluef', 'center', 'smallf', 'borderleft', 'borderbottom')
newtext('mdsdpcdigi1', '', 'STATUS', 'bluef', 'center', 'smallf', 'borderleft', 'borderbottom')

newtext('mdsdpcdigi1', '', 'A03', 'bluef', 'smallf', 'center')
newtext('mdsdpcdigi1', '', 'A04', 'bluef', 'smallf', 'center', 'borderleft')
newtext('mdsdpcdigi1', '', 'ACTIVE', 'whitef', 'smallf', 'borderleft')
newtext('mdsdpcdigi1', '', 'A09', 'bluef', 'smallf', 'center')
newtext('mdsdpcdigi1', '', 'A10', 'bluef', 'smallf', 'center', 'borderleft')
newtext('mdsdpcdigi1', '', 'ACTIVE', 'whitef', 'smallf', 'borderleft')
newtext('mdsdpcdigi1', '', 'B03', 'bluef', 'smallf', 'center')
newtext('mdsdpcdigi1', '', 'B04', 'bluef', 'smallf', 'center', 'borderleft')
newtext('mdsdpcdigi1', '', 'ACTIVE', 'whitef', 'smallf', 'borderleft')
newtext('mdsdpcdigi1', '', 'B05', 'bluef', 'smallf', 'center')
newtext('mdsdpcdigi1', '', 'B06', 'bluef', 'smallf', 'center', 'borderleft')
newtext('mdsdpcdigi1', '', 'ACTIVE', 'whitef', 'smallf', 'borderleft')
newtext('mdsdpcdigi1', '', 'B07', 'bluef', 'smallf', 'center')
newtext('mdsdpcdigi1', '', 'B08', 'bluef', 'smallf', 'center', 'borderleft')
newtext('mdsdpcdigi1', '', 'INACTIVE', 'amberf', 'smallf', 'borderleft')
newtext('mdsdpcdigi1', '', 'C03', 'bluef', 'smallf', 'center')
newtext('mdsdpcdigi1', '', 'C04', 'bluef', 'smallf', 'center', 'borderleft')
newtext('mdsdpcdigi1', '', 'ACTIVE', 'whitef', 'smallf', 'borderleft')
newtext('mdsdpcdigi1', '', 'D03', 'bluef', 'smallf', 'center')
newtext('mdsdpcdigi1', '', 'D04', 'bluef', 'smallf', 'center', 'borderleft')
newtext('mdsdpcdigi1', '', 'ACTIVE', 'whitef', 'smallf', 'borderleft')
newtext('mdsdpcdigi1', '', 'D09', 'bluef', 'smallf', 'center')
newtext('mdsdpcdigi1', '', 'D10', 'bluef', 'smallf', 'center', 'borderleft')
newtext('mdsdpcdigi1', '', 'SPARE', 'grayf', 'smallf', 'borderleft')
newtext('mdsdpcdigi1', '', 'E01', 'bluef', 'smallf', 'center')
newtext('mdsdpcdigi1', '', 'E02', 'bluef', 'smallf', 'center', 'borderleft')
newtext('mdsdpcdigi1', '', 'ACTIVE', 'whitef', 'smallf', 'borderleft')
newtext('mdsdpcdigi1', '', 'E03', 'bluef', 'smallf', 'center')
newtext('mdsdpcdigi1', '', 'E04', 'bluef', 'smallf', 'center', 'borderleft')
newtext('mdsdpcdigi1', '', 'ACTIVE', 'whitef', 'smallf', 'borderleft')
newtext('mdsdpcdigi1', '', 'E09', 'bluef', 'smallf', 'center')
newtext('mdsdpcdigi1', '', 'E10', 'bluef', 'smallf', 'center', 'borderleft')
newtext('mdsdpcdigi1', '', 'SPARE', 'grayf', 'smallf', 'borderleft')
newtext('mdsdpcdigi1', '', 'E11', 'bluef', 'smallf', 'center')
newtext('mdsdpcdigi1', '', 'E12', 'bluef', 'smallf', 'center', 'borderleft')
newtext('mdsdpcdigi1', '', 'SPARE', 'grayf', 'smallf', 'borderleft')
newtext('mdsdpcdigi1', '', 'F05', 'bluef', 'smallf', 'center')
newtext('mdsdpcdigi1', '', 'F06', 'bluef', 'smallf', 'center', 'borderleft')
newtext('mdsdpcdigi1', '', 'SPARE', 'grayf', 'smallf', 'borderleft')
newtext('mdsdpcdigi1', '', 'F11', 'bluef', 'smallf', 'center')
newtext('mdsdpcdigi1', '', 'F12', 'bluef', 'smallf', 'center', 'borderleft')
newtext('mdsdpcdigi1', '', 'SPARE', 'grayf', 'smallf', 'borderleft')
newtext('mdsdpcdigi1', '', 'G01', 'bluef', 'smallf', 'center')
newtext('mdsdpcdigi1', '', 'G02', 'bluef', 'smallf', 'center', 'borderleft')
newtext('mdsdpcdigi1', '', 'ACTIVE', 'whitef', 'smallf', 'borderleft')
newtext('mdsdpcdigi1', '', 'G03', 'bluef', 'smallf', 'center')
newtext('mdsdpcdigi1', '', 'G04', 'bluef', 'smallf', 'center', 'borderleft')
newtext('mdsdpcdigi1', '', 'SPARE', 'grayf', 'smallf', 'borderleft')
newtext('mdsdpcdigi1', '', 'H08', 'bluef', 'smallf', 'center')
newtext('mdsdpcdigi1', '', 'H09', 'bluef', 'smallf', 'center', 'borderleft')
newtext('mdsdpcdigi1', '', 'ACTIVE', 'whitef', 'smallf', 'borderleft')
newtext('mdsdpcdigi1', '', 'J01', 'bluef', 'smallf', 'center')
newtext('mdsdpcdigi1', '', 'J02', 'bluef', 'smallf', 'center', 'borderleft')
newtext('mdsdpcdigi1', '', 'ACTIVE', 'whitef', 'smallf', 'borderleft')
newtext('mdsdpcdigi1', '', 'J03', 'bluef', 'smallf', 'center')
newtext('mdsdpcdigi1', '', 'J04', 'bluef', 'smallf', 'center', 'borderleft')
newtext('mdsdpcdigi1', '', 'SPARE', 'grayf', 'smallf', 'borderleft')
newtext('mdsdpcdigi1', '', 'J07', 'bluef', 'smallf', 'center')
newtext('mdsdpcdigi1', '', 'J08', 'bluef', 'smallf', 'center', 'borderleft')
newtext('mdsdpcdigi1', '', 'ACTIVE', 'whitef', 'smallf', 'borderleft')
newtext('mdsdpcdigi1', '', 'K01', 'bluef', 'smallf', 'center')
newtext('mdsdpcdigi1', '', 'K02', 'bluef', 'smallf', 'center', 'borderleft')
newtext('mdsdpcdigi1', '', 'NOT INSTLD', 'grayf', 'smallf', 'borderleft')
newtext('mdsdpcdigi1', '', 'K03', 'bluef', 'smallf', 'center')
newtext('mdsdpcdigi1', '', 'K04', 'bluef', 'smallf', 'center', 'borderleft')
newtext('mdsdpcdigi1', '', 'ACTIVE', 'whitef', 'smallf', 'borderleft')
newtext('mdsdpcdigi1', '', 'K05', 'bluef', 'smallf', 'center')
newtext('mdsdpcdigi1', '', 'K06', 'bluef', 'smallf', 'center', 'borderleft')
newtext('mdsdpcdigi1', '', 'INACTIVE', 'amberf', 'smallf', 'borderleft')
newtext('mdsdpcdigi1', '', 'K07', 'bluef', 'smallf', 'center')
newtext('mdsdpcdigi1', '', 'K08', 'bluef', 'smallf', 'center', 'borderleft')
newtext('mdsdpcdigi1', '', 'SPARE', 'grayf', 'smallf', 'borderleft')
newtext('mdsdpcdigi1', '', '1T2', 'bluef', 'smallf', 'center')
newtext('mdsdpcdigi1', '', '1T4', 'bluef', 'smallf', 'center', 'borderleft')
newtext('mdsdpcdigi1', '', 'SPARE', 'grayf', 'smallf', 'borderleft')
newtext('mdsdpcdigi1', '', '2T2', 'bluef', 'smallf', 'center')
newtext('mdsdpcdigi1', '', '2T4', 'bluef', 'smallf', 'center', 'borderleft')
newtext('mdsdpcdigi1', '', 'ACTIVE', 'whitef', 'smallf', 'borderleft')

subCMaker('mdsdpcdigi', 'mdsdpcdigi2')
newtext('mdsdpcdigi2', 'mdsdpcdigi21', 'DPC-2', 'bluef', 'center')
newtext('mdsdpcdigi2', '', 'A', 'bluef', 'center', 'smallf')
newtext('mdsdpcdigi2', '', 'B', 'bluef', 'center', 'smallf', 'borderleft')
newtext('mdsdpcdigi2', '', 'x', 'center', 'smallf', 'borderleft')
newtext('mdsdpcdigi2', '', 'PIN', 'bluef', 'center', 'smallf', 'borderbottom')
newtext('mdsdpcdigi2', '', 'PIN', 'bluef', 'center', 'smallf', 'borderleft', 'borderbottom')
newtext('mdsdpcdigi2', '', 'STATUS', 'bluef', 'center', 'smallf', 'borderleft', 'borderbottom')
newtext('mdsdpcdigi2', '', 'A03', 'bluef', 'smallf', 'center')
newtext('mdsdpcdigi2', '', 'A04', 'bluef', 'smallf', 'center', 'borderleft')
newtext('mdsdpcdigi2', '', 'ACTIVE', 'whitef', 'smallf', 'borderleft')
newtext('mdsdpcdigi2', '', 'A09', 'bluef', 'smallf', 'center')
newtext('mdsdpcdigi2', '', 'A10', 'bluef', 'smallf', 'center', 'borderleft')
newtext('mdsdpcdigi2', '', 'ACTIVE', 'whitef', 'smallf', 'borderleft')
newtext('mdsdpcdigi2', '', 'B03', 'bluef', 'smallf', 'center')
newtext('mdsdpcdigi2', '', 'B04', 'bluef', 'smallf', 'center', 'borderleft')
newtext('mdsdpcdigi2', '', 'ACTIVE', 'whitef', 'smallf', 'borderleft')
newtext('mdsdpcdigi2', '', 'B05', 'bluef', 'smallf', 'center')
newtext('mdsdpcdigi2', '', 'B06', 'bluef', 'smallf', 'center', 'borderleft')
newtext('mdsdpcdigi2', '', 'ACTIVE', 'whitef', 'smallf', 'borderleft')
newtext('mdsdpcdigi2', '', 'B07', 'bluef', 'smallf', 'center')
newtext('mdsdpcdigi2', '', 'B08', 'bluef', 'smallf', 'center', 'borderleft')
newtext('mdsdpcdigi2', '', 'INACTIVE', 'amberf', 'smallf', 'borderleft')
newtext('mdsdpcdigi2', '', 'C03', 'bluef', 'smallf', 'center')
newtext('mdsdpcdigi2', '', 'C04', 'bluef', 'smallf', 'center', 'borderleft')
newtext('mdsdpcdigi2', '', 'ACTIVE', 'whitef', 'smallf', 'borderleft')
newtext('mdsdpcdigi2', '', 'D03', 'bluef', 'smallf', 'center')
newtext('mdsdpcdigi2', '', 'D04', 'bluef', 'smallf', 'center', 'borderleft')
newtext('mdsdpcdigi2', '', 'ACTIVE', 'whitef', 'smallf', 'borderleft')
newtext('mdsdpcdigi2', '', 'D09', 'bluef', 'smallf', 'center')
newtext('mdsdpcdigi2', '', 'D10', 'bluef', 'smallf', 'center', 'borderleft')
newtext('mdsdpcdigi2', '', 'SPARE', 'grayf', 'smallf', 'borderleft')
newtext('mdsdpcdigi2', '', 'E01', 'bluef', 'smallf', 'center')
newtext('mdsdpcdigi2', '', 'E02', 'bluef', 'smallf', 'center', 'borderleft')
newtext('mdsdpcdigi2', '', 'ACTIVE', 'whitef', 'smallf', 'borderleft')
newtext('mdsdpcdigi2', '', 'E03', 'bluef', 'smallf', 'center')
newtext('mdsdpcdigi2', '', 'E04', 'bluef', 'smallf', 'center', 'borderleft')
newtext('mdsdpcdigi2', '', 'ACTIVE', 'whitef', 'smallf', 'borderleft')
newtext('mdsdpcdigi2', '', 'E09', 'bluef', 'smallf', 'center')
newtext('mdsdpcdigi2', '', 'E10', 'bluef', 'smallf', 'center', 'borderleft')
newtext('mdsdpcdigi2', '', 'SPARE', 'grayf', 'smallf', 'borderleft')
newtext('mdsdpcdigi2', '', 'E11', 'bluef', 'smallf', 'center')
newtext('mdsdpcdigi2', '', 'E12', 'bluef', 'smallf', 'center', 'borderleft')
newtext('mdsdpcdigi2', '', 'SPARE', 'grayf', 'smallf', 'borderleft')
newtext('mdsdpcdigi2', '', 'F05', 'bluef', 'smallf', 'center')
newtext('mdsdpcdigi2', '', 'F06', 'bluef', 'smallf', 'center', 'borderleft')
newtext('mdsdpcdigi2', '', 'SPARE', 'grayf', 'smallf', 'borderleft')
newtext('mdsdpcdigi2', '', 'F11', 'bluef', 'smallf', 'center')
newtext('mdsdpcdigi2', '', 'F12', 'bluef', 'smallf', 'center', 'borderleft')
newtext('mdsdpcdigi2', '', 'SPARE', 'grayf', 'smallf', 'borderleft')
newtext('mdsdpcdigi2', '', 'G01', 'bluef', 'smallf', 'center')
newtext('mdsdpcdigi2', '', 'G02', 'bluef', 'smallf', 'center', 'borderleft')
newtext('mdsdpcdigi2', '', 'ACTIVE', 'whitef', 'smallf', 'borderleft')
newtext('mdsdpcdigi2', '', 'G03', 'bluef', 'smallf', 'center')
newtext('mdsdpcdigi2', '', 'G04', 'bluef', 'smallf', 'center', 'borderleft')
newtext('mdsdpcdigi2', '', 'SPARE', 'grayf', 'smallf', 'borderleft')
newtext('mdsdpcdigi2', '', 'H08', 'bluef', 'smallf', 'center')
newtext('mdsdpcdigi2', '', 'H09', 'bluef', 'smallf', 'center', 'borderleft')
newtext('mdsdpcdigi2', '', 'ACTIVE', 'whitef', 'smallf', 'borderleft')
newtext('mdsdpcdigi2', '', 'J01', 'bluef', 'smallf', 'center')
newtext('mdsdpcdigi2', '', 'J02', 'bluef', 'smallf', 'center', 'borderleft')
newtext('mdsdpcdigi2', '', 'ACTIVE', 'whitef', 'smallf', 'borderleft')
newtext('mdsdpcdigi2', '', 'J03', 'bluef', 'smallf', 'center')
newtext('mdsdpcdigi2', '', 'J04', 'bluef', 'smallf', 'center', 'borderleft')
newtext('mdsdpcdigi2', '', 'SPARE', 'grayf', 'smallf', 'borderleft')
newtext('mdsdpcdigi2', '', 'J07', 'bluef', 'smallf', 'center')
newtext('mdsdpcdigi2', '', 'J08', 'bluef', 'smallf', 'center', 'borderleft')
newtext('mdsdpcdigi2', '', 'ACTIVE', 'whitef', 'smallf', 'borderleft')
newtext('mdsdpcdigi2', '', 'K01', 'bluef', 'smallf', 'center')
newtext('mdsdpcdigi2', '', 'K02', 'bluef', 'smallf', 'center', 'borderleft')
newtext('mdsdpcdigi2', '', 'NOT INSTLD', 'grayf', 'smallf', 'borderleft')
newtext('mdsdpcdigi2', '', 'K03', 'bluef', 'smallf', 'center')
newtext('mdsdpcdigi2', '', 'K04', 'bluef', 'smallf', 'center', 'borderleft')
newtext('mdsdpcdigi2', '', 'ACTIVE', 'whitef', 'smallf', 'borderleft')
newtext('mdsdpcdigi2', '', 'K05', 'bluef', 'smallf', 'center')
newtext('mdsdpcdigi2', '', 'K06', 'bluef', 'smallf', 'center', 'borderleft')
newtext('mdsdpcdigi2', '', 'INACTIVE', 'amberf', 'smallf', 'borderleft')
newtext('mdsdpcdigi2', '', 'K07', 'bluef', 'smallf', 'center')
newtext('mdsdpcdigi2', '', 'K08', 'bluef', 'smallf', 'center', 'borderleft')
newtext('mdsdpcdigi2', '', 'SPARE', 'grayf', 'smallf', 'borderleft')
newtext('mdsdpcdigi2', '', '1T2', 'bluef', 'smallf', 'center')
newtext('mdsdpcdigi2', '', '1T4', 'bluef', 'smallf', 'center', 'borderleft')
newtext('mdsdpcdigi2', '', 'SPARE', 'grayf', 'smallf', 'borderleft')
newtext('mdsdpcdigi2', '', '2T2', 'bluef', 'smallf', 'center')
newtext('mdsdpcdigi2', '', '2T4', 'bluef', 'smallf', 'center', 'borderleft')
newtext('mdsdpcdigi2', '', 'ACTIVE', 'whitef', 'smallf', 'borderleft')


subCMaker('mdsdpcdigi', 'mdsdpcdigi3')
newtext('mdsdpcdigi3', '', 'x', 'invisible')
newtext('mdsdpcdigi3', '', 'x', 'invisible', 'smallf')

newtext('mdsdpcdigi3', '', 'BUS DESCRIPTION', 'bluef', 'smallf', 'underline')
newtext('mdsdpcdigi3', '', 'DME-1-L', 'bluef', 'smallf')
newtext('mdsdpcdigi3', '', 'A/T-1', 'bluef', 'smallf')
newtext('mdsdpcdigi3', '', 'DPC X-TALK 2', 'bluef', 'smallf')
newtext('mdsdpcdigi3', '', 'TCAS-1', 'bluef', 'smallf')
newtext('mdsdpcdigi3', '', 'IR-L-1/IR-L-3', 'bluef', 'smallf')
newtext('mdsdpcdigi3', '', 'SCE-1/SCE-3', 'bluef', 'smallf')
newtext('mdsdpcdigi3', '', 'MMR-1 GPS', 'bluef', 'smallf')
newtext('mdsdpcdigi3', '', '--', 'bluef', 'smallf')
newtext('mdsdpcdigi3', '', 'IASC ASC-L', 'bluef', 'smallf')
newtext('mdsdpcdigi3', '', 'ADF-1', 'bluef', 'smallf')
newtext('mdsdpcdigi3', '', '--', 'bluef', 'smallf')
newtext('mdsdpcdigi3', '', '--', 'bluef', 'smallf')
newtext('mdsdpcdigi3', '', '--', 'bluef', 'smallf')
newtext('mdsdpcdigi3', '', '--', 'bluef', 'smallf')
newtext('mdsdpcdigi3', '', 'MCP-1', 'bluef', 'smallf')
newtext('mdsdpcdigi3', '', '--', 'bluef', 'smallf')
newtext('mdsdpcdigi3', '', 'FSEU', 'bluef', 'smallf')
newtext('mdsdpcdigi3', '', 'FQPU CTR TANK', 'bluef', 'smallf')
newtext('mdsdpcdigi3', '', '--', 'bluef', 'smallf')
newtext('mdsdpcdigi3', '', 'PRINTER IN', 'bluef', 'smallf')
newtext('mdsdpcdigi3', '', 'WXR 2-01-CAPT', 'bluef', 'smallf')
newtext('mdsdpcdigi3', '', 'DU LIB', 'bluef', 'smallf')
newtext('mdsdpcdigi3', '', 'ENG 1 EEC CH B', 'bluef', 'smallf')
newtext('mdsdpcdigi3', '', '--', 'bluef', 'smallf')
newtext('mdsdpcdigi3', '', '--', 'bluef', 'smallf')
newtext('mdsdpcdigi3', '', 'FMC-L', 'bluef', 'smallf')


//page info block


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
displaybuttonf('PRINT', 'print')
displaybuttonf('SEND', 'send')
fillerf()
displaybuttonf('PREV PAGE', 'mdspg5prevpage')
displaybuttonf('NEXT PAGE', 'mdspg5nextpage')
displayT()
}
