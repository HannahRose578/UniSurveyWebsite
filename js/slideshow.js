const images =  ["https://i.imgur.com/neIqyy3.jpg", "https://i.imgur.com/uQ8xE4A.jpg", "https://i.imgur.com/GWR6ZHE.jpg", "https://i.imgur.com/Xmwf3Fn.jpg", "https://i.imgur.com/AcLYkRf.jpg", "https://i.imgur.com/nHwUJX1.jpg", "https://i.imgur.com/rk7vPie.jpg", "https://i.imgur.com/aeJX1Ep.jpg", "https://i.imgur.com/2zoDWDn.jpg", "https://i.imgur.com/QfvOElG.jpg", "https://i.imgur.com/xrnfxBH.jpg", "https://i.imgur.com/os6yVZO.jpg", "https://i.imgur.com/bYroG0h.jpg", "https://i.imgur.com/G2cJpvs.jpg", "https://i.imgur.com/opcUVII.jpg", "https://i.imgur.com/vnlyBLn.jpg", "https://i.imgur.com/cijjkW5.jpg", "https://i.imgur.com/2Gm4fih.jpg", "https://i.imgur.com/tUaVfV9.jpg", "https://i.imgur.com/HLJaOUh.jpg", "https://i.imgur.com/wF9kTRm.jpg", "https://i.imgur.com/yQYNHkY.jpg", "https://i.imgur.com/rk4JJs4.jpg", "https://i.imgur.com/P3bKGo8.jpg", "https://i.imgur.com/0dI6Xgy.jpg", "https://i.imgur.com/szxx6Mn.jpg", "https://i.imgur.com/r7rNQg8.jpg", "https://i.imgur.com/Ek6dEPv.jpg", "https://i.imgur.com/h3GltjS.jpg", "https://i.imgur.com/z4EWk9X.jpg", "https://i.imgur.com/hxVmNU9.jpg", "https://i.imgur.com/Hs6z4aL.jpg", "https://i.imgur.com/xBSsW1i.jpg", "https://i.imgur.com/a6C1QZd.jpg", "https://i.imgur.com/54d8XmZ.jpg", "https://i.imgur.com/xc06PHn.jpg", "https://i.imgur.com/kGvnRra.jpg", "https://i.imgur.com/Q8YfVNf.jpg", "https://i.imgur.com/lbYUqxB.jpg", "https://i.imgur.com/Axm3D2F.jpg", "https://i.imgur.com/EBi5c2g.jpg", "https://i.imgur.com/N2cIuST.jpg", "https://i.imgur.com/UBscBU1.jpg", "https://i.imgur.com/iPNsszf.jpg", "https://i.imgur.com/Qh19Cq7.jpg", "https://i.imgur.com/A7fSayO.jpg", "https://i.imgur.com/Iwmli50.jpg", "https://i.imgur.com/jdU95yL.jpg", "https://i.imgur.com/ZUMYdhV.jpg", "https://i.imgur.com/7hRVSyn.jpg"];
let pos = 0;
let onTimeout = false;

function changeImage() {
    let img = document.getElementById("imgClickAndChange");
    img.src = images[pos];
}

function slideShowInit(){
    pos = getRandomNumber(0,49);
    changeImage();
    document.onkeydown = function(e) {
        e = e || window.event;
        if (!onTimeout){
            onTimeout = true;
            if (e.keyCode == '37' && pos > 0){ pos -= 1; changeImage();}
            else if (e.keyCode == '39' && pos < images.length-1){ pos += 1; changeImage();}
            setTimeout(function () {onTimeout = false;}, 70);
        }
    };
}
