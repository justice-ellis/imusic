import express from 'express';
const app = express();
const swaggerJSDoc = require("swagger-jsdoc");
import swaggerUI from "swagger-ui-express";
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

function swaggerDocs(app: any, port: string | number) {
  // Swagger page
  app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

  // Docs in JSON format
  app.get("api-docs.json", (req: Request, res: Response | any) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });

  console.log(`Swagger Documentation is available`);
}

export default swaggerDocs;

