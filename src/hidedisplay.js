export default function hidedisplay() {
    const mfpanel = document.getElementById("mfpanel");
    document.body.removeChild(mfpanel);
    const showmfpanel = document.createElement("div");
    showmfpanel.id = "showmfpanel";
    showmfpanel.classList.add("side");
    document.body.appendChild(showmfpanel);
    const show = document.createElement("button");
    show.id = "showmf";
    show.innerText = "\u25B2";
    showmfpanel.appendChild(show);
  }
  