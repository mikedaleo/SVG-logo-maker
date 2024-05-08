const Shape = require('./shapes');

describe('Triangle', () => {
    it('should create a triangle with color/text from user input', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    })
})

