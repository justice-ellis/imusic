"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const swaggerJSDoc = require("swagger-jsdoc");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const port = process.env.PORT || 3000;
// Extended: https://swagger.io/specification/#infoObject
const options = {
    definition: {
        info: {
            title: "imusic API",
            description: "imusic API for Global listeners",
            contact: {
                names: "Justice Nana Ellis" || "Gordon Peter Amamoo",
                email: "justice.ellis@amalitech.org" || "gordon.amamoo@amalitech.org",
            },
            servers: [""],
        },
        components: {
            securitySchemas: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },
            },
        },
        security: [
            {
                bearerAuth: [],
            },
        ],
    },
    apis: ["./backend/routes/*.ts"],
};
const swaggerSpec = swaggerJSDoc(options);
function swaggerDocs(app, port) {
    // Swagger page
    app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
    // Docs in JSON format
    app.get("api-docs.json", (req, res) => {
        res.setHeader("Content-Type", "application/json");
        res.send(swaggerSpec);
    });
    console.log(`Swagger Documentation is available`);
}
exports.default = swaggerDocs;
//# sourceMappingURL=swagger.js.map