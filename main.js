





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
    this.load.image('building', 'assets/building.png'); // Load building image
}

function create() {
    // Initialize game objects here
    this.add.image(400, 300, 'background');
    this.character = this.add.sprite(400, 300, 'character');
    this.building = this.add.sprite(200, 300, 'building'); // Add building

    // Enable keyboard input
    this.cursors = this.input.keyboard.createCursorKeys();
}

function update() {
    // Game logic goes here
    if (this.cursors.left.isDown) {
        this.character.x -= 2;
    } else if (this.cursors.right.isDown) {
        this.character.x += 2;
    }

    if (this.cursors.up.isDown) {
        this.character.y -= 2;
    } else if (this.cursors.down.isDown) {
        this.character.y += 2;
    }
}




