// initialize points
const countClouds = 10;
const gaps = 10.16;

var widthClouds = widthWorld;

let x;
let y = 15;
let z;
let sizeClouds;
let cloudArr = [];
let speedClouds;

const materialClouds = new THREE.MeshBasicMaterial( { color: 0xffffff } );  

for (let i = -countClouds; i < countClouds; i += 1) {
  for (let j = -countClouds; j < countClouds; j += 1) {
    if (Math.random() * 10 > 5) continue;
    x = i * (gaps + Math.random() * 5);
    z = j * (gaps + Math.random() * 5);
    sizeClouds = (Math.random() * gaps);   
    speedClouds = Math.random();

    const geometry = new THREE.BoxGeometry( sizeClouds, sizeClouds / 4, sizeClouds / 2 );
    let cloud = new THREE.Mesh( geometry, materialClouds );
    scene.add(cloud);
    cloud.position.set(x, y, z);
    let clPos = cloud.position;

    cloudArr.push([cloud, speedClouds, clPos.x, clPos.y, clPos.z]);
  }
}

function clouds() {
    for (let i = 0; i < cloudArr.length; i++) {
        let cl = cloudArr[i]; 
        if (cl[2] < 100) cl[2] += cl[1];              
        else cl[2] = -100;           
        cloudArr[i][0].position.set(cl[2], cl[3], cl[4]);
    }
}