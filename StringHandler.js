class StringHandler {
    stringLength = (string) => {
        if (string.length >= 1 && string.length <= 10) {
            const length = string.length;
            return length;
        }
        if (string.length > 10) {
            const length = string.length;
            return length;
        }
        const error = new Error('Invalid string');
        throw error;
    };
}