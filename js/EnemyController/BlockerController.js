class BlockerController extends EnemyController{
    constructor(x,y,spriteName,configs){
        super(x,y,spriteName,configs);
    }
    update(){
        Gamefefe.game.physics.arcade.collide(this.sprite, Gamefefe.groundLayer);
    }
}
