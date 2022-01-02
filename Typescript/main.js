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
drawPoint({ x: 1, y: 1 });
// Classes and objects
var Pointer = /** @class */ (function () {
    function Pointer() {
    }
    Pointer.prototype.draw = function () {
        // ...
        console.log(this.x);
    };
    Pointer.prototype.getDistance = function (another) {
        console.log(this.x - another.x);
    };
    return Pointer;
}());
var obj = new Pointer;
obj.x = 2;
obj.y = 3;
obj.draw();
