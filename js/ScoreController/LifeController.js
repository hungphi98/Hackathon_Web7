class LifeController{
    constructor(x,y,spriteName,configs){
        this.sprite = Gamefefe.game.add.sprite(x,y,spriteName);
        this.sprite.fixedToCamera=true;
        this.configs=configs;
    }
    update(){
        if(Gamefefe.isDead){
            this.sprite.kill();
            Gamefefe.lives.shift();
            Gamefefe.isDead=false;
        }
    }
}
