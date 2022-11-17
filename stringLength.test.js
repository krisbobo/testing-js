const StringHandler = require('./StringHandler');

test('check if function returns a length', () => {
  // Arrange
  const stringHandler = new StringHandler();
  const string = 'christian k';

  // Act
  const result = stringHandler.stringLength(string);

  // Assert
  expect(result).toBe(11);
});

test('check if length between 1 and 10', () => {
  // Arrange
  const stringHandler = new StringHandler();
  const string = 'chris';

  // Act
  const result = stringHandler.stringLength(string);

  // Assert
  expect(result).toBe(5);
});

test('check if length equal to 1', () => {
  // Arrange
  const stringHandler = new StringHandler();
  const string = 'b';

  // Act
  const result = stringHandler.stringLength(string);

  // Assert
  expect(result).toBe(1);
});

test('check if length equal to 10', () => {
  // Arrange
  const stringHandler = new StringHandler();
  const string = 'christiank';

  // Act
  const result = stringHandler.stringLength(string);

  // Assert
  expect(result).toBe(10);
});