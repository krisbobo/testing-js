class Calculator {
    add = (x, y) => {
        return x + y;
    };

    subtract = (x, y) => {
        if (y > x) {
            return Math.abs(x - y);
        }
        return x - y;
    };

    divide = (x, y) => {
        if (y === 0) {
            return('Enter non-zero number');
        }
        if (x === 0 && y === 0) {
            return('Invalid! Enter non-zero numbers');
        }
        return x / y;
    };

    multiply = (x, y) => {
        return x * y;
    };
}

module.exports = Calculator;