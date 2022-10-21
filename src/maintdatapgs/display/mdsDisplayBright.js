//change function name for each page and container id (line 42)
export default function mdsDisplayBright(){
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
    container.id = 'mdsbrightdisplaycontainer' //change this container name for specific page layouts
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
newtextheader('mdsmaintpage', 'MDS MAINT PAGE - BRIGHTNESS', 'right', 'underline', 'bluef')
newtextheader('pg1o19', 'PG 2 OF 19', 'bluef', 'right')
//header and page data block

//page info 
const container2 = document.createElement('div')
container2.id = 'mdsbrightcontainer2'
container.appendChild(container2)

newtext('inputbright', 'INPUTS', 'underline', 'bluef', 'largef')
newtext('lob', 'LOB', 'bluef', 'largef', 'center')
newtext('lib', 'LIB', 'bluef', 'largef', 'center')
newtext('rib', 'RIB', 'bluef', 'largef', 'center')
newtext('rob', 'ROB', 'bluef', 'largef', 'center')

newtext('brtctrl', 'BRIGHT CTRL (%)', 'bluef', 'smallf')
newtext('', '33', 'whitef', 'midf', 'center')
newtext('', '100', 'whitef', 'midf', 'center')
newtext('', '50', 'whitef', 'midf', 'center')
newtext('', '43', 'whitef', 'midf', 'center')

newtext('cntrctrl', 'CONTRAST CTRL (%)', 'bluef', 'smallf')
newtext('', '0', 'whitef', 'midf', 'center')
newtext('', '100', 'whitef', 'midf', 'center')
newtext('', '49', 'whitef', 'midf', 'center')
newtext('', '45', 'whitef', 'midf', 'center')

newtext('', 'BLS (FC)', 'bluef', 'smallf')
newtext('', '1.0', 'whitef', 'midf', 'center')
newtext('', '1.9', 'whitef', 'midf', 'center')
newtext('', '2.5', 'whitef', 'midf', 'center')
newtext('', '1.2', 'whitef', 'midf', 'center')

newtext('', 'RLS (FC)', 'bluef', 'smallf')
newtext('', '20', 'whitef', 'midf', 'center')
newtext('', 'x', 'invis', 'midf', 'center')
newtext('', 'x', 'invis', 'midf', 'center')
newtext('', '55', 'whitef', 'midf', 'center')

newtext('', 'x', 'invis')
newtext('', 'x', 'invis')
newtext('', 'x', 'invis')
newtext('', 'x', 'invis')
newtext('', 'x', 'invis')

newtext('outputsbright', 'OUTPUTS', 'bluef', 'largef', 'underline')
newtext('', 'x', 'invis')
newtext('', 'x', 'invis')
newtext('', 'x', 'invis')
newtext('', 'x', 'invis')

newtext('', 'COMMANDED BRIGHTNESS (%)', 'bluef', 'smallf')
newtext('', '3', 'whitef', 'midf', 'center')
newtext('', '15', 'whitef', 'midf', 'center')
newtext('', '4', 'whitef', 'midf', 'center')
newtext('', '3', 'whitef', 'midf', 'center')

newtext('', 'COMMANDED CONTRAST (%)', 'bluef', 'smallf')
newtext('', '0', 'whitef', 'midf', 'center')
newtext('', '99', 'whitef', 'midf', 'center')
newtext('', '47', 'whitef', 'midf', 'center')
newtext('', '43', 'whitef', 'midf', 'center')


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
displaybuttonf('PREV MENU', 'mdsprevmenu')
displaybuttonf('PRINT', 'mdsprint')
displaybuttonf('SEND', 'mdssend')
fillerf()
displaybuttonf('PREV PAGE', 'mdspg2prevpage')
displaybuttonf('NEXT PAGE', 'mdspg2nextpage')
displayT()
}
