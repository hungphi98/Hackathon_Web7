var Gamefefe = {};
Gamefefe.configs = {
  GAME_WIDTH  : 2046,
  GAME_HEIGHT : 700,
  MIN_WIDTH   : 800,
  MIN_HEIGHT  : 500,
  MAX_WIDTH   : 2046,
  MAX_HEIGHT  : 700,
  BACKGROUND_SPEED  : 5,
  PLAYER_CONTROL  : {
    jump          : Phaser.Keyboard.SPACEBAR,
    left          : Phaser.Keyboard.LEFT,
    right         : Phaser.Keyboard.RIGHT
  }
};
Gamefefe.moveRight={
    fly: true,
    swim: false,
    walk: true,
    crawl:false
};
Gamefefe.enemyKill=false;
Gamefefe.items={
    traps: [],
    coins: [],
    doors:[],
    weights: []
};
Gamefefe.properties ={
    xPosition:0,
    yPosition:0,
    width:72,
    height:97
}


window.onload = function(){
  Gamefefe.game = new Phaser.Game(Gamefefe.configs.GAME_WIDTH,Gamefefe.configs.GAME_HEIGHT,Phaser.AUTO,'',
    {
      preload: preload,
      create: create,
      update: update
    }, false, false
  );
}

/*==================preparations before game starts==================*/
var preload = function(){
  Gamefefe.game.scale.minWidth = Gamefefe.configs.MIN_WIDTH;
  Gamefefe.game.scale.minHeight = Gamefefe.configs.MIN_HEIGHT;
  Gamefefe.game.scale.maxWidth = Gamefefe.configs.MAX_WIDTH;
  Gamefefe.game.scale.maxHeight = Gamefefe.configs.MAX_HEIGHT;
  Gamefefe.game.scale.pageAlignHorizontally = true;
  Gamefefe.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  //Load audio
  Gamefefe.game.load.audio('theme', ['Assets/Audio/main_theme.mp3', 'Assets/Audio/main_theme.ogg']);

  Gamefefe.game.time.advancedTiming = true;
  //Gamefefe.game.load.image('background', 'Assets/bg.png');
  Gamefefe.game.load.tilemap('gamemap', 'Assets/Maps/mapLevel1.json', null, Phaser.Tilemap.TILED_JSON);
  Gamefefe.game.load.image('tiles', 'Assets/Tiles/tiles_spritesheet.png');
 Gamefefe.game.load.atlasJSONHash('player1Walk', 'Assets/Player/p1_walk/p1_walk.png', 'Assets/Player/p1_walk/p1_walk.json');
  Gamefefe.game.load.spritesheet('fly', 'Assets/Enemies/flyFly0.png', 74, 33);
  Gamefefe.game.load.spritesheet('swim','Assets/Enemies/fishSwim.png',66,43);
  Gamefefe.game.load.spritesheet('walk','Assets/Enemies/slimeWalk.png',51,28);
  Gamefefe.game.load.spritesheet('crawl','Assets/Enemies/snailCrawl.png',57,31);
  Gamefefe.game.load.image('bronze','Assets/Items/coinBronze.png');
  Gamefefe.game.load.image('silver', 'Assets/Items/coinSilver.png');
  Gamefefe.game.load.image('gold','Assets/Items/coinGold.png');
  Gamefefe.game.load.image('hurt','Assets/Player/p1_hurt.png');
  Gamefefe.game.load.image('spikes','Assets/Items/spike.png');
  Gamefefe.game.load.spritesheet('door','Assets/Items/door.png',70,140);
  Gamefefe.game.load.image('weight','Assets/Items/weight.png');


}

/*===============================initialize the game==================*/
var create = function(){
   Gamefefe.music = Gamefefe.game.add.audio('theme');
   Gamefefe.music.loopFull();
   //Start the Arcade Physics systems
   Gamefefe.game.physics.startSystem(Phaser.Physics.ARCADE);
   Gamefefe.keyboard = Gamefefe.game.input.keyboard;

   Gamefefe.game.stage.backgroundColor = '#c6e2ff';

   //Create Map
   Gamefefe.map = Gamefefe.game.add.tilemap('gamemap');
   Gamefefe.map.addTilesetImage('tiles_spritesheet','tiles');
   Gamefefe.backgroundLayer = Gamefefe.map.createLayer('backgroundLayer');
   Gamefefe.groundLayer = Gamefefe.map.createLayer('groundLayer');
   Gamefefe.map.setCollisionBetween(1, 1000, true, 'groundLayer');
   Gamefefe.groundLayer.resizeWorld();

   Gamefefe.enemyGroup = Gamefefe.game.add.physicsGroup();
   Gamefefe.playerGroup = Gamefefe.game.add.physicsGroup();
   Gamefefe.doorGroup = Gamefefe.game.add.physicsGroup();
   Gamefefe.coinGroup = Gamefefe.game.add.physicsGroup();

   Gamefefe.players =[];
   Gamefefe.players.push(
       new PlayerController(0,0,'player1Walk',Gamefefe.configs.PLAYER_CONTROL)
   );
    Gamefefe.cursors = Gamefefe.game.input.keyboard.createCursorKeys();
    Gamefefe.enemies =[];
    Gamefefe.enemies.push(new FlyController(600,250,'fly'));
    Gamefefe.enemies.push(new FlyController(1800,200,'fly'));
    Gamefefe.enemies.push(new FlyController(3000,220,'fly'));
    Gamefefe.enemies.push(new FishController(200,600,'swim'));
    Gamefefe.enemies.push(new SlimeController(2500,200,'walk'));
    Gamefefe.enemies.push(new SnailController(2950,400,'crawl'));

    Gamefefe.items.traps.push(new TrapController(2350, 533,'spikes'));
    Gamefefe.items.doors.push(new DoorController(6927, 113,'door'));
    Gamefefe.items.weights.push(new WeightController(400, -70,'weight'));
    Gamefefe.items.weights.push(new WeightController(6830, -70,'weight'));
    for (let i=0;i<10;i++){
        Gamefefe.items.coins.push(new CoinController(630+i*80, 323 ,'bronze'));
        Gamefefe.items.coins.push(new CoinController(2030+i*80, 130,'silver'));
        Gamefefe.items.coins.push(new CoinController(5220+i*80, 393-i*20,'gold'));
    }


}
/*==================Update game state each frame==================*/
var update = function(){
  //update player
  for(var player of Gamefefe.players){
    player.update();

  }
  for (var enemy of Gamefefe.enemies){
      enemy.update();

  }
  for (var trap of Gamefefe.items.traps){
      trap.update();
  }
  for (var door of Gamefefe.items.doors){
      door.update();
  }

  for(var weight of Gamefefe.items.weights){
      weight.playerComing(Gamefefe.properties.xPosition);
  }


  Gamefefe.game.physics.arcade.overlap(
    Gamefefe.playerGroup,
    Gamefefe.enemyGroup,
    function(playerSprite,enemySprite){
        enemySprite.update();

        if(Gamefefe.enemyKill){
            enemySprite.kill();
        }else{
            setTimeout(function(){
                playerSprite.loadTexture('hurt', 0, false),1000
            });
            playerSprite.kill()
            Gamefefe.players.push(new PlayerController(0,0,'player1Walk',Gamefefe.configs.PLAYER_CONTROL)
       );
        }
        Gamefefe.enemyKill=false;

    }
  );

  Gamefefe.game.physics.arcade.overlap(
    Gamefefe.playerGroup,
    Gamefefe.coinGroup,
    function(playerSprite, coinSprite){
        coinSprite.kill();
    }
  );
  Gamefefe.game.physics.arcade.overlap(
    Gamefefe.playerGroup,
    Gamefefe.doorGroup,
    function(){
        door.open();
    }
  );

}
