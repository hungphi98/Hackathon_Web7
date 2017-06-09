var overviewState={
	preload: function(){
        Gamefefe.game.load.image('menu', 'Assets/testMenu3.jpg');
        Gamefefe.game.load.image('level1b','Assets/HUD/hud_1.png');
        Gamefefe.game.load.image('level2b','Assets/HUD/hud_2.png');
	},
	create: function(){
   	  Gamefefe.overview=Gamefefe.game.add.sprite(0,0, 'menu');

      var text1 = "Choose a level:"
      Gamefefe.note = Gamefefe.game.add.text(780, 320, '', {
          font: 'bold 40pt Arial',
          fill : 'white',
          stroke : 'black',
          strokeThickness : 3
        });
        Gamefefe.note.setText(text1);
      Gamefefe.note.fixedToCamera = true;

      Gamefefe.level1 = this.game.add.button(900,450,'level1b',this.start1,this);
      Gamefefe.level1.fixedToCamera = true;
      Gamefefe.level1.anchor.setTo(0.5);
      Gamefefe.level2 = this.game.add.button(1000,450,'level2b',this.start2,this);
      Gamefefe.level2.fixedToCamera = true;
      Gamefefe.level2.anchor.setTo(0.5);
	},
  start1: function(){
      console.log('ready to play');
      Gamefefe.game.state.start("level1");
  },
  start2: function(){
      Gamefefe.game.state.start('level2');
  }

}