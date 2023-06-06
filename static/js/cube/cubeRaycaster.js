const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

function DistanceToVector(ObjPos) {
    let CamPos = camera.position;
    const a = new THREE.Vector3( CamPos.x, CamPos.y, CamPos.z );
    const b = new THREE.Vector3( ObjPos.x, ObjPos.y, ObjPos.z );
    const d = Math.round(a.distanceTo(b));
    if (d <= player.distance) return true;
}


function BorderBlocks() {
	raycaster.setFromCamera( pointer, camera );
    // raycaster_2 = new THREE.Raycaster( new THREE.Vector3(), new THREE.Vector3( 0, - 1, 0 ), 0, 10 );
	const intersects = raycaster.intersectObjects( scene.children );

    var mas = intersects;        
    if (intersects.length >= 1) {
        if (DistanceToVector(intersects[0].object.position)) {
            // console.log(intersects[0].object);
            // intersects[0].object.material.color.set( 0xff0ff0 );              
        } 
    }
    setTimeout(() => {
        for ( let i = 0; i < mas.length; i ++ ) {
            // mas[ i ].object.material.color.set( 0xffffff );
        }    
    }, 10)    
}