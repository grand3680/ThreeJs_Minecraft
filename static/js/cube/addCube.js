addCube = (x, y, z,  texture = grass, size = 1, colors = 0x02ff2f) => {
    var geometry = new THREE.BoxGeometry( size, size, size );

    // THREE.MeshStandardMaterial
    var material = texture;


    const cubes = new THREE.Mesh(geometry, material);
    cubes.castShadow = true; //default is false
    cubes.receiveShadow = true; //default
    cubes.matrixAutoUpdate = true;

    cubes.position.set( x, y, z );
    scene.add(cubes);
}