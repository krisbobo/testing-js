const Calculator = require('./calculator');

//  Arrange
const calc = new Calculator();

// Act 
const addition = calc.add(1, 1);
const subtraction = calc.subtract(2, 5);
const multiplication = calc.multiply(2, 2);
const division = calc.divide(4, 2);
const zeroDivision = calc.divide(1, 0);
const divide1 = calc.divide(0, 1);
const divide2 = calc.divide(0, 0);

// Assert 
describe('Calculator', () => {
    // Addition
    describe('addition', () => {
        expect(addition).toBe(2);
    });

    // Subtraction
    describe('subtraction', () => {
        test('subtract', () => {
            expect(subtraction).toBe(3);
        });
        test('subtraction if first number is smaller', () => {
            expect(subtraction).toBe(3);
        });
    });

    // Multiplication
    describe('multiplication', () => {
        expect(multiplication).toBe(4);
    });

    // Division
    describe('division', () => {
        test('divide', () => {
            expect(division).toBe(2);
        });
        test('division by zero', () => {
            expect(() => (zeroDivision).Error('Division by zero is not allowed!'));
        });
        test('if x equal to zero', () => {
            expect(divide1).toBe(0);
        });
        test('if x & y equal zero', () => {
            expect(() => (divide2).Error('Invalid!'));
        });
    });
});
