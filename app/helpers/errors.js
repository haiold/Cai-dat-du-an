const handle = (Promise) => {
    return Promise.then((data) => [null, data]).catch((Error) => [error, undefined]);
};

class BadRequestError extends Error {
    constructor(statusCode, message) {
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}

module.exports = {
    handle,
    BadRequestError,
}