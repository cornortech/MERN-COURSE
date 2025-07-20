const swaggerJsDoc = require("swagger-jsdoc");

const swaggerSpec = swaggerJsDoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Artic API Documentation",
      version: "1.0.0",
      description:
        "Artic is a platform to share the articles between the people securely and interact with it.",
      contact: {
        name: "dev_sagar_sharma",
        email: "dev_sagar_sharma989@gmail.com",
        url: "https://www.dev_sagar_sharma.np",
      },
    },
    components: {
      securitySchemes: {
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
  apis: ["./routes/*.js"],
});

module.exports = swaggerSpec;
