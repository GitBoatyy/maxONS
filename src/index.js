//TO UPDATE GITHUB PAGES RUN CMD
// git add dist && git commit -m ''
// git subtree push --prefix dist origin gh-pages

//JS for 737MAX ONS trainer
import './style.css';
import createMFP from './mfpanel'
import makedisplay from './maintbutton'
import goToStatus from './maintbuttonfunction'
import hidedisplay from './hidedisplay'
import hidemf from './hidemf'
import goToMDP from './maintdatapgs'
import goToMCP from './maintctrlpgs';
import displayselection from './displayselection'
import printselection from './printselection'
import datalinkselection from './datalinkselection'
import eraseselection from './eraseselection'
import onboardMaint from './ONBDMaint';
import acDisplay from './maintdatapgs/display/acdisplay';
import fcDisplay from './maintdatapgs/display/fcdisplay';
import smydDisplay from './maintdatapgs/display/smyddisplay';
import mdsDisplay from './maintdatapgs/display/mdsdisplay';
import mdsDisplayBright from './maintdatapgs/display/mdsDisplayBright';
import mdsDisplays from './maintdatapgs/display/mdsdisplaydisplays'
import mdsDPCDigiInput from './maintdatapgs/display/mdsdpcdigiinput'
import mdsdpcdigiinputB from './maintdatapgs/display/mdsdisplaydigiinput2'

createMFP()

//MFP button interactions
const engbutton = document.getElementById('ENG')
const sysbutton = document.getElementById('SYS')
const infobutton = document.getElementById('INFO')
const crbutton = document.getElementById('CR')
const displaycontainer = document.getElementById('displaycontainer')
const maintbutton = document.getElementById('maintbutton')
const headernav = document.getElementById('headernav')



document.addEventListener( "click", someListener );

function someListener(event){
    var element = event.target;
    if(element.id == 'SYS'){//creates and clears displaycontainer and maint button
        makedisplay()
        hidedisplay()
    }else if(element.id == 'maintbutton'){ //clears displaycontainer and goes to default status page
        goToStatus()
    }else if(element.id == 'CR'){
        alert('This button is only equipped on aircraft that have Fail Operational autopilots. C/R (Clear/Recal) button is used to recall fault details in the event of a degraded autoland status')
    }else if(element.id == 'sysmenu'){
        makedisplay()
    } else if(element.id == 'showmf'){
        createMFP()
        hidemf()
    } else if (element.id == 'status'){
        goToStatus()
    }else if(element.id == 'MDP'){
        goToMDP()
    }else if(element.id == 'MCP'){
        goToMCP()
    }else if(element.id == 'dissel'){
        displayselection()
    }else if(element.id == 'printsel'){
        printselection()
    }else if (element.id == 'datasel'){
        datalinkselection()
    }else if (element.id == 'ersel'){
        eraseselection()
    }else if(element.id == 'obmaint'){
        onboardMaint()
    }else if(element.id == 'dsac'){
        acDisplay()
    }else if(element.id == 'prevmenu'){
        goToMDP()
    }else if(element.id == 'dsfc'){
        fcDisplay()
    }else if(element.id == 'dssmyd'){
        smydDisplay()
    }else if(element.id == 'dsmds'){
        mdsDisplay()
    }else if(element.id == 'mdsprevmenu'){
        mdsDisplay()
    }else if(element.id == 'mdsbrightbutt'){
        mdsDisplayBright()
    }else if(element.id == 'mdspg1nextpage'){
        mdsDisplayBright()
    }else if(element.id == 'mdspg2prevpage'){
        mdsDisplay()
    }else if(element.id == 'mdspg2nextpage'){
        mdsDisplays()
    }else if(element.id == 'mdsdisplaybutt'){
        mdsDisplays()
    }else if(element.id == 'mdspg3prevpage'){
        mdsDisplayBright()
    }else if(element.id == 'mdspg3nextpage'){
        mdsDPCDigiInput()
    }else if(element.id == 'mdspg4prevpage'){
        mdsDisplays()
    }else if(element.id == 'mdsdigibutt'){
        mdsDPCDigiInput()
    }else if(element.id == 'mdspg4nextpage'){
        mdsdpcdigiinputB()
    }else if(element.id == 'mdspg5prevpage'){
        mdsDPCDigiInput()
    }else if(element.id == 'mdspg5nextpage'){
        console.log('nxtpg')
    }

}



