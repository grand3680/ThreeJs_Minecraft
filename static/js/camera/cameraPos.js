camera.position.z = 5;

// // add event listener to show/hide a UI (e.g. the game's menu)
// document.onmousemove = function(e){
//   let menuBlock = document.getElementById("blocked").style.display;
//   if (menuBlock == "none") {
//     config.menuActive = false;
//   } else {
//     config.menuActive = true;
//   }
//   if (!config.menuActive) {
//    camera.rotation.y -= e.movementX / 150;
//    camera.rotation.x -= e.movementY / 150 * 0.9;

//   //  if (camera.rotation.x >= -0.58 && camera.rotation.x <= 0.75) {
//   //    camera.rotation.x -= e.movementY / 150 * 0.9;
//   //  } else {
//   //    if (camera.rotation.x <= -0.58) camera.rotation.x = -0.58;
//   //    if (camera.rotation.x >= 0.75) camera.rotation.x = 0.75;
//   //  }    
//   }
// }

document.onclick = function(e){
  // console.log(camera.position.x, camera.position.y, camera.position.z);
  // console.log(camera.position.y);
}

// change camera position
function cameraPost() {
  if (config.menuActive) return;

  // // W key
  // if (config.flagMoveForward){
  //     camera.position.z -= Math.cos(camera.rotation.y) * player.speed;
  //     camera.position.x -= Math.sin(camera.rotation.y) * player.speed;
  // }

  // // S key
  // if (config.flagMoveBack)   {
  // camera.position.x += Math.sin(camera.rotation.y) * player.speed;
  // camera.position.z += Math.cos(camera.rotation.y) * player.speed;
  // }

  // space and Shift ( down and up )
  if (config.flagMoveUp)     {camera.position.y += 0.1}
  if (config.flagMoveDown)   {camera.position.y -= 0.2}

  // arrows
  if (config.flagMoveCameraLeft)   {camera.rotation.y += 0.02}
  if (config.flagMoveCameraRight){camera.rotation.y -= 0.02}
  if (config.flagMoveCameraUp)   {camera.rotation.x += 0.02}
  if (config.flagMoveCameraDown)  {camera.rotation.x -= 0.02}    
}


// // A key
// if(config.flagMoveLeft){ 
// 	camera.position.x += Math.sin(camera.rotation.y + Math.PI/2) * player.speed;
// 	camera.position.z += -Math.cos(camera.rotation.y + Math.PI/2) * player.speed;
// }

// // D key
// if(config.flagMoveRight){ 
// 	camera.position.x += Math.sin(camera.rotation.y - Math.PI/2) * player.speed;
// 	camera.position.z += -Math.cos(camera.rotation.y - Math.PI/2) * player.speed;
// }