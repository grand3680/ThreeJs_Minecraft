// active Cell
document.addEventListener("keyup", function (e) {
    if (config.menuActive) return;
    let hotBar = document.querySelectorAll(".hotBarSpan");

    if (e.key >= 1 && e.key <= 9) {
        for (let i = 0; i < hotBar.length; i++) {
            hotBar[i].classList.remove('active');
        }        
        let n = e.key - 1;
        hotBar[n].classList.add('active'); 
        player.hotbarCell = e.key;
        choseBlock();
    }    
})

function choseBlock() {
    let Blk = player.hotbarCell;
    let invCell = player.inventoryCells[9-Blk-1];
    if (invCell ==! []) {block = null; return};
    if (invCell[2] == "block") {
        block = this[String(invCell[0])];
    }
}



document.addEventListener("keyup", function (e) {
    if (config.menuActive) return;
    if (e.code != "KeyE") return;
    let inventory = document.querySelector(".inventory");
    let blackground = document.querySelector(".blackBackround");

    if (inventory.style.display == "none") {
        inventory.style.display = ""; 
        blackground.style.display = ""; 
        controls.lookSpeed = 0;
    } else {
        inventory.style.display = "none"; 
        blackground.style.display = "none"; 
        controls.lookSpeed = player.LookSpeed;
    }
    
    console.log(e.code, e.code == "KeyE");
})