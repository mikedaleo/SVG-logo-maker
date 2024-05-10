const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

// prompt questions for the user to fill out for preferences on their logo
const questions = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'text',
                message: 'Please enter up to 3 characters for your logo.',
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'Please enter a color for the text of your logo. (color keyword or hex number)',
            },
            {
                type: 'list',
                name: 'shape',
                message: 'Please select a shape.',
                choices: ['circle', 'triangle', 'square'],
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'Please enter a color for the shape. (color keyword or hex number)',
            },
        ]);
}

// if statement to determine which shape the user chose
function chooseShape(userShape, userColor) {
    if (userShape === 'circle') {
        const circle = new Circle(userColor);
        return circle.render();
    } else if (userShape === 'square') {
        const square = new Square(userColor);
        return square.render();
    } else {
        const triangle = new Triangle(userColor);
        return triangle.render();
    }
};

// function to generate SVG text
function generateSVG({ text, textColor, shape, shapeColor}) {
    return ` <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${chooseShape(shape, shapeColor)}
    <text x="50" y="60" text-anchor="middle" fill="${textColor}" font-size="25">${text}</text>
    </svg>`;
};

// function to write file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log(`Generated logo.svg!`);
    })
}

// function to validate text
function validateText(text) {
    if (text.length > 3) {
        throw new Error('Please enter only up to 3 characters.');
    }
};

// function to initialize app
function init() {
    questions()
        .then(
            (response) => {
                validateText(response.text)

                writeToFile(`./examples/${response.text}-logo.svg`, generateSVG(response))}
            )
        .catch((err) => console.error(err));
}
// function call to initialize app
init();