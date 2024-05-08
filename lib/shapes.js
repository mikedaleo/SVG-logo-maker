const CLI = require('./cli.js');

class Shape {
    constructor(text, color){
        this.text = text;
        this.color = color;
    }
    setColor(color) {
        this.color = color;
    }
};

class Triangle extends Shape {
    constructor(text, color) {
        super(text, color);
    }
   
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
};

class Circle extends Shape {
    constructor(text, color) {
        super(text, color);
    }
    render(){
        return `<circle cx="25" cy="75" r="20" fill="${this.color}" />`
    }
};

class Square extends Shape {
    constructor(text, color) {
        super(text, color);
    }

    render() { 
        return `<rect x="10" y="10" width="30" height="30" stroke="black" fill="${this.color}" />`
    }
};

module.exports = { Shape, Triangle, Circle, Square };
