document.body.addEventListener("keydown", function(e) {
    if (e.key.toLowerCase() == "a" || e.key.toLowerCase() == "ф") { config.flagMoveLeft = true}
    if (e.key.toLowerCase() == "w" || e.key.toLowerCase() == "ц") { config.flagMoveForward = true}
    if (e.key.toLowerCase() == "s" || e.key.toLowerCase() == "ы") { config.flagMoveBack = true}
    if (e.key.toLowerCase() == "d" || e.key.toLowerCase() == "в") { config.flagMoveRight = true}
    if (e.key.toLowerCase() == " ") {config.flagMoveUp = true}
    if (e.key.toLowerCase() == "shift") {config.flagMoveDown = true}

    // camera
    if (e.key == "ArrowLeft") { config.flagMoveCameraLeft = true}
    if (e.key == "ArrowUp") { config.flagMoveCameraUp = true}
    if (e.key == "ArrowDown") { config.flagMoveCameraDown = true}
    if (e.key == "ArrowRight") { config.flagMoveCameraRight = true}
})

document.body.addEventListener("keyup", function(e) {
    if (e.key.toLowerCase() == "a" || e.key.toLowerCase() == "ф") { config.flagMoveLeft = false}
    if (e.key.toLowerCase() == "w" || e.key.toLowerCase() == "ц") { config.flagMoveForward = false}
    if (e.key.toLowerCase() == "s" || e.key.toLowerCase() == "ы") { config.flagMoveBack = false}
    if (e.key.toLowerCase() == "d" || e.key.toLowerCase() == "в") { config.flagMoveRight = false}
    if (e.key.toLowerCase() == " ") {config.flagMoveUp = false}
    if (e.key.toLowerCase() == "shift") {config.flagMoveDown = false}

    // camera
    if (e.key == "ArrowLeft") { config.flagMoveCameraLeft = false}
    if (e.key == "ArrowUp") { config.flagMoveCameraUp = false}
    if (e.key == "ArrowDown") { config.flagMoveCameraDown = false}
    if (e.key == "ArrowRight") { config.flagMoveCameraRight = false}
})