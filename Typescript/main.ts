import {Box} from './Box'

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
//Access modifiers

class Pointer{

    constructor(private _x?: number,private y?: number){

    }

    draw(){
        // ...
        console.log(this._x)
    }

    // getDistance(another: Pointer){
    //     console.log(this._x - another._x);
    // }

    // public get x(){
    //     return this._x;
    // }

    // public set x(value){
    //     if(value < 0){
    //         throw new Error('Not correct range');
    //     }

    //     this._x = value;
    // }
}


let obj : Pointer = new Pointer(1,2);
obj.draw();

let box = new Box(1,3);

