class CoinController{
    constructor(x,y,spriteName,configs){
        this.sprite = Gamefefe.coinGroup.create(x, y, spriteName);
        this.x=x;
        this.y=y;
        //Gamefefe.game.physics.arcade.enable(this.sprite);
    }
    update(){
    }

}
