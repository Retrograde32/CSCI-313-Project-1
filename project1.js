// JavaScript source code for Project 1

var stage;
var queue;


function load() {
    queue = new createjs.LoadQueue(false);
    queue.addEventListener("complete", init);
    queue.loadManifest([{ id: "caveBackground", src: "CaveBackground.png" },
                        { id: "dragonSprite", src: "BabyDragonSprite.png" }]);
}


function init() {
    stage = new createjs.Stage("canvas");

    var image1 = queue.getResult("caveBackground");
    cave = new createjs.Bitmap(image1);
    cave.x = 0;
    cave.y = 0;

    stage.addChild(cave);

    var image2 = queue.getResult("dragonSprite");
    dragon = new createjs.Bitmap(image2);
    dragon.regX = 72;
    dragon.regY = 75;
    dragon.x = 499;
    dragon.y = 342;

    stage.addChild(dragon);

    //fireball graphic and shape code

    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", function () { stage.update(); });

    stage.update();
}


function startGame() {
    //additional code here
    stage.update();
}


function newFireball() {

}

