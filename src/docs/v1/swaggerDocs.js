import swaggerUi from 'swagger-ui-express'
import { config } from 'dotenv'
config()
import YAML from 'yaml'
import fs from 'fs'
import path from 'path'

const cwd = process.cwd()
const filePath = process.env.RENDER_ENV == 'prod' ? 'docs/v1/swaggerDocsV1.yaml' : 'src/docs/v1/swaggerDocsV1.yaml'

const file  = fs.readFileSync(path.join(cwd, filePath), 'utf8')
const swaggerDoc = YAML.parse(file)

const swaggerDocs = (app, port) => {
  app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
  console.log(
    `Version 1 Docs are available on http://localhost:${port}/api/v1/docs`
  );
};

export default swaggerDocs