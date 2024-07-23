

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

function preload() {
    // Load assets here
    this.load.image('background', 'assets/background.png');
    this.load.image('character', 'assets/character.png');
}

function create() {
    // Initialize game objects here
    this.add.image(400, 300, 'background');
    this.character = this.add.sprite(400, 300, 'character');
}

function update() {
    // Game logic goes here
}


