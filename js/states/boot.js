var bootState = {
  create: function() {
  	Gamefefe.game.scale.minWidth = Gamefefe.configs.MIN_WIDTH;
  	Gamefefe.game.scale.minHeight = Gamefefe.configs.MIN_HEIGHT;
  	Gamefefe.game.scale.maxWidth = Gamefefe.configs.MAX_WIDTH;
  	Gamefefe.game.scale.maxHeight = Gamefefe.configs.MAX_HEIGHT;
  	Gamefefe.game.scale.pageAlignHorizontally = true;
  	Gamefefe.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    Gamefefe.game.time.advancedTiming = true;
    Gamefefe.game.physics.startSystem(Phaser.Physics.ARCADE);
    console.log("boot")
    Gamefefe.game.state.start("load")
  }
}
