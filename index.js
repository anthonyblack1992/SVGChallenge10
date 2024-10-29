const inquirer = require('inquirer');
const fs = require('fs');



function generateSVG(text, textColor, shape, shapeColor) {
    let shapeSVG;
    if (shape === 'circle') {
        shapeSVG = `<circle cx="150" cy="100" r="80" fill="${shapeColor}" />`;
    } else if (shape === 'triangle') {
        shapeSVG = `<polygon points="150,20 100,180 200,180" fill="${shapeColor}" />`;
    } else if (shape === 'square') {
        shapeSVG = `<rect x="70" y="40" width="160" height="160" fill="${shapeColor}" />`;
    }

    return `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shapeSVG}
        <text x="150" y="125" font-size="40" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
    `;
}


   inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters for your logo text:',
            validate: input => input.length <= 3 || 'Text must be three characters or less.'
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter a color keyword or a hexadecimal number for the text color:'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape for your logo:',
            choices: ['circle', 'triangle', 'square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter a color keyword or a hexadecimal number for the shape color:'
        }
    ])
    .then(answers => {
        const svgContent = generateSVG(answers.text, answers.textColor, answers.shape, answers.shapeColor);
        fs.writeFileSync('logo.svg', svgContent);
        console.log('Generated logo.svg');
    });