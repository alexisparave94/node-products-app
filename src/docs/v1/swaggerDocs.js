import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import path from 'path'
import fs from 'fs'
import YAML from 'yaml'

const cwd = process.cwd()

// const file  = fs.readFileSync(path.join(cwd, 'src/docs/v1/swaggerDocsV1.yaml'), 'utf8')
// const file  = fs.readFileSync('./swaggerDocsV1.yaml', 'utf8')
const file  = fs.readFileSync(path.join(cwd, 'docs/v1/swaggerDocsV1.yaml'), 'utf8')
const swaggerDocument = YAML.parse(file)

// const options = {
//   definition: {
//     openapi: "3.0.0",
//     info: { title: "Products API", version: "0.1.0" },
//     components:{
//       securitySchemes: {
//         bearerAuth: {
//           type: 'http',
//           scheme: 'bearer',
//           bearerFormat: 'JWT'
//         }
//       }
//     }
//   },
//   apis: [
//     path.join(cwd, 'src/routes/products.routes.js'),
//     path.join(cwd, 'src/models/Product.js')
//   ],
// };


// const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
  app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  // app.get("/api/v1/docs.json", (req, res) => {
  //   res.setHeader("Content-Type", "application/json");
  //   res.send(swaggerSpec);
  // });
  console.log(
    `Version 1 Docs are available on http://localhost:${port}/api/v1/docs`
  );
};

export default swaggerDocs