"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const whitelist = require('../config/allowedOrigins');
const credentials = (req, res, next) => {
    const origin = req.headers.origin;
    if (whitelist.includes(origin)) {
        res.header('Access-Control-Allow-credentials', true);
    }
    next();
};
exports.default = credentials;
//# sourceMappingURL=credentials.js.map