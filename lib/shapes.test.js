const { Triangle, Circle, Square } = require('./shapes');

describe('Shapes', () => {
    describe('Triangle', () => {
        it('should create a triangle with the color input from user', () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="45, 1 1, 80 100, 80" fill="blue" />');
        })
    });
    describe('Circle', () => {
        it('should create a circle with the color input from user', () => {
            const shape = new Circle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<circle cx="50" cy="50" r="40" fill="blue" />');
        })
    });
    describe('Square', () => {
        it('should create a square with the color input from user', () => {
            const shape = new Square();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<rect x="10" y="10" width="80" height="80" fill="blue" />');
        })
    });
})



