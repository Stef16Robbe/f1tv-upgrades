let isTheaterMode = false;

function toggleTheater() {
    //container-lg
    //- remove margin-left auto
    
    //inset-video-item-container mt4
    //- add width 203, height 120
    
    //col-xl-10 offset-xl-1
    //- remove margin-left 8.3333

    //inset-video-item-image-container position-relative d-flex
    //- remove pos relative

    const containerlg = document.getElementsByClassName("vod-detail-page")[0].firstChild;
    const insetvideoitemcontainer = document.getElementsByClassName("inset-video-item-container")[0];
    const offset = document.getElementsByClassName("col-xl-10 offset-xl-1")[0];
    const viditemcontainer = document.getElementsByClassName("inset-video-item-image-container position-relative d-flex")[0];

    if (!isTheaterMode) {
        containerlg.style.marginLeft = "0"
        insetvideoitemcontainer.style.width = "203%";
        insetvideoitemcontainer.style.height = "120%";
        offset.style.marginLeft = "0";
        viditemcontainer.classList.remove("position-relative");
    } else {
        // fix it again lol
    }

    isTheaterMode = !isTheaterMode;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function addTheaterButton() {
    var fullscBtn;
    for (let i = 0; i < 10; i++) {
        await sleep(i * 1000);
        fullscBtn = document.getElementById("bmpui-id-76");
        if (fullscBtn != null) break;
    }

    const clone = fullscBtn.cloneNode(true);
    
    clone.id = "f1tv-upgrade-theater";
    clone.setAttribute('title', 'Theater Mode');
    clone.setAttribute('aria-label', 'Theater Mode');
    clone.addEventListener("click", toggleTheater);
    fullscBtn.before(clone);
}

addTheaterButton();
