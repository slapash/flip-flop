namespace SpriteKind {
    export const sol = SpriteKind.create()
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    flippy.y = 96
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    flippy.y = 80
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.gameOver(false)
})
let le_truc_à_marjane: Sprite = null
let bas: Sprite = null
let projectile: Sprite = null
let flippy: Sprite = null
scene.setBackgroundColor(1)
let y_flippy = 80
flippy = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . f f f f f f f f f f f f f f . 
    . f f f f f f f f f f f f f f . 
    . f f f f f f f f f f f f f f . 
    . f f f f f f f f f f f f f f . 
    . f f f f f f 1 f f f 1 f f f . 
    . f f f f f f 1 f f f 1 f f f . 
    . f f f f f f 1 f f f 1 f f f . 
    . f f f f f f 1 f f f 1 f f f . 
    . f f f f f f 1 f f f 1 f f f . 
    . f f f f f f f f f f f f f f . 
    . f f f f f f f f f f f f f f . 
    . f f f f f f f f f f f f f f . 
    . f f f f f f f f f f f f f f . 
    . f f f f f f f f f f f f f f . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
flippy.y = 80
game.onUpdateInterval(randint(800, 1500), function () {
    if (Math.percentChance(50)) {
        projectile = sprites.createProjectileFromSide(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . f f f f f f f f . . . . 
            . . . f f f f f f f f f f . . . 
            . . f f f f f f f f f f f f . . 
            . f f f f f f f f f f f f f f . 
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            `, -100, 0)
        projectile.y = 80
    } else {
        bas = sprites.createProjectileFromSide(img`
            f f f f f f f f f f f f f f f f 
            f f f f f f f f f f f f f f f f 
            . f f f f f f f f f f f f f f . 
            . . f f f f f f f f f f f f . . 
            . . . f f f f f f f f f f . . . 
            . . . . f f f f f f f f . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, -100, 0)
        bas.y = 96
    }
})
game.onUpdateInterval(100, function () {
    le_truc_à_marjane = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        f f f f f f f f f f f f f f f f 
        `, -100, 0)
    le_truc_à_marjane.y = 80
})
