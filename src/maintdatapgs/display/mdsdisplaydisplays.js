export default function mdsDisplays(){
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
newtextheader('mdsmaintpage', 'MDS MAINT PAGE - DISPLAYS', 'right', 'underline', 'bluef')
newtextheader('pg3o19', 'PG 3 OF 19', 'bluef', 'right')
//header and page data block

//page info 
const container2 = document.createElement('div')
container2.id = 'mdsdisplaycontainer2'
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

function newtext(tar, a, b, c, d, e, f) {
    const element = document.getElementById(tar)
    const newtext = document.createElement("div");
    newtext.id = a;
    newtext.classList.add( c, d, e, f);
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

containerMaker('mdsdisplayrow1', container2)
newtext('mdsdisplayrow1', 'top11', 'EFIS CP-L', 'bluef', 'center', 'smallf')
newtext('mdsdisplayrow1', 'top12', 'EFIS CP-R', 'bluef', 'center', 'smallf')
displaybutton('mdsdisplayrow1', 'ACTIVE', 'bot11', 'center', 'greenbutton')
displaybutton('mdsdisplayrow1', 'ACTIVE', 'bot12', 'center', 'greenbutton')

containerMaker('mdsdisplayrow2', container2)
newtext('mdsdisplayrow2', 'top21', 'LOB DU', 'bluef', 'center', 'smallf')
newtext('mdsdisplayrow2', 'top22', 'LIB DU', 'bluef', 'center', 'smallf')
newtext('mdsdisplayrow2', 'top23', 'RIB DU', 'bluef', 'center', 'smallf')
newtext('mdsdisplayrow2', 'top24', 'ROB DU', 'bluef', 'center', 'smallf')
displaybutton('mdsdisplayrow2', 'ACTIVE', 'bot21', 'center', 'greenbutton')
displaybutton('mdsdisplayrow2', 'ACTIVE', 'bot22', 'center', 'greenbutton')
displaybutton('mdsdisplayrow2', 'ACTIVE', 'bot23', 'center', 'greenbutton')
displaybutton('mdsdisplayrow2', 'ACTIVE', 'bot24', 'center', 'greenbutton')
displaybutton('mdsdisplayrow2', 'L1', 'vbot21', 'rightbutton', 'greenbutton', 'smallf')
displaybutton('mdsdisplayrow2', 'R4', 'vbot22', 'leftbutton', 'whitebutton', 'smallf')
displaybutton('mdsdisplayrow2', 'L2', 'vbot23', 'rightbutton', 'greenbutton', 'smallf')
displaybutton('mdsdisplayrow2', 'R3', 'vbot24', 'leftbutton', 'whitebutton', 'smallf')
displaybutton('mdsdisplayrow2', 'L3', 'vbot25', 'rightbutton', 'greenbutton', 'smallf')
displaybutton('mdsdisplayrow2', 'R2', 'vbot26', 'leftbutton', 'whitebutton', 'smallf')
displaybutton('mdsdisplayrow2', 'L4', 'vbot27', 'rightbutton', 'greenbutton', 'smallf')
displaybutton('mdsdisplayrow2', 'R1', 'vbot28', 'leftbutton', 'whitebutton', 'smallf')

containerMaker('mdsdisplayrow3', container2)
subCMaker('mdsdisplayrow3', 'row31')
newtext('row31', 'x', 'x', 'invisible')
newtext('row31', 'top311', 'A429 X-TALK', 'bluef', 'center', 'smallf')
newtext('row31', 'top312', 'CH 1:', 'bluef', 'center', 'smallf')
newtext('row31', 'top313', 'ACTIVE', 'greenf', 'center', 'smallf')
newtext('row31', 'top314', 'CH 2:', 'bluef', 'center', 'smallf')
newtext('row31', 'top315', 'ACTIVE', 'greenf', 'center', 'smallf')

subCMaker('mdsdisplayrow3', 'row32')
newtext('row32', 'top321', 'DPC-1', 'bluef', 'center', 'smallf')
displaybutton('row32', '1', 'top3221', 'greenbutton', 'smallf')
displaybutton('row32', '2', 'top3221', 'greenbutton', 'smallf')
displaybutton('row32', '3', 'top3221', 'whitebutton', 'smallf')
displaybutton('row32', '4', 'top3221', 'whitebutton', 'smallf')
displaybutton('row32', 'ACTIVE', 'top323', 'greenbutton')
newtext('row32', 'x', 'x', 'invisible')

subCMaker('mdsdisplayrow3', 'row33')
newtext('row33', '', 'x', 'invisible')
newtext('row33', 'top331', 'FIBER', 'bluef', 'center', 'smallf')
newtext('row33', 'top332', 'X-TALK', 'bluef', 'center', 'smallf')
newtext('row33', 'top333', 'A \u25A0\u2500\u2500\u2500\u2500\u2500\u25A0 B', 'greenf', 'smallf', 'center')
newtext('row33', 'top333', 'B \u25A0\u2500\u2500\u2500\u2500\u2500\u25A0 A', 'greenf', 'smallf', 'center')

subCMaker('mdsdisplayrow3', 'row34')
newtext('row34', 'top321', 'DPC-2', 'bluef', 'center', 'smallf')
displaybutton('row34', '4', 'top3221', 'whitebutton', 'smallf')
displaybutton('row34', '3', 'top3221', 'whitebutton', 'smallf')
displaybutton('row34', '2', 'top3221', 'greenbutton', 'smallf')
displaybutton('row34', '1', 'top3221', 'greenbutton', 'smallf')
displaybutton('row34', 'ACTIVE', 'top323', 'greenbutton')
newtext('row34', 'x', 'x', 'invisible')

subCMaker('mdsdisplayrow3', 'row35')
newtext('row35', 'x', 'x', 'invisible', 'smallf')
newtext('row35', 'top311', 'A429 X-TALK', 'bluef', 'center', 'smallf')
newtext('row35', 'top312', 'CH 1:', 'bluef', 'center', 'smallf')
newtext('row35', 'top313', 'ACTIVE', 'greenf', 'center', 'smallf')
newtext('row35', 'top314', 'CH 2:', 'bluef', 'center', 'smallf')
newtext('row35', 'top315', 'ACTIVE', 'greenf', 'center', 'smallf')

containerMaker('mdsdisplayrow4', container2)
subCMaker('mdsdisplayrow4', 'row41')
newtext('row41', 'top411', 'MFP SELECTOR', 'bluef', 'center', 'smallf')
newtext('row41', 'top4121', 'CAPT', 'bluef', 'center', 'smallf')
newtext('row41', 'top4122', 'F/O', 'bluef', 'center', 'smallf')
displaybutton('row41', 'ACTIVE', 'top4123', 'greenbutton')
displaybutton('row41', 'ACTIVE', 'top4124', 'greenbutton')


subCMaker('mdsdisplayrow4', 'row42')
newtext('row42', 'top421', 'P61 MAINTENANCE', 'bluef', 'smallf')
newtext('row42', 'top421', 'SELECTOR', 'bluef', 'smallf')
displaybutton('row42', 'ACTIVE', 'top422', 'greenbutton')


containerMaker('mdsdisplayrow5', container2)
newtext('mdsdisplayrow5', 'top51', 'CONTROL SWITCHES', 'bluef', 'center', 'smallf', 'underline')

containerMaker('mdsdisplayrow6', container2)
subCMaker('mdsdisplayrow6', 'row61')
newtext('row61', 'top611', 'CAPT PFD/MFD', 'bluef', 'smallf', 'center')
newtext('row61', 'top612', 'NORM', 'whitef', 'center')

subCMaker('mdsdisplayrow6', 'row62')
newtext('row62', 'top611', 'DISPLAYS SOURCE', 'bluef', 'smallf', 'center')
newtext('row62', 'top612', 'AUTO', 'whitef', 'center')

subCMaker('mdsdisplayrow6', 'row63')
newtext('row63', 'top611', 'EFIS CP SOURCE', 'bluef', 'smallf', 'center')
newtext('row63', 'top612', 'NORMAL', 'whitef', 'center')

subCMaker('mdsdisplayrow6', 'row64')
newtext('row64', 'top611', 'F/O PFD/MFD', 'bluef', 'smallf', 'center')
newtext('row64', 'top612', 'NORM', 'whitef', 'center')



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
fillerf()
fillerf()
fillerf()
displaybuttonf('PREV PAGE', 'mdspg3prevpage')
displaybuttonf('NEXT PAGE', 'mdspg3nextpage')
displayT()
}

