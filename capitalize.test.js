const StringHandler = require('./StringHandler');

const stringHandler = new StringHandler();

test('check if capitalized', () => {
    // Arrange 
    const string = 'christian';

    // Act 
    const result = stringHandler.stringCapitalize(string);

    // Assert
    expect(result).toBe('Christian');
});
