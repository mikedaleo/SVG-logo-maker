const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./shapes');

class CLI {
    constructor() {
        this.title = '';
    }


run() {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'text',
                message: 'Please enter the text for your logo.',
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
        ])
        .then(({text, color, shape}) => {
            this.text = text;
            this.color = color;
            this.shape = shape;
        });
}
} 

module.exports = CLI;