const { Triangle, Circle, Square } = require('./shapes');

describe('Shapes', () => {
    describe('Triangle', () => {
        it('should create a triangle with the text/color input from user', () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        })
    });
    describe('Circle', () => {
        it('should create a circle with the text/color input from user', () => {
            const shape = new Circle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<circle cx="25" cy="75" r="20" fill="blue" />');
        })
    });
    describe('Square', () => {
        it('should create a square with the text/color input from user', () => {
            const shape = new Square();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<rect x="10" y="10" width="30" height="30" stroke="black" fill="blue" />');
        })
    });
})



