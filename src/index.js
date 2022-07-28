//JS for 737MAX ONS trainer

import createMFP from './mfpanel'
createMFP()

//MFP button interactions
const engbutton = document.getElementById('ENG')
const sysbutton = document.getElementById('SYS')
const infobutton = document.getElementById('INFO')
const crbutton = document.getElementById('CR')
function crinfo(){
    alert('This button is only equiped on aircraft that have Fail Operational autopilots. C/R (Clear/Recal) button is used to recall fault details in the event of a degraded autoland status')
}
crbutton.addEventListener('click' , crinfo)