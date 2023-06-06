// ground
var widthWorld = 25;

// initialize points
const gap = 1;
let Cordx;
let Cordy = 1;
let Cordz;

function ground() {
  for (let i = -widthWorld; i < widthWorld; i++) {
    for (let k = -widthWorld; k < widthWorld; k++) {
        let ns;
        const nScale = 0.5;
        const zPosScale = 2.5;

        Cordx = i * gap;
        Cordz = k * gap;
        ns = Noised.noise(Cordx * nScale - 100 , Cordz * nScale + 100, 0);
        Cordy = Math.round(ns * zPosScale - 15) ;

        if (-15 > Cordy)  {
            addCube(Cordx, Cordy, Cordz, dirt);
        } else {
            addCube(Cordx, Cordy, Cordz);        
        }

    }
  }  
}
setTimeout(ground, 1500);

// function updatePoints() {
//   let ns;
//   const nScale = 100.33;
//   const zPosScale = 0.33;
//   points.forEach((p, i) => {
//     ns = Noised.noise(p.position.x * nScale , p.position.z * nScale, Math.random() * 100);
//     p.position.y = Math.floor(ns * zPosScale - 15);

//     if (-15 > p.position.y)  {
//         addCube(p.position.x, p.position.y, p.position.z, dirt);
//     } else {
//         addCube(p.position.x, p.position.y, p.position.z);        
//     }

//   });
// }


// setTimeout(console.log(scene.children), 5000);



// // underGround
// for (let y = -31; y > -34; y--) {
//     setTimeout(() => {
//         for (let x = 0; x < n; x++) {
//             for (let z = 0; z < n; z++) {
//                 addCube(x - 50, y, z, dirt);        
//             }
//         }
//     }, 1000)
// }    


