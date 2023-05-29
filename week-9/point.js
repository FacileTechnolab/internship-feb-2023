"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    //   private x:number | undefined;
    //  private  y:number | undefined;
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
        // this.x = x;
        // this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('X:' + this._x + 'Y:' + this._y);
    };
    return Point;
}());
exports.Point = Point;
