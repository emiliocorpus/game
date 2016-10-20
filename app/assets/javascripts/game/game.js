var game = new Phaser.Game(1000, 600, Phaser.CANVAS, 'phaser-game', { preload: preload, create: create, update: update, render: render  });

var sprite ;
var counter = 0 ;
var step = Math.PI * 2 / 360 ;

function preload() {

    // Load images to use as the game sprites
    game.load.image('sprite', 'assets/sprites/phaser.png');
    game.load.image('menubackground', 'assets/backgrounds/menubackground.png')

}

function create() {

    // background image
    background = game.add.tileSprite(0, 0, 1000, 600, "menubackground");

    // Create sprite and put it in the middle of the stage
    sprite = game.add.sprite(0, 0, 'sprite');
    // sprite.alpha = 0.5 ;
    // sprite.x = game.width / 2 ;
    // sprite.anchor.x = sprite.anchor.y = 0.5 ;
    // sprite.inputEnabled = true ;
}

function update()
{
    // Move sprite up and down smoothly for show
    var tStep = Math.sin( counter ) ;
    sprite.y = (game.height/2) + tStep * 30 ;
    sprite.rotation += Phaser.Math.degToRad( 0.1 * tStep ) ;
    counter += step ;
}

function render() {

    // Input debug info
    game.debug.inputInfo(32, 32);
    game.debug.spriteInputInfo(sprite, 32, 130);
    game.debug.pointer( game.input.activePointer );

}
