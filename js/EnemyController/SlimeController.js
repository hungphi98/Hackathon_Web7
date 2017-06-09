class SlimeController extends EnemyController{
    constructor(x,y,spriteName,configs){
        super(x,y,spriteName,configs);
        Gamefefe.game.physics.arcade.enable(this.sprite);
        this.sprite.body.bounce.y = 0.2;
        this.sprite.body.gravity.y = 500;
    }
    update(){
        Gamefefe.game.physics.arcade.collide(this.sprite, Gamefefe.groundLayer);

            if (Gamefefe.properties.xPosition < this.sprite.body.x + this.sprite.width &&
            Gamefefe.properties.xPosition + Gamefefe.properties.width > this.sprite.body.x &&
            Math.round(Gamefefe.properties.yPosition+Gamefefe.properties.height)==Math.round(this.sprite.body.y)){
           this.sprite.kill();
           Gamefefe.enemyKill=true;
            console.log(Gamefefe.enemyKill);


    }

    if (Gamefefe.moveRight.walk){
        this.sprite.position.x+=2;
        if (this.sprite.position.x-this.x>200 ){
            Gamefefe.moveRight.walk=false;
        }
    }
        if(!Gamefefe.moveRight.walk){
            this.sprite.position.x-=2;
            if(this.sprite.position.x-this.x<-200){
            Gamefefe.moveRight.walk=true;
            }
        }
        
}


}
