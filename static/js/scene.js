const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.updateProjectionMatrix();
const canvas = document.getElementById("THREE_JS");
var Noised;
var playerPosition = camera;
var controls;

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});

const skyColor = new THREE.Color('#7BB7FF'); // RGB string
scene.background = new THREE.Color(skyColor);

var light = new THREE.AmbientLight(0xfffffff);
scene.add(light);

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
