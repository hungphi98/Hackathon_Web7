class LionController {
    constructor(x,y,spriteName,configs){
        this.sprite = Gamefefe.enemyGroup.create(x, y, spriteName);
        var run = this.sprite.animations.add(spriteName);
        this.sprite.animations.play(spriteName, 8, true);
    }
    update(){
        Gamefefe.game.physics.arcade.collide(this.sprite, Gamefefe.groundLayer);
        if (Gamefefe.properties.xPosition > this.sprite.body.x && Gamefefe.properties.xPosition<=this.sprite.body.x+7000){
            this.sprite.body.gravity.y = 1400;
            this.sprite.body.x+=8;
            this.sprite.body.bounce.y = 0.6;
        }
    }
}
