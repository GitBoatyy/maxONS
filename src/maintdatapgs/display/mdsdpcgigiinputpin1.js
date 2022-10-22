export default function mdsdpcdigiinputpin1(){
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
newtextheader('pg3o19', 'PG 6 OF 19', 'bluef', 'right')
//header and page data block

//page info 
const container2 = document.createElement('div')
container2.id = 'mdsdisplaycontainer3'
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
    newtext.classList.add("dsfont", c, d, e, f, g, h, i);
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

containerMaker('mdsdpcdigiX', container2)
subCMaker('mdsdpcdigiX', 'mdsdpcdigi21')
newtext('mdsdpcdigi21', '', 'x', 'invisible', 'center')
newtext('mdsdpcdigi21', '', 'x', 'blackf', 'center', 'borderleft')
newtext('mdsdpcdigi21', '', 'DPC-1', 'bluef', 'borderleft')
newtext('mdsdpcdigi21', '', 'DPC-2', 'bluef', 'borderleft')
newtext('mdsdpcdigi21', '', 'FIBER PIN', 'bluef', 'borderleft')
newtext('mdsdpcdigi21', '', 'INSERT', 'bluef', 'center', 'borderbottom')
newtext('mdsdpcdigi21', '', 'PIN', 'bluef', 'center', 'borderbottom', 'borderleft')
newtext('mdsdpcdigi21', '', 'LINK STATUS', 'bluef', 'borderbottom', 'borderleft')
newtext('mdsdpcdigi21', '', 'LINK STATUS', 'bluef', 'borderbottom', 'borderleft')
newtext('mdsdpcdigi21', '', 'DESCRIPTION', 'bluef', 'borderbottom', 'borderleft')
newtext('mdsdpcdigi21', '', 'C', 'center', 'bluef')
newtext('mdsdpcdigi21', '', '5', 'center', 'bluef', 'borderleft')
newtext('mdsdpcdigi21', '', 'ACTIVE', 'center', 'whitef', 'borderleft')
newtext('mdsdpcdigi21', '', 'ACTIVE', 'center', 'whitef', 'borderleft')
newtext('mdsdpcdigi21', '', 'DU LOB', 'center', 'bluef', 'borderleft')
newtext('mdsdpcdigi21', '', 'C', 'center', 'bluef')
newtext('mdsdpcdigi21', '', '6', 'center', 'bluef', 'borderleft')
newtext('mdsdpcdigi21', '', 'ACTIVE', 'center', 'whitef', 'borderleft')
newtext('mdsdpcdigi21', '', 'ACTIVE', 'center', 'whitef', 'borderleft')
newtext('mdsdpcdigi21', '', 'DU LIB', 'center', 'bluef', 'borderleft')
newtext('mdsdpcdigi21', '', 'F', 'center', 'bluef')
newtext('mdsdpcdigi21', '', '5', 'center', 'bluef', 'borderleft')
newtext('mdsdpcdigi21', '', 'ACTIVE', 'center', 'whitef', 'borderleft')
newtext('mdsdpcdigi21', '', 'ACTIVE', 'center', 'whitef', 'borderleft')
newtext('mdsdpcdigi21', '', 'DU RIB', 'center', 'bluef', 'borderleft')
newtext('mdsdpcdigi21', '', 'F', 'center', 'bluef')
newtext('mdsdpcdigi21', '', '6', 'center', 'bluef', 'borderleft')
newtext('mdsdpcdigi21', '', 'ACTIVE', 'center', 'whitef', 'borderleft')
newtext('mdsdpcdigi21', '', 'ACTIVE', 'center', 'whitef', 'borderleft')
newtext('mdsdpcdigi21', '', 'DU ROB', 'center', 'bluef', 'borderleft')


subCMaker('mdsdpcdigiX', 'mdsdpcdigi22')
newtext('mdsdpcdigi22', '', 'x', 'blackf')
newtext('mdsdpcdigi22', '', 'A', 'bluef', 'center', 'borderleft')
newtext('mdsdpcdigi22', '', 'B', 'bluef', 'center', 'borderleft')
newtext('mdsdpcdigi22', '', 'DPC-1', 'bluef', 'borderleft')
newtext('mdsdpcdigi22', '', 'DPC-2', 'bluef', 'borderleft')
newtext('mdsdpcdigi22', '', 'ETHERNET PIN', 'bluef','borderleft')
newtext('mdsdpcdigi22', '', 'INSERT', 'bluef', 'center', 'borderbottom')
newtext('mdsdpcdigi22', '', 'PIN', 'bluef', 'center', 'borderleft', 'borderbottom')
newtext('mdsdpcdigi22', '', 'PIN', 'bluef', 'center', 'borderleft', 'borderbottom')
newtext('mdsdpcdigi22', '', 'STATUS', 'bluef', 'borderleft', 'borderbottom')
newtext('mdsdpcdigi22', '', 'STATUS', 'bluef', 'borderleft', 'borderbottom')
newtext('mdsdpcdigi22', '', 'DESCRIPTION', 'bluef', 'borderleft', 'borderbottom')
newtext('mdsdpcdigi22', '', 'C', 'bluef', 'center')
newtext('mdsdpcdigi22', '', '16-2', 'bluef', 'center', 'borderleft')
newtext('mdsdpcdigi22', '', '16-4', 'bluef', 'center', 'borderleft')
newtext('mdsdpcdigi22', '', 'SPARE', 'grayf', 'borderleft')
newtext('mdsdpcdigi22', '', 'SPARE', 'grayf', 'borderleft')
newtext('mdsdpcdigi22', '', 'SPARE', 'bluef', 'borderleft')

newtext('mdsdpcdigi22', '', 'C', 'bluef', 'center')
newtext('mdsdpcdigi22', '', '17-2', 'bluef', 'center', 'borderleft')
newtext('mdsdpcdigi22', '', '17-4', 'bluef', 'center', 'borderleft')
newtext('mdsdpcdigi22', '', 'INACTIVE', 'amberf', 'borderleft')
newtext('mdsdpcdigi22', '', 'INACTIVE', 'amberf', 'borderleft')
newtext('mdsdpcdigi22', '', 'NFS-L', 'bluef', 'borderleft')

newtext('mdsdpcdigi22', '', 'F', 'bluef', 'center')
newtext('mdsdpcdigi22', '', '16-2', 'bluef', 'center', 'borderleft')
newtext('mdsdpcdigi22', '', '16-4', 'bluef', 'center', 'borderleft')
newtext('mdsdpcdigi22', '', 'NOT INSTLD', 'grayf',  'borderleft')
newtext('mdsdpcdigi22', '', 'NOT INSTLD', 'grayf', 'borderleft')
newtext('mdsdpcdigi22', '', 'NFS-R', 'bluef',  'borderleft')

newtext('mdsdpcdigi22', '', 'F', 'bluef', 'center')
newtext('mdsdpcdigi22', '', '17-2', 'bluef', 'center', 'borderleft')
newtext('mdsdpcdigi22', '', '17-4', 'bluef', 'center', 'borderleft')
newtext('mdsdpcdigi22', '', 'SPARE', 'grayf', 'borderleft')
newtext('mdsdpcdigi22', '', 'SPARE', 'grayf', 'borderleft')
newtext('mdsdpcdigi22', '', 'SPARE', 'bluef', 'borderleft')



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
displaybuttonf('PREV PAGE', 'mdspg6prevpage')
displaybuttonf('NEXT PAGE', 'mdspg6nextpage')
displayT()
}
