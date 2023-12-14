function detectMob() {
    const toMatch = [
        "/Android/i",
        "/webOS/i",
        "/iPhone/i",
        "/iPad/i",
        "/iPod/i",
        "/BlackBerry/i",
        "/Windows Phone/i"
    ];
    
    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}


function yass() {
    if(window.innerWidth <= 500) {
        var nfs = document.getElementById("nf");
        nfs.style.width = "275pt"
        var infoBar = document.getElementById("info");
        infoBar.style.width = "100pt"
        infoBar.style.borderRadius = "7px"
        var input = document.getElementById("ins");
        input.style.width = "100pt";
    }

    else if(window.innerWidth >= 500) {
        var nfs = document.getElementById("nf");
        nfs.style.width = "1120pt"
        var infoBar = document.getElementById("info");
        infoBar.style.width = "1300pt"
        infoBar.style.borderRadius = "0px"
    }
}

setInterval(yass,1000)