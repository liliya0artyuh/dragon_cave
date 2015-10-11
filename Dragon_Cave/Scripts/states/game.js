var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var states;
(function (states) {
    // menu class
    var Game = (function (_super) {
        __extends(Game, _super);
        //constructor
        function Game() {
            _super.call(this);
        }
        //private method
        //callback function that allows to respond to button click events  - path 1
        Game.prototype._leftButtonClicked = function (event) {
            this._swamp();
        };
        //callback function that allows to respond to button click events -  - path 1.1
        Game.prototype._swimButtonClicked = function (event) {
            this._tree();
        };
        //callback function that allows to respond to button click events  - path 1.2
        Game.prototype._scream_1_ButtonClicked = function (event) {
            this._bear();
        };
        //callback function  - player looses - outcome 1 -  - path 1.1.1
        Game.prototype._getOnButtonClicked = function (event) {
            outcome = 1;
            changeState(config.OVER_STATE);
        };
        //callback function - player looses - outcome 2 -  - path 1.1.2
        Game.prototype._swimByButtonClicked = function (event) {
            outcome = 2;
            changeState(config.OVER_STATE);
        };
        //callback function  - player looses - outcome 3 -  - path 1.2.1
        Game.prototype._scream_2_ButtonClicked = function (event) {
            outcome = 3;
            changeState(config.OVER_STATE);
        };
        //callback function  - player looses - outcome 4  -  - path 1.2.2
        Game.prototype._deadButtonClicked = function (event) {
            outcome = 4;
            changeState(config.OVER_STATE);
        };
        //callback function that allows to respond to button click events - path 2
        Game.prototype._rightButtonClicked = function (event) {
            this._bread();
        };
        //callback function that allows to respond to button click events - path 2.1
        Game.prototype._eatButtonClicked = function (event) {
            this._sick();
        };
        //callback function that allows to respond to button click events - path 2.2
        Game.prototype._saveButtonClicked = function (event) {
            this._dragon();
        };
        //callback function - player looses - outcome 5  -    - path 2.1.1
        Game.prototype._drinkButtonClicked = function (event) {
            outcome = 5;
            changeState(config.OVER_STATE);
        };
        //callback function- player looses - outcome 6  -    - path 2.1.2
        Game.prototype._sleepButtonClicked = function (event) {
            outcome = 6;
            changeState(config.OVER_STATE);
        };
        //callback function - player looses - outcome 7  -    - path 2.2.1
        Game.prototype._attackButtonClicked = function (event) {
            outcome = 7;
            changeState(config.OVER_STATE);
        };
        //callback function - player wins - outcome 8  -    - path 2.2.2
        Game.prototype._feedButtonClicked = function (event) {
            outcome = 8;
            changeState(config.OVER_STATE);
        };
        //public methods
        Game.prototype.start = function () {
            document.getElementById("txtName").style.display = "none";
            this._textLabel = new objects.Label("Once upon a time there lived a mean king, Deg. \n\nDeg did not like " + name + ", the local blacksmith. \n\nThe king wanted to get rid of " + name + " so he gave " + name + " a task that was dangerous. \n\nDeg said to " + name + ": 'Go and get me a dragon's tooth!' \n\n\n" + name + " packed his bag and went to execute king's order. \n\n" + name + " walked for seven days and nights until he came to a road split. \n\n" + name + " chose to go '(pick the road)'", "12px Consolas", "#000000", 320, 200);
            this.addChild(this._textLabel);
            //instantiate and add a left button
            this._leftButton = new objects.Button("leftButton", 150, 340);
            this.addChild(this._leftButton);
            this._leftButton.on("click", this._leftButtonClicked, this);
            stage.addChild(this);
            //instantiate and add a right button
            this._rightButton = new objects.Button("rightButton", 430, 340);
            this.addChild(this._rightButton);
            this._rightButton.on("click", this._rightButtonClicked, this);
            stage.addChild(this);
        };
        Game.prototype.update = function () {
        };
        Game.prototype._swamp = function () {
            this.removeAllChildren();
            this._textLabel.text = (name + " turned left and got right into a big swamp. \n\nTo save himself from getting drawned he decided to ...");
            this.addChild(this._textLabel);
            //instantiate and add a left button
            this._leftButton = new objects.Button("swimButton", 150, 340);
            this.addChild(this._leftButton);
            this._leftButton.on("click", this._swimButtonClicked, this);
            stage.addChild(this);
            //instantiate and add a right button
            this._rightButton = new objects.Button("screamButton", 430, 340);
            this.addChild(this._rightButton);
            this._rightButton.on("click", this._scream_1_ButtonClicked, this);
            stage.addChild(this);
        };
        Game.prototype._tree = function () {
            this.removeAllChildren();
            this._textLabel.text = (name + " started swimming. \n\nIt was hard do do... The swamp was pulling him down. \n\n" + name + " saw a tree trunk ahead.\n\nHe/she was considering to climb on the tree trunk or to continue swimming.\n\nHe prayed to God to help him make the right decision.");
            this.addChild(this._textLabel);
            //instantiate and add a left button
            this._leftButton = new objects.Button("getOnButton", 150, 340);
            this.addChild(this._leftButton);
            this._leftButton.on("click", this._getOnButtonClicked, this);
            stage.addChild(this);
            //instantiate and add a right button
            this._rightButton = new objects.Button("swimByButton", 430, 340);
            this.addChild(this._rightButton);
            this._rightButton.on("click", this._swimByButtonClicked, this);
            stage.addChild(this);
        };
        Game.prototype._bear = function () {
            this.removeAllChildren();
            this._textLabel.text = (name + " was screaming very loudly in the hope to get some help. \n\nHe/she saw something moving in the woods.\n\nIt was a big brown bear. \n\n" + name + " didn't know whether to pretend to be dead or to scream to scary the bear away. \n\nWhat is he/she going to do?...");
            this.addChild(this._textLabel);
            //instantiate and add a left button
            this._leftButton = new objects.Button("screamButton", 150, 340);
            this.addChild(this._leftButton);
            this._leftButton.on("click", this._scream_2_ButtonClicked, this);
            stage.addChild(this);
            //instantiate and add a right button
            this._rightButton = new objects.Button("deadButton", 430, 340);
            this.addChild(this._rightButton);
            this._rightButton.on("click", this._deadButtonClicked, this);
            stage.addChild(this);
        };
        Game.prototype._bread = function () {
            this.removeAllChildren();
            this._textLabel.text = (name + " turned right. \n\nAs he/she was walking along the path he saw a loaf of bread on the ground.\n\n" + name + " was hungry so he/she picked up the loaf. \n\nHowever, he/she was a bit cautious. \n\nHe/She stood there for a while with the delema 'to eat it or to save it for later'. \n\nIn the end he/she decided to...");
            this.addChild(this._textLabel);
            //instantiate and add a left button
            this._leftButton = new objects.Button("eatButton", 150, 340);
            this.addChild(this._leftButton);
            this._leftButton.on("click", this._eatButtonClicked, this);
            stage.addChild(this);
            //instantiate and add a right button
            this._rightButton = new objects.Button("saveButton", 430, 340);
            this.addChild(this._rightButton);
            this._rightButton.on("click", this._saveButtonClicked, this);
            stage.addChild(this);
        };
        Game.prototype._sick = function () {
            this.removeAllChildren();
            this._textLabel.text = (name + " ate the bread and got sick. \n\nHe/she saw a spring with fresh water ahead.\n\nHe/she couldn't walk so he crawlled to the spring.\n\nWhen " + name + " reached the spring he/she was feeling sleepy. \n\nHe/she had a choice to make drink some water or to rest first.");
            this.addChild(this._textLabel);
            //instantiate and add a left button
            this._leftButton = new objects.Button("drinkButton", 150, 340);
            this.addChild(this._leftButton);
            this._leftButton.on("click", this._drinkButtonClicked, this);
            stage.addChild(this);
            //instantiate and add a right button
            this._rightButton = new objects.Button("sleepButton", 430, 340);
            this.addChild(this._rightButton);
            this._rightButton.on("click", this._sleepButtonClicked, this);
            stage.addChild(this);
        };
        Game.prototype._dragon = function () {
            this.removeAllChildren();
            this._textLabel.text = (name + " put the bread in his pouch to save it for when he is truly starving. \n\nHe continued to walk until he saw a big cave.\n\nHe/she went in and saw a big dragon sleeping there.\n\nIt was tempting to attack the dragon while it was sleeping.\n\nBut " + name + " also felt bad about killing.\n\nHe/she though that perhaps he can tame the dragon by feeding him the bread he found.\n\nWhat will " + name + " do in the end?...");
            this.addChild(this._textLabel);
            //instantiate and add a left button
            this._leftButton = new objects.Button("attackButton", 150, 340);
            this.addChild(this._leftButton);
            this._leftButton.on("click", this._attackButtonClicked, this);
            stage.addChild(this);
            //instantiate and add a right button
            this._rightButton = new objects.Button("feedButton", 430, 340);
            this.addChild(this._rightButton);
            this._rightButton.on("click", this._feedButtonClicked, this);
            stage.addChild(this);
        };
        return Game;
    })(objects.Scene);
    states.Game = Game;
})(states || (states = {}));
//# sourceMappingURL=game.js.map