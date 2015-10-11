var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var states;
(function (states) {
    // menu class
    var Over = (function (_super) {
        __extends(Over, _super);
        //constructor
        function Over() {
            _super.call(this);
        }
        //private method
        //callback function that allows to respond to button click events
        Over.prototype._buttonClicked = function (event) {
            changeState(config.MENU_STATE);
        };
        //public methods
        Over.prototype.start = function () {
            //instantiate and add a logo
            this._logo = new createjs.Bitmap("../../Assets/images/logo_small.png");
            this._logo.regX = 155;
            this._logo.regY = 101;
            this._logo.x = 440;
            this._logo.y = 140;
            this.addChild(this._logo);
            this._outcomeLabel = new objects.Label("The End", "12px Consolas", "#000000", 320, 160);
            this.addChild(this._outcomeLabel);
            //instantiate and add a tooth image
            this._tooth = new createjs.Bitmap("../../Assets/images/tooth.jpg");
            this._tooth.regX = 52;
            this._tooth.regY = 30;
            this._tooth.x = 360;
            this._tooth.y = 220;
            this.addChild(this._tooth);
            this._endLabel = new objects.Label("The End", "40px Consolas", "#000000", 320, 260);
            this.addChild(this._endLabel);
            //instantiate and add a start button
            this._againButton = new objects.Button("againButton", 300, 340);
            this.addChild(this._againButton);
            this._againButton.on("click", this._buttonClicked, this);
            stage.addChild(this);
        };
        Over.prototype.update = function () {
        };
        return Over;
    })(objects.Scene);
    states.Over = Over;
})(states || (states = {}));
//# sourceMappingURL=over.js.map