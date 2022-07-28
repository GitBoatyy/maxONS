// js for multi-function panel MAX ONS
export default function createMFP(){
    const makediv = document.createElement('div')
    makediv.id = 'mfpanel'
    document.body.appendChild(makediv)
    const MFDdiv = document.createElement('div')
    MFDdiv.id = 'MFD'
    MFDdiv.innerHTML = "<h3> MFD <h3>"
    makediv.appendChild(MFDdiv)
    const ENGTFR = document.createElement('div')
    ENGTFR.id = 'ENGTFR'
    ENGTFR.innerHTML = "<h3> ENG TFR <h3>"
    makediv.appendChild(ENGTFR)
    //buttons
    function makebutton(id, text){
        let mfdbutton = document.createElement('button')
        mfdbutton.id = id
        mfdbutton.innerText = text
        makediv.appendChild(mfdbutton)
    }

    makebutton('ENG', 'ENG')
    makebutton('SYS', 'SYS')
    makebutton('INFO', 'INFO')
    makebutton('CR', 'C/R')
    makebutton('dArrow', '\u2B0C')
}