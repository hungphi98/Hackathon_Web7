class EnemyController{
    constructor(x,y,spriteName,configs){
        //this.sprite=Gamefefe.game.add.sprite(x,y,spriteName);
        this.sprite = Gamefefe.enemyGroup.create(x, y, spriteName);
        var run = this.sprite.animations.add(spriteName);
        this.sprite.animations.play(spriteName, 10, true);
        //this.sprite.anchor = new Phaser.Point(0.5,0.5);
        //Gamefefe.game.physics.arcade.enable(this.sprite);
        this.x=x;
        this.y=y;
    }
    update(){
        Gamefefe.game.physics.arcade.collide(this.sprite, Gamefefe.groundLayer);

   }

    }
