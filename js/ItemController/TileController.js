class TileController{
    constructor(x,y,spriteName,configs){
        this.sprite = Gamefefe.game.add.sprite(x,y,spriteName);
        Gamefefe.game.physics.arcade.enable(this.sprite);
    }
    update(){
        Gamefefe.game.physics.arcade.collide(this.sprite, Gamefefe.groundLayer);
        if (Gamefefe.properties.xPosition==this.sprite.body.x-10){
            this.sprite.body.gravity.y = 1400;
            this.sprite.body.bounce.y = 0.6;
        }
    }
}
