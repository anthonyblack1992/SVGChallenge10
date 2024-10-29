const { generateSVG } = require('../index'); // Adjust the import path accordingly

describe('generateSVG', () => {
    test('generates SVG for a circle', () => {
        const text = 'SVG';
        const textColor = 'white';
        const shape = 'circle';
        const shapeColor = 'green';
        
        const expectedSVG = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="green" />
        <text x="150" y="125" font-size="40" text-anchor="middle" fill="white">SVG</text>
    </svg>
    `.trim();

        expect(generateSVG(text, textColor, shape, shapeColor)).toEqual(expectedSVG);
    });

    test('generates SVG for a triangle', () => {
        const text = 'SVG';
        const textColor = 'white';
        const shape = 'triangle';
        const shapeColor = 'blue';
        
        const expectedSVG = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,20 100,180 200,180" fill="blue" />
        <text x="150" y="125" font-size="40" text-anchor="middle" fill="white">SVG</text>
    </svg>
    `.trim();

        expect(generateSVG(text, textColor, shape, shapeColor)).toEqual(expectedSVG);
    });

    test('generates SVG for a square', () => {
        const text = 'SVG';
        const textColor = 'white';
        const shape = 'square';
        const shapeColor = 'red';
        
        const expectedSVG = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="70" y="40" width="160" height="160" fill="red" />
        <text x="150" y="125" font-size="40" text-anchor="middle" fill="white">SVG</text>
    </svg>
    `.trim();

        expect(generateSVG(text, textColor, shape, shapeColor)).toEqual(expectedSVG);
    });
});