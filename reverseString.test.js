const StringHandler = require('./StringHandler');

test('check if function returns a length', () => {
    // Arrange 
    const stringHandler = new StringHandler();
    const string = 'bohbo';

    // Act
    const result = stringHandler.reverseString(string);

    // Assert
    expect(result).toBe('obhob');
});