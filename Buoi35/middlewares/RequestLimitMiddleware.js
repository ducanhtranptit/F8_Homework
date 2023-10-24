class RequestLimitMiddleware {
    requestLimt(req, res, next) {
        const maxRequest = 100;
        const timeLimit = 60000;

        const currentTime = Date.now();
        const requestsWithinLimit = req.app.locals.requestsWithinLimit || [];

        const recentRequest = requestsWithinLimit.filter(
            (request) => currentTime - request.timestamp <= timeLimit
        );

        if (recentRequest.length >= maxRequest) {
            return res.status(429).json({
                message: "Quá tải, vui lòng thử lại sau.",
            });
        }

        requestsWithinLimit.push({ timestamp: currentTime });
        req.app.locals.requestsWithinLimit = requestsWithinLimit;

        next();
    }
}

module.exports = new RequestLimitMiddleware();
