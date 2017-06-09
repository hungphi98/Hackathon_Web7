class ScoreController{
    constructor(x,y,number,configs){
        this.sprite=Gamefefe.game.add.sprite(x,y,'numbers',`hud_${number}.png`);
        this.number=number;
        this.sprite.fixedToCamera=true;
    }
    update(){
        if (Gamefefe.scoreUp){
            this.increaseScore(5);
        }
    }

    increaseScore(num){
        if (Gamefefe.scoreMark[num]<9){
            Gamefefe.scoreMark[num]++;
            Gamefefe.score[num].increase(Gamefefe.scoreMark[num]);
        }
        if (Gamefefe.scoreMark[num]==9){
            Gamefefe.scoreMark[num]=0;
            Gamefefe.score[num].increase(Gamefefe.scoreMark[num]);
            this.increaseScore(num-1);
        } Gamefefe.scoreUp=false;
    }
    increase(num){
        this.sprite.loadTexture('numbers',`hud_${num}.png`,0,false);
    }
}
