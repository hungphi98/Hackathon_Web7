class ArrowController extends WeightController{
    constructor(x,y,spriteName,configs){
        super(x,y,spriteName,configs);
    }

    update(){
        Gamefefe.game.physics.arcade.collide(this.sprite, Gamefefe.groundLayer);
        if (Gamefefe.properties.xPosition == this.sprite.body.x-50){
            this.sprite.body.gravity.y = 1500;
            this.sprite.body.bounce.y = 0.05;
        }
    }
}
