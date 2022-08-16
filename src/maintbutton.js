//function to create display container black background with maintenance button to engage ONS




export default function makedisplay(){
    const appcontainer = document.getElementById('app')
    appcontainer.replaceChildren()
    const display = document.createElement('div')
    display.id = 'displaycontainer'
    const maintheader = document.createElement('div')   
    maintheader.id = 'maintheader'
    const maintbutton = document.createElement('button')
    maintbutton.classList.add('buttonhover')
    maintbutton.id = 'maintbutton'
    maintbutton.innerText = 'MAINT'
    const hyddisplay = document.createElement('div')
    hyddisplay.id = 'hyddisplay'
    hyddisplay.classList.add('bluef')
    const hydtitle = document.createElement('div')
    hydtitle.id = 'hydtitle'
    hydtitle.classList.add('bluef')
    hydtitle.innerText = 'HYDRAULIC'
    const hydcontainer = document.createElement('div')
    hydcontainer.id = 'hydcontainer'
    const a = document.createElement('div')
    a.classList.add('bluef')
    a.id = 'a'
    a.innerText = 'A'
    const b = document.createElement('div')
    b.classList.add('bluef')
    b.id = 'b'
    b.innerText = 'B'
    const qty = document.createElement('div')
    qty.id = 'qty'
    qty.classList.add('bluef')
    qty.innerText = 'QTY%'
    const press = document.createElement('div')
    press.id = 'press'
    press.classList.add('bluef')
    press.innerText = 'PRESS'
    const qty1 = document.createElement('div')
    qty1.id = 'qty1'
    qty1.classList.add('whitef')
    qty1.innerText = '100'
    const qty2 = document.createElement('div')
    qty2.id = 'qty2'
    qty2.innerText = '100'
    qty2.classList.add('whitef')
    const press1 = document.createElement('div')
    press1.id = 'press1'
    press1.innerText = '3300'
    press1.classList.add('whitef')
    const press2 = document.createElement('div')
    press2.id = 'press2'
    press2.innerText = '3300'
    press2.classList.add('whitef')
    const ediv = document.createElement('div')
    ediv.innerText = ''
    appcontainer.appendChild(display)
    display.appendChild(maintheader)
    maintheader.appendChild(maintbutton)
    display.appendChild(hyddisplay)
    hyddisplay.appendChild(hydtitle)
    hyddisplay.appendChild(hydcontainer)
    hydcontainer.appendChild(ediv)
    hydcontainer.appendChild(a)
    hydcontainer.appendChild(b)
    hydcontainer.appendChild(qty)
    hydcontainer.appendChild(qty1)
    hydcontainer.appendChild(qty2)
    hydcontainer.appendChild(press)
    hydcontainer.appendChild(press1)
    hydcontainer.appendChild(press2)
}