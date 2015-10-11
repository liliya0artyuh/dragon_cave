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
        function Game(name) {
            _super.call(this);
            if (name == null) {
                this._name = "Pin";
            }
            else {
                this._name = name;
            }
        }
        //private method
        //callback function that allows to respond to button click events
        Game.prototype._buttonClicked = function (event) {
            changeState(config.OVER_STATE);
        };
        //public methods
        Game.prototype.start = function () {
            //instantiate and add a logo
            this._dragon_cave = new createjs.Bitmap("../../Assets/images/dragon_1.jpg");
            this._dragon_cave.regX = 155;
            this._dragon_cave.regY = 101;
            this._dragon_cave.x = 420;
            this._dragon_cave.y = 140;
            this.addChild(this._dragon_cave);
            this._startLabel = new objects.Label("Once upon a time there lived a mean king, Deg. \n\nDeg did not like " + this._name + ", the local blacksmith. \n\nThe king wanted to get rid of " + this._name + " so he gave " + this._name + " a task that was dangerous. \n\nDeg said to " + this._name + ": 'Go and get me a dragon's tooth!' \n\n\n" + this._name + " packed his bag and went to execute king's order. \n\n" + this._name + " walked for seven days and nights until he came to a road split. \n\n" + this._name + " chose to go '(pick the road)'", "12px Consolas", "#000000", 320, 200);
            this.addChild(this._startLabel);
            //instantiate and add a left button
            this._leftButton = new objects.Button("leftButton", 150, 340);
            this.addChild(this._leftButton);
            this._leftButton.on("click", this._buttonClicked, this);
            stage.addChild(this);
            //instantiate and add a left button
            this._rightButton = new objects.Button("rightButton", 430, 340);
            this.addChild(this._rightButton);
            this._rightButton.on("click", this._buttonClicked, this);
            stage.addChild(this);
        };
        Game.prototype.update = function () {
        };
        return Game;
    })(objects.Scene);
    states.Game = Game;
})(states || (states = {}));
//# sourceMappingURL=game.js.map