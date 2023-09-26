const valikkoNappi = document.getElementById("dropdown-button");
const valikko = document.getElementById("links");

valikkoNappi.addEventListener("click", avaaValikko);

function avaaValikko() {
    valikko.classList.toggle("show");
}