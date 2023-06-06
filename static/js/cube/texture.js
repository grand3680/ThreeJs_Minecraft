// var grass = new THREE.TextureLoader().load("/static/texture/grass.png");
var grassUpSide = new THREE.TextureLoader().load("/static/texture/grass.png");
var borders = new THREE.TextureLoader().load("/static/texture/border.png");
var woodSide = new THREE.TextureLoader().load("/static/texture/wood.png");
var dirtSide = new THREE.TextureLoader().load("/static/texture/dirt.png");
var oakUpSide = new THREE.TextureLoader().load("/static/texture/oakUpSide.png");
var oakSide = new THREE.TextureLoader().load("/static/texture/oak.png");

function blocksTexture(textureBlock, yDown = false, yUp = false) {
    let TextureArr = [
        new THREE.MeshStandardMaterial({map : textureBlock,}),
        new THREE.MeshStandardMaterial({map : textureBlock,}), 
        new THREE.MeshStandardMaterial({map : (yUp == false ? textureBlock : yUp),}),// up side
        new THREE.MeshStandardMaterial({map : (yDown == false ? textureBlock : yDown),}),// down side
        new THREE.MeshStandardMaterial({map : textureBlock,}),
        new THREE.MeshStandardMaterial({map : textureBlock,}),
    ]
    return TextureArr;
}

var dirt = blocksTexture(dirtSide);
var wood = blocksTexture(woodSide);
var grass = blocksTexture(borders, dirtSide, grassUpSide);
var oak = blocksTexture(oakSide, oakUpSide, oakUpSide);