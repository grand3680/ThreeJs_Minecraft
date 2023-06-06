var block = null;

document.addEventListener('mousedown', function(e) {
    if (e.button != 0) return;
    raycaster.setFromCamera( pointer, camera );
    const intersects = raycaster.intersectObjects( scene.children );
    if (intersects.length >= 1) {
        if (DistanceToVector(intersects[0].object.position)) {         
            scene.remove(intersects[ 0 ].object);            
        } 
    }
})


document.addEventListener('mouseup', function(e) {
    if (e.button != 2) return;
    if (block == null) return;
    e.preventDefault()
	raycaster.setFromCamera( pointer, camera );
	const intersects = raycaster.intersectObjects( scene.children );
    if (intersects.length >= 1) {
        if (DistanceToVector(intersects[0].object.position)) {  
            let ObjPos = intersects[ 0 ].object.position;        
            let Blk = player.hotbarCell;
            if (player.inventoryCells[9-Blk-1][1] >= 1) {
                player.inventoryCells[9-Blk-1][1] -= 1; 
                updateInvetory();
                addCube(ObjPos.x, ObjPos.y+1, ObjPos.z, block);                       
            }
        }      
    }
})