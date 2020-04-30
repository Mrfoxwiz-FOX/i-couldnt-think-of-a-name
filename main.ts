namespace SpriteKind {
    export const CUT1S1 = SpriteKind.create()
    export const CUT1S2 = SpriteKind.create()
}
function Intro () {
    mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . d . . . 9 9 9 9 9 9 9 . . . . . . . . . . . . . . . . . . 
. . . . . . . d . . 9 . . . . . . . 9 . . . . d . . . . . . . . . . . . 
. . . . . . . d . 9 . . f f f f f f . 9 . . . d . . . . . . . . . . . . 
. . . . . . . d . 9 . f f 1 1 1 1 f f 9 . . . d . . . . . . . . . . . . 
. . . . . . . d . 9 . f 1 1 8 1 8 1 f 9 . . . d . . . . . . . . . . . . 
. . . . . . . d . 9 . f 1 1 1 1 1 1 f 9 . . . d . . . . . . . . . . . . 
. . . . . . . d . 9 . f 1 1 f f f 1 f 9 . . . d . . . . . . . . . . . . 
. . . . . . . d . 9 . f f 1 1 1 1 f f 9 . . . d . . . . . . . . . . . . 
. . . . . . . d . 9 . . f f f f f f . 9 . . . d . . . . . . . . . . . . 
. . . . . . . d . . 9 . . . . f . . 9 . . . . d . . . . . . . . . . . . 
. . . . . . . d d . . 9 9 9 9 9 9 9 . . . . d d . . . . . . . . . . . . 
. . . . . . . . . d . . . . . f . . . . . d . . . . . . . . . . . . . . 
. . . . . . . . . . d f f f f f f f f f d . . . . . . . . . . . . . . . 
. . . . . . . . . . f . . . . f . . . . f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f f f f . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f . . . f . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f f . . . f f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f . . . . . f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f . . . . . f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f . . . . . f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . d d d d d d d d d d d . . . . . . . . . . . . . . . 
. . . . . . . . . . d d d d d d d d d d d . . . . . . . . . . . . . . . 
. . . . . . . . . . d d d d d d d d d d d . . . . . . . . . . . . . . . 
. . . . . . . . . . d d d d d d d d d d d . . . . . . . . . . . . . . . 
. . . . . . . . . . d d d d d d d d d d d . . . . . . . . . . . . . . . 
. . . . . . . . . . d d d d d d d d d d d . . . . . . . . . . . . . . . 
. . . . . . . . . . d d d d d d d d d d d . . . . . . . . . . . . . . . 
. . . . . . . . . . d d d d d d d d d d d . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.CUT1S1)
    mySprite2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . f f f f f . . . . . . 
. . . . . f f f f f . . . . . . 
. . . . . f f f f f . . . . . . 
. . . . . f f f f f . . . . . . 
. . . . . f f f f f . . . . . . 
. . . . . . . f . . . . . . . . 
. . . . . . . f . . . . . . . . 
. . . . . f f f f f . . . . . . 
. . . . . . . f . . . . . . . . 
. . . . . . . f . . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . f f f f f . . . . . . 
. . . . . f . . . f . . . . . . 
. . . . . f . . . f . . . . . . 
. . . . . f . . . f . . . . . . 
`, SpriteKind.CUT1S2)
    mySprite.setPosition(30, 40)
    mySprite2.setPosition(49, 16)
    mySprite.setFlag(SpriteFlag.StayInScreen, false)
    scene.setBackgroundColor(13)
}
let mySprite2: Sprite = null
let mySprite: Sprite = null
game.setDialogFrame(img`
5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 
2 4 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 4 2 
2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
2 4 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 4 2 
5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 
`)
game.showLongText(". . .", DialogLayout.Bottom)
game.showLongText("The enemy is feirce", DialogLayout.Bottom)
game.showLongText(", Strong,", DialogLayout.Bottom)
game.showLongText(" and Indestructible..", DialogLayout.Bottom)
pause(2000)
game.showLongText("But that is a legend..", DialogLayout.Bottom)
game.showLongText("A story.", DialogLayout.Bottom)
game.showLongText("But you..", DialogLayout.Bottom)
game.showLongText("Will not fall..", DialogLayout.Bottom)
Intro()
