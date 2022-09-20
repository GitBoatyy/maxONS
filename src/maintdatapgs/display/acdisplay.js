
export default function acDisplay(){

    let currentTime = new Date();
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;



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
    const container = document.createElement('div')
    container.id = 'acdisplaycontainer'
    displaycontainer.appendChild(container)
//ids are grid location column/row for css placement
function newtext(a, b, c) {
    const newtext = document.createElement("div");
    newtext.id = a;
    newtext.classList.add(c, "dsfont");
    newtext.innerText = b;
    container.appendChild(newtext);
    }

function filler() {
    const filler = document.createElement('div');
    filler.innerText = 'x'
    container.appendChild(filler);
    }

    /** newtext creates a div containing
 * @param {var} a innertext
 * @param {var} b id */
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
    displaybutton.classList.add('navbutton', 'buttonhover', 'dsbutton');
    displaybutton.innerText = a;
    displaybutton.id = b;
    foot.appendChild(displaybutton);
    }

    newtext('acdisplayAIRCON', 'AIR CONDITIONING', 'bluef')
    newtext('acdisplayunits', 'METRIC UNITS', 'whitef')
    newtext('acdisplayTRIMAIR', 'TRIM AIR', 'bluef')
    newtext('acdisplayon', 'ON', 'whitef')
    newtext('acdisplayCONT', 'CONT CAB', 'bluef')
    newtext('acdisplayFWD', 'FORWARD', 'bluef')
    newtext('acdisplayAFT', 'AFT', 'bluef')
    newtext('acdisplaySEL', 'SELECTOR TEMP', 'bluef')
    newtext('acdisplaySELCONT', '24', 'whitef')
    newtext('acdisplaySELFWDT', '24', 'whitef')
    newtext('acdisplaySELAFT', '24', 'whitef')
    newtext('acdisplayZONE', 'ZONE TEMP', 'bluef')
    newtext('acdisplayZONET', '30', 'whitef')
    newtext('acdisplayZONECONT', '29', 'whitef')
    newtext('acdisplayZONEFWD', '28', 'whitef')
    newtext('acdisplayZONEDUCT', 'ZONE DUCT TEMP', 'bluef')
    newtext('acdisplayZONEDUCTCONT', '36', 'whitef')
    newtext('acdisplayZONEDUCTFWD', '31', 'whitef')
    newtext('acdisplayZONEDUCTAFT', '30', 'whitef')
    newtext('acdisplayZONETRIM', 'ZONE TRIM VLV POS', 'bluef')
    newtext('acdisplayZONETRIMCONT', 'CLOSED', 'whitef')
    newtext('acdisplayZONETRIMFWD', 'CLOSED', 'whitef')
    newtext('acdisplayZONETRIMAFT', 'CLOSED', 'whitef')
filler()
filler()
filler()
filler()
filler()
newtext('acdisplayL', 'LEFT', 'bluef')
newtext('acdisplayR', 'RIGHT', 'bluef')
filler()
newtext('acdisplayPACKM', 'PACK MODE', 'bluef')
newtext('acdisplayOff1', 'OFF', 'whitef')
newtext('acdisplayOff2', 'OFF', 'whitef')
filler()
newtext('acdisplayPIT', 'PACK INLET TEMP', 'bluef')
newtext('acdisplayPITL', '40', 'whitef')
newtext('acdisplayPITR', '41', 'whitef')
filler()
newtext('acdisplayPIP', 'PACK INLET PRESSURE', 'bluef')
newtext('acdisplayPIPL', '0', 'whitef')
newtext('acdisplayPIPR', '0', 'whitef')
filler()
newtext('acdisplayPST', 'PACK SENSOR TEMP', 'bluef')
newtext('acdisplayPSTL', '25', 'whitef')
newtext('acdisplayPSTR', '25', 'whitef')
filler()
newtext('acdisplayMIX', 'MIX MANIFOLD TEMP', 'bluef')
newtext('acdisplayMIXL', '28', 'whitef')
newtext('acdisplayMIXR', '28', 'whitef')
filler()
filler()
filler()
filler()
filler()
newtext('acdisplayPTCV', 'PACK TCV POSITION', 'bluef')
newtext('acdisplayPTCVL', 'CLOSED', 'whitef')
newtext('acdisplayPTCVR', 'CLOSED', 'whitef')
filler()
newtext('acdisplaySTBYTCV', 'STBY TCV DRIVE (mA)', 'bluef')
newtext('acdisplaySTBYTCVL', '1', 'whitef')
newtext('acdisplaySTBYTCVR', '1', 'whitef')
filler()
filler()
filler()
filler()
filler()
newtext('acdisplayPF', 'PACK FLOW (LB/MIN)', 'bluef')
newtext('acdisplayPFL', '0', 'whitef')
newtext('acdisplayPFR', '0', 'whitef')
filler()
newtext('acdisplayPFCV', ' PACK FCV', 'bluef')
newtext('acdisplayPFCVL', 'CLOSED', 'whitef')
newtext('acdisplayPFCVR', 'CLOSED', 'whitef')
filler()
filler()
filler()
filler()
filler()
newtext('acdisplaySAT', 'STATIC AIR TEMP (°C)', 'bluef')
newtext('acdisplaySATNUM', '+27.3', 'whitef')
filler()
filler()
newtext('acdisplayCA', 'SCABIN ALTITUDE', 'bluef')
newtext('acdisplayCANUM', '1400', 'whitef')
filler()
filler()
newtext('acdisplayALT', 'ALTITUDE', 'bluef')
newtext('acdisplayALTNUM', '1386', 'whitef')
filler()
filler()
newtext('acdisplayPFS', 'PACK FLOW SCHEDULE', 'bluef')
newtext('acdisplayPFSNUM', '11', 'whitef')
filler()
filler()
filler()
filler()
filler()
filler()
function foot(){
    const foot = document.createElement("div");
   foot.id = 'displaycontfooter'
    displaycontainer.appendChild(foot);
}
foot()
newtextf('acdisplayDATE', 'DATE', 'bluef')
newtextf('acdisplayDATED', today, 'whitef' )
displaybuttonf('PREV MENU')


}