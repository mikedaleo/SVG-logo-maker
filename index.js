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
                name: 'color',
                message: 'What color would you like your logo to be? (color keyword or hex number)',
            },
            {
                type: 'list',
                name: 'shape',
                message: 'What shape would you like your logo to be?',
                choices: ['circle', 'triangle', 'square'],
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
function generateSVG({text, color, shape}) {
    return ` <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
    ${chooseShape(shape, color)}
    <text x="50" y="60" text-anchor="middle" fill="white" font-size="25">${text}</text>
    </svg>`;
};

// function to write file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log('Your Logo has been created!');
    })
}

// function to initialize app
function init() {
    questions()
        .then(
            (response) => writeToFile(`${response.text}.svg`, generateSVG(response)))
        .catch((err) => console.error(err));
}
// function call to initialize app
init();