// sleep to wait for video playback
// const sleep = (ms) => {
//     return new Promise(resolve => setTimeout(resolve, ms))
// }
// await sleep(3000)
let isTheatreMode = false;

function toggleTheater() {
    const className = "theater-mode";
    const player = document.getElementById("main-embeddedPlayer");
    isTheatreMode ? player.classList.remove(className) : player.classList.add(className);

    isTheatreMode = !isTheatreMode;
}

const fullscBtn = document.getElementById("bmpui-id-76");

const clone = fullscBtn.cloneNode(true);

clone.id = "f1tv-upgrade-theater";
clone.setAttribute('title', 'Theater Mode');
clone.setAttribute('aria-label', 'Theater Mode');
clone.addEventListener("click", toggleTheater);
fullscBtn.before(clone);
