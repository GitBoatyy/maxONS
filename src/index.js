//TO UPDATE GITHUB PAGES RUN CMD
// git subtree push --prefix dist origin gh-pages 

//JS for 737MAX ONS trainer
import './style.css';
import createMFP from './mfpanel'
import makedisplay from './maintbutton'
createMFP()

//MFP button interactions
const engbutton = document.getElementById('ENG')
const sysbutton = document.getElementById('SYS')
const infobutton = document.getElementById('INFO')
const crbutton = document.getElementById('CR')
const displaycontainer = document.getElementById('displaycontainer')
const maintbutton = document.getElementById('maintbutton')
const headernav = document.getElementById('headernav')
const navbutton = document.querySelectorAll('navbutton')

function crinfo(){
    alert('This button is only equiped on aircraft that have Fail Operational autopilots. C/R (Clear/Recal) button is used to recall fault details in the event of a degraded autoland status')
}
function systoggle(){
    displaycontainer.classList.toggle('invisible')
}
function headernavtoggle(){
    maintbutton.classList.toggle('invisible')
    headernav.classList.toggle('invisible')
}

function activenavtoggle(){
    navbutton.classList.toggle('active')
}

maintbutton.addEventListener('click', headernavtoggle)
//sysbutton.addEventListener('click', systoggle)
crbutton.addEventListener('click' , crinfo)



sysbutton.addEventListener('click', makedisplay)
