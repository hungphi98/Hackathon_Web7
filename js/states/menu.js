var menuState={
	preload: function(){
		Gamefefe.game.load.image('play', 'Assets/play_button.png');
		Gamefefe.game.load.image('menu', 'Assets/testMenu3.jpg');
		Gamefefe.game.load.image('instruct', 'Assets/instruct_button.png');
	},
	create:function(){
		Gamefefe.menubg=Gamefefe.game.add.sprite(0,0, 'menu');

   		//Create button
   		var text = "Play"
    	Gamefefe.note = Gamefefe.game.add.text(950, 320, '', {
        	font: 'bold 40pt Arial',
        	fill : 'white',
        	stroke : 'black',
        	strokeThickness : 3
      	});
      	Gamefefe.note.setText(text);
    	Gamefefe.note.fixedToCamera = true;
   		Gamefefe.playButton = this.game.add.button(1000,450,'play',this.start,this);
   		Gamefefe.playButton.fixedToCamera = true;
    	Gamefefe.playButton.anchor.setTo(0.5);
    	Gamefefe.playButton.scale.setTo(0.3);


   		Gamefefe.music = Gamefefe.game.add.audio('theme');
   		Gamefefe.music.loopFull();
   		console.log('menu');   		
	},

  	start: function(){
  		console.log('ready to play');
		  Gamefefe.game.state.start("overview");
	}
}