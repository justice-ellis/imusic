"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const path_1 = __importDefault(require("path"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const verifyUserController_1 = require("./controllers/verifyUserController");
const db_1 = __importDefault(require("./config/db"));
const port = process.env.PORT || 3000;
// middleware
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
//serve static files
app.use('/', express_1.default.static(path_1.default.join(__dirname, '/public')));
// routes
app.use('/api/v1/users', userRoutes_1.default);
app.use('/api/v1/users', verifyUserController_1.verifyUser);
db_1.default.authenticate().then(() => {
    console.log('connected to database successfully!');
}).catch(() => {
    console.log('DB connection failed');
});
//mapMessage(db);
app.listen(port, () => {
    console.log(`\n ⚡️ App listening at port ${port}!\n`);
});
//# sourceMappingURL=server.js.map