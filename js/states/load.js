var loadState = {
  preload: function() {
    Gamefefe.game.load.tilemap('gamemap', 'Assets/Maps/mapLevel1.json', null, Phaser.Tilemap.TILED_JSON);
    Gamefefe.game.load.image('tiles', 'Assets/Tiles/tiles_spritesheet.png');
    Gamefefe.game.load.atlasJSONHash('player1Walk', 'Assets/Player/p1_walk/p1_walk.png', 'Assets/Player/p1_walk/p1_walk.json');
    Gamefefe.game.load.spritesheet('fly', 'Assets/Enemies/flyFly0.png', 74, 33);
    Gamefefe.game.load.spritesheet('swim','Assets/Enemies/fishSwim.png',66,43);
    Gamefefe.game.load.spritesheet('walk','Assets/Enemies/slimeWalk.png',51,28);
    Gamefefe.game.load.spritesheet('crawl','Assets/Enemies/snailCrawl.png',57,31);
    Gamefefe.game.load.image('bronze','Assets/Items/coinBronze.png');
    Gamefefe.game.load.image('hurt','Assets/Player/p1_hurt.png');
    Gamefefe.game.load.image('spikes','Assets/Items/spike.png');
    Gamefefe.game.load.spritesheet('door','Assets/Items/door.png',70,140);
    Gamefefe.game.load.spritesheet('weight','Assets/Items/weight.png',70,140);
    Gamefefe.game.load.audio('theme', ['Assets/Audio/main_theme.mp3', 'Assets/Audio/main_theme.ogg']);
    console.log("create");
  },
  create: function() {
    console.log("create2");
    Gamefefe.game.state.start("menu");
  }
}
