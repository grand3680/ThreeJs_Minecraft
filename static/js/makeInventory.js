let inv = document.querySelector(".inventory").innerHTML;
let invBar = document.querySelector(".hotBar").innerHTML;

var textureArr = [
    "dirt", 
    "grass",
    "wood",
    "oak",
]

// main Inventory
for (let i = 0; i < 36; i++) {
    if (i % 9 == 0) inv += "<br>";   
    inv += "<span class='inventorySpan'></span>";
}

// hotBar Inventory
for (let i = 0; i < 9; i++) {
    let random_ = Math.round(Math.random() * textureArr.length - 1);
    let random_count = Math.round(Math.random() * 64);
    let RandomBlock = textureArr[random_];
    let type = "block";
    player.inventoryCells[i-1] = [RandomBlock, random_count, type];

    invBar += '<span class="hotBarSpan"></span>';
}


function updateInvetory() {
    for (let i = 0; i < 36; i++) {
        let invCell = document.querySelectorAll(".inventorySpan");
        let barCell = document.querySelectorAll(".hotBarSpan");     

        let n = 36-i-1;
        let k = 9-i-1;        

        let name = player.inventoryCells[i-1][0];
        let count = player.inventoryCells[i-1][1];    

        if (i < 9) {
            if (player.inventoryCells[i-1] == undefined) {player.inventoryCells[i-1] = [];continue;}
            if (player.inventoryCells[i-1][0] == undefined) {player.inventoryCells[i-1]=[];continue;}
            if (player.inventoryCells[i-1][1] <= 0) {
                player.inventoryCells[i-1]=[];
                barCell[k].innerHTML = " ";
            }   

            barCell[k].innerHTML = `<img src="/static/texture/${name}.png">` + (count == 1 ? "" : `<p>${count}</p>`);
            invCell[n].innerHTML = barCell[k].innerHTML;

            // console.log(player.inventoryCells[i-1]);
        }
    }
}
setTimeout(updateInvetory, 1000);

document.querySelector(".hotBar").innerHTML = invBar;
document.querySelector(".inventory").innerHTML = inv;