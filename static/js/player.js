function makeInventory() {
    let array = [];
    for (let i = 0; i < 36; i++) {
        array.push([])
    }
    return array;
}

var player = {
    live           : 20,
    speed          : 0.2,
    height         : 2,
    distance       : 10,
    hotbarCell     : 1,
    LookSpeed      : 0.010,
    inventoryCells : makeInventory(),
}