class BlockerController extends EnemyController{
    constructor(x,y,spriteName,configs){
        super(x,y,spriteName,configs);
        Gamefefe.game.physics.arcade.enable(this.sprite);
        this.sprite.body.bounce.y = 0.4;
        this.sprite.body.gravity.y = 500;
    }
    update(){
        Gamefefe.game.physics.arcade.collide(this.sprite, Gamefefe.groundLayer);
        if (Gamefefe.properties.xPosition==this.sprite.body.x-300){
            this.sprite.loadTexture('blockerMad');
        }
        if (Gamefefe.properties.xPosition < this.sprite.body.x + this.sprite.width &&
        Gamefefe.properties.xPosition + Gamefefe.properties.width > this.sprite.body.x &&
         Math.round(Gamefefe.properties.yPosition+Gamefefe.properties.height)==Math.round(this.sprite.body.y)){
       this.sprite.kill();
       Gamefefe.enemyKill=true;
       console.log(Gamefefe.enemyKill);

}
    }
}
