const valikkoNappi = document.getElementById("dropdown-button");
const valikko = document.getElementById("links");

const haku = document.getElementById("search-field");
const hakuNappi = document.getElementById("search-button");

valikkoNappi.addEventListener("click", avaaValikko);

haku.addEventListener("keydown", tarkistaPainallus);
hakuNappi.addEventListener("click", haeTuloksia);

function avaaValikko() {
    valikko.classList.toggle("show");
}

function tarkistaPainallus(event) {
    if (event.key === "Enter") {
        haeTuloksia();
    }
}

function haeTuloksia() {
    window.location.href = "hakutulokset.html#" + encodeURIComponent(haku.value);
    if (window.location.pathname.endsWith("/hakutulokset.html")) {
        window.location.reload();
    }
}
