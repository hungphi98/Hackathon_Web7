class DoorController{
    constructor(x,y,spriteName,configs){
        this.sprite = Gamefefe.doorGroup.create(x, y, spriteName);
        this.x=x;
        this.y=y;
        this.sprite.animations.add(spriteName);
        this.spriteName= spriteName;

        Gamefefe.game.physics.arcade.enable(this.sprite);
        this.sprite.body.bounce.y = 0.2;
        this.sprite.body.gravity.y = 500;
    }
    update(){
        Gamefefe.game.physics.arcade.collide(this.sprite, Gamefefe.groundLayer);
    }
    open(){
        this.sprite.animations.play(this.spriteName, 10, false);
    }
}
