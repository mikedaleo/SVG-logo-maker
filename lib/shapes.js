const CLI = require('./cli.js');

class Shape {
    constructor(text, color){
        this.text = text;
        this.color = color;
    }
    setColor(color) {
        this.color = color;
    }
}

class Triangle extends Shape {
    constructor(text, color) {
        super(text, color);
    }
   
    render(){

    }
}

class Circle extends Shape {
    constructor(text, color) {
        super(text, color);
    }
}

class Square extends Shape {
    constructor(text, color) {
        super(text, color);
    }
}

module.exports = { Triangle, Circle, Square };
