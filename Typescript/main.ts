//Array declaration
let a: number[];
a = [1,2,3,4];

//enum declaration
enum Color {RED = 1, BLUE = 2, GREEN = 3};
let bgColor = Color.BLUE;

//Type assertions
let msg;
msg = 'hello'
//let endsWith = (<string>msg).endsWith('c');
//let endsWith2 = (msg as string).endsWith('c');

//Interfaces

interface Point {
    x: number,
    y: number,
}

let drawPoint = (point : Point) => {
    console.log(point.x, point.y)
}

//drawPoint({x: 1, y:1});


// Classes and objects

class Pointer{
    x: number;
    y: number;

    draw(){
        // ...
        console.log(this.x)
    }

    getDistance(another: Pointer){
        console.log(this.x - another.x);
    }
}


let obj : Pointer = new Pointer;
obj.x = 2;
obj.y = 3;
obj.draw();

let obj1 = new Pointer;
obj1.x = 2;
obj1.y = 3;
obj1.draw();