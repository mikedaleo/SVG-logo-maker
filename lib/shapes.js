class Shape {
    constructor(color){
        this.color = color;
    }
    setColor(color) {
        this.color = color;
    }
};

class Triangle extends Shape {
    constructor(color) {
        super(color);
    }
   
    render(){
        return `<polygon points="45, 1 1, 80 100, 80" fill="${this.color}" />`
    }
};

class Circle extends Shape {
    constructor(color) {
        super(color);
    }
    render(){
        return `<circle cx="50" cy="50" r="40" fill="${this.color}" />`
    }
};

class Square extends Shape {
    constructor(color) {
        super(color);
    }

    render() { 
        return `<rect x="10" y="10" width="80" height="80" fill="${this.color}" />`
    }
};

module.exports = { Shape, Triangle, Circle, Square };
