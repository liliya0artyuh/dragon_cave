/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/stats/stats.d.ts" />
/// <reference path="../typings/createjs-lib/createjs-lib.d.ts" />
/// <reference path="../typings/easeljs/easeljs.d.ts" />
/// <reference path="../typings/tweenjs/tweenjs.d.ts" />
/// <reference path="../typings/webaudioapi/waa.d.ts" />
/// <reference path="../config/config.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/scene.ts" />
/// <reference path="../states/menu.ts" />
/// <reference path="../states/over.ts" />
/// <reference path="../states/game.ts" />
// Global Game Framework Variables
var canvas;
var stage;
var stats;
var state;
var currentState; // alias for our current state
// Game variables
var menu;
var game;
var over;
function preload() {
    //   assets = new createjs.LoadQueue();
    //assets.installPlugin(createjs.Sound);
    //event listener triggers when assets are completely loaded
    // assets.on("complete", init, this);
    // assets.loadManifest(manifest);
}
function init() {
    console.log("Game started...");
    canvas = document.getElementById("canvas"); // reference to canvas element
    stage = new createjs.Stage(canvas); // passing canvas to stage 
    stage.enableMouseOver(20); //enable mouse events
    createjs.Ticker.setFPS(60); // set frame rate to 60 frames per second
    createjs.Ticker.on("tick", gameLoop, this); // update gameLoop every frame
    setupStats(); // setup statistics object
    state = config.MENU_STATE;
    changeState(state);
}
// Main Game Loop
function gameLoop(event) {
    stats.begin(); //begin measuring
    currentState.update();
    stage.update(); // redraw/refresh stage every frame
    stats.end(); // end measuring
}
// function to setup stat counting
function setupStats() {
    stats = new Stats();
    stats.setMode(0); //show fps
    //align bottom-right
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.right = '0px';
    stats.domElement.style.top = '0px';
    //  document.getElementById("main").appendChild(stats.domElement);
    document.body.appendChild(stats.domElement);
}
// state machine
function changeState(state) {
    //lauch various scenes
    switch (state) {
        case config.MENU_STATE:
            stage.removeAllChildren();
            menu = new states.Menu();
            console.log(menu);
            currentState = menu;
            break;
        case config.PLAY_STATE:
            stage.removeAllChildren();
            game = new states.Game("Pin");
            currentState = game;
            break;
        case config.OVER_STATE:
            stage.removeAllChildren();
            over = new states.Over();
            currentState = over;
            break;
    }
    currentState.start();
    console.log(currentState.numChildren);
}
