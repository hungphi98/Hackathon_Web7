class Player1Controller extends PlayerController{
    constructor(){
        super(x, y, `player${configs.spriteSuffix}`, Object.assign(
      configs, {
        speed    : 10
      }
    ));
    }
}
