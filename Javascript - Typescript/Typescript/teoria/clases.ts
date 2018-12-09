class Point {
    constructor(private _x?: number, private _y?: number) {

    }

    draw() {
        console.log('x ' + this._x + ', y ' + this._y);
    }

    getX() {
        return this._x;
    }

    setX(value) {
        if (value < 0) {
            throw new Error('value cannot be less than 0.');
        }
        this._x = value;
     }
}

let point = new Point(1,2);
let x = point.getX();
point.draw();