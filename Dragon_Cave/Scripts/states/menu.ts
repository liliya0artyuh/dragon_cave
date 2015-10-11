// menu state
module states {
    // this is where all the fun happens
    export function menu(): void {
        scene = new createjs.Container();
        console.log("Game is running");
        //instantiate and add a logo
        logo = new createjs.Bitmap("../../Assets/images/logo_small.png");
        logo.regX = 155;
        logo.regY = 101;
        logo.x = 420;
        logo.y = 140;
        scene.addChild(logo);
        //helloLabel = new objects.Label("Hello Friend", "60px Consolas", "#000000", 320, 120);
        //stage.addChild(helloLabel); // add label to the stage
        introLabel = new objects.Label(" Do you want to play?", "40px Consolas", "#000000", 320, 260);
        scene.addChild(introLabel);
        //instantiate and add a start button
        startButton = new objects.Button("startButton", 320, 340);
        scene.addChild(startButton);
        startButton.on("click", buttonClicked, this);
        stage.addChild(scene);
    }

}