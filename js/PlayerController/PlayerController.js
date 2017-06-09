class PlayerController{
  constructor(x, y, spriteName,configs){
    //this.sprite = Gamefefe.game.add.sprite(x, y,spriteName);
    this.sprite = Gamefefe.playerGroup.create(x, y, spriteName);
    this.configs = configs;
    Gamefefe.game.physics.arcade.enable(this.sprite);
    this.sprite.animations.add('walk');
    //this.sprite.animations.add('hurt');
    this.sprite.animations.play('walk',25,true);
    Gamefefe.game.camera.follow(this.sprite);
    this.sprite.body.bounce.y = 0.2;
    this.sprite.body.gravity.y = 500;
    this.sprite.body.collideWorldBounds = true;
    this.sprite.anchor.x=0;this.sprite.anchor.y=1;
    this.timeSinceLastJump=0;
    this.timeSinceLastMove=0;

  }

  update(){
      Gamefefe.properties.xPosition = this.sprite.body.x;
      Gamefefe.properties.yPosition = this.sprite.body.y;
      Gamefefe.game.physics.arcade.collide(this.sprite, Gamefefe.groundLayer);
      this.timeSinceLastJump += Gamefefe.game.time.physicsElapsed;
      this.timeSinceLastMove+=Gamefefe.game.time.physicsElapsed;
      if(Gamefefe.keyboard.isDown(Phaser.Keyboard.F)){
          console.log(Gamefefe.properties.xPosition,Gamefefe.properties.yPosition);
      }
      if(Gamefefe.keyboard.isDown(this.configs.jump)
          && this.timeSinceLastJump > 0.3
        ){
          this.sprite.body.velocity.y=-200;
          this.timeSinceLastJump = 0;
      }
      if(Gamefefe.keyboard.isDown(this.configs.right)
          && this.timeSinceLastMove > 0.005
        ){
          this.sprite.x+=10;
        this.timeSinceLastMove = 0;
      }
    else if(Gamefefe.keyboard.isDown(this.configs.left)
        && this.timeSinceLastMove > 0.005
      ){
        this.sprite.x-=10;
      this.timeSinceLastMove = 0;
    }
    else{
         this.sprite.body.velocity.x = 0;
    }
  }

}
