class TrapController {
    constructor(x,y,spriteName,configs){
        this.sprite = Gamefefe.enemyGroup.create(x, y, spriteName);
        this.x=x;
        this.y=y;
        Gamefefe.game.physics.arcade.enable(this.sprite);
        this.sprite.body.bounce.y = 0.2;
        this.sprite.body.gravity.y = 500;

    }
    update(){
        Gamefefe.game.physics.arcade.collide(this.sprite, Gamefefe.groundLayer);
    }
}
