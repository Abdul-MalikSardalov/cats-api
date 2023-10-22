const logger = (req, res, next) => {
    const url = req.url;
    const method = req.method;
    const status = res.statusCode;
    console.log(`${url} --- ${method} --- ${status}`);
    next();
};

export default logger;
