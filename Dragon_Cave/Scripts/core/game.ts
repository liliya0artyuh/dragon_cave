/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/stats/stats.d.ts" />
/// <reference path="../typings/createjs-lib/createjs-lib.d.ts" />
/// <reference path="../typings/easeljs/easeljs.d.ts" />
/// <reference path="../typings/tweenjs/tweenjs.d.ts" />
/// <reference path="../typings/webaudioapi/waa.d.ts" />

/// <reference path="../config/config.ts" />

/// <reference path="../objects/label.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../states/menu.ts" />


// Global Game Framework Variables
var canvas: HTMLElement;
var stage: createjs.Stage;
var stats: Stats;
var state: number;
var scene: createjs.Container;
var stateFunction: any; // alias for our current state

//var assets: createjs.LoadQueue;

var manifest = [
    { id: "startButton", scr: "Assets/images/startButton.png" },
    { id: "logo", scr: "Assets/images/logo_small.png" },
    { id: "gameSound", scr: "Assets/audio/gameSound.m4a" }
];

// Game variables
var helloLabel: objects.Label;
var introLabel: objects.Label;
var startButton: objects.Button;
var logo: createjs.Bitmap;


function preload(): void {
 //   assets = new createjs.LoadQueue();
    //assets.installPlugin(createjs.Sound);
    //event listener triggers when assets are completely loaded
   // assets.on("complete", init, this);
   // assets.loadManifest(manifest);


}

function init(): void {
    console.log("Game started...");
    canvas = document.getElementById("canvas"); // reference to canvas element
    stage = new createjs.Stage(canvas); // passing canvas to stage 
    stage.enableMouseOver(20); //enable mouse events
    createjs.Ticker.setFPS(60); // set frame rate to 60 frames per second
    createjs.Ticker.on("tick", gameLoop, this); // update gameLoop every frame
        
    setupStats();// setup statistics object

    state = config.MENU_STATE;
    changeState();
}

// Main Game Loop
function gameLoop(event: createjs.Event): void {
    stats.begin(); //begin measuring

    stage.update(); // redraw/refresh stage every frame

    stats.end(); // end measuring
}

// function to setup stat counting
function setupStats(): void {
    stats = new Stats();
    stats.setMode(0); //show fps

    //align bottom-right
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.right = '0px';
    stats.domElement.style.top = '0px';

  //  document.getElementById("main").appendChild(stats.domElement);
    document.body.appendChild(stats.domElement);
}

//callback function that allows to respond to button click events
function buttonClicked(event: createjs.MouseEvent): void {
    introLabel.text = "clicked!";
  //  createjs.Sound.play("gameSound");
}


// state machine
function changeState(): void {
    //lauch various scenes

    switch (state) {
        case config.MENU_STATE:
            stateFunction = states.menu;
            break;
        case config.PLAY_STATE:

            break;

        case config.OVER_STATE:

            break;
    }
    stateFunction();

}