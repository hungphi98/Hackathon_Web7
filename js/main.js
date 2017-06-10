var Gamefefe = {};
Gamefefe.configs = {
  GAME_WIDTH  : 1900,
  GAME_HEIGHT : 700,
  MIN_WIDTH   : 800,
  MIN_HEIGHT  : 500,
  MAX_WIDTH   : 1900,
  MAX_HEIGHT  : 700,
  BACKGROUND_SPEED  : 5,
  PLAYER_CONTROL  : {
    jump          : Phaser.Keyboard.SPACEBAR,
    left          : Phaser.Keyboard.LEFT,
    right         : Phaser.Keyboard.RIGHT
  }
};


window.onload = function(){
  Gamefefe.game = new Phaser.Game(Gamefefe.configs.GAME_WIDTH,Gamefefe.configs.GAME_HEIGHT,Phaser.AUTO,'');
  Gamefefe.game.state.add('boot', bootState);
  Gamefefe.game.state.add('load', loadState);
  Gamefefe.game.state.add('menu', menuState);
  Gamefefe.game.state.add('overview', overviewState);
  Gamefefe.game.state.add('level1', level1State);
  Gamefefe.game.state.add('level2', level2State);
  Gamefefe.game.state.add('level3', level3State);
  Gamefefe.game.state.start('boot');
}

Gamefefe.moveRight={
    fly: true,
    swim: false,
    walk: true,
    crawl:false
};
Gamefefe.items={
    traps: [],
    coins: [],
    doors:[],
    weight: [],

};




Gamefefe.properties={
    xPosition:0,
    yPosition:0,
    width:72,
    height:97
}
Gamefefe.enemyKill=false;
Gamefefe.score=[];
Gamefefe.scoreMark=[];
Gamefefe.scoreUp = false;
Gamefefe.isDead = false;
Gamefefe.lives=[];
