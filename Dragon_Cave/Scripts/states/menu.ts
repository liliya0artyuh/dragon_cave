
module states {
    // menu class
    export class Menu extends objects.Scene {
        // private instance variables
        _introLabel: objects.Label;
        _startButton: objects.Button;
        _logo: createjs.Bitmap;

        //constructor
        constructor() {
            super();
        }

        //private method
        //callback function that allows to respond to button click events
        private _buttonClicked(event: createjs.MouseEvent): void {
            changeState(config.PLAY_STATE);
    }

        //public methods
        public start(): void {
            //instantiate and add a logo
            this._logo = new createjs.Bitmap("../../Assets/images/dragon_1.jpg");
            this._logo.regX = 155;
            this._logo.regY = 101;
            this._logo.x = 350;
            this._logo.y = 140;
            this.addChild(this._logo);

            this._introLabel = new objects.Label(" Do you want to play?", "40px Consolas", "#000000", 320, 260);
            this.addChild(this._introLabel);
            //instantiate and add a start button
            this._startButton = new objects.Button("startButton", 300, 340);
            this.addChild(this._startButton);
            this._startButton.on("click", this._buttonClicked, this);
            stage.addChild(this);
        }

        public update(): void {
        }
    }

}