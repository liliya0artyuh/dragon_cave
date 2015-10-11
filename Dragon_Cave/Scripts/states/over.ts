
module states {
    // menu class
    export class Over extends objects.Scene {
        // private instance variables
        _endLabel: objects.Label;
        _againButton: objects.Button;
        _logo: createjs.Bitmap;
        _tooth: createjs.Bitmap;
        _outcomeLabel: objects.Label;

        //constructor
        constructor() {
            super();
        }

        //private method
        //callback function that allows to respond to button click events
        private _buttonClicked(event: createjs.MouseEvent): void {
            changeState(config.MENU_STATE);
        }

        //public methods
        public start(): void {
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
        }

        public update(): void {
        }
    }

}