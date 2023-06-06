window.addEventListener( 'resize', onWindowResize, false );

// if size window changed ( rezize )
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

    controls.handleResize(); // for TrackballControls
}

function animate() {
	requestAnimationFrame( animate );
    cameraPost();
    // controls.movementSpeed = 75;
    controls.update(0.56);        
    clouds();
    BorderBlocks();
	renderer.render( scene, camera );
}
setTimeout(animate, 2500);
