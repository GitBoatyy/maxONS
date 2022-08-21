

//ids are grid location column/row for css placement
export default function displayselection(){
const mdpcont = document.getElementById('mdpdisplaycontainer')
mdpcont.replaceChildren()
const disselcont = document.createElement('div')
disselcont.id = 'displayselcontainer'
mdpcont.appendChild(disselcont)
const ata = document.createElement('div')
ata.id = 'ds11'
ata.classList.add('bluef', 'dsfont')
ata.innerText = 'ATA'
disselcont.appendChild(ata)
const system = document.createElement('div')
system.id = 'ds21'
system.classList.add('bluef', 'dsfont')
system.innerText = 'SYSTEM'
disselcont.appendChild(system)
const real = document.createElement('div')
real.id = 'ds31'
real.classList.add('bluef', 'dsfont')
real.innerText = 'REAL'
disselcont.appendChild(real)
const manual = document.createElement('div')
manual.id = 'ds41'
manual.classList.add('bluef', 'dsfont')
manual.innerText = 'MANUAL'
disselcont.appendChild(manual)
const auto = document.createElement('div')
auto.id = 'ds51'
auto.classList.add('bluef', 'dsfont')
auto.innerText = 'AUTO'
disselcont.appendChild(auto)
const ata1 = document.createElement('div')
ata1.id = 'ds12'
ata1.classList.add('bluef', 'dsfont')
ata1.innerText = '21'
disselcont.appendChild(ata1)
const ac = document.createElement('div')
ac.id = 'ds22'
ac.classList.add('bluef', 'dsfont')
ac.innerText = 'AIR CONDITIONING'
disselcont.appendChild(ac)
const displaybutton = document.createElement('button')
displaybutton.id = ''
displaybutton.classList.add('navbutton', 'buttonhover')
displaybutton.innerText = 'DISPLAY'
disselcont.appendChild(displaybutton)


}