/** displayselection creates the display page*/
export default function displayselection() {
  const mdpheadernav = document.getElementById('mdpheadernav');
  mdpheadernav.replaceChildren();
  const displaysel = document.createElement('button');
  displaysel.id = 'dissel';
  displaysel.innerText = 'DISPLAY SELECTION';
  displaysel.classList.add('buttonhover', 'navbutton', 'active');
  mdpheadernav.appendChild(displaysel);
  const printsel = document.createElement('button');
  printsel.id = 'printsel';
  printsel.innerText = 'PRINT SELECTION';
  printsel.classList.add('buttonhover', 'navbutton');
  mdpheadernav.appendChild(printsel);
  const datasel = document.createElement('button');
  datasel.id = 'datasel';
  datasel.innerText = 'DATALINK SELECTION';
  datasel.classList.add('buttonhover', 'navbutton');
  mdpheadernav.appendChild(datasel);
  const ersel = document.createElement('button');
  ersel.id = 'ersel';
  ersel.innerText = 'ERASE SELECTION';
  ersel.classList.add('buttonhover', 'navbutton');
  mdpheadernav.appendChild(ersel);
  /** newtext creates a div containing
   * @param {var} a is id
   * @param {var} b innertext */
  function newtext(a, b) {
    const newtext = document.createElement('div');
    newtext.id = a;
    newtext.classList.add('bluef', 'dsfont');
    newtext.innerText = b;
    disselcont.appendChild(newtext);
  }
  /** creates a blank div to fill grid spaces */
  function filler() {
    const filler = document.createElement('div');
    disselcont.appendChild(filler);
  }

  /** newtext creates a div containing
   * @param {var} a innertext
   * @param {var} b id */
  function displaybutton(a, b) {
    const displaybutton = document.createElement('button');
    displaybutton.classList.add('navbutton', 'buttonhover', 'dsbutton');
    displaybutton.innerText = a;
    displaybutton.id = b;
    disselcont.appendChild(displaybutton);
  }

  const mdpcont = document.getElementById('mdpdisplaycontainer');
  mdpcont.replaceChildren();
  const disselcont = document.createElement('div');
  disselcont.id = 'displayselcontainer';
  mdpcont.appendChild(disselcont);

  // ids are grid location column/row for css placement
  newtext('ds11', 'ATA');
  newtext('ds21', 'SYSTEM');
  newtext('ds31', 'REAL');
  newtext('ds41', 'MANUAL');
  newtext('ds51', 'AUTO');
  newtext('ds12', '21');
  newtext('ds22', 'AIR CONDITIONING');
  displaybutton('DISPLAY', 'dsac');
  filler();
  filler();
  newtext('ds13', '27');
  newtext('ds23', 'FLIGHT CONTROL');
  displaybutton('DISPLAY', 'dsfc');
  filler();
  filler();
  newtext('ds14', '27');
  newtext('ds24', 'SMYD');
  displaybutton('DISPLAY', 'dssmyd');
  filler();
  filler();
  newtext('ds15', '31');
  newtext('ds25', 'MDS');
  displaybutton('DISPLAY', 'dsmds');
  filler();
  filler();
  newtext('ds16', '32');
  newtext('ds26', 'PSEU');
  displaybutton('DISPLAY');
  filler();
  filler();
  newtext('ds17', '36');
  newtext('ds27', 'AIR SUPPLY');
  displaybutton('DISPLAY', 'dsas');
  filler();
  filler();
  newtext('ds18', '49');
  newtext('ds28', 'APU');
  displaybutton('DISPLAY', 'dsapu');
  filler();
  filler();
  newtext('ds19', '71');
  newtext('ds29', 'PERFORMANCE');
  displaybutton('DISPLAY', 'dsperf');
  filler();
  displaybutton('SHOW LIST');
  newtext('ds110', '71');
  newtext('ds210', 'EPCS');
  displaybutton('DISPLAY', 'dsepcs');
  filler();
  displaybutton('SHOW LIST');
  newtext('ds111', '71');
  newtext('ds211', 'ENGINE 1 EXCEEDANCE');
  filler();
  filler();
  filler();
  newtext('ds112', '71');
  newtext('ds212', 'ENGINE 2 EXCEEDANCE');
  filler();
  filler();
  filler();
}
