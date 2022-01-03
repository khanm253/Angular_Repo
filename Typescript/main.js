"use strict";
exports.__esModule = true;
var Box_1 = require("./Box");
//Array declaration
var a;
a = [1, 2, 3, 4];
//enum declaration
var Color;
(function (Color) {
    Color[Color["RED"] = 1] = "RED";
    Color[Color["BLUE"] = 2] = "BLUE";
    Color[Color["GREEN"] = 3] = "GREEN";
})(Color || (Color = {}));
;
var bgColor = Color.BLUE;
//Type assertions
var msg;
msg = 'hello';
var drawPoint = function (point) {
    console.log(point.x, point.y);
};
//drawPoint({x: 1, y:1});
// Classes and objects
//Access modifiers
var Pointer = /** @class */ (function () {
    function Pointer(_x, y) {
        this._x = _x;
        this.y = y;
    }
    Pointer.prototype.draw = function () {
        // ...
        console.log(this._x);
    };
    return Pointer;
}());
var obj = new Pointer(1, 2);
obj.draw();
var box = new Box_1.Box(1, 3);
