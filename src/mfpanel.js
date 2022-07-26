// js for multi-function panel MAX ONS
export default function createMFP(){
    const makediv = document.createElement('div')
    makediv.id = 'mfpanel'
    makediv.innerText = 'Multi-Function Panel'
    document.body.appendChild(makediv)
}