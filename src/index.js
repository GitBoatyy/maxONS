//TO UPDATE GITHUB PAGES RUN CMD
// git subtree push --prefix dist origin gh-pages 

//JS for 737MAX ONS trainer
import './style.css';
import createMFP from './mfpanel'
import makedisplay from './maintbutton'
import goToStatus from './maintbuttonfunction'
import hidedisplay from './hidedisplay'
import hidemf from './hidemf'

createMFP()

//MFP button interactions
const engbutton = document.getElementById('ENG')
const sysbutton = document.getElementById('SYS')
const infobutton = document.getElementById('INFO')
const crbutton = document.getElementById('CR')
const displaycontainer = document.getElementById('displaycontainer')
const maintbutton = document.getElementById('maintbutton')
const headernav = document.getElementById('headernav')

function crinfo(){
    alert('This button is only equiped on aircraft that have Fail Operational autopilots. C/R (Clear/Recal) button is used to recall fault details in the event of a degraded autoland status')
}


document.addEventListener( "click", someListener );

function someListener(event){
    var element = event.target;
    if(element.id == 'SYS'){//creates and clears displaycontainer and maint button
        makedisplay()
        hidedisplay()
    }else if(element.id == 'maintbutton'){ //clears displaycontainer and goes to default status page
        goToStatus()
    }else if(element.id == 'sysmenu'){
        makedisplay()
    } else if(element.id == 'showmf'){
        createMFP()
        hidemf()
    }
}
crbutton.addEventListener('click' , crinfo)



