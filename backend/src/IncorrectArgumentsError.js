
class IncorrectArgumentsError extends Error {
    constructor(message) {
        super(message);
        this.name = 'IncorrectArgumentsError';
    }
}  

module.exports = { IncorrectArgumentsError };