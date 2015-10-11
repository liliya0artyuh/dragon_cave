var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Button = (function (_super) {
        __extends(Button, _super);
        //constructor
        function Button(pathString, x, y) {
            _super.call(this, "../../Assets/images/" + pathString + ".png");
            this.x = x;
            this.y = y;
            this.width = 150;
            this.height = 50;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this.on("mouseover", this.buttonOver, this);
            this.on("mouseout", this.buttonOut, this);
        }
        //callback function that change the apha transparency of the button
        //mousover event
        Button.prototype.buttonOver = function (event) {
            event.currentTarget.alpha = 0.8;
        };
        //mouseout event
        Button.prototype.buttonOut = function (event) {
            event.currentTarget.alpha = 1.0;
        };
        return Button;
    })(createjs.Bitmap);
    objects.Button = Button;
})(objects || (objects = {}));
//# sourceMappingURL=button.js.map