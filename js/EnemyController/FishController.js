class FishController extends EnemyController{
    constructor(x,y,spriteName,configs){
        super(x,y,spriteName,configs);
    }

    update(){
        if (Gamefefe.moveRight.swim){
            this.sprite.position.x+=3;
            if (this.sprite.position.x-this.x>200){
                Gamefefe.moveRight.swim=false;
            }
        }
            if(!Gamefefe.moveRight.swim){
                this.sprite.position.x-=3;
                if(this.sprite.position.x-this.x<-200){
                Gamefefe.moveRight.swim=true;
                }
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
